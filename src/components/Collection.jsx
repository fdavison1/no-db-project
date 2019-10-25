import React from 'react'
import Card from './Card'
import './Collection.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Collection extends React.Component {
    constructor() {
        super()
        this.state = {
            cards: []
        }
    }

    getCards() {
        axios
            .get('/api/collection')
            .then(res => {
                this.setState({
                    cards: res.data
                })
            })
    }

    render() {
        return (
            <div>Collection.jsx
                <br />
                <button onClick={() => this.getCards()}>Get Cards</button>
                <Link to='/new'><button>Make New</button></Link>
                <div className="cards">

                    {this.state.cards.map(el => (                       

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