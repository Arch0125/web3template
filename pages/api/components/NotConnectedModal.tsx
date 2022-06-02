import * as React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
  import { Button,useDisclosure } from '@chakra-ui/react';
  import { useWeb3 } from './context/Web3.context';


export const Walletdialog =() =>{

    const web3Provider = useWeb3();

    const GetWallet=()=>{
        web3Provider.checkIfWalletIsConnected();
  }

    return(
        <>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Select Wallet
            </AlertDialogHeader>

            <AlertDialogBody padding={"30px"} justifyContent={"center"}  alignItems={"center"} textAlign={"center"} >
              <Button variant={"outline"} onClick={GetWallet} colorScheme={"blue"} width={"80%"} marginBottom={"20px"} > <img src='https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png' width={"20px"}/> &nbsp; Connect with MetaMask</Button>
              <Button variant={"outline"} colorScheme={"blue"} width={"80%"} > <img src='https://www.nuget.org/profiles/WalletConnect/avatar?imageSize=512' width={"30px"}/> &nbsp; Connect with WalletConnect</Button>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
    </>
    )
}