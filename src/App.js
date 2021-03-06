import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pagination from './Pagination';
import Posts from './Data';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Pagination 
          data={Posts}
          perPage={1}
          path={'blog'}
          cursorStyle='not-allowed'
          activeClassName='page-active'
          show={4}
        />
      </header>
    </div>
    </Router>
  );
}

export default App;
