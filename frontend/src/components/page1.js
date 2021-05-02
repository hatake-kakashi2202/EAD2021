import React, {  Component } from 'react';
import axios from 'axios';
import './style.css';
import img1 from './images/pic22.jpg'

class  Page1 extends Component {
  state={
      credentials:{name:'',phonenumber:'',email_id:'',from_address:'',from_city:'',from_state:'',from_zipcode:'',Num_of_workers_required:'',Num_of_trucks_required:'',to_address:'',to_city:'',to_state:'',to_zipcode:'',date_of_moving:''},
      count:1,};

    packer=event=>{
      // event.preventDefault();
   
    var data=this.state.credentials
   
    axios.post('http://localhost:5000/api/packer/create',data).then(
        res=>{
          console.log(res);         
        }).catch(
            err=>{     
                console.log(err);    
            },
    )
          };
  
  
inputChanged= event=>{
  event.preventDefault();
  console.log(event.target.name);
  this.statechanged(event.target.name,event.target.value)
};
statechanged= (names,value)=>{
  
  const cred=this.state.credentials;
 cred[names]=value;
  console.log(cred);
  this.setState({credentials:cred});
}
     
render()
{
if(this.props.user)
{
  if(this.state.count==1)
{
  
return (

<div className="landlord" style={{fontFamily:"sans-serif"}}>
  <div className="container-fluid">
    <div className="row no-gutter">
      <div className="col-md-6 d-none d-md-flex bg-image" />
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h2 id="main-section" className="h2 text-center">Personal Information</h2>
                  <div className="progress">
                    <div id="prgBar" className="progress-bar bg-info" style={{width: '10%'}}>10%</div>
                  </div>
                  <div id="stepper-form" >
                    <section id="step-1">
                      <br/>
                      <h5 className="h5 text-center">Step 1 out of 4</h5>
                      <br/>
                      <div className="form-group">
                        <label htmlFor="name">User name:</label>
                        <input type="text"   value={this.state.credentials.name} onChange={this.inputChanged} className="form-control"  placeholder={"Enter user name"} name="name" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <br/>
                      <div className="form-group">
                        <label htmlFor="name">Phone number:</label>
                        <input type="text"  value={this.state.credentials.phonenumber} onChange={this.inputChanged} className="form-control"  placeholder={"Enter user phone number"} name="phonenumber" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <br/>
                      <div className="form-group">
                        <label htmlFor="name">Email Id:</label>
                        <input type="text"   onChange={this.inputChanged} value={this.state.credentials.email_id} className="form-control"  placeholder={"Enter user email id"} name="email_id" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <br/>
                    </section>
                    <br/>
                    <button id="next"   type="submit" style={{float:"right"}} onClick={(e)=>{this.setState({count:this.state.count+1})}} className="btn btn-info">Next</button>
                    <br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div> 
)
}

else if(this.state.count===2)
{
  return (

<div className="landlord" style={{fontFamily:"sans-serif"}}>
  <div className="container-fluid">
    <div className="row no-gutter">
      <div className="col-md-6 d-none d-md-flex bg-image" />
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                <h2 id="main-section" className="h2 text-center">From Address</h2>
                <div className="progress">
                  <div id="prgBar" className="progress-bar bg-info" style={{width: '40%'}}>40%</div>
                </div>
                <div id="stepper-form" >
                  <section id="step-1">
                    <br/>
                    <h5 className="h5 text-center">Step 2 out of 4</h5>
                    <br/>
                    <div className="form-group">
                      <label htmlFor="title">Address</label>
                      <input type="text" className="form-control" placeholder="Enter Address" name="from_address" value={this.state.credentials.from_address} onChange={this.inputChanged} required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="housenumber">City</label>
                      <input type="text" className="form-control" placeholder="Enter City" name="from_city" value={this.state.credentials.from_city} onChange={this.inputChanged} required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="housenumber">State</label>
                      <input type="text" className="form-control" placeholder="Enter State" name="from_state" value={this.state.credentials.from_state} onChange={this.inputChanged} required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="housenumber">Zipcode</label>
                      <input type="text" className="form-control" placeholder="Enter City" name="from_zipcode" value={this.state.credentials.from_zipcode} onChange={this.inputChanged} required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                  </section>
                  <button id="prev" type="submit" onClick={(e)=>{this.setState({count:this.state.count-1})}} className="btn btn-info">Previous</button>
                  <button id="next" type="submit" style={{float:"right"}} onClick={(e)=>{this.setState({count:this.state.count+1})}} className="btn btn-info">Next</button>            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>     
</div>    
   ) 
}

else if(this.state.count==3)
{
  return (
<div className="landlord" style={{fontFamily:"sans-serif"}}>
  <div className="container-fluid">
    <div className="row no-gutter">
      <div className="col-md-6 d-none d-md-flex bg-image" />
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                <h2 id="main-section" className="h2 text-center">Information Required</h2>
               <div className="progress">
                 <div id="prgBar" className="progress-bar bg-info" style={{width: '70%'}}>70%</div>
               </div>
               <div id="stepper-form" >
              <section id="step-1"> 
                   <br/>
                   <h5 className="h5 text-center">Step 3 out of 4</h5>
               <br/>
               <div className="form-group">
                 <label htmlFor="name">Number of workers required:</label>
                 <input type="text"   onChange={this.inputChanged} value={this.state.credentials.Num_of_workers_required} className="form-control"  placeholder="Enter number of workers required" name="Num_of_workers_required" required />
                 <div className="valid-feedback">Valid.</div>
                 <div className="invalid-feedback">Please fill out this field.</div>
               </div>
               <br/>
               <div className="form-group">
                 <label htmlFor="name">Number of trucks required:</label>
                 <input type="text"   onChange={this.inputChanged} className="form-control"  value={this.state.credentials.Num_of_trucks_required} placeholder="Enter number of trucks required" name="Num_of_trucks_required" required />
                 <div className="valid-feedback">Valid.</div>
                 <div className="invalid-feedback">Please fill out this field.</div>
               </div>
               <br/>
               <div className="form-group">
                 <label htmlFor="name">Date of moving:</label>
                 <input type="text"   onChange={this.inputChanged} className="form-control" value={this.state.credentials.date_of_moving} placeholder="Enter date of moving" name="date_of_moving" required />
                
                 <div className="valid-feedback">Valid.</div>
                 <div className="invalid-feedback">Please fill out this field.</div>
               </div>
                  <br/>
                  <br/>
                 </section>
                 <button id="prev"   type="submit"
       onClick={(e)=>{this.setState({count:this.state.count-1})}} className="btn btn-info">Previous</button>
                 <button id="next"   type="submit" style={{float:"right"}}
       onClick={(e)=>{this.setState({count:this.state.count+1})}} className="btn btn-info">Next</button>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>   
   )
}

return (
<div className="landlord" style={{fontFamily:"sans-serif"}}>
<div className="container-fluid">
    <div className="row no-gutter">
      <div className="col-md-6 d-none d-md-flex bg-image" />
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                <h2 id="main-section" className="h2 text-center">To Address</h2>
         <div className="progress">
           <div id="prgBar" className="progress-bar bg-info" style={{width: '100%'}}>100%</div>
         </div>
         <div id="stepper-form" >
        <section id="step-1">
             <br/>
             <h5 className="h5 text-center">Step 4 out of 4 </h5>
              <br/>
      <div className="form-group">
   <label htmlFor="title">Address</label>
   <input type="text" className="form-control" placeholder="Enter Address" name="to_address" value={this.state.credentials.to_address}

onChange={this.inputChanged} required />
   <div className="valid-feedback">Valid.</div>
   <div className="invalid-feedback">Please fill out this field.</div>
 </div>
 <div className="form-group">
   <label htmlFor="housenumber">City</label>
   <input type="text" className="form-control" placeholder="Enter City" name="to_city" value={this.state.credentials.to_city} onChange={this.inputChanged} required />
  
   <div className="valid-feedback">Valid.</div>
   <div className="invalid-feedback">Please fill out this field.</div>
 </div>

 <div className="form-group">
   <label htmlFor="housenumber">State</label>
   <input type="text" className="form-control" placeholder="Enter State" name="to_state" value={this.state.credentials.to_state} onChange={this.inputChanged} required />
  
   <div className="valid-feedback">Valid.</div>
   <div className="invalid-feedback">Please fill out this field.</div>
 </div>

 <div className="form-group">
   <label htmlFor="housenumber">Zipcode</label>
   <input type="text" className="form-control" placeholder="Enter City" name="to_zipcode" value={this.state.credentials.to_zipcode} onChange={this.inputChanged} required />
  
   <div className="valid-feedback">Valid.</div>
   <div className="invalid-feedback">Please fill out this field.</div>
 </div>
           </section>
           <button id="prev"   type="submit"
 onClick={(e)=>{this.setState({count:this.state.count-1})}} className="btn btn-info">Previous</button>
           <button type="submit" className="btn btn-info" style={{float:"right"}}  onClick={()=>this.packer()}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
              }
                else{
                  return <div>Please login</div>
                }
    }
}
export default Page1;