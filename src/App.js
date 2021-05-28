import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>

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
