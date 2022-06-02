import * as React from 'react';
import { useWeb3 } from './context/Web3.context';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
  import { Avatar,AvatarBadge, Badge ,Text} from '@chakra-ui/react';
  import { Button,useDisclosure } from '@chakra-ui/react';
  import Web3 from 'web3';

export const ConnectedModal =() =>{

    const web3Provider = useWeb3();
    var addr = web3Provider.walletAddress;
    const web3 = new Web3;

    const disconnectWallet = async() =>{
        await window.web3.eth.currentProvider.disconnect();
    }

    return(
        <>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold' textAlign={"center"}>
              Connected Address
            </AlertDialogHeader>

            <AlertDialogBody padding={"30px"} justifyContent={"center"}  alignItems={"center"} textAlign={"center"} >
            <Avatar boxSize={"3.5em"} >
                <AvatarBadge boxSize='1.25em' bg='green.500' />
            </Avatar>
            <br/>
            <Badge marginTop={"20px"} fontSize={"18px"} >{addr.substring(0,7)+'...'+addr.substring(37)}</Badge>
            <Text fontWeight={"bold"} marginTop={"10px"}>Balance : </Text>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
    </>
    )
}