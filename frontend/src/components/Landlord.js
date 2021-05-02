import React, {  Component } from 'react';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import img1 from './images/pic22.jpg'
import img2 from './images/pic22.jpg'
import img3 from './images/pic22.jpg'
import img4 from './images/pic22.jpg'
import img5 from './images/pic22.jpg'
import img6 from './images/pic22.jpg'
import img7 from './images/pic22.jpg'
import bsCustomFileInput from 'bs-custom-file-input';
import Select from 'react-select';
import {Helmet} from "react-helmet";
const options = [
  { value: 'Rent', label: 'Rent' },
  { value: 'PG', label: 'PG' },

];

const options1 = [
  { value: 'Villa', label: 'Villa' },
  { value: 'Apartment', label: 'Apartement' },
  { value: 'FarmHouse', label: 'FarmHouse' },
  { value: 'StudioApartment', label: 'StudioApartment' },
  { value: 'ServiceApartment', label: 'ServiceApartment' },

];

const options2 = [
  { value: 'Villa', label: 'Villa' },
  { value: 'Apartment', label: 'Apartement' },
 
  { value: 'BuilderFloor', label: 'BuilderFloor' },

];

const options3 = [
  { value: 'Family', label: 'Family' },
  { value: 'SingleMen', label: 'SingleMen' },
 
  { value: 'Single Women', label: 'Single Women' },
  { value: 'No Preference', label: 'No Preference' },

];

const options4 = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
 
  

];

const options5 = [
  { value: 'Allowed', label: 'Allowed' },
  { value: 'Not Allowed', label: 'Not Allowed' },
 
  

];




class  Landlord extends Component {
  state = {
    credentials:{
    name:'',
    propertyfor: '',
    
    housetype:'',
    accomdationtype:'',
    title:'',
    housenumber:'',
    description:'',
    address:'',
    city:'',
    state:'',
    zipcode:'',
   
   
    numberoffloors:'',
    propertyfloor:'',
    bedrooms:'',
    bathrooms:'',
    minprice:'',
    pets:'',
    
    sqft:'',
    photo_1:'',
    photo_2:'',
    photo_3:'',
   
    
    },
    filename1:'choose file',
    filename2:'choose file',
    filename3:'choose file',
    selectedOption: null,
    selectedOption1: null,
    selectedOption2: null,
    selectedOption3: null,

    count:1,


  };

  componentDidMount() {
    bsCustomFileInput.init()
  }

