import React from 'react'
import Card from './Card'
import './Collection.css'
import { Link } from 'react-router-dom'

export default class Collection extends React.Component {
    constructor() {
        super()
       
    }

    

    render() {
        return (
            <div>Collection.jsx
                <br />
                <button onClick={() => this.props.getCardsFn()}>Get Cards</button>
                <Link to='/new'><button>Make New</button></Link>
                <div className="cards">

                    {this.props.cardObj.map(el => (                       
                        
                        <Card 
                        cardObj = {el}
                        key={el.id}
                        />

                    ))}

                </div>

            </div>
        )
    }
}