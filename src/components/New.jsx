import React from 'react'
import {Link} from 'react-router-dom'

export default class New extends React.Component{
    constructor(){
        super()
        this.state ={

        }
    }
    render(){
        return(
            <div className='container-new'>
                <br/>
              <div className="new">
                  
                  <button
                  onClick={() => this.props.toggleEditFn()}
                  >DISCARD</button>
                  <div className="inputs">
                      <h2>Name:</h2><input type="text"/>
                      <h2>Number:</h2><input type="text"/><button>GET RANDOM</button>
                      <h2>Position:</h2><input type="text"/><button>GET RANDOM</button>
                      <h2>Games Played:</h2><input type="text"/><button>GET RANDOM</button>
                      <h2>At Bats:</h2><input type="text"/><button>GET RANDOM</button>
                      <h2>Runs:</h2><input type="text"/><button>GET RANDOM</button>
                      <h2>Hits:</h2><input type="text"/><button>GET RANDOM</button>
                      <h2>Home Runs:</h2><input type="text"/><button>GET RANDOM</button>
                      <h2>RBIs:</h2><input type="text"/><button>GET RANDOM</button>
                      <h2>AVG: </h2><input type="text"/><button>GET RANDOM</button>
                      <hr/><input type="text" placeholder='Image URL'/>
                      <hr/><button>UPLOAD CARD</button>
                  </div>
              </div>
                </div>
        )
    }
}