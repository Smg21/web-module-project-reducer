import React from 'react';
import { useReducer } from 'react';
import reducer, { initialState } from '../reducers'
import { addOne } from '../actions';
import { applyNumber } from '../actions';
import { change_operation } from '../actions';
import { clear_display } from '../actions';
import { cur_memory } from '../actions';
import { add_memory } from '../actions';
import { zero_memory } from './../actions';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddOne = () => {
    dispatch(addOne()); // Dispatch the addOne action creator! DISPATCH
  };

  const curMemory = () => {
    dispatch(cur_memory());
  }

  const zeroMemory = () => {
    dispatch(zero_memory());
  }

  const handleClear = () => {
    dispatch(clear_display());
  }

  const addMemory = () => {
    dispatch(add_memory());
  }

  const handleOperation = (operation) => {
    dispatch(change_operation(operation));
  };

  const handleAnyNum = (number) => {
    dispatch(applyNumber(number))
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={curMemory} value={"M+"}/>
              <CalcButton onClick={addMemory} value={"MR"}/>
              <CalcButton onClick={zeroMemory} value={"MC"}/>
            </div>
      
            <div className="row">
              <CalcButton onClick={() => handleAnyNum(1)} value={1}/>
              <CalcButton onClick={() => handleAnyNum(2)} value={2}/>
              <CalcButton onClick={() => handleAnyNum(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleAnyNum(4)} value={4}/>
              <CalcButton onClick={() => handleAnyNum(5)} value={5}/>
              <CalcButton onClick={() => handleAnyNum(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleAnyNum(7)} value={7}/>
              <CalcButton onClick={() => handleAnyNum(8)} value={8}/>
              <CalcButton onClick={() => handleAnyNum(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperation("+")} value={"+"}/>
              <CalcButton onClick={() => handleOperation("*")} value={"*"}/>
              <CalcButton onClick={() => handleOperation("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick = {() => handleClear()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
