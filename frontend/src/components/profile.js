import React, {  Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link,useLocation} from 'react-router-dom';
import './profile.css';
import WifiIcon from '@material-ui/icons/Wifi';
import SecurityIcon from '@material-ui/icons/Security';
import PowerIcon from '@material-ui/icons/Power';
import dumbbell from './dumbell.jpeg';
import elevator from './elevator.jpeg';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Map from './Map.js';
import Carousel from 'react-bootstrap/Carousel'
import logo1 from './images/logo10.png'
import logo2 from './images/logo11.png'
import logo3 from './images/logo12.png'
import logo4 from './images/logo13.png'
import logo5 from './images/logo15.png'
import logo6 from './images/logo14.png'
import logo7 from './images/logo6.png'
import logo8 from './images/logo9.png'
class Profile extends Component{

    state={
        userdata:'',
        submit:false,
    }
    componentDidMount =()=>
    {
      axios.get('http://localhost:5000/api/houses/'+this.props.location.state).then(
          res=>{
              this.setState({userdata:res.data});
              console.log(this.state.userdata.photo_2);
          },
         err=>{
             console.log(err)
         }
      )
    };
    change = event =>{
      console.log("akhil");
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
      return(
        <div style={{overflow: "hidden"}}>
          <Carousel style={{overflowX: "hidden"}}>
            <Carousel.Item >
              <img className="con" src={"http://localhost:5000/"+this.state.userdata.photo_1}/>
            </Carousel.Item>
            <Carousel.Item>
            <img  className="con" src={"http://localhost:5000/"+this.state.userdata.photo_3} />
            </Carousel.Item>
            <Carousel.Item>
            <img  className="con" src={"http://localhost:5000/"+this.state.userdata.photo_3} />
            </Carousel.Item>
          </Carousel>
        {/* <div className="block">
            <div className="Heading">Description</div>
            <div className="inforow">
            <div className="description">
                <p>{this.state.userdata.description}</p>
            </div>
            </div>
        </div>  */}
        <div className="block1" style={{overflowX: "hidden"}}>
        <div className="inforow">
          <div class="title">Rental Value</div>
         
          <div className="value">
          <span className="rupee">₹</span>
          {this.state.userdata.minprice}
          </div>
        </div>
        <div className="inforow">
          <div className="title">Booking amount</div>
          <div className="value">
          <span className="rupee">₹</span>
          {2*this.state.userdata.minprice}
          </div>
        </div>
        <div className="inforow">
          <div className="title">Address</div>
          <div className="value">
           {this.state.userdata.address},{this.state.userdata.zipcode},{this.state.userdata.city},{this.state.userdata.state}
          </div>
        </div>
        <div className="inforow">
          <div className="title">Build up area</div>
          <div className="value">
          {this.state.userdata.sqft} sq.ft
          </div>
        </div>
        <div className="inforow">
          <div className="title">Facing</div>
          <div className="value">
            East
          </div>
        </div>
        <div className="inforow">
          <div className="title">Bedrooms</div>
          <div className="value">
          {this.state.userdata.bedrooms}
          </div>
        </div>
        <div className="inforow">
          <div className="title">Bathrooms</div>
          <div className="value">
          {parseInt(this.state.userdata.bathrooms)}
          </div>
        </div>
        <div className="inforow">
          <div className="title">Propertyfloor</div>
          <div className="value">
          {this.state.userdata.propertyfloor} of {this.state.userdata.numberoffloors}
          </div>
        </div>
        <div className="inforow">
          <div className="title">Age of Property</div>
          <div className="value">
           Less than 5 years
          </div>
        </div>
        <div className="inforow">
          <div className="title">Furnishing</div>
          <div className="value">
           Semi-Furnished
          </div>
        </div>
        <div className="inforow">
          <div className="title">Status</div>
          <div className="value">
           Immediately Available
          </div>
          </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <section className="page-section1">
      <div className="container1">
      <h2 className="text-center text-whitecream mt-0">Amenities</h2>
        <hr className="divider dark my-4" />
        <div className="row">
          <div className="col-lg-2 col-md-2 text-center">
            <div className="mt-5">
            <img src={logo1} alt="" />
            <p className="text-whitecream mb-0">Wi-fi</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 text-center">
            <div className="mt-5">
            <img src={logo2} alt="" />
            <p className="text-whitecream mb-0">Gymnasim</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 text-center">
            <div className="mt-5">
            <img src={logo3} alt="" />
            <p className="text-whitecream mb-0">24*7 Security</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 text-center">
            <div className="mt-5">
            <img src={logo6} alt="" />
            <p className="text-whitecream mb-0">Back-up power</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 text-center">
            <div className="mt-5">
            <img src={logo5} alt="" />
            <p className="text-whitecream mb-0">Swimming pool</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 text-center">
            <div className="mt-5">
            <img src={logo4} alt="" />
            <p className="text-whitecream mb-0">Car Parking</p>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section className="page-sectiongrey">
        <h2 className="text-center text-greendark mt-0">Explore Neighbourhood</h2>
        <hr className="divider dark my-4" />
            <Map  google={this.props.google} center={{lat: 18.5204, lng: 73.8567}} height='300px' zoom={15}/>
    </section>
    <section className="page-sectiongrey">
        <h2 className="text-center text-greendark mt-0">Contact Us</h2>
        <hr className="divider dark my-4" />
           <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" name="name" className="form-control" onChange={ this.onChange }/>
           </div>
           <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" name="email" className="form-control" onChange={ this.onChange }/>
           </div>
           <div className="form-group">
            <label htmlFor="">Message</label>
            <input type="text" name="message" className="form-control" onChange={ this.onChange }/>
           </div>
           <br/>
          <div className="form-group">
            <button className="form-control" type="submit" onClick={this.change}>Submit</button>
          </div>
    </section>
    </div>
      )
    }
}

export default Profile;
