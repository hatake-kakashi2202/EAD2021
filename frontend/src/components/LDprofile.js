import React, {  Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Abc2 from './Abc2';
import img1 from './images/pic22.jpg'
import img2 from './images/pic2.jpg'
import img3 from './images/pic8.jpg'
import img4 from './images/pic1.jpg'
import img5 from './images/pic3.jpg'
import img6 from './images/pic6.jpg'
import img7 from './images/pic5.jpg'
import bsCustomFileInput from 'bs-custom-file-input';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Select from 'react-select';
import './style.css'
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

class LDprofile extends Component{


    state={
        userdata:'',
        name:localStorage.getItem('name'),
        updateprof:false,
        filename1:'choose file',
        filename2:'choose file',
        filename3:'choose file',
        selectedOption: null,
        selectedOption1: null,
        selectedOption2: null,
        selectedOption3: null,
    
        count:1,
    }
    componentDidMount =()=>
    {
        
  
  
        axios.get(`${url}`+'api/houses/'+localStorage.getItem('name')).then(
            res=>{
                this.setState({userdata:res.data});
                console.log(this.state.userdata);
                console.log("hello")
            },
           err=>{
               console.log(err)
           }
        )
    };


    handlesubmit()
    {
        this.setState({updateprof:true});
    }
    statechanged= (name,value)=>{
    
        const cred=this.state.userdata;
       
        if(value==='PG' || value==='Rent')
        {
        
          cred['housetype']='';
          cred['accomdationtype']='';
         
        }
       cred[name]=value;
        console.log(cred);
        this.setState({userdata:cred});
      }

      register=()=>{
 
   
  
        const data=new FormData();
        data.append("name",this.state.userdata.name);
        data.append("propertyfor",this.state.userdata.propertyfor);
        data.append("housetype",this.state.userdata.housetype);
        data.append("accomdationtype",this.state.userdata.accomdationtype);
        data.append("title",this.state.userdata.title);
        data.append("housenumber",this.state.userdata.housenumber);
        data.append("description",this.state.userdata.description);
        data.append("address",this.state.userdata.address);
        data.append("city",this.state.userdata.city);
        data.append("state",this.state.userdata.state);
        data.append("zipcode",this.state.userdata.zipcode);
        data.append("numberoffloors",this.state.userdata.numberoffloors);
        data.append("propertyfloor",this.state.userdata.propertyfloor);
        data.append("bedrooms",this.state.userdata.bedrooms);
        data.append("bathrooms",this.state.userdata.bathrooms);
        data.append("minprice",this.state.userdata.minprice);
        data.append("sqft",this.state.userdata.sqft);
        data.append("pets",this.state.userdata.pets);
        data.append("photo_1",this.state.userdata.photo_1);
        data.append("photo_2",this.state.userdata.photo_2);
        data.append("photo_3",this.state.userdata.photo_3);
        console.log(data)
        axios.put('http://localhost:8000/listings/house/put/'+localStorage.getItem('name')+'/',data,
        ).then(
            res=>{
                console.log(res)
            }).catch(err=>{
              console.log(err)
            });
          }

          componentDidMount() {
            bsCustomFileInput.init()
          }

          handleUpdate=()=>{
            this.setState({updateprof:true});
          }
        
          handlesubmit=(event)=>{
            event.preventDefault();
            console.log(event.target.name);
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
            
            const cred=this.state.userdata;
           
            if(value==='PG' || value==='Rent')
            {
            
              cred['housetype']='';
              cred['accomdationtype']='';
             
            }
            if(names==='photo_1')
            {
              this.setState({filename1:value.name});
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
            console.log(cred);
            this.setState({userdata:cred});
          }
    

    

render()
{


  const data = [{
    id: 1,
    name: "Exterior",
    image:`${url}`+this.state.userdata.photo_1
    
}, {
    id: 2,
    name: "Living Room",
    image: `${url}`+this.state.userdata.photo_2
}, {
    id: 3,
    name: "Bedroom",
    image: `${url}`+this.state.userdata.photo_3
},];

console.log(data);
    
    let optio;
    if(this.state.userdata.propertyfor==='Rent')
    {
     optio= 
        <div>
<div className="form-group">
                    {/* Label: first name */}
                    <label htmlFor="name">Property type:</label>
                    {/* Input class: form-control and ID form-fname and name: fname */}
                     <Select
      value={{value:this.state.userdata.propertyfor,label:this.state.userdata.propertyfor}}
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
    value={{value:this.state.userdata.housetype,label:this.state.userdata.housetype}}
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
    value={{value:this.state.userdata.accomdationtype,label:this.state.userdata.accomdationtype}}
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
  value={{value:this.state.userdata.propertyfor,label:this.state.userdata.propertyfor}}
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
value={{value:this.state.userdata.housetype,label:this.state.userdata.housetype}}
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
   value={{value:this.state.userdata.accomdationtype,label:this.state.userdata.accomdationtype}}
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
        
        if(this.state.updateprof)
        {
             
          if(this.state.count==1)
          {
            
        return (
          <div  style={{backgroundColor:"black"}}>
            <div className="landlord" style={{fontFamily:"sans-serif"}} >
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
                          {/* Label: first name */}
                          <label htmlFor="name">User name:</label>
                          {/* Input class: form-control and ID form-fname and name: fname */}
                          <input type="text"   onChange={this.handlesubmit} value={this.state.userdata.name} className="form-control"  placeholder={"Enter user name"} name="name" required />
                          {/* And add a class: valid-feedback */}
                          <div className="valid-feedback">Valid.</div>
                          {/* And a class: invalid-feedback (Bootstrap class) */}
                          <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        
                        {optio}
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
            
          </div>
        )
    
    
          }
          else if(this.state.count==2)
          {
            return (
                <div className="landlord" style={{fontFamily:"sans-serif"}}>
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
             <input type="text" className="form-control" placeholder="Enter Title" name="title" value={this.state.userdata.title}
    
    onChange={this.handlesubmit} required />
             {/* And add a class: valid-feedback */}
             <div className="valid-feedback">Valid.</div>
             {/* And a class: invalid-feedback (Bootstrap class) */}
             <div className="invalid-feedback">Please fill out this field.</div>
           </div>
          
    
           <div className="form-group">
             {/* Lastname */}
             <label htmlFor="housenumber">House Number:</label>
             <input type="text" className="form-control" placeholder="Enter HouseNumber" name="housenumber" value={this.state.userdata.housenumber}
    
    onChange={this.handlesubmit} required />
             {/* And add a class: valid-feedback */}
             <div className="valid-feedback">Valid.</div>
             {/* And a class: invalid-feedback (Bootstrap class) */}
             <div className="invalid-feedback">Please fill out this field.</div>
           </div>
          
    
        
                        <div className="form-group">
                          {/* Lastname */}
                          <label htmlFor="uname">Description:</label>
                          <textarea type="text"  onChange={this.handlesubmit} className="form-control"value={this.state.userdata.description} id="form-lname" rows="4" cols="30" placeholder="Enter descripton" name="description" required />
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
             )
          }
    
          else if(this.state.count==3)
          {
            return (
                <div className="landlord" style={{fontFamily:"sans-serif"}}>
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
                           <input type="text"  style={{fontFamily:"sans-serif"}}  onChange={this.handlesubmit} value={this.state.userdata.address} className="form-control"  placeholder="Enter address" name="address" required />
                           {/* And add a class: valid-feedback */}
                           <div className="valid-feedback">Valid.</div>
                           {/* And a class: invalid-feedback (Bootstrap class) */}
                           <div className="invalid-feedback">Please fill out this field.</div>
                         </div>
                         <div className="form-group">
                           {/* Label: first name */}
                           <label htmlFor="name">City:</label>
                           {/* Input class: form-control and ID form-fname and name: fname */}
                           <input type="text"  style={{fontFamily:"sans-serif"}}  onChange={this.handlesubmit} className="form-control"  value={this.state.userdata.city} placeholder="Enter city" name="city" required />
                           {/* And add a class: valid-feedback */}
                           <div className="valid-feedback">Valid.</div>
                           {/* And a class: invalid-feedback (Bootstrap class) */}
                           <div className="invalid-feedback">Please fill out this field.</div>
                         </div>
                         <div className="form-group">
                           {/* Label: first name */}
                           <label htmlFor="name">State:</label>
                           {/* Input class: form-control and ID form-fname and name: fname */}
                           <input type="text"  style={{fontFamily:"sans-serif"}}  onChange={this.handlesubmit} className="form-control" value={this.state.userdata.state} placeholder="Enter state" name="state" required />
                           {/* And add a class: valid-feedback */}
                           <div className="valid-feedback">Valid.</div>
                           {/* And a class: invalid-feedback (Bootstrap class) */}
                           <div className="invalid-feedback">Please fill out this field.</div>
                         </div>
                         <div className="form-group">
                           {/* Label: first name */}
                           <label htmlFor="name">ZipCode:</label>
                           {/* Input class: form-control and ID form-fname and name: fname */}
                           <input type="text" style={{fontFamily:"sans-serif"}}   onChange={this.handlesubmit} className="form-control" value={this.state.userdata.zipcode} placeholder="Enter zipcode" name="zipcode" required />
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
            )
          }
          
          else if(this.state.count==4)
    {
      return (
        <div className="landlord" style={{fontFamily:"sans-serif"}}>
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
                  <input type="text" className="form-control" value={this.state.userdata.numberoffloors}  placeholder="Enter number of floors" name="numberoffloors" 
     
     onChange={this.handlesubmit} required />
                  {/* And add a class: valid-feedback */}
                  <div className="valid-feedback">Valid.</div>
                  {/* And a class: invalid-feedback (Bootstrap class) */}
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                  {/* Eamil */}
                  <label htmlFor="email">Property Floor</label>
                  <input type="text" className="form-control" placeholder="Enter propertyfloors" name="propertyfloor" value={this.state.userdata.propertyfloor}
    
    onChange={this.handlesubmit} required />
                  {/* And add a class: valid-feedback */}
                  <div className="valid-feedback">Valid.</div>
                  {/* And a class: invalid-feedback (Bootstrap class) */}
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                  {/* Eamil */}
                  <label htmlFor="text">Bedrooms</label>
                  <input type="text" className="form-control"  placeholder="Enter bedrooms" name="bedrooms" value={this.state.userdata.bedrooms}
    
    onChange={(event)=>{this.statechanged(event.target.name,event.target.value)}} required />
                  {/* And add a class: valid-feedback */}
                  <div className="valid-feedback">Valid.</div>
                  {/* And a class: invalid-feedback (Bootstrap class) */}
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
    
                <div className="form-group">
                  {/* Eamil */}
                  <label htmlFor="text">Bathrooms:</label>
                  <input type="text" className="form-control"  placeholder="Enter bathrooms" name="bathrooms" value={this.state.userdata.bathrooms}
    
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
    )
       
    }
    
    else if(this.state.count==5)
    {
      return (
        
        <div className="landlord" style={{fontFamily:"sans-serif"}}>
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
                         <input type="text"   onChange={this.handlesubmit} className="form-control"  value={this.state.userdata.minprice} placeholder="Enter minprice you want" name="minprice" required />
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
                         <input type="text"   onChange={this.handlesubmit} className="form-control" value={this.state.userdata.sqft} placeholder="Enter area of house" name="sqft" required />
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
          value={{value:this.state.userdata.pets,label:this.state.userdata.pets}}
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
       
       )
    
    }
    
         
        return (
            <div className="landlord" style={{fontFamily:"sans-serif"}}>
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
        
        )
        
        
        }
        else 
        {
    return(
      <div className="profile" style={{overflowX:"hidden"}} >
<section className="page-section bg-primary" id="contact" >

<div className="row justify-content-center" style={{background:"#FCF6EE",padding:"20px"}}>
  <h2 className="text-center text-greendark mt-0"> {this.state.name}'s Profile</h2>
 </div>
<br/>
<br/>
<div className="container111 emp-profile" >
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                  </li>
                  <li className="nav-item" text-greendark>
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" text-greendark>House Details</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
            <button className="btn btn-dark btn-xl "  onClick={this.handleUpdate}>Update Profile</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <h4>ADDRESS</h4>
                <h6 style={{fontSize:"13px"}}>House Number:&nbsp;&nbsp;&nbsp;{this.state.userdata.housenumber}</h6>
                <h6 style={{fontSize:"13px"}}>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.userdata.address}</h6>
                <h6 style={{fontSize:"13px"}}>City:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.userdata.city}</h6>
                <h6 style={{fontSize:"13px"}}>State:&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.userdata.state}</h6>
                <h6 style={{fontSize:"13px"}}>Zipcode:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.userdata.zipcode}</h6>
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.name+"@gmail.com"}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>landlord</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Property for</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.userdata.propertyfor}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>House Type </label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.userdata.housetype}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Accomdation Type</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.userdata.accomdationtype}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Rental Value</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.userdata.minprice}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Build up Area</label>
                    </div>
                    <div className="col-md-6">
                    <p>{this.state.userdata.sqft} sq.ft</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Pets</label>
                    </div>
                    <div className="col-md-6">
                    <p>{this.state.userdata.pets}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Property floor</label>
                    </div>
                    <div className="col-md-6">
                    <p>{this.state.userdata.propertyfloor} of {this.state.userdata.numberoffloors}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>           
      </div>
</section>
<section className="page-sectiongrey" id="contact" >
<div className="row justify-content-center" >

 <div className="col-lg-8">
 <br/>
<br/>
<br/>
 <h2 className="text-center mt-0"> {this.state.name}'s Gallery</h2>
   <hr className="divider my-4" />
   </div>
   <div className="tiles">

   {data.map((dat) => {
return <Abc2  data={dat} key={dat.id} />
})}
</div>
</div>
</section>

<section className="page-section bg-dark" id="about"  >
<div className="container" >
<div className="row justify-content-center">
<div className="col-lg-8 text-center">
<h2 className="text-white mt-0">Description of {this.state.userdata.name}'s house</h2>
<hr className="divider light my-4" />
<p className="text-white-50 mb-4">{this.state.userdata.description}</p>

</div>
</div>
</div>
</section>




</div>       
        
    
    );
}
}
else
{
    return(<div>Please login before viewing the profile</div>);
}

}






}


export default LDprofile;