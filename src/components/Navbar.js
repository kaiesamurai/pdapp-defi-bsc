import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function Navbar() {

const [connected, toggleConnect] = useState(false);
const location = useLocation();

const [connectMessage,setConnectMessage]=useState('Connect');
const [currentAccount, setCurrentAccount]=useState('');

  useEffect(()=>{
    getCurrentWalletConnected();
    addWalletListener();
  })
const getCurrentWalletConnected = async()=>{

  if(typeof window!= "undefined" && typeof window.ethereum !="undefined") {
    try{
      
        const accounts = await window.ethereum.request({method: "eth_accounts"});
        if(accounts.length>0){
          setConnectMessage('Connected');
          setCurrentAccount(accounts[0]);
          
          console.log(accounts[0]);
        }
        else{
          alert("please connect your wallet, to load players....")
          console.log("connect to metamask");
        }

    }
    catch(err){
        console.log(err);
    }
  }
  else{
    console.log("metamask is not installed!! please install metamask.")
}}
const addWalletListener = async()=>{
  if(typeof window!= "undefined" && typeof window.ethereum !="undefined") {
    window.ethereum.on("accountsChanged",(accounts)=>{
      setCurrentAccount(accounts[0]);
      document.location.reload();
      console.log({currentAccount});
    })
  
  }
  else{
    setCurrentAccount("");
 
    console.log("metamask is not installed!! please install metamask.")
  }
}

const ConnectWallet = async()=>{
  if(typeof window!= "undefined" && typeof window.ethereum !="undefined") {
    try{
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        setConnectMessage('Connected'); 
        setCurrentAccount(accounts[0]);
        toggleConnect(true);
        console.log(accounts[0]);
        document.location.reload();
    }
    catch(err){
        console.log(err);
    }
  }
  else{
    console.log("metamask is not installed!! please install metamask.")
  }
  }

    return (
      <div className="">
       
<nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-red-900 fixed w-full z-20 top-0 left-0 border-b border-red-200 dark:border-red-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="#" className="flex items-center">
      <img src="https://github.com/Amarnath-Rao/Dragon-Hunter/blob/main/logio.png?raw=true" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">PokeDap</span>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={ConnectWallet}>{connectMessage}</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-red-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:text-red-400 dark:hover:bg-red-700 dark:focus:ring-red-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 border border-red-100 rounded-lg bg-red-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-red-800 md:dark:bg-red-900 dark:border-red-700">
      <li  className="block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white" >
        <Link to="/">Home</Link>
      </li>
      <li className="block py-2 pl-3 pr-4 text-red-700 rounded hover:bg-red-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-red-700">
        <Link to="/sellNFT">Pokemon Rising</Link>
      </li>
      <li className="block py-2 pl-3 pr-4 text-red-700 rounded hover:bg-red-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-red-700">
        <Link to="/Arena">Arena</Link>
      </li>
      <li className="block py-2 pl-3 pr-4 text-red-700 rounded hover:bg-red-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-red-700">
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
      </div>
    );
  }

  export default Navbar;