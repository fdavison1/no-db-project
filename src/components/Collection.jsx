import React from 'react'
import Card from './Card'
import './Collection.css'
import Edit2 from './Edit2'
import { Link } from 'react-router-dom'

export default class Collection extends React.Component {
    constructor(props) {
        super(props)
        this.state ={

        }

    }
    


    render() {
        // console.log(this.props.cardObj)
        return (
            <div>
            

               
                {/* MAKE NEW BUTTON */}
                {!this.props.editing ?
                <button onClick={() => this.props.toggleEditFn()}>Make New</button>
                : null}

                <h1>You have {this.props.cardObj.length} cards.</h1>
            
                {/* MAPPING */}
                <div className="cards">


                    {this.props.cardObj.map(el => (



                        <Card 
                            cardObj2={el}
                            key={el.id}
                            cardInfo={this.props.card}
                            getCardFn={this.props.getCardFn}
                            toggleEditFn2 = {this.props.toggleEditFn2}
                            deleteCardFn = {this.props.deleteCardFn}
                            editCardFn = {this.props.editCardFn}
                        />



                    ))}

                </div>

            </div>
        )
    }
}