import React from 'react'


export default class Edit2 extends React.Component {
    constructor() {
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
            image: `https://sabr.org/sites/default/files/Ruth-Babe-1934-Goudey.png`,
            image2: ''
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.cardObj.name,
            num: this.props.cardObj.num,
            position: this.props.cardObj.position,
            GP: this.props.cardObj.GP,
            AB: this.props.cardObj.AB,
            R: this.props.cardObj.R,
            H: this.props.cardObj.H,
            HR: this.props.cardObj.HR,
            RBI: this.props.cardObj.RBI,
            AVG: this.props.cardObj.AVG,
            image: this.props.cardObj.image
        })
    }

    handleChange1(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleChange2(e) {
        this.setState({
            num: e.target.value
        })
    }
    handleChange3(e) {
        this.setState({
            position: e.target.value
        })
    }
    handleChange4(e) {
        this.setState({
            GP: e.target.value
        })
    }
    handleChange5(e) {
        this.setState({
            AB: e.target.value
        })
    }
    handleChange6(e) {
        this.setState({
            R: e.target.value
        })
    }
    handleChange7(e) {
        this.setState({
            H: e.target.value
        })
    }
    handleChange8(e) {
        this.setState({
            HR: e.target.value
        })
    }
    handleChange9(e) {
        this.setState({
            RBI: e.target.value
        })
    }
    handleChange10(e) {
        this.setState({
            AVG: e.target.value
        })
    }

    handleChange11(e){
        this.setState({
            image2: e.target.value
        })
    }

    newPicture(){
        this.setState({
            image: this.state.image2
        })
    }

    saveChanges(id, body) {

        
        this.props.editCard2()
        this.props.saveChangesFn(id, body)
    }

    render() {
        return (
            <div className="edit-container">
                <div>
            <h1 className='subtitle' >Edit Card</h1>

                </div>
        <div className='edit'>


            <div className="edit-inputs">
<div className='row'>

                <h2>Name:</h2><input
                    onChange={(e) => this.handleChange1(e)}
                    placeholder='Enter Player Name!'
                    type="text" />
</div>
<div className="row">

                <h2>Number:</h2><input
                    onChange={(e) => this.handleChange2(e)}
                    placeholder='Enter a Number!'
                    type="number" />
</div>
<div className="row">

                <h2>Position:</h2><input
                    onChange={(e) => this.handleChange3(e)}
                    placeholder="Pick a Position!"
                    type="text" />
</div>
<div className="row">

                <h2>Games Played:</h2><input
                    onChange={(e) => this.handleChange4(e)}
                    placeholder="Enter a number!"
                    type="text" />
</div>
<div className="row">

                <h2>At Bats:</h2><input
                    onChange={(e) => this.handleChange5(e)}
                    placeholder="Enter a number!"
                    type="text" />
</div>
<div className="row">

                <h2>Runs:</h2><input
                    onChange={(e) => this.handleChange6(e)}
                    placeholder="Enter a number!"
                    type="text" />
</div>
<div className="row">

                <h2>Hits:</h2><input
                    onChange={(e) => this.handleChange7(e)}
                    placeholder="Enter a number!"
                    type="text" />
</div>
<div className="row">

                <h2>Home Runs:</h2><input
                    onChange={(e) => this.handleChange8(e)}
                    placeholder="Enter a number!"
                    type="text" />
</div>
<div className="row">

                <h2>RBIs:</h2><input
                    onChange={(e) => this.handleChange9(e)}
                    placeholder="Enter a number!"
                    type="text" />
</div>
<div className="row">

                <h2>AVG: </h2><input
                    onChange={(e) => this.handleChange10(e)}
                    placeholder="Enter a percentage!"
                    type="text" />
</div>

                <br /><br /><input 
                    onChange={(e)=>this.handleChange11(e)}
                    type="text" placeholder='Image URL' />
                <button
                onClick={()=>this.newPicture()}>upload image</button>
            </div>

            <div className="edit-preview">

            {/* "DISCARD CHANGES" BUTTON */}
            <a href='#top'>
                    <button
                        className='big'
                        onClick={() => this.props.editCard2()}
                        >DISCARD CHANGES
                    </button>
            </a>

            {/* PREVIEW: "FRONT OF CARD" */}
                    <div className="card2">
                        <img src={this.state.image} alt={this.state.name} />
                        <h1>{this.state.name} <span>{this.state.num}|{this.state.position}</span></h1>
                    </div>

                {/* "SAVE CHANGES" BUTTON */}
                    <a href='#top'>
                        <button
                            className='big'
                            onClick={() => this.saveChanges(this.props.cardObj.id, this.state)}
                            >SAVE CHANGES
                        </button>
                    </a>
                
                </div>
                
                <div>

                {/* PREVIEW: BACK OF CARD */}
                <div className="card2">
                    <h1>{this.state.name} <span>{this.state.num}|{this.state.position}</span></h1>
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

                        </div>
            </div>
        )
    }
}