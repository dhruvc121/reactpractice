import React,{useState} from 'react';

const Counter=()=>{
		const[count,setCount]=useState(0);
		const increment=()=>{
				let inc_count=count+1;
				setCount(inc_count);
			}
		const decrement=()=>{
				let dec_count=count-1;
				setCount(dec_count);
			}
		
		return(
		<>
		<div className="container">
		<h1>{count}</h1>
		<button className="increment" onClick={increment}>+</button>
		<button className="decrement" onClick={decrement}>-</button>
		</div>
		</>
		);
	}

export default Counter;
