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
  import { Walletdialog } from './NotConnectedModal';
import { ConnectedModal } from './ConnectedModal';

export const WalletConnectModal = () =>{
const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const web3Provider = useWeb3();

  const GetWallet=()=>{
        web3Provider.checkIfWalletIsConnected();
  }

  var addr = web3Provider.walletAddress;
  var connection = web3Provider.isConnected;

  return (
    <>
      <Button colorScheme='blackAlpha' onClick={onOpen}>
        {(addr === '')?'Connect Wallet':addr.substring(0,5)+'...'+addr.substring(39)}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
        motionPreset={"slideInBottom"}
      >
       {(connection === true)?<ConnectedModal/>:<Walletdialog/>}
      </AlertDialog>
    </>
  )

}