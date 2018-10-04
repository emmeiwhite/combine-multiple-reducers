import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>BE YOURSELF, VALUE YOURSELF, CODE YOURSELF</h2>
        <div className="col-sm-12">
              <div className="leafFalls">
                <h4> A: </h4>
                <button className="btn btn-danger">People Change</button>
              </div>

              <div className="leafFalls">
                <h4> B: </h4>
                <button className="btn btn-warning">State Change</button>
              </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state)=>{
  return {
    a:state.a,
    b:state.b,
  }
}

const mDTP = (dispatch)=>{
  return {
    action1:()=>dispatch({type:'ACTION_1'}),
    action2:()=>dispatch({type:'ACTION_2'}),
  }
}


export default connect(mSTP,mDTP)(App); // connect is a Higher Order Component: HOC
