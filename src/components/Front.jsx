import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Front extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            img: '',
            name: ''
        }
    }

    
    componentWillMount(){
        console.log(this.props)
        this.getCard()
    }

    getCard(){
    axios
        // .get(`/api/collection/${this.props.cardObj.id}`)
        .get(`api/collection/${6}`)
        .then(res => {
            this.setState({
                name: res.data.name,
                image: res.data.image
            })
        })
    }


    render(){
        // console.log(this.props.cardObj2)
        return(
            <div>Front.jsx
                <br/>
                <Link to='/collection'><button>Back to Collection</button></Link>
                {this.state.card}
                <Link to={`/back`}>
                <div className="card">
                    <img src={this.state.image} alt={this.state.name}/>
                    <h1>{this.state.name}</h1>
                </div>
                </Link>

            </div>
        )
    }
}