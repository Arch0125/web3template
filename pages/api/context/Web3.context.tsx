import * as React from 'react';
import type { NextPage } from 'next'
import { FC } from 'react';
import { useContext, createContext, useState, useEffect } from 'react';

interface AppContextInterface{
    walletAddress:string,
    checkIfWalletIsConnected:Function,
}

const Web3Context = React.createContext<AppContextInterface | null>(null);

interface props {
    children: any
  
}

export const Web3Provider: NextPage<props> = ({children}) =>{
  const[walletAddress,setWalletAddress]=useState('');

  const checkIfWalletIsConnected = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        var account = accounts[0];
        setWalletAddress(account);
      } else {
        console.log('No Metamask detected')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return(
    <Web3Context.Provider 
    value={{walletAddress,checkIfWalletIsConnected}}>
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
  
