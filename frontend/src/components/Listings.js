import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {Redirect} from 'react-router';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import './posts.css'
import { height } from '@material-ui/system';

class Listing extends Component {
  render() {
   
      const { posts, akhil } = this.props;
      const path = akhil ? "http://localhost:5000" : "";
      let listingsOnPage = [];
      let result = [];
              {posts.map((t,index) =>(
                console.log(t.photo_1),
               
                listingsOnPage.push(
                <div key={t.index}>
                   <div className="py-5">
                <h2 className="h4 font-italic mb-4">{t.name+'s house'}</h2>
        <div className="row">
          <div className="col-lg-5">
          <Link to={{pathname:'/profile',state:t.name}}>
            <img src={"http://localhost:5000/"+t.photo_1}  alt="Not loaded" className="w-100 mb-4 border border-md border-white shadow-sm" />
            </Link>
          </div>
          <div className="col-lg-7">
            <p className="font-italic text-muted"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ipsum quaerat, itaque sint odit id beatae, vero aliquam numquam placeat officiis fugiat, consequuntur est ut fugit amet illum obcaecati sed.</p>
            <p className="font-italic text-muted"> div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur iure dolore dolorum eum ex, expedita voluptate est adipisci repudiandae. Minus tenetur ut veritatis non hic beatae velit? Eius, totam, officia?</p>
            <p className="font-italic text-muted">Enim numquam autem, suscipit repellat vero, voluptas adipisci provident ad quidem dolorum minus, architecto. Nostrum deleniti nesciunt consequatur tempora repudiandae quos quas, animi perspiciatis nam consectetur earum adipisci, repellendus laudantium.</p>
          </div>
        </div>
       
      </div>
      
                  
                     
                         
                     
                     
                  </div>
               
              )))}
              for (let i = 0; i < posts.length; i += 1) {
              result.push(
                <div>
                    <Container>
                        {listingsOnPage[i]}
                    </Container>
                </div>
              );
          }
          return (
            <div>
              {result}
            </div>
          )
      }
}
export default Listing;
