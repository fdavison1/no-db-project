import React from 'react'
import routes from '../routes'
import Collection from './Collection'

export default class Display extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Collection />
            </div>
        )
    }
}