import React from 'react'
import Front from './Front'
import Back from './Back'
import {Link} from 'react-router-dom'

export default class Collection extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>Collection.jsx
                <br/>
                <Link to='/new'><button>Make New</button></Link>
                <Front />
                <Back />
            </div>
        )
    }
}