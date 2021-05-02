import React,{Component}from 'react';
import {Link, Redirect } from 'react-router-dom';
import {Helmet} from "react-helmet";
import axios from 'axios';
import img1 from './images/pic22.jpg'
import   './style.css';
class Contact extends Component {
  state={
    credentials:{email:'',name:'',description:''},
    message:'',
    submit:false,
  };

inputChanged= event=>{
  const cred=this.state.credentials;
  cred[event.target.name]=event.target.value;
  this.setState({credentials:cred});
};

change = event =>{
  this.setState({
    submit:true
  });
}
  render()
  {
    if(this.state.submit)
    {
      return <Redirect to="/" />;
    }
  return (
      <div  id="particles-js" className="landlord" style={{fontFamily:"sans-serif"}}>
        <Helmet>
    <script src="../../public/particles.min.js"></script>
    <script src="../../public/particles.js"></script>
    <script src="../../public/app1.js"></script>
          </Helmet>
    <br/>
 <br/>
 <br/>
 <div className="container main">
         <div id="cardForm" className="card1 shadow p-3 mb-5 bg-white rounded">
           <div id="stepper-form" >
               <br/>
               <h5 className="h5 text-center">Contact Us</h5>
               <br/>
               <div className="form-group">
                 <label htmlFor="name">Name:</label>
                 <input type="text" onChange={this.inputChanged} className="form-control"  placeholder={"Enter Name"} name="name" required />
                 <div className="valid-feedback">Valid.</div>
                 <div className="invalid-feedback">Please fill out this field.</div>
               </div>
               <div className="form-group">
                 <label htmlFor="Email">Email:</label>
                <input type="text" onChange={this.inputChanged} className="form-control"  placeholder={"Enter email"} name="email" required />
                <div className="valid-feedback">Valid.</div>
                 <div className="invalid-feedback">Please fill out this field.</div>
               </div>
               <div className="form-group">
                <label htmlFor="Message">Message:</label>
                <input type="Message" onChange={this.inputChanged} className="form-control"  placeholder={"Enter Message"} name="message" required />
                <div className="valid-feedback">Valid.</div>
                 <div className="invalid-feedback">Please fill out this field.</div>
               </div>
                 <br/><br/>
                 <div className="text-center">
               <button type="submit" onClick={this.change} className="btn btn-info">Submit</button>
               </div>
           </div>
           <br/>
         </div>
       </div>

     </div>
  );
}
}

export default Contact;
