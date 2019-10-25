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
            <div>
                {/* <Link to={`/front/${this.props.cardObj2.id}`}> */}
                <div 
                    className="card"
                    // onClick={()=>console.log('test', this.props.cardObj2.name)}
                    onClick={()=>this.toggleCard()}
                >
                    
                    {!this.state.flipCard ?
                    <img src={this.props.cardObj2.image} alt={this.props.cardObj2.name} /> 
                    : null}

                    <h1>{this.props.cardObj2.name} {this.props.cardObj2.num} | {this.props.cardObj2.position}</h1> 
                    
                    {this.state.flipCard? 
                    <div className="back">
                        <h2 className='gray'>Games Played: </h2>
                        <h2>At Bats: </h2>
                        <h2 className='gray'>Runs: </h2>
                        <h2>Hits: </h2>
                        <h2 className='gray'>Home Runs: </h2>
                        <h2>RBIs: </h2>
                        <h2 className='gray'>ABG: </h2>
                    </div> 
                    : null}

                </div>
                {/* </Link> */}

            </div>
        )
    }
}

// onClick={()=>this.props.getCardFn(this.props.cardObj2.id)}