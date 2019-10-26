import React from 'react'
import axios from 'axios'
// import routes from '../routes'
import Collection from './Collection'
import { Switch, Route } from 'react-router-dom'
import New from './New'




export default class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            cards: [],
            editing: false,
            editing2: false
        }
        this.getCards = this.getCards.bind(this)
        this.toggleEditField = this.toggleEditField.bind(this)
        this.toggleEditField2 = this.toggleEditField2.bind(this)
        this.deleteCard = this.deleteCard.bind(this)
        this.saveChanges2 = this.saveChanges2.bind(this)
       
    }

componentDidMount(){
    this.getCards()
}

    getCards() {
        axios
            .get('/api/collection')
            .then(res => {
                this.setState({
                    cards: res.data,
                    // card: '',
                })
            })
    }

    saveChanges2(id, body) {
        axios
            .put(`/api/collection/${id}`, body)
            .then(res => {
                this.setState({
                    cards: res.data
                })
            })

    }
    
    deleteCard(id){
        axios
        .delete(`/api/collection/${id}`)
        .then(res => {
            this.setState({
                cards: res.data
            })
        })
    }


   

    toggleEditField() {
        this.setState({
            editing: !this.state.editing
        })
    }

    toggleEditField2() {
        this.setState({
            editing2: !this.state.editing2
        })
    }

    render() {
        return (
            <div>
               

                {this.state.editing ?
                    <New
                    toggleEditFn={this.toggleEditField}
                    getCardsFn={this.getCards}
                    
                    />
                    : null}

                <Collection
                    cardObj={this.state.cards}
                    getCardsFn={this.getCards}
                    toggleEditFn={this.toggleEditField}
                    toggleEditFn2={this.toggleEditField2}
                    editing={this.state.editing}
                    deleteCardFn = {this.deleteCard}
                    editCardFn = {this.editCard}
                    saveChangesFn = {this.saveChanges2}
                />




            </div>
        )
    }
}