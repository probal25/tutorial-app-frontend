import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListTutorialComponents from './components/ListTutorialComponents';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (

    <div>
      
      <Router>
        <HeaderComponents />
          <div className="container">
            <Routes>
                <Route path="/" element = {<ListTutorialComponents />} />
                <Route path="/tutorials" element = {<ListTutorialComponents />} />
              </Routes>
          </div>
          <FooterComponents />
      </Router>
    </div>
    
  );
}

export default App;
