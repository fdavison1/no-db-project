import React from 'react'
import {Link} from 'react-router-dom'

export default class Back extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>Back.jsx
                <br/>
                <Link to='/collection'><button>Back to Collection</button></Link>
               
               <Link to='/front'>

                <div className="card">
                    {this.props.cardObj}
                </div>
               </Link>


            </div>

        )
    }
}