
import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>

      {/* App body */}
      {/* Side bar */}
      <Feed/>
      {/* Widgets */}
    </div>
  );
}

export default App;
