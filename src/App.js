import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <h1>I am sakib ahmed</h1>
        <h2>I am sakib </h2>
        <p>
       
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>hello there this is me</h1>
        </div>

        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          <h1>hello this is ujjal zaman</h1>
        </span>
      </header>
      <div>
        <h1>testing</h1>
        <h1>my commit</h1>
        <h4>hello tester</h4>
      </div>
    </div>
  );
}

export default App;
