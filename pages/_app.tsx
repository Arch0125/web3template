import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3Provider } from './api/components/context/Web3.context'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3Provider>
    
    )
}

export default MyApp
