import React from 'react'
import Card from './Card'
import './Collection.css'
import { Link } from 'react-router-dom'

export default class Collection extends React.Component {
    constructor(props) {
        super(props)

    }
    // toggleCard() {

    // }


    render() {
        // console.log(this.props.cardObj)
        return (
            <div>Collection.jsx
                <br />
                <button onClick={() => this.props.getCardsFn()}>Get Cards</button>
                <button>Make New</button>
                <h1>You have ___ cards.</h1>
                <div className="cards">

                    {this.props.cardObj.map(el => (



                        <Card 
                            cardObj2={el}
                            key={el.id}
                            cardInfo={this.props.card}
                            getCardFn={this.props.getCardFn}
                        />



                    ))}

                </div>

            </div>
        )
    }
}