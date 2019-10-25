import React from 'react'
import { Link } from 'react-router-dom'

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // key1: ''
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
        
    }
   

    render() {
        return (
            <div>
                {/* <Link to={`/front/${this.props.cardObj2.id}`}> */}
                <div 
                    className="card"
                    onClick={()=>console.log('test', this.props.cardObj2.name)}
                // onClick={()=>this.handleClick()}
                >
                    <img src={this.props.cardObj2.image} alt={this.props.cardObj2.name} />
                    <h1>{this.props.cardObj2.name}</h1>
                </div>
                {/* </Link> */}

            </div>
        )
    }
}

// onClick={()=>this.props.getCardFn(this.props.cardObj2.id)}