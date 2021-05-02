import React, { Component  }from 'react'
import axios from 'axios';
import Pagination from './Pagination.js';
import Listing from './Listings.js';
import './Vish.css';


class Vish extends Component {
    state = {

      credentials:{
          propertyfor: '',
          housetype:'',
          city:'',
          minprice:0,
          accomdationtype:'',
          sqft:0,
          
          submit : false
      },
      theme1:'PropertyFor',
      theme2:'HouseType',
      theme3:'AccomdationType',
      theme4:'City',
      theme5:0,
      theme6:0,

      popup:false,
      posts: [],
      currentPage: 1,
      postsPerPage: 3,
    };
    componentDidMount(){
      axios.get('http://localhost:5000/api/houses').then(
          res => {
             this.setState({posts:res.data});
         }
        )
        .catch(err=>{
            console.log(err)
      })
    }
    register=event=>{
      event.preventDefault();
      
      if(this.state.credentials.propertyfor=='')
      {
        this.state.credentials.propertyfor="Rent";
      }
      if(this.state.credentials.housetype=='')
      {
        this.state.credentials.housetype="Villa";
      }
      if(this.state.credentials.accomdationtype=='')
      {
        this.state.credentials.accomdationtype="Family";
      }
      if(this.state.credentials.city=='')
      {
        this.state.credentials.city="guntur";
      }
     
      const data={
      
     propertyfor:this.state.credentials.propertyfor,
     housetype:this.state.credentials.housetype,
     city:this.state.credentials.city,
     minprice:this.state.credentials.minprice,
     accomdationtype:this.state.credentials.accomdationtype,
     sqft:this.state.credentials.sqft,
    }
    console.log(data);
      axios.post('http://localhost:5000/api/houses/search',data).then(
          res => {
            console.log(res.data);
             this.setState({posts:res.data,submit:true});
         }
        )
        .catch(err=>{
            console.log(err)
          })
    }
   

    
   
    handlesubmit1 = (value,evt) => {
      evt.preventDefault();
      const cred=this.state.credentials;
      cred['propertyfor']=value;
      this.setState({credentials:cred});
      this.setState({ theme1:value });
      this.register(evt);
    }
    handlesubmit2 = (value,evt) => {
      evt.preventDefault();
      const cred=this.state.credentials;
      cred['housetype']=value;
      this.setState({credentials:cred});
      this.setState({ theme2:value });
      this.register(evt);
    }
    handlesubmit3 = (value,evt) => {
      evt.preventDefault();
      const cred=this.state.credentials;
      cred['accomdationtype']=value;
      this.setState({credentials:cred});
      this.setState({ theme3:value });
      this.register(evt);
    }
    handlesubmit4 = (value,evt) => {
      evt.preventDefault();
      const cred=this.state.credentials;
      cred['city']=value;
      this.setState({credentials:cred});
      this.setState({ theme4:value });
      this.register(evt);
    }
    handlesubmit5 = (value,evt) => {
      evt.preventDefault();
      const cred=this.state.credentials;
      cred['sqft']=value;
      this.setState({credentials:cred});
      this.setState({ theme5:value });
      this.register(evt);
    }
    handlesubmit6 = (value,evt) => {
      evt.preventDefault();
      const cred=this.state.credentials;
      cred['minprice']=value;
      this.setState({credentials:cred});
      this.setState({ theme6:value });
      this.register(evt);
    }
    
    render() {
          
          
              const { currentPage, postsPerPage, posts} = this.state;
              const indexOfLastPost = currentPage * postsPerPage;
              const indexOfFirstPost = indexOfLastPost - postsPerPage;
              const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
              const paginate = pageNum => this.setState({ currentPage: pageNum });
              const nextPage = () => this.setState({ currentPage: currentPage + 1 });
              const prevPage = () => this.setState({ currentPage: currentPage - 1 });
            
            return (
              <div className="s009">
                <div className="inner-form2"></div>
                <div className="inner-form1">EXPLORE</div>
          <div className="inner-form">
          <div className="row">
       
                <div className="col-lg-2 text-center">
                
                <div className="input-field">
                  <div className="input-select">
                  <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"aria-expanded="false" >  {this.state.theme1}                                                              </button>                       
              <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">                                                           
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit1("Rent",e)}>Rent</a>                                  
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit1("PG",e)}>PG</a>                          
                                                     
