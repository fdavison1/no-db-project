import React from 'react'
import {Link} from 'react-router-dom'

export default class New extends React.Component{
    constructor(){
        super()
        this.state ={

        }
    }
    render(){
        return(
            <div>New.jsx
                <br/>
                <Link to='/'><button>Back</button></Link>
                </div>
        )
    }
}