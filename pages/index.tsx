import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWeb3 } from './api/context/Web3.context'

interface Props{
  walletAddress:string,
  checkIfWalletIsConnected:Function,
}

const Home: NextPage<Props> = (props:Props) => {

  const Web3Provider = useWeb3();

  const addr = Web3Provider.walletAddress;

  const connectWallet = async() =>{
    Web3Provider.checkIfWalletIsConnected();
  }

  return (
    <div>
      <h1>Hello World</h1>
      <label>{addr}</label>
      <button onClick={connectWallet} >Connect Wallet</button>
    </div>
  )
}

export default Home
