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
                <Link to='/'><button>Back to Collection</button></Link>
            </div>

        )
    }
}