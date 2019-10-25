import React from 'react'
import { Link } from 'react-router-dom'

export default class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        // this.cardObj2 = this.cardObj2.bind(this)
    }
    render(){
        return (
            <div>
                <Link to={`/front/${this.props.cardObj2.id}`}>
                <div className="card">
                    <img src={this.props.cardObj2.image} alt={this.props.cardObj2.name}/>
                    <h1>{this.props.cardObj2.name}</h1>
                </div>
                </Link>

            </div>
        )
    }
}

// onClick={()=>this.props.getCardFn(this.props.cardObj2.id)}