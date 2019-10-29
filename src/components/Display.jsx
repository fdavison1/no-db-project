import React from 'react'
import axios from 'axios'
import Collection from './Collection'
import New from './New'
import EditField from './EditField'


export default class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            cards: [],
            editing: false,
            editing2: false,
            editField: false
        }

        //BINDS
        this.getCards = this.getCards.bind(this)
        this.toggleEditField = this.toggleEditField.bind(this)
        this.toggleEditField2 = this.toggleEditField2.bind(this)
        this.toggleEditField3 = this.toggleEditField3.bind(this)
        this.deleteCard = this.deleteCard.bind(this)
        this.saveChanges2 = this.saveChanges2.bind(this)

    }

    // INITIAL DISPLAY OF CARDS: should show 9 starting cards
    componentDidMount() {
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
            }).catch(() => console.log('error with getCards'))
    }

    //SAVE CHANGES method - PUT AXIOS (URL parameter)
    saveChanges2(id, body) {
        axios
            .put(`/api/collection/${id}`, body)
            .then(res => {
                this.setState({
                    cards: res.data
                })
            }).catch(() => console.log('error with saveChanges2'))
    }

    //DELETE CARD method - DELETE AXIOS (URL query)
    deleteCard(id) {
        axios
            .delete(`/api/collection/?id=${id}`)
            .then(res => {
                this.setState({
                    cards: res.data
                })
            }).catch((err) => console.log(err))
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

    //TOGGLE EDIT FIELD BACKGROUND (for formatting)
    toggleEditField3(){
        this.setState({
            editField: !this.state.editField
        })
    }


    render() {
        //Destructuring
        const { cards, editing } = this.state
        const { getCards, toggleEditField, toggleEditField2, toggleEditField3, deleteCard, editCard, saveChanges2 } = this

        return (
            <div className='background'>

                {/* NEW FIELD: only shows when toggled */}
                {this.state.editing ?
                    <New
                        toggleEditFn={this.toggleEditField}
                        getCardsFn={this.getCards}
                    />
                    : null}

                {/* EDIT FIELD BACKGROUND (for formatting) */}
                {this.state.editField ? 
                    <EditField /> 
                    : null}
                

                {/* COLLECTION DISPLAY */}
                <Collection
                    cardObj={cards}
                    getCardsFn={getCards}
                    editing={editing}
                    toggleEditFn={toggleEditField}
                    toggleEditFn2={toggleEditField2}
                    deleteCardFn={deleteCard}
                    editCardFn={editCard}
                    saveChangesFn={saveChanges2}
                    toggleEditField3={toggleEditField3}
                />

            </div>
        )
    }
}