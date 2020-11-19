import './App.css';
import React from 'react';
import logo from './../../ui/nii-center.png';

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='react'/>
        <p>React-UI-Kit</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
