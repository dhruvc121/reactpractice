import React from 'react';
import logo from './logo.svg'
const Header=()=>{
		return(
		<>
		<div className="Header">
		<img src={logo} height="50" width="70" alt="logo"/>
		<h1 className="heading">GoogleKeeps Clone</h1>
		</div>
		</>	
		);
	}

export default Header;

