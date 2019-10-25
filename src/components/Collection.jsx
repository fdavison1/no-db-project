import React from 'react'
import Front from './Front'
import Back from './Back'
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
                console.log(res.data)
                this.setState({
                    cards: res.data
                })
            })
    }

    render() {
        return (
            <div>Collection.jsx
                <br />
                <button onClick={()=> this.getCards()}>Get Cards</button>
                <Link to='/new'><button>Make New</button></Link>
                <div className="cards">

                {this.state.cards.map(el => (
                    <div className="card">
                        <img src={el.image} alt={el.name}/>
                        <h1>{el.name}</h1>
                    </div>
                ))}

                </div>
                
                <Front />
                <Back />
            </div>
        )
    }
}