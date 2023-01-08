import React, { Component } from 'react'
import Secondclass from './Secondclass'

export class Firstclass extends Component {
     constructor(){
   super();
    this.state={
      productName:"madurai",
     quantity:1,
    }
  }
  updatedata= () => {
     this.setState({ quantity:this.state.quantity+1})
  }
  getData=(param)=>{
    console.log('vel',param);
  }
  render() {

    return (
      <div>firstclass{this.props.name}
         {this.state.productName}{this.state.quantity}
         <button onClick={()=> this.updatedata()}>click</button>
        <Secondclass name={"rupu"} getData={this.getData}/>
      </div>
    )
  }
}

export default Firstclass;