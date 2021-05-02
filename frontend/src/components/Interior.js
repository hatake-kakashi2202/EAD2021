import React, {  Component } from 'react';
import axios from 'axios';
import './style.css';
import img1 from './images/pic22.jpg'
import bsCustomFileInput from 'bs-custom-file-input';
import Select from 'react-select';
const options1 = [
    { value: 'house', label: '1BHK' },
    {value: 'house', label: '2BHK' },
    {value: 'house', label: '3BHK' },
    {value: 'house', label: 'Independent House' },
  
  ];
  const options2 = [
    { value: 'timeline', label: 'Already MovedIn' },
    { value: 'timeline', label: '0-3 Months' },
    { value: 'timeline', label: '3-6 Months' },
    { value: 'timeline', label: 'After 6 Months' },
  
  ];
  const options3= [
    { value: 'work', label: 'Full Home Interiors' },
    { value: 'work', label: 'Kitchen and Wardrobes' },
   
  
  ];
  const options4 = [
   
    { value: 'budget', label: '0-3 lacs' },
    { value: 'budget', label: '3-5 lacs' },
    { value: 'budget', label: '5-10 lacs' },
    { value: 'budget', label: '10 lacs and above' },
  ];

  
class  Interior extends Component {
  state={
      credentials:{name:'',phonenumber:'',email_id:'',house:'',timeline:'',work:'',budget:'',comments:''},
      count:1,
      selectedOption1: null,
      selectedOption2: null,
      selectedOption3: null,
      selectedOption4: null,};

    interior=()=>{
      // event.preventDefault();
   
    var data=this.state.credentials
  
    axios.post('http://localhost:8000/interiors/interior/create/',data).then(
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

handleChange1 = selectedOption1 => {
    this.setState(
      { selectedOption1 },
     

    );
    this.statechanged('house',selectedOption1.value);
   
  };

  handleChange2 = selectedOption2 => {
    this.setState(
      { selectedOption2 },
     

    );
    this.statechanged('timeline',selectedOption2.value);
   
  };

  handleChange3 = selectedOption3 => {
    this.setState(
      { selectedOption3 },
     

    );
    this.statechanged('work',selectedOption3.value);
   
  };

  handleChange4 = selectedOption4 => {
    this.setState(
      { selectedOption4 },
     

    );
    this.statechanged('budget',selectedOption4.value);
   
  };
     
render()
{
    const { selectedOption1 } = this.state;
const { selectedOption2 } = this.state;
const { selectedOption3 } = this.state;
const { selectedOption4} = this.state;

if(this.props.user)
{
  
return (

<div className="landlord" style={{fontFamily:"sans-serif",marginTop:"-15px"}}>
  <div className="container-fluid">
    <div className="row no-gutter">
      <div className="col-md-6 d-none d-md-flex bg-image8" />
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h2 id="main-section" className="h2 text-center">Home Interior Details</h2>
                
                  <div id="stepper-form" >
                    <section id="step-1">
                    
                      <div className="form-group">
                        <label htmlFor="name">User name:</label>
                        <input type="text"   value={this.state.credentials.name} onChange={this.inputChanged} className="form-control"  placeholder={"Enter user name"} name="name" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="name">Phone number:</label>
                        <input type="text"  value={this.state.credentials.phonenumber} onChange={this.inputChanged} className="form-control"  placeholder={"Enter user phone number"} name="phonenumber" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                    
                      <div className="form-group">
                        <label htmlFor="name">Email Id:</label>
                        <input type="text"   onChange={this.inputChanged} value={this.state.credentials.email_id} className="form-control"  placeholder={"Enter user email id"} name="email_id" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>

<div className="form-group">
                    {/* Label: first name */}
                    <label htmlFor="house">Type of Apartment you stay/ would stay in</label>
                    {/* Input class: form-control and ID form-fname and name: fname */}
                     <Select
      value={selectedOption1}
      onChange={this.handleChange1}
      options={options1}
    />
       
       
                    {/* And add a class: valid-feedback */}
                    <div className="valid-feedback">Valid.</div>
                    {/* And a class: invalid-feedback (Bootstrap class) */}
                    <div className="invalid-feedback">Please fill out this field.</div>
                  </div>

                  <div className="form-group">
                    {/* Label: first name */}
                    <label htmlFor="timeline">Possession Timeline</label>
                    {/* Input class: form-control and ID form-fname and name: fname */}
                     <Select
      value={selectedOption2}
      onChange={this.handleChange2}
      options={options2}
    />
       
       
                    {/* And add a class: valid-feedback */}
                    <div className="valid-feedback">Valid.</div>
                    {/* And a class: invalid-feedback (Bootstrap class) */}
                    <div className="invalid-feedback">Please fill out this field.</div>
                  </div>
                  <div className="form-group">
                    {/* Label: first name */}
                    <label htmlFor="work">Scope of work</label>
                    {/* Input class: form-control and ID form-fname and name: fname */}
                     <Select
      value={selectedOption3}
      onChange={this.handleChange3}
      options={options3}
    />
       
       
                    {/* And add a class: valid-feedback */}
                    <div className="valid-feedback">Valid.</div>
                    {/* And a class: invalid-feedback (Bootstrap class) */}
                    <div className="invalid-feedback">Please fill out this field.</div>
                  </div>
                  <div className="form-group">
                    {/* Label: first name */}
                    <label htmlFor="budget">Budget</label>
                    {/* Input class: form-control and ID form-fname and name: fname */}
                     <Select
      value={selectedOption4}
      onChange={this.handleChange4}
      options={options4}
    />
       
       
                    {/* And add a class: valid-feedback */}
                    <div className="valid-feedback">Valid.</div>
                    {/* And a class: invalid-feedback (Bootstrap class) */}
                    <div className="invalid-feedback">Please fill out this field.</div>
                  </div>
                  <div className="form-group">
                      {/* Lastname */}
                      <label htmlFor="comments">Requests/Comments here</label>
                      <textarea type="text"  onChange={this.inputChanged} className="form-control"value={this.state.credentials.comments} id="form-lname" rows="4" cols="30"  name="comments" required />
                      {/* And add a class: valid-feedback */}
                      <div className="valid-feedback">Valid.</div>
                      {/* And a class: invalid-feedback (Bootstrap class) */}
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                      <br/>
                    </section>
                    <br/>
                    <button id="next"   type="submit" style={{float:"right"}} onClick={()=>this.interior()} className="btn btn-info">Next</button>
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
                else{
                  return <div>Please login</div>
                }
    }
}
export default Interior;