import * as React from 'react';
import type { NextPage } from 'next'
import { FC } from 'react';
import { useContext, createContext, useState, useEffect } from 'react';
import { ethers, providers } from 'ethers';
import Web3 from 'web3';

interface AppContextInterface{
    walletAddress:string,
    checkIfWalletIsConnected:Function,
    isConnected:boolean,
}

const Web3Context = React.createContext<AppContextInterface | null>(null);

interface props {
    children: any
}

export const Web3Provider: NextPage<props> = ({children}) =>{
  const[walletAddress,setWalletAddress]=useState('');
  const[isConnected,setIsConnected]=useState(false);
  const [balance, setBalance] = useState<string | null>(null)


  const checkIfWalletIsConnected = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })  
        var webprovider = new ethers.providers.Web3Provider(window.ethereum)
        var account = accounts[0];
        setWalletAddress(account);
        console.log(webprovider)
        setIsConnected(true)
      } else {
        console.log('No Metamask detected')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return(
    <Web3Context.Provider 
    value={{walletAddress,checkIfWalletIsConnected,isConnected}}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
    const web3Context = useContext(Web3Context)
  
    if (!web3Context) {
      throw new Error(
        'Component must be enclosed by Web3Provider to be able to use Web3Context'
      )
    }
  
    return web3Context;
  }
  