              </div>  
                  </div>
                </div>
                </div>
                <div className="col-lg-2 text-center">
                <div className="input-field">
                  <div className="input-select">
                  <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {this.state.theme2}                                                             </button>                       
              <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">                                                           
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit2("Villa",e)}>Villa</a>                                  
                <a className="dropdown-item" href="#"  onClick={e=>this.handlesubmit2("Apartement",e)}>Apartement</a>                          
                <a className="dropdown-item" href="#"  onClick={e=>this.handlesubmit2("BuilderFloor",e)}>BuilderFloor</a>
                <a className="dropdown-item" href="#"  onClick={e=>this.handlesubmit2("FarmHouse",e)}>FarmHouse</a>
                <a className="dropdown-item" href="#"  onClick={e=>this.handlesubmit2("StudioApartment",e)}>StudioApartment</a>
                <a className="dropdown-item" href="#"  onClick={e=>this.handlesubmit2("ServiceApartment",e)}>ServiceApartment</a>
                                                     
              </div>  
                  </div>
                </div></div>
                <div className="col-lg-2 text-center">
                <div className="input-field">
                  <div className="input-select">
                  <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {this.state.theme3} </button>                       
              <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">                                                           
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit3("Family",e)}>Family</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit3("SingleMen",e)}>SingleMen</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit3("Single Women",e)}>Single Women</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit3("No Preference",e)}>No Preference</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit3("Male",e)}>Male</a>       
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit3("Female",e)}>Female</a>                                  
                                                    
              </div>  
                  </div>
                </div></div>
                <div className="col-lg-2 text-center">
                <div className="input-field">
                  <div className="input-select">
                  <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {this.state.theme4} </button>                       
              <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">                                                           
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit4("Hyderabad",e)}>Hyderabad</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit4("guntur",e)}>Guntur</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit4("Banglore",e)}>Banglore</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit4("kakinada",e)}>kakinada</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit4("Nellore",e)}>Nellore</a>       
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit4("Tirupathi",e)}>Tirupathi</a> 
                                                  
                                                    
              </div>  
                  </div>
                </div></div>

                <div className="col-lg-2 text-center">
                <div className="input-field">
                  <div className="input-select">
                  <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{"Above "+this.state.theme5+" sqft"} </button>                       
              <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">                                                           
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit5(500,e)}>Above 500</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit5(1000,e)}>Above 1000</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit5(1500,e)}>Above 1500</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit5(2000,e)}>Above 2000</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit5(2500,e)}>Above 2500</a>       
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit5(3000,e)}>Above  3000</a> 
                                                  
                                                    
              </div>  
                  </div>
                </div></div>

                <div className="col-lg-2 text-center">
                <div className="input-field">
                  <div className="input-select">
                  <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {"Above "+this.state.theme6+" Rupees"} </button>                       
              <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">                                                           
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit6(5000,e)}>Above 5000</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit6(10000,e)}>Above 10000</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit6(15000,e)}>Above 15000</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit6(20000,e)}>Above 20000</a>
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit6(25000,e)}>Above 25000</a>       
                <a className="dropdown-item" href="#" onClick={e=>this.handlesubmit6(30000,e)}>Above 30000</a> 
                                                  
                                                    
              </div>  
                  </div>
                </div></div>
           
            
              
        </div>
      </div>
      <Listing posts={currentPosts} akhil={false}/>
                &nbsp;
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage}
                 prevPage={prevPage} />
      </div>
            )
          }
    }


export default Vish;
