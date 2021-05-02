import React, {  Component } from 'react';
import {Helmet} from "react-helmet";
import axios from 'axios';
import './style.css';
import img1 from './images/pic20.jpg'
import { Redirect } from 'react-router';
import bsCustomFileInput from 'bs-custom-file-input';
import Select from 'react-select';

class  Register extends Component {
      state={
        credentials:{email:'',name:'',person:'',password:''},
        message:'',
        registered:false,
      };

      register=event=>{
        event.preventDefault();
        let message1='';
         
        console.log(this.state.credentials);
        
        var data=this.state.credentials;
        axios.post('http://localhost:5000/signup',data).then(
            res=>{
                console.log(res)
                this.setState({
                  registered:true
                })

            }).catch(
              
                err=>{
                  console.log(err.response);
                  if(err.response && err.response.data.email)
                  {
                    message1=err.response.data.email
                  }
                  else if(err.response && err.response.data.name)
                  {
                    message1=err.response.data.name
                  }
                  
                  else if(err.response && err.response.data.person)
                  {
                    message1=err.response.data.person
                  }
                 
                  else if(err.response && err.response.data.error)
                  {
                    message1=err.response.data.error
                  }
                  else
                  {
                    if(err.response)
                    {
                    message1=err.response.data.password
                    }
                  }
                    this.setState(
                      {
                      
                       message:message1
                       
                      }
                    )
      
                },
                console.log(this.state.message)
        )
              }
      
      inputChanged= event=>{
      
        console.log(event.target.name);
        this.statechanged(event.target.name,event.target.value)
      }
      statechanged= (names,value)=>{
    
        const cred=this.state.credentials;
       cred[names]=value;
        console.log(cred);
        this.setState({credentials:cred});
      }
    
  render()
  {
    if(this.state.registered)
    {
      return <Redirect to={'/login'} />
    }
    let error='';
    if(this.state.message)
    {
      error=(<div>
        {this.state.message}
      </div>)
    };
    
   
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
         <div id="cardForm" className="card1 shadow mb-5 bg-dark rounded">
           <div id="stepper-form" >
           <h5 className="h5 text-center">Register Your Information</h5>
                    <div className="form-group">
                      <label htmlFor="name">Email:</label>
                      <input type="text"   onChange={this.inputChanged} value={this.state.credentials.email} className="form-control"  placeholder={"Enter user email"} name="email" required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">UserName:</label>
                      <input type="text"   onChange={this.inputChanged} value={this.state.credentials.name} className="form-control"  placeholder={"Enter user name"} name="name" required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>                
                    <div className="form-group">
                      <label htmlFor="name">Person:</label>
                      <select type="text"   onChange={this.inputChanged} value={this.state.credentials.person} className="form-control"  placeholder={"Choose your title1"} name="person" required >
                      <option value="-1">Choose your title</option>
                      <option value="0">Customer</option>
                      <option value="1">Owner</option>
                      </select>
                      </div>
                    <div className="form-group">
                      <label htmlFor="name">Password:</label>
                      <input type="text"   onChange={this.inputChanged} value={this.state.credentials.password} className="form-control"  placeholder={"Enter user password"} name="password" required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
            <button type="submit" className="btn btn-info" style={{float:"right"}}  onClick={this.register}>Submit</button>
               </div>
           </div>
           <br/>
         </div>
      
         </div>

 
    )
  
}
}
export default Register;



            //         <h5 className="h5 text-center">Register Your Information</h5>
            //         <div className="form-group">
            //           <label htmlFor="name">Email:</label>
            //           <input type="text"   onChange={this.inputChanged} value={this.state.credentials.email} className="form-control"  placeholder={"Enter user email"} name="email" required />
            //           <div className="valid-feedback">Valid.</div>
            //           <div className="invalid-feedback">Please fill out this field.</div>
            //         </div>

            //         <div className="form-group">
            //           <label htmlFor="name">UserName:</label>
            //           <input type="text"   onChange={this.inputChanged} value={this.state.credentials.name} className="form-control"  placeholder={"Enter user name"} name="name" required />
            //           <div className="valid-feedback">Valid.</div>
            //           <div className="invalid-feedback">Please fill out this field.</div>
            //         </div>

                  

            //         <div className="form-group">
            //           <label htmlFor="name">Person:</label>
            //           <select type="text"   onChange={this.inputChanged} value={this.state.credentials.person} className="form-control"  placeholder={"Choose your title1"} name="person" required >
            //           <option value="-1">Choose your title</option>
            //           <option value="0">Customer</option>
            //           <option value="1">Owner</option>
            //           </select>
            //           </div>

            //         <div className="form-group">
            //           <label htmlFor="name">Password:</label>
            //           <input type="text"   onChange={this.inputChanged} value={this.state.credentials.password} className="form-control"  placeholder={"Enter user password"} name="password" required />
            //           <div className="valid-feedback">Valid.</div>
            //           <div className="invalid-feedback">Please fill out this field.</div>
            //         </div>
            // <button type="submit" className="btn btn-info" style={{float:"right"}}  onClick={this.register}>Submit</button>