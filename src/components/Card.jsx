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

    toggleCard(){
        this.setState({
            flipCard: !this.state.flipCard,
        })
        console.log(this.props.cardObj2)
    }


    editCard2(){
        this.setState({
            editField: !this.state.editField
        })
    }
   

    render() {
        return (
            <div className='card-margin'>
               {this.state.editField ? 
               <Edit2 
                cardObj = {this.props.cardObj2}
                editCard2 = {this.editCard2}
                saveChangesFn = {this.props.saveChangesFn}
               /> 
               : null}
               
                <div 
                    className="card"
                    onClick={()=>this.toggleCard()}
                >
                    
                    {!this.state.flipCard ?
                    <img src={this.props.cardObj2.image} alt={this.props.cardObj2.name} /> 
                    : null}

                    <h2>{this.props.cardObj2.name} {this.props.cardObj2.num} | {this.props.cardObj2.position}</h2> 
                    
                    {this.state.flipCard? 
                     
                        <div className="back">
                            <h2 className='gray'>Games Played: {this.props.cardObj2.GP}</h2>
                            <h2>At Bats: {this.props.cardObj2.AB}</h2>
                            <h2 className='gray'>Runs: {this.props.cardObj2.R}</h2>
                            <h2>Hits: {this.props.cardObj2.H}</h2>
                            <h2 className='gray'>Home Runs: {this.props.cardObj2.HR}</h2>
                            <h2>RBIs: {this.props.cardObj2.RBI}</h2>
                            <h2 className='gray'>AVG: {this.props.cardObj2.AVG}</h2>
                        </div> 
                       
                        : null}
                    
                </div>
               
            
                    
                       

                    <button onClick={()=>this.editCard2(this.props.cardObj2.id)}>EDIT</button>

                    <button onClick={()=>this.props.deleteCardFn(`${this.props.cardObj2.id}`)}>X</button>

            </div>
        )
    }
}