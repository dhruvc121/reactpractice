import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Cards=()=>{
		return(
		<>
		<div className="main_div">
		 <h1 className="text-center text-danger text-capitalize">Welcome  this page</h1>
		 <div className="row">
		 <div className="col-sm">
		 <div className="card" >
  <img className="card-img-top" src="https://picsum.photos/200/300" alt=""/>
  <div className="card-body">
    <h4 className="card-title">Title</h4>
    <p className="card-text">Some example text.</p>
    <a href="/" className="btn btn-primary">See Profile</a>
  </div>
</div>
		 </div>
         <div className="col-sm">
         <div className="card" >
  <img className="card-img-top"  src="https://picsum.photos/201/300" alt=""/>
  <div className="card-body">
    <h4 className="card-title">Title</h4>
    <p className="card-text">Some example text.</p>
    <a href="/" className="btn btn-primary">See Profile</a>
  </div>
</div>
         </div>
         <div className="col-sm">
         <div className="card" >
  <img className="card-img-top" src="https://picsum.photos/200/301" alt=""/>
  <div className="card-body">
    <h4 className="card-title">Title</h4>
    <p className="card-text">Some example text.</p>
    <a href="/" className="btn btn-primary">See Profile</a>
  </div>
</div>
         </div>
         </div> 
		</div>
		</>
		);
	}

export default Cards
