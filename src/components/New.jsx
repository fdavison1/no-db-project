import React from 'react'
import axios from 'axios'
import Back from './Back'

export default class New extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Orbit',
            num: '00',
            position: 'Mascot',
            GP: 0,
            AB: 0,
            R: 0,
            H: 0,
            HR: 0,
            RBI: 0,
            AVG: '.000',
            image: 'https://d13csqd2kn0ewr.cloudfront.net/uploads/image/file/64371/w640xh480_USPW_779964.jpg?ts=1407631359',
            image2: ''
        }
    }

    // NEW CARD method - AXIOS POST
    newCard() {
        axios
            .post('/api/collection', this.state)
            .then(res =>
                this.setState({
                    name: 'Orbit',
                    num: +this.state.num + 1,
                    position: 'Mascot',
                    GP: 0,
                    AB: 0,
                    R: 0,
                    H: 0,
                    HR: 0,
                    RBI: 0,
                    AVG: '.000',
                    image: 'https://d13csqd2kn0ewr.cloudfront.net/uploads/image/file/64371/w640xh480_USPW_779964.jpg?ts=1407631359'
                }))
        this.props.getCardsFn()
        this.props.toggleEditFn()
    }

    //HANDLE CHANGE methods (one for each input field)
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
    handleChange11(e) {
        this.setState({
            image2: e.target.value
        })
    }

    //NEW PICTURE method - uploads picture to preview
    newPicture() {
        this.setState({
            image: this.state.image2
        })
    }

    render() {
        //Deconstructuring
        const {name, num, position, AB, R, H, HR, RBI, AVG, GP} = this.state
        return (
            <div className="new-container">
                <a id="new"></a>
                {/* "CREATE A NEW CARD" SUBTITLE */}
                <h1 className='subtitle' >Create a New Card</h1>
                <div className='new'>
                {/* SECTION 1: INPUTS */}
                    <section className="inputs">
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
                            onChange={(e) => this.handleChange11(e)}
                            type="text" placeholder='Image URL' />
                        <button
                            onClick={() => this.newPicture()}>upload image</button>
                    </section>
                    {/* SECTION 2: PREVIEW (Buttons, Front of Card) */}
                    <section className="new-preview">

                        {/* "DISCARD" BUTTON */}
                        <a href="#top">
                            <button
                                className='big'
                                onClick={() => this.props.toggleEditFn()}
                            >DISCARD
                    </button>
                        </a>

                        {/* PREVIEW: FRONT OF CARD */}
                        <div className="card2">
                            <img src={this.state.image} alt={this.state.name} />
                            <h1>{this.state.name} <span>{this.state.num}|{this.state.position}</span></h1>
                        </div>

                        {/* "UPLOAD CARD" BUTTON */}
                        <button
                            className='big'
                            onClick={() => this.newCard()}
                        >UPLOAD CARD
                        </button>
                    </section>

                    <Back 
                    name={name}
                    num = {num}
                    position = {position}
                    AB = {AB}
                    R = {R}
                    GP = {GP}
                    H = {H}
                    HR = {HR}
                    RBI = {RBI}
                    AVG = {AVG}
                    />

                </div>
            </div>

        )
    }
}