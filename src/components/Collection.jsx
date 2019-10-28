import React from 'react'
import Card from './Card'

export default class Collection extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
            
                {/* SUBTITLE: "YOU HAVE (BLANK) CARDS" */}
                <h1 className='subtitle'>You have <span>{this.props.cardObj.length}</span> cards.</h1>
               
                {/* MAKE NEW BUTTON */}
                {!this.props.editing ?
                    <a href='#top'>
                        <button  
                            className='big' 
                            onClick={() => this.props.toggleEditFn()}
                            >MAKE NEW
                        </button>
                    </a>
                : null}

                {/* MAIN DISPLAY: SHOWS ALL CARDS */}
                <div className="cards">
                    
                    {/* MAP */}
                    {this.props.cardObj.map(el => (
                       <Card 
                            cardObj2={el}
                            key={el.id}
                            cardInfo={this.props.card}
                            getCardFn={this.props.getCardFn}
                            toggleEditFn2 = {this.props.toggleEditFn2}
                            deleteCardFn = {this.props.deleteCardFn}
                            editCardFn = {this.props.editCardFn}
                            saveChangesFn = {this.props.saveChangesFn}
                            toggleEditField3 = {this.props.toggleEditField3} 
                        />
                    ))}

                </div>

            </div>
        )
    }
}