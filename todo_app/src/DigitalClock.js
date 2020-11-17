import React,{useState} from 'react';
import './DigitalClock.css';
const DigitalClock=()=>{
		
		let time=new Date().toLocaleTimeString();
		const [curr_time,setCurr_time]=useState(time);
		
		const updateTime=()=>{
				time=new Date().toLocaleTimeString();
				setCurr_time(time);
			}
		
		setInterval(updateTime,1000)
		
		return(
		<>
		<h1>{curr_time}</h1>
		</>
		);
	}

export default DigitalClock;
