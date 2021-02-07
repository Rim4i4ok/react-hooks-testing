import React from 'react';
import './App.css';
import UseStateTest from './components/UseStateTest';
import UseEffectTest from './components/UseEffectTest';
import UseContextTest from './components/UseContextTest';
import UseRefTest from './components/UseRefTest';
import UseReducerTest from './components/UseReducerTest';
import UseMemoTest from './components/UseMemoTest';
import UseCallbackTest from './components/UseCallbackTest';
import UseLayoutEffectTest from './components/UseLayoutEffectTest';
import UseDebugValueTest from './components/UseDebugValueTest';

function App() {

  return (
    <div className="App">
      <UseStateTest />
      <UseEffectTest />
      <UseContextTest />
      <UseRefTest />
      <UseReducerTest />
      <UseMemoTest />
      <UseCallbackTest />
      <UseLayoutEffectTest />
      <UseDebugValueTest />
    </div>
  );
}

export default App;
