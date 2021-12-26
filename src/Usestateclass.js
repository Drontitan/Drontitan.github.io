import React, { Component } from 'react'

export default class Usestateclass extends Component {
     constructor(props){
         super(props);
         this.state={
           count:0,
         }
     }
     increment=()=>{
     this.setState((prev)=>({
         count:prev.count+1
     }))
    }
     decrement=()=>{
          this.setState({
            count: this.state.count - 1,
          });
    }
    render() {
        return (
          <div>
            welcome to my counter guys
            <p>the count is as :{this.state.count}</p>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
          </div>
        );
    }
}
