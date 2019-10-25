import React from 'react'

export default class Edit extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>Edit.jsx

                <div className="edit">
                    <button>SAVE</button>
                    <button
                        onClick={() => this.props.toggleEditFn2()}
                    >DISCARD</button></div>

            </div>
        )
    }
}