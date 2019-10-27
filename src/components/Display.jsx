import React from 'react'
import axios from 'axios'
import Collection from './Collection'
import New from './New'

export default class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            cards: [],
            editing: false,
            editing2: false
        }

        //BINDS
        this.getCards = this.getCards.bind(this)
        this.toggleEditField = this.toggleEditField.bind(this)
        this.toggleEditField2 = this.toggleEditField2.bind(this)
        this.deleteCard = this.deleteCard.bind(this)
        this.saveChanges2 = this.saveChanges2.bind(this)
       
    }

// INITIAL DISPLAY OF CARDS: should show 9 starting cards
componentDidMount(){
    this.getCards()
}

//GET CARDS method - GET AXIOS
    getCards() {
        axios
            .get('/api/collection')
            .then(res => {
                this.setState({
                    cards: res.data,
                })
            })
    }

//SAVE CHANGES method - PUT AXIOS (URL parameter)
    saveChanges2(id, body) {
        axios
            .put(`/api/collection/${id}`, body)
            .then(res => {
                this.setState({
                    cards: res.data
                })
            })
    }
    
//DELETE CARD method - DELETE AXIOS (URL query)
    deleteCard(id){
        axios
        .delete(`/api/collection/${id}`)
        .then(res => {
            this.setState({
                cards: res.data
            })
        })
    }
 
//TOGGLE NEW FIELD method
    toggleEditField() {
        this.setState({
            editing: !this.state.editing
        })
    }

//TOGGLE EDIT FIELD method
    toggleEditField2() {
        this.setState({
            editing2: !this.state.editing2
        })
    }


    render() {
        //Destructuring
        const {cards, editing} = this.state
        const {getCards, toggleEditField, toggleEditField2, deleteCard, editCard, saveChanges2} = this
        
        return (
            <div className='background'>
               
            {/* NEW FIELD: only shows when toggled */}
                {this.state.editing ?
                    <New
                        toggleEditFn={this.toggleEditField}
                        getCardsFn={this.getCards}
                    />
                    : null}

            {/* COLLECTION DISPLAY */}
                <Collection
                    cardObj={cards}
                    getCardsFn={getCards}
                    editing={editing}
                    toggleEditFn={toggleEditField}
                    toggleEditFn2={toggleEditField2}
                    deleteCardFn = {deleteCard}
                    editCardFn = {editCard}
                    saveChangesFn = {saveChanges2}
                />

            </div>
        )
    }
}