import React from 'react'
import axios from 'axios'
// import routes from '../routes'
import Collection from './Collection'
import { Switch, Route } from 'react-router-dom'
import New from './New'
import Back from './Back'
import Front from './Front'



export default class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            cards: [],
            editing: false
        }
        this.getCards = this.getCards.bind(this)
        this.toggleEditField = this.toggleEditField.bind(this)
    }

    componentDidMount(){
        console.log(this.state.editing)
    }

    getCards() {
        axios
            .get('/api/collection')
            .then(res => {
                this.setState({
                    cards: res.data,
                    card: ''
                })
            })
    }

    toggleEditField() {
        console.log('fred')
        this.setState({
            editing: !this.editing
        })
    }

    render() {
        return (
            <div>
                DISPLAY.JSX
                <br />


                {this.state.editing ? 
                <New 
                    toggleEditFn = {this.toggleEditField}
                /> 
                : null}



                <Collection
                    cardObj={this.state.cards}
                    getCardsFn={this.getCards}
                    getCardFn={this.getCard}
                />




            </div>
        )
    }
}