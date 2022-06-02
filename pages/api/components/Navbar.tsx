import { Box, Button, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { useWeb3 } from './context/Web3.context';
import { WalletConnectModal } from './WalletConnectModal';

export const Navbar =() =>{

    const web3Provider = useWeb3();

    return(
        < >
            <Flex padding={"20px"} borderRadius={"20px"} flexDirection={"row"} width={"99%"} bgColor={"blueviolet"} height={"fit-content"} margin={"10px"} >
                <Box width={"50%"}>
                    <Button>OnChain</Button>
                </Box>
                <Box paddingLeft={"40vw"}>
                    <WalletConnectModal/>
                </Box>
            </Flex>
        </>
    )
}

