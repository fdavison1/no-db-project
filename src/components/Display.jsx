import React from 'react'
import axios from 'axios'
// import routes from '../routes'
import Collection from './Collection'
import {Switch, Route} from 'react-router-dom'
import New from './New'
import Back from './Back'
import Front from './Front'



export default class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            cards: []
        }
       this.getCards = this.getCards.bind(this)
    //    this.getCard = this.getCard.bind(this)
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

    // getCard(id){
    //     axios
    //     .get(`/api/collection/${id}`)
    //     // console.log(id)
    //     .then(res => {
    //         this.setState({
    //             card: res.data
    //         })
    //     })
    // }

    render() {
        return (
            <div>
                DISPLAY.JSX
                <br />
                {/* <Collection 
                cardObj = {this.state.cards}
                getCardsFn = {()=>this.getCards()}
                /> */}

                <Switch>
                    {/* <Route path='/back' component={()=> (
                        <Back 
                        cardObj = {this.state.cards}
                        />
                    )}/>
                    <Route path='/front' component={()=> (
                        <Front 
                        cardObj = {this.state.cards}
                        
                        />
                    )}/> */}
                    <Route exact path='/' component={()=> (
                        <Collection 
                        cardObj = {this.state.cards}
                        getCardsFn = {this.getCards}
                        getCardFn = {this.getCard}
                        />
                    )}/>
                    <Route path='/new' component={New} />
                </Switch>

            </div>
        )
    }
}