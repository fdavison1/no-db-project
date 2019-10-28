import React from 'react'

export default function Back(props){
    //Deconstructuring
    const {name, num, position, AB, R, GP, H, HR, RBI, AVG} = props
    return(
        // SECTION 3: PREVIEW: BACK OF CARD
            //(used in both Edit2 and New)
        <section className="card2">
        <h1>{name} <span>{num}|{position}</span></h1>
        <div className="back">
            <h2 className='gray'>Games Played: {GP}</h2>
            <h2>At Bats: {AB}</h2>
            <h2 className='gray'>Runs: {R}</h2>
            <h2>Hits: {H}</h2>
            <h2 className='gray'>Home Runs: {HR}</h2>
            <h2>RBIs: {RBI}</h2>
            <h2 className='gray'>AVG: {AVG}</h2>
        </div>
    </section> 
    )
}