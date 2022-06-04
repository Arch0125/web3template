import { Box, Button, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { NotConnectedModal } from './NotConnectedModal';
import { useWeb3 } from './context/Web3.context';
import { ConnectedModal } from './ConnectedModal';
import { useMetamask } from './context/metamask.context';
import { Select } from '@chakra-ui/react';
import { CHAIN_DICT } from './context/constant';
import { NetworkList } from './NetworkList';

export const Navbar =() =>{

    const web3Provider = useWeb3();
    const {
        isWalletConnected,
        walletAddress,
        connectMetamask,
        connectWalletconnect,
        chain,
        changeChain,
        balance,
        signMessage,
        currentWallet,
      } = useMetamask()

    return(
        < >
            <Flex padding={"20px"} borderRadius={"20px"} flexDirection={"row"} width={"99%"} bgColor={"blueviolet"} height={"fit-content"} margin={"10px"} >
                <Box width={"50%"}>
                    <Button>OnChain</Button>
                </Box>
                <Box paddingLeft={"40vw"} flexDirection={"row"}>
                
                {isWalletConnected && walletAddress && chain && currentWallet ?(<><ConnectedModal/></>):<NotConnectedModal/>}
                </Box>
            </Flex>
        </>
    )
}

