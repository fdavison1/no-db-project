import React from 'react'
import Card from './Card'
import './Collection.css'
import { Link } from 'react-router-dom'

export default class Collection extends React.Component {
    constructor(props) {
        super(props)
        this.state ={

        }
        
    }
    // toggleCard() {

    // }


    render() {
        // console.log(this.props.cardObj)
        return (
            <div>Collection.jsx
                <br />
                <button onClick={() => this.props.getCardsFn()}>Get Cards</button>
                
                {!this.props.editing ?
                <button onClick={() => this.props.toggleEditFn()}>Make New</button>
                : null}

                <h1>You have {this.props.cardObj.length} cards.</h1>
                <div className="cards">

                    {this.props.cardObj.map(el => (



                        <Card 
                            cardObj2={el}
                            key={el.id}
                            cardInfo={this.props.card}
                            getCardFn={this.props.getCardFn}
                            toggleEditFn2 = {this.props.toggleEditFn2}
                        />



                    ))}

                </div>

            </div>
        )
    }
}