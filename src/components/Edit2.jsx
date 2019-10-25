import React from 'react'

export default class Edit2 extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            num: '00',
            position: 'Mascot',
            GP: 0,
            AB: 0,
            R: 0,
            H: 0,
            HR: 0,
            RBI: 0,
            AVG: '.000',
            image: `https://sabr.org/sites/default/files/Ruth-Babe-1934-Goudey.png`
        }
    }

    componentDidMount(){
        this.setState({
            name: this.props.cardObj.name,
            name: '',
            num: '00',
            position: 'Mascot',
            GP: 0,
            AB: 0,
            R: 0,
            H: 0,
            HR: 0,
            RBI: 0,
            AVG: '.000',
            image: this.props.cardObj.image
        })
    }

    render(){
        return(
        <div className='edit'>Edit2.jsx
        <div className="inputs">

<h2>Name:</h2><input
    onChange={(e) => this.handleChange1(e)}
    placeholder='Enter Player Name!'
    type="text" />
<h2>Number:</h2><input
    onChange={(e) => this.handleChange2(e)}
    placeholder='Enter a Number!'
    type="number" /><button>GET RANDOM</button>
<h2>Position:</h2><input
    onChange={(e) => this.handleChange3(e)}
    placeholder="Pick a Position!"
    type="text" /><button>GET RANDOM</button>
<h2>Games Played:</h2><input
    onChange={(e) => this.handleChange4(e)}
    type="text" /><button>GET RANDOM</button>
<h2>At Bats:</h2><input
    onChange={(e) => this.handleChange5(e)}
    type="text" /><button>GET RANDOM</button>
<h2>Runs:</h2><input
    onChange={(e) => this.handleChange6(e)}
    type="text" /><button>GET RANDOM</button>
<h2>Hits:</h2><input
    onChange={(e) => this.handleChange7(e)}
    type="text" /><button>GET RANDOM</button>
<h2>Home Runs:</h2><input
    onChange={(e) => this.handleChange8(e)}
    type="text" /><button>GET RANDOM</button>
<h2>RBIs:</h2><input
    onChange={(e) => this.handleChange9(e)}
    type="text" /><button>GET RANDOM</button>
<h2>AVG: </h2><input
    onChange={(e) => this.handleChange10(e)}
    type="text" /><button>GET RANDOM</button>
<br /><br /><input type="text" placeholder='Image URL' /><button>UPLOAD IMAGE</button>
</div>

<div className="new-preview">
<button
    onClick={() => this.props.toggleEditFn2()}
>DISCARD</button>

<div className="card">
    <img src={this.state.image} alt={this.state.name} />
    <h2>{this.state.name} {this.state.num}|{this.state.position}</h2>
</div>

<button
    onClick={() => this.editCard(this.state)}>UPLOAD CARD</button>


</div>

<div className="card">
<h2>{this.state.name} {this.state.num}|{this.state.position}</h2>
<div className="back">
    <h2 className='gray'>Games Played: {this.state.GP}</h2>
    <h2>At Bats: {this.state.AB}</h2>
    <h2 className='gray'>Runs: {this.state.R}</h2>
    <h2>Hits: {this.state.H}</h2>
    <h2 className='gray'>Home Runs: {this.state.HR}</h2>
    <h2>RBIs: {this.state.RBI}</h2>
    <h2 className='gray'>AVG: {this.state.AVG}</h2>
</div>
</div>

        </div>
        )
    }
}