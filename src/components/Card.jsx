import React from 'react'
import Edit2 from './Edit2'

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flipCard: false,
            editField: false,
        }
        this.editCard2 = this.editCard2.bind(this)
    }

    toggleCard() {
        this.setState({
            flipCard: !this.state.flipCard,
        })
        console.log(this.props.cardObj2)
    }


    editCard2() {
        this.setState({
            editField: !this.state.editField
        })
    }


    render() {
        return (
            <div className='card-margin'>

                {/* EDIT FIELD: only shows when toggled */}
                {this.state.editField ?
                    <Edit2
                        cardObj={this.props.cardObj2}
                        editCard2={this.editCard2}
                        saveChangesFn={this.props.saveChangesFn}
                    />
                    : null}

                {/* Active toggle function on click */}
                <div
                    className="card"
                    onClick={() => this.toggleCard()}
                >

                    {/* FRONT OF CARD: image toggles */}
                    {!this.state.flipCard ?
                        <img src={this.props.cardObj2.image} alt={this.props.cardObj2.name} />
                        : null}

                    {/* NAME OF CARD: always displayed */}
                    <h1>{this.props.cardObj2.name} <span>{this.props.cardObj2.num} | {this.props.cardObj2.position}</span></h1>

                    {/* BACK OF CARD: toggles */}
                    {this.state.flipCard ?
                        <div className="back">
                            <h2 className='gray'>Games Played: <span>{this.props.cardObj2.GP}</span></h2>
                            <h2>At Bats: <span>{this.props.cardObj2.AB}</span></h2>
                            <h2 className='gray'>Runs: <span>{this.props.cardObj2.R}</span></h2>
                            <h2>Hits: <span>{this.props.cardObj2.H}</span></h2>
                            <h2 className='gray'>Home Runs: <span>{this.props.cardObj2.HR}</span></h2>
                            <h2>RBIs: <span>{this.props.cardObj2.RBI}</span></h2>
                            <h2 className='gray'>AVG: <span>{this.props.cardObj2.AVG}</span></h2>
                        </div>
                        : null}

                </div>

                {/* EDIT BUTTON */}
                <a href='#top'>
                    <button
                        onClick={() => this.editCard2(this.props.cardObj2.id)}
                    >edit
                    </button>
                </a>

                {/* DELETE BUTTON */}
                <button
                    onClick={() => this.props.deleteCardFn(`${this.props.cardObj2.id}`)}
                >delete
                    </button>

            </div>
        )
    }
}