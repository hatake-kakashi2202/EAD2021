import React,{Component}from 'react';
import {Link, Redirect } from 'react-router-dom';
import {Helmet} from "react-helmet";
import axios from 'axios';
import img1 from './images/pic22.jpg'
import   './style.css';
class  Login  extends Component {
  state={
    credentials:{name:'',password:''},
    loggedIn:false,
    message:'',   
  };

login=event=>{
    event.preventDefault(); 
  var data=this.state.credentials; 
  axios.post('http://localhost:5000/login',data).then(
      res=>{
        console.log(res);
        localStorage.setItem('token',res.data.token);  
        localStorage.setItem('name',res.data.name); 
        localStorage.setItem('id',res.data.id);
       this.setState({
         loggedIn:true
       });
       this.props.setUser(res.data);         
      }).catch(
          err=>{
           console.log(err);
          },
          console.log(this.state.message)
  )
        };


inputChanged= event=>{
  const cred=this.state.credentials;
  cred[event.target.name]=event.target.value;
  this.setState({credentials:cred});
};

  render()
  {
    if(this.state.loggedIn)
    {   
      return <Redirect to="/" />;
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
         <div id="cardForm" className="card1 shadow p-3 mb-5 bg-dark rounded">
           <div id="stepper-form" >
               <br/>
               <h5 className="h5 text-center">Login Form</h5>
               <br/>
               <div className="form-group">
                 <label htmlFor="name">User name:</label>
                 <input type="text"   onChange={this.inputChanged} value={this.state.credentials.name} className="form-control"  placeholder={"Enter user name"} name="name" required />
                 <div className="valid-feedback">Valid.</div>
                 <div className="invalid-feedback">Please fill out this field.</div>
               </div>
             
               <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password"   onChange={this.inputChanged} value={this.state.credentials.password} className="form-control"  placeholder={"Enter password"} name="password" required />
                <div className="valid-feedback">Valid.</div>
                 <div className="invalid-feedback">Please fill out this field.</div>
                
               </div>
               <Link to={"/password-reset"} style={{float:"right",color:"#3AAFA6"}}>Forgot Password</Link>
                 <br/><br/>
                 <div className="text-center">
               <button type="submit" onClick={this.login} className="btn btn-info">Submit</button>
               </div>
           </div>
           <br/>
         </div>
       </div>
 
     </div>  
  );
}
}

export default Login;
