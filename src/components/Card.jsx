import React from 'react'
import { Link } from 'react-router-dom'

export default class Card extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
    
                <div className="card">
                    <img src={this.props.cardObj.image} alt={this.props.cardObj.name}/>
                    <h1>{this.props.cardObj.name}</h1>
                </div>
            </div>
        )
    }
}