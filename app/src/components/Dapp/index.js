import React, { useState, useEffect } from 'react';

import Navigation from '../Nav';

import "./app.scss";

const Dapp = ({ drizzle }) => {
	const [currentAccount, setCurrentAccount] = useState('');

  async function getAccount() {
  	const accounts = await window.ethereum.enable();
  	setCurrentAccount(accounts[0]);
}
	window.ethereum.on('accountsChanged', function () {
		getAccount();
	})

	useEffect(() => {
    getAccount();
	},[currentAccount]);
	
	return(
		<div className='nav'>
			<Navigation
				account={currentAccount}
				drizzle={drizzle}
			/>
		</div>
	)
}	 


export default Dapp;