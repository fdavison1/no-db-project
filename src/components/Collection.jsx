import React from 'react'
import Front from './Front'
import Back from './Back'

export default class Collection extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>Collection.jsx
                <Front />
                <Back />
            </div>
        )
    }
}