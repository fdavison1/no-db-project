import React from 'react'
import { Link } from 'react-router-dom'
import { tsExternalModuleReference } from '@babel/types'

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flipCard: false
        }
        // this.cardObj2 = this.cardObj2.bind(this)
    }

    // filterCards(){
    //     console.log(this.props.cardObj2)
    //     let var1 = this.props.cardObj2.id 
    //     console.log(this.props.cardObj2.id)
    //     console.log(var1)
    //     console.log(this.props.cardObj2['var1'])
    //     // let var2 = this.props.cardObj2.filter(var1 === this.props.cardObj2.id)
    //     // console.log(var2)
    //         // this.setState({
    //     // })
    // handleClick(){
    //     this.setState({
    //         key1: this.props.cardObj2.id
    //     })
    //     this.props.cardObj2.filter((el,i) => i === this.props.cardObj2.id-1)
    //     console.log(this.state.key1)
    // }
    toggleCard(){
        this.setState({
            flipCard: !this.state.flipCard
        })
    }
   

    render() {
        return (
            <div className='card-margin'>
               
                {/* <Link to={`/front/${this.props.cardObj2.id}`}> */}
                <div 
                    className="card"
                    // onClick={()=>console.log('test', this.props.cardObj2.name)}
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
               
                    <button onClick={()=>this.props.toggleEditFn2()}>EDIT</button>

                    <button onClick={()=>this.props.deleteCardFn(`${this.props.cardObj2.id}`)}>X</button>

            </div>
        )
    }
}

// onClick={()=>this.props.getCardFn(this.props.cardObj2.id)}