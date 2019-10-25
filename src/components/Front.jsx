import React from 'react'
import { Link } from 'react-router-dom'

export default function Front() {
    return (
        <div>Front.jsx
            <br />
            <Link to='/'><button>Back to Collection</button></Link>

            <div className="card">
                test
            </div>


        </div>
    )
}