import React,{Component} from 'react';
import axios from 'axios';

import Posts from './Vish.js';
import Pagination from './Pagination.js';
class Search extends Component
{
  state = {
    propertyfor: '',
    housetype:'',
    accomadationtype:'',
    title:'',
    address:'',
    city:'',
    state:'',
    numberoffloors:'',
    propertyfloor:'',
    minprice:'',
    maxprice:'',
    bedrooms:'',
    bathrooms:'',
    sqft:'',
    posts: [],
    submit : false,
    currentPage: 1,
    postsPerPage: 3,
  };

  register=event=>{
    event.preventDefault();
    console.log(this.state.propertyfor);
    console.log(this.state.accomadationtype);

  const data={
   propertyfor:this.state.propertyfor,
   housetype:this.state.housetype,
   accomadationtype:this.state.accomadationtype,
   title:this.state.title,
   address:this.state.address,
   city:this.state.city,
   state:this.state.state,
   numberoffloors:this.state.numberoffloors,
   propertyfloor:this.state.propertyfloor,
   minprice:this.state.minprice,
   maxprice:this.state.maxprice,
   bedrooms:this.state.bedrooms,
  bathrooms:this.state.bathrooms,
  sqft:this.state.sqft,
  }
    axios.post('http://localhost:8000/listings/search',data).then(
        res => {
           this.setState({posts:res.data,submit:true});
           console.log(res.data);
       }
      )
      .catch(err=>{
          console.log(err)
        })
      }
render()
{
   let searched;
  if(this.state.submit)
  {
    
    const { currentPage, postsPerPage, posts} = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNum => this.setState({ currentPage: pageNum });
    const nextPage = () => this.setState({ currentPage: currentPage + 1 });
    const prevPage = () => this.setState({ currentPage: currentPage - 1 });
      searched=
                <div>
                  <Posts posts={currentPosts}/>
                  <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
                </div>
                // <div key={t.id}>
                // <div className="card" style={{width: 30 + 'rem' }}>
                //           <img className="card-img-top" src={t.imgSqSmall ? ( t.imgSqSmall) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} />
                //             <div className="card-body">
                //               <h1 className="card-title">{t.propertyfor}</h1>
                //                 <h2 className="card-text">{t.housetype} </h2>
                //                   <h4 className="card-text">{t.accomadationtype} </h4>
                //                   <ul className="list-group list-group-flush">
                //           <li className="list-group-item">Address: {t.address}</li>
                //           <li className="list-group-item">City: {t.city}</li>
                //           <li className="list-group-item">State: {t.state}</li>
                //           <li className="list-group-item">Minprice: {t.minprice} $, Maxprice: {t.maxprice} $</li>
                //           <li className="list-group-item">Bedrooms: {t.bedrooms}</li>
                //           <li className="list-group-item">Bathrooms: {t.bathrooms}</li>
                //           <li className="list-group-item">Sqft: {t.sqft}</li>
                //           </ul>
                //           </div>
                //       </div>
                // </div>
              
  }
   

    return(
      <div>
      <form onSubmit={this.register}>
      <label>
     <br />
      propertyfor:
         <input type="text" name="propertyfor"
        value={this.state.propertyfor}
        onChange={(e) => this.setState({ propertyfor: e.target.value  })}/>
        </label>
          <label>
         <br />
          housetype:
             <input type="text" name="housetype"
            value={this.state.housetype}
            onChange={(e) => this.setState({ housetype: e.target.value  })}/>
            </label>
            <label>
             <br />
              accomadationtype:
                 <input type="text" name="accomadationtype"
                value={this.state.accomadationtype}
                onChange={(e) => this.setState({ accomadationtype: e.target.value  })}/>
                </label>
        <label>
         <br />
          title:
             <input type="text" name="title"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value  })}/>
            </label>
            <label>
         <br />
         address
              <input type="text" name="address"
            value={this.state.address}
            onChange={(e) => this.setState({ address: e.target.value  })}/>
            </label>
            <label>
         <br />
         city
              <input type="text" name="city"
            value={this.state.city}
            onChange={(e) => this.setState({ city: e.target.value  })}/>
            </label>
            <label>
         <br />
         State
              <input type="text" name="state"
            value={this.state.state}
            onChange={(e) => this.setState({ state: e.target.value  })}/>
            </label>
            <label>
         <br />
         numberoffloors
              <input type="text" name="numberoffloors"
            value={this.state.numberoffloors}
            onChange={(e) => this.setState({ numberoffloors: e.target.value  })}/>
            </label>
            <label>
         <br />
         propertyfloor
              <input type="text" name="propertyfloor"
            value={this.state.propertyfloor}
            onChange={(e) => this.setState({ propertyfloor: e.target.value  })}/>
            </label>
            <label>
         <br />
         Minprice
             <input type="text" name="minprice"
            value={this.state.minprice}
            onChange={(e) => this.setState({ minprice: e.target.value  })} />
            </label>
            <label>
         <br />
         Maxprice
            <input type="text" name="maxprice"
            value={this.state.maxprice}
            onChange={(e) => this.setState({ maxprice: e.target.value  })}/>
            </label>
            <label>
         <br />Bedrooms
             <input type="text" name="bedrooms"
            value={this.state.bedrooms}
            onChange={(e) => this.setState({ bedrooms: e.target.value  })}/>
            </label>
            <label>
         <br />Bathrooms
             <input type="text" name="bathrooms"
            value={this.state.bathrooms}
            onChange={(e) => this.setState({bathrooms: e.target.value  })}/>
            </label>
            <label>
         <br />
         sqft
             <input type="text" name="sqft"
            value={this.state.sqft}
            onChange={(e) => this.setState({ sqft: e.target.value  })}/>
            </label>
            <button type="submit" >Submit</button>
     </form>
    {searched}
     </div>
     );
    }
   
}

export default Search;
