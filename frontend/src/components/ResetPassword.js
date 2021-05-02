import React ,{Component}from 'react';
import axios from 'axios';
import './style.css';

class ResetPassword extends Component{

state={
    credentials:{email:''},
    message:'',
}

    handleSubmit=e=>{
        e.preventDefault();
        var data=this.state.credentials;
        console.log(data);
         axios.post('http://localhost:5000/forgetpassword',data).then(
             res=>{
                this.setState({
                    message:res.data.success,
                    cls:'success'
                })
             }
         ).catch(
             err=>{
                 this.setState({
                     message:err.response.data.email,
                     cls:'danger'
                 })
                 console.log(this.state.message);
             }
         )
    };

    inputChanged= event=>{
        const cred=this.state.credentials;
        cred[event.target.name]=event.target.value;
        this.setState({credentials:cred});
      }

    render(){
        let error='';
        if(this.state.message)
        {
          error=(<div>
            {this.state.message}
          </div>)
        };

        return(
<div className="landlord">
         <br/>
      <br/>
      <br/>
      <div className="container main">
            <div>
              <div id="cardForm" className="card shadow p-3 mb-4 bg-white rounded">
                <h2 id="main-section" className="h2 text-center" />
                <div id="stepper-form" className="was-validated">
                <section> 
                    <br/>
                    <h5 className="h5 text-center">Forgot Password</h5>
                    {error}
                    <br/>
                    <div className="form-group">
                      <label htmlFor="name">Email:</label>
                       <input type="email"   onChange={this.inputChanged} value={this.state.credentials.email} className="form-control"  placeholder={"Enter user email"} name="email" required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <br/>
                  </section>
            <button type="submit" className="btn btn-info" style={{float:"right"}}  onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
      </div>
          </div>
        );
    }
}

export default ResetPassword;