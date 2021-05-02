import React ,{Component,useState, useEffect} from 'react'
import { fontsize } from 'react-read-more-read-less'

class Details extends Component
{
    constructor(props){
        super(props)
    }
    render()
    {
        const {name} = this.props
        const {value} = this.props
        return (
            <div className="col-lg-6">
                <div className="inforow">
                    <div className="title1  text-dark"><b>{name}  :</b></div>
                    <div className="value text-dark">  
                        {value}
                    </div>
                </div>
        </div>)
    }
}

export default Details;
    