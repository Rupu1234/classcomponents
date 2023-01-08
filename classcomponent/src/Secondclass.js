import React, { Component } from 'react'


export class Secondclass extends Component {
  render() {
    
    return (
      <div>secondclass{this.props.name}
      <button onClick={()=> this.props.getData("Rupu")}>view</button>
      </div>
    )
  }
}

export default Secondclass