import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>NEVER MUTATE THE STATE, NEVER !!!</h2>
        <div className="col-sm-12">
              <div className="leafFalls">
                <h4> A: {this.props.a}</h4>
                <button className="btn btn-danger" onClick={()=>this.props.actionA(this.props.b)}>People Change</button>
              </div>

              <div className="leafFalls">
                <h4> B: {this.props.b}</h4>
                <button className="btn btn-warning" onClick={()=>this.props.actionB(this.props.a)}>State Change</button>
              </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state)=>{
  return {
    a:state.rA.a,
    b:state.rB.b
  }
}

const mDTP = (dispatch)=>{
  return {
    actionA:(b)=>dispatch({type:'ACTION_A',payload:b}), // action is heading towards the reducer
    actionB:(a)=>dispatch({type:'ACTION_B',payload:a}),
  }
}


export default connect(mSTP,mDTP)(App); // connect is a Higher Order Component: HOC
