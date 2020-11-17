import React from 'react';
import Button from '@material-ui/core/Button';
const CreateNote=()=>{
		return(
		<>
		<div className="main_note">
		<form>
			<input placeholder="Title" type="text"/>
			<textarea rows="" columns="" placeholder="Description"/>
			<Button>Add</Button>
		</form>
		</div>
		</>	
		);
	}

export default CreateNote;