  handlesubmit=(event)=>{
    event.preventDefault();
    //console.log(event.target.name);
    this.statechanged(event.target.name,event.target.value)
  }
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
     

    );
    this.statechanged('propertyfor',selectedOption.value);
   
  };

  handleChange1 = selectedOption1 => {
    this.setState(
      { selectedOption1 },
     

    );
    this.statechanged('housetype',selectedOption1.value);
   
  };

  handleChange2 = selectedOption2 => {
    this.setState(
      { selectedOption2 },
     

    );
    this.statechanged('accomdationtype',selectedOption2.value);
   
  };

  handleChange3 = selectedOption3 => {
    this.setState(
      { selectedOption3 },
     

    );
    this.statechanged('pets',selectedOption3.value);
   
  };

  constructor(props) {
    super(props);
}

  statechanged= (names,value)=>{
    
    const cred=this.state.credentials;
   
    if(value==='PG' || value==='Rent')
    {
    
      cred['housetype']='';
      cred['accomdationtype']='';
     
    }
    if(names==='photo_1')
    {
      this.setState({filename1:value.name});
      //console.log(value.name);
    }
    if(names==='photo_2')
    {
      this.setState({filename2:value.name});
    }
    if(names==='photo_3')
    {
      this.setState({filename3:value.name});
    }
   cred[names]=value;
    //console.log(cred);
    this.setState({credentials:cred});
  }

  register=()=>{
 
   
  
  const data=new FormData();
  data.append("name",this.state.credentials.name),
  data.append("propertyfor",this.state.credentials.propertyfor);
  data.append("housetype",this.state.credentials.housetype);
  data.append("accomdationtype",this.state.credentials.accomdationtype);
  data.append("title",this.state.credentials.title);
  data.append("housenumber",this.state.credentials.housenumber);
  data.append("description",this.state.credentials.description);
  data.append("address",this.state.credentials.address);
  data.append("city",this.state.credentials.city);
  data.append("state",this.state.credentials.state);
  data.append("zipcode",this.state.credentials.zipcode);
  data.append("numberoffloors",this.state.credentials.numberoffloors);
  data.append("propertyfloor",this.state.credentials.propertyfloor);
  data.append("bedrooms",this.state.credentials.bedrooms);
  data.append("bathrooms",this.state.credentials.bathrooms);
  data.append("minprice",this.state.credentials.minprice);
  data.append("sqft",this.state.credentials.sqft);
  data.append("pets",this.state.credentials.pets);
  data.append("photo_1",this.state.credentials.photo_1);
  data.append("photo_2",this.state.credentials.photo_2);
  data.append("photo_3",this.state.credentials.photo_3);
  console.log(data)
  axios.post('http://localhost:5000/api/houses/create',data,
   
  ).then(
      res=>{
        console.log(res.data);
          console.log(res.data._id)
          localStorage.setItem('id1',res.data._id);  
          return <Redirect exact to="/" />;


      }).catch(err=>{
        console.log(err)
      });
    }


   
    
     
       
  render()
  {
      
const { selectedOption } = this.state;
const { selectedOption1 } = this.state;
const { selectedOption2 } = this.state;
const { selectedOption3} = this.state;

    
    let optio;
    if(this.state.credentials.propertyfor==='Rent')
    {
     optio= 
        <div>
<div className="form-group">
                    {/* Label: first name */}
                    <label htmlFor="name">Property For:</label>
                    {/* Input class: form-control and ID form-fname and name: fname */}
                     <Select
      value={selectedOption}
      onChange={this.handleChange}
      options={options}
    />
       
       
                    {/* And add a class: valid-feedback */}
                    <div className="valid-feedback">Valid.</div>
                    {/* And a class: invalid-feedback (Bootstrap class) */}
                    <div className="invalid-feedback">Please fill out this field.</div>
                  </div>

                  <div className="form-group">
                    {/* Label: first name */}
                    <label htmlFor="name1">House  type:</label>
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
                    <label htmlFor="name2">Accomdation type:</label>
                    {/* Input class: form-control and ID form-fname and name: fname */}
                     <Select
      value={selectedOption2}
      onChange={this.handleChange2}
      options={options3}
    />
       
       
                    {/* And add a class: valid-feedback */}
                    <div className="valid-feedback">Valid.</div>
                    {/* And a class: invalid-feedback (Bootstrap class) */}
                    <div className="invalid-feedback">Please fill out this field.</div>
                  </div>

        </div>
       
      
    }
    else
    {
        optio=
          <div>  <div className="form-group">
          {/* Label: first name */}
          <label htmlFor="name">Property type:</label>
          {/* Input class: form-control and ID form-fname and name: fname */}
           <Select
value={selectedOption}
onChange={this.handleChange}
options={options}
/>


          {/* And add a class: valid-feedback */}
          <div className="valid-feedback">Valid.</div>
          {/* And a class: invalid-feedback (Bootstrap class) */}
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>

        <div className="form-group">
          {/* Label: first name */}
          <label htmlFor="name1">House  type:</label>
          {/* Input class: form-control and ID form-fname and name: fname */}
           <Select
value={selectedOption1}
onChange={this.handleChange1}
options={options2}
/>


          {/* And add a class: valid-feedback */}
          <div className="valid-feedback">Valid.</div>
          {/* And a class: invalid-feedback (Bootstrap class) */}
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>

        
        <div className="form-group">
          {/* Label: first name */}
          <label htmlFor="name2">Accomdation  type:</label>
          {/* Input class: form-control and ID form-fname and name: fname */}
           <Select
value={selectedOption2}
onChange={this.handleChange2}
options={options4}
/>


          {/* And add a class: valid-feedback */}
          <div className="valid-feedback">Valid.</div>
          {/* And a class: invalid-feedback (Bootstrap class) */}
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        

</div>
        
    }

  

    if(this.props.user)
    {
      
     

      if(this.state.count==1)
      {
        
    return (
    <div>
      <br/>
      <br/>
        <div className="landlord" style={{fontFamily:"sans-serif",marginTop:"-15px"}} >
          <br/>
          <br/>
        
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 d-none d-md-flex bg-image1" />
              <div className="col-md-6 bg-light">
                <div className="login d-flex align-items-center py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 col-xl-7 mx-auto">
                        <h4 id="main-section" className="h2 text-center">Type of the house </h4>
                        <div className="progress">
                          <div id="prgBar" className="progress-bar bg-info" style={{width: '10%'}}>10%</div>
                        </div>
                        <div id="stepper-form" >
                          <section id="step-1">
                            <br/>
                            <h5 className="h5 text-center">Step 1 out of 6</h5>
                            <br/>
                            <div className="form-group">
         {/* Lastname */}
         <label htmlFor="name">Name</label>
         <input type="text" className="form-control" placeholder="Enter Name" name="name" value={this.state.credentials.name}

onChange={this.handlesubmit} required />
         {/* And add a class: valid-feedback */}
         <div className="valid-feedback">Valid.</div>
         {/* And a class: invalid-feedback (Bootstrap class) */}
         <div className="invalid-feedback">Please fill out this field.</div>
       </div>
                          
                    {optio}
                            <br/>
                          </section>
                         
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
        </div>
 
    )


      }
      else if(this.state.count==2)
      {
        return (
          <div>
          <br/>
          <br/>
            <div className="landlord" style={{fontFamily:"sans-serif",marginTop:"-10px"}} >
              <br/>
          <br/>
         
            <div className="container-fluid">
              <div className="row no-gutter">
                <div className="col-md-6 d-none d-md-flex bg-image2" />
                  <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-10 col-xl-7 mx-auto">
                            <h2 id="main-section" className="h2 text-center">Details of the house </h2>
                            <div className="progress">
                              <div id="prgBar" className="progress-bar bg-info" style={{width: '30%'}}>30%</div>
                            </div>
                            <div id="stepper-form" >
                              <section id="step-1">
                                <br/>
                                <h5 className="h5 text-center">Step 2 out of 6</h5>
                                <br/>
                                <div className="form-group">
         {/* Lastname */}
         <label htmlFor="title">Tilte:</label>
         <input type="text" className="form-control" placeholder="Enter Title" name="title" value={this.state.credentials.title}

onChange={this.handlesubmit} required />
         {/* And add a class: valid-feedback */}
         <div className="valid-feedback">Valid.</div>
         {/* And a class: invalid-feedback (Bootstrap class) */}
         <div className="invalid-feedback">Please fill out this field.</div>
       </div>
      

       <div className="form-group">
         {/* Lastname */}
         <label htmlFor="housenumber">House Number:</label>
         <input type="text" className="form-control" placeholder="Enter HouseNumber" name="housenumber" value={this.state.credentials.housenumber}

onChange={this.handlesubmit} required />
         {/* And add a class: valid-feedback */}
         <div className="valid-feedback">Valid.</div>
         {/* And a class: invalid-feedback (Bootstrap class) */}
         <div className="invalid-feedback">Please fill out this field.</div>
       </div>
      

    
                    <div className="form-group">
                      {/* Lastname */}
                      <label htmlFor="uname">Description:</label>
                      <textarea type="text"  onChange={this.handlesubmit} className="form-control"value={this.state.credentials.description} id="form-lname" rows="4" cols="30" placeholder="Enter descripton" name="description" required />
                      {/* And add a class: valid-feedback */}
                      <div className="valid-feedback">Valid.</div>
                      {/* And a class: invalid-feedback (Bootstrap class) */}
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                        
                    
                                <br/>
                              </section>
                             
                              <button id="prev"  type="submit"
        onClick={(e)=>{this.setState({count:this.state.count-1})}} className="btn btn-info">Previous</button>
                 
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
          </div>
         )
      }

      else if(this.state.count==3)
      {
        return (
          <div>
          <br/>
          <br/>
            <div className="landlord" style={{fontFamily:"sans-serif",marginTop:"-10px"}} >
           
              <br/>
          <br/>
         
            <div className="container-fluid">
              <div className="row no-gutter">
                <div className="col-md-6 d-none d-md-flex bg-image1" />
                  <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-10 col-xl-7 mx-auto">
                            <h2 id="main-section" className="h2 text-center">Location of the house </h2>
                            <div className="progress">
                              <div id="prgBar" className="progress-bar bg-info" style={{width: '50%'}}>50%</div>
                            </div>
                            <div id="stepper-form" >
                              <section id="step-1">
                                <br/>
                                <h5 className="h5 text-center">Step 3 out of 6</h5>
                                <br/>
                               
                                <div className="form-group">
                       {/* Label: first name */}
                       <label htmlFor="name">Address:</label>
                       {/* Input class: form-control and ID form-fname and name: fname */}
                       <input type="text"  style={{fontFamily:"sans-serif"}}  onChange={this.handlesubmit} value={this.state.credentials.address} className="form-control"  placeholder="Enter address" name="address" required />
                       {/* And add a class: valid-feedback */}
                       <div className="valid-feedback">Valid.</div>
                       {/* And a class: invalid-feedback (Bootstrap class) */}
                       <div className="invalid-feedback">Please fill out this field.</div>
                     </div>
                     <div className="form-group">
                       {/* Label: first name */}
                       <label htmlFor="name">City:</label>
                       {/* Input class: form-control and ID form-fname and name: fname */}
                       <input type="text"  style={{fontFamily:"sans-serif"}}  onChange={this.handlesubmit} className="form-control"  value={this.state.credentials.city} placeholder="Enter city" name="city" required />
                       {/* And add a class: valid-feedback */}
                       <div className="valid-feedback">Valid.</div>
                       {/* And a class: invalid-feedback (Bootstrap class) */}
                       <div className="invalid-feedback">Please fill out this field.</div>
                     </div>
                     <div className="form-group">
                       {/* Label: first name */}
                       <label htmlFor="name">State:</label>
                       {/* Input class: form-control and ID form-fname and name: fname */}
                       <input type="text"  style={{fontFamily:"sans-serif"}}  onChange={this.handlesubmit} className="form-control" value={this.state.credentials.state} placeholder="Enter state" name="state" required />
                       {/* And add a class: valid-feedback */}
                       <div className="valid-feedback">Valid.</div>
                       {/* And a class: invalid-feedback (Bootstrap class) */}
                       <div className="invalid-feedback">Please fill out this field.</div>
                     </div>
                     <div className="form-group">
                       {/* Label: first name */}
                       <label htmlFor="name">ZipCode:</label>
                       {/* Input class: form-control and ID form-fname and name: fname */}
                       <input type="text" style={{fontFamily:"sans-serif"}}   onChange={this.handlesubmit} className="form-control" value={this.state.credentials.zipcode} placeholder="Enter zipcode" name="zipcode" required />
                       {/* And add a class: valid-feedback */}
                       <div className="valid-feedback">Valid.</div>
                       {/* And a class: invalid-feedback (Bootstrap class) */}
                       <div className="invalid-feedback">Please fill out this field.</div>
                     </div>
                        
                    
                                <br/>
                              </section>
                             
                              <button id="prev"  type="submit"
        onClick={(e)=>{this.setState({count:this.state.count-1})}} className="btn btn-info">Previous</button>
                 
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
          </div>
        )
      }
      
      else if(this.state.count==4)
{
  return (
    <div>
      <br/>
      <br/>
        <div className="landlord" style={{fontFamily:"sans-serif",marginTop:"-10px"}} >
      <br/>
          <br/>
         
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image2" />
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h2 id="main-section" className="h2 text-center">Interior Details  </h2>
                    <div className="progress">
                      <div id="prgBar" className="progress-bar bg-info" style={{width: '65%'}}>65%</div>
                    </div>
                    <div id="stepper-form" >
                      <section id="step-1">
                        <br/>
                        <h5 className="h5 text-center">Step 4 out of 6</h5>
                        <br/>
                       
                        <div className="form-group">
              {/* Lastname */}
              <label htmlFor="uname">Number of floors</label>
              <input type="text" className="form-control" value={this.state.credentials.numberoffloors}  placeholder="Enter number of floors" name="numberoffloors" 
 
 onChange={this.handlesubmit} required />
              {/* And add a class: valid-feedback */}
              <div className="valid-feedback">Valid.</div>
              {/* And a class: invalid-feedback (Bootstrap class) */}
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group">
              {/* Eamil */}
              <label htmlFor="email">Property Floor</label>
              <input type="text" className="form-control" placeholder="Enter propertyfloors" name="propertyfloor" value={this.state.credentials.propertyfloor}

onChange={this.handlesubmit} required />
              {/* And add a class: valid-feedback */}
              <div className="valid-feedback">Valid.</div>
              {/* And a class: invalid-feedback (Bootstrap class) */}
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group">
              {/* Eamil */}
              <label htmlFor="text">Bedrooms</label>
              <input type="text" className="form-control"  placeholder="Enter bedrooms" name="bedrooms" value={this.state.credentials.bedrooms}

onChange={(event)=>{this.statechanged(event.target.name,event.target.value)}} required />
              {/* And add a class: valid-feedback */}
              <div className="valid-feedback">Valid.</div>
              {/* And a class: invalid-feedback (Bootstrap class) */}
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>

            <div className="form-group">
              {/* Eamil */}
              <label htmlFor="text">Bathrooms:</label>
              <input type="text" className="form-control"  placeholder="Enter bathrooms" name="bathrooms" value={this.state.credentials.bathrooms}

onChange={(event)=>{this.statechanged(event.target.name,event.target.value)}} required />
              {/* And add a class: valid-feedback */}
              <div className="valid-feedback">Valid.</div>
              {/* And a class: invalid-feedback (Bootstrap class) */}
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            
                        <br/>
                      </section>
                     <br/>
                      <button id="prev"  type="submit"
onClick={(e)=>{this.setState({count:this.state.count-1})}} className="btn btn-info">Previous</button>
         
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
  </div>
)
   
}

else if(this.state.count==5)
{
  return (
    <div>
    <br/>
    <br/>
      <div className="landlord" style={{fontFamily:"sans-serif",marginTop:"-10px"}} >
      <br/>
          <br/>
          
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image1" />
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h2 id="main-section" className="h2 text-center">Further Details  </h2>
                    <div className="progress">
                      <div id="prgBar" className="progress-bar bg-info" style={{width: '85%'}}>85%</div>
                    </div>
                    <div id="stepper-form" >
                      <section id="step-1">
                        <br/>
                        <h5 className="h5 text-center">Step 5 out of 6</h5>
                        <br/>
                       
                       {/* Add a div with class of form-group */}
                   <div className="form-group">
                     {/* Label: first name */}
                     <label htmlFor="name">Minimum price:</label>
                     {/* Input class: form-control and ID form-fname and name: fname */}
                     <input type="text"   onChange={this.handlesubmit} className="form-control"  value={this.state.credentials.minprice} placeholder="Enter minprice you want" name="minprice" required />
                     {/* And add a class: valid-feedback */}
                     <div className="valid-feedback">Valid.</div>
                     {/* And a class: invalid-feedback (Bootstrap class) */}
                     <div className="invalid-feedback">Please fill out this field.</div>
                   </div>
                   <br/>
                   <div className="form-group">
                     {/* Label: first name */}
                     <label htmlFor="name">Area:</label>
                     {/* Input class: form-control and ID form-fname and name: fname */}
                     <input type="text"   onChange={this.handlesubmit} className="form-control" value={this.state.credentials.sqft} placeholder="Enter area of house" name="sqft" required />
                     {/* And add a class: valid-feedback */}
                     <div className="valid-feedback">Valid.</div>
                     {/* And a class: invalid-feedback (Bootstrap class) */}
                     <div className="invalid-feedback">Please fill out this field.</div>
                   </div>
                   <br/>
                   <div className="form-group">
                      {/* Label: first name */}
                      <label htmlFor="name1">Pets:</label>
                      {/* Input class: form-control and ID form-fname and name: fname */}
                       <Select
        value={selectedOption3}
        onChange={this.handleChange3}
        options={options5}
      />
         
         
                      {/* And add a class: valid-feedback */}
                      <div className="valid-feedback">Valid.</div>
                      {/* And a class: invalid-feedback (Bootstrap class) */}
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                        <br/>
                      </section>
                     <br/>
                      <button id="prev"  type="submit"
onClick={(e)=>{this.setState({count:this.state.count-1})}} className="btn btn-info">Previous</button>
         
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
   </div>
   )

}

     
    return (
      <div>
      <br/>
      <br/>
        <div className="landlord" style={{fontFamily:"sans-serif",marginTop:"-10px"}} >
          <br/>
          <br/>
         
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 d-none d-md-flex bg-image2" />
              <div className="col-md-6 bg-light">
                <div className="login d-flex align-items-center py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 col-xl-7 mx-auto">
                        <h2 id="main-section" className="h2 text-center">Images of House  </h2>
                        <div className="progress">
                          <div id="prgBar" className="progress-bar bg-info" style={{width: '1000%'}}>100%</div>
                        </div>
                        <div id="stepper-form" >
                          <section id="step-1">
                            <br/>
                            <h5 className="h5 text-center">Step 6 out of 6</h5>
                            <br/>
                           
                           {/* Add a div with class of form-group */}
                           <div className="form-group">
                      {/* Label: first name */}
                      <label htmlFor="name">House Image1</label>
                      {/* Input class: form-control and ID form-fname and name: fname */}
                      <div className="custom-file">
        <input id="inputGroupFile01" type="file" className="custom-file-input"  name="photo_1" accept="image/png, image/jpeg"  onChange={(event)=>{this.statechanged(event.target.name,event.target.files[0])}}/>
                <label className="custom-file-label" htmlFor="inputGroupFile01">{this.state.filename1}</label>
      </div>
                      {/* And add a class: valid-feedback */}
                      <div className="valid-feedback">Valid.</div>
                      {/* And a class: invalid-feedback (Bootstrap class) */}
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <br/>
                    <div className="form-group">
                      {/* Label: first name */}
                      <label htmlFor="name">House Image2</label>
                      {/* Input class: form-control and ID form-fname and name: fname */}
                      <div className="custom-file">
        <input id="inputGroupFile02" type="file" className="custom-file-input"  name="photo_2" accept="image/png, image/jpeg"  onChange={(event)=>{this.statechanged(event.target.name,event.target.files[0])}}/>
                <label className="custom-file-label" htmlFor="inputGroupFile02">{this.state.filename2}</label>
      </div>
                      {/* And add a class: valid-feedback */}
                      <div className="valid-feedback">Valid.</div>
                      {/* And a class: invalid-feedback (Bootstrap class) */}
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <br/>
                    <div className="form-group">
                      {/* Label: first name */}
                      <label htmlFor="name">House Image3</label>
                      {/* Input class: form-control and ID form-fname and name: fname */}
                      <div className="custom-file">
        <input id="inputGroupFile03" type="file" className="custom-file-input"  name="photo_3" accept="image/png, image/jpeg"  onChange={(event)=>{this.statechanged(event.target.name,event.target.files[0])}}/>
                <label className="custom-file-label" htmlFor="inputGroupFile03">{this.state.filename3}</label>
      </div>
                      {/* And add a class: valid-feedback */}
                      <div className="valid-feedback">Valid.</div>
                      {/* And a class: invalid-feedback (Bootstrap class) */}
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                            <br/>
                          </section>
                          <br/>
                          <button id="prev"  type="submit"
    onClick={(e)=>{this.setState({count:this.state.count-1})}} className="btn btn-info">Previous</button>
             
             <button type="submit" className="btn btn-info" style={{float:"right"}}  onClick={()=>this.register()}>Submit</button>
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
    </div>
    )
  }
 
    
  

  else{
    return  <div>Please login before registering the house</div>
  }
}
}
export default Landlord;




















