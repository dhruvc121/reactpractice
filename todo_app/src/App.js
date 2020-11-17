import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListComp from './ListComp';
import './App.css';



function App() {
  const[items,setItems]=useState("");
  const[newItem,setNewItem]=useState([]);
  const itemEvent=(event)=>{
		setItems(event.target.value);
	  }
  const listItems=()=>{
		setNewItem((previous)=>{
				return [...previous,items]
			})
		setItems("");
	  }
  return (
  <>
    <div className="main_div">
     <div className="center_div">
		<h1>Todo App</h1>
		<br/>
		<input type="text" value={items} placeholder="Add a task!!" onChange={itemEvent}/>
		<Button className="button" disabled={!items} onClick={listItems}><AddIcon/></Button>
		<br/>
		<ul>
		
		{
			newItem.map((val, index)=>{
				return <ListComp key={index} text={val} />
			})
		}
		</ul>
     </div>
    </div>
  </>
  );
}

export default App;
