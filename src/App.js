import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListTutorialComponents from './components/ListTutorialComponents';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateTutorialComponents from './components/CreateTutorialComponents';

function App() {
  return (

    <div>
      
      <Router>
        <HeaderComponents />
          <div className="container">
            <Switch>
                <Route path="/" exact component = { ListTutorialComponents } />
                <Route path="/tutorials" component = { ListTutorialComponents } />
                <Route path="/add_tutorial" component = { CreateTutorialComponents } />
            </Switch>
          </div>
          <FooterComponents />
      </Router>
    </div>
    
  );
}

export default App;
