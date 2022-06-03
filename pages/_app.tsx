import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3Provider } from './api/components/context/Web3.context'
import { ChakraProvider } from '@chakra-ui/react'
import { MetaMaskProvider } from './api/components/context/metamask.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MetaMaskProvider>
    <Web3Provider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3Provider>
    </MetaMaskProvider>
    
    )
}

export default MyApp
