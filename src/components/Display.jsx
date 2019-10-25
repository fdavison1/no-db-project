import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import routes from '../routes'
import Collection from './Collection'


export default class Display extends React.Component {
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
            <div>
                DISPLAY.JSX
                <br />
                <Collection 
                cardObj = {this.state.cards}
                getCardsFn = {()=>this.getCards()}
                />
                {routes}
            </div>
        )
    }
}