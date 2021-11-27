import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListTutorialComponents from './components/TutorialComponents/ListTutorialComponents';
import HeaderComponents from './components/Common/HeaderComponents';
import FooterComponents from './components/Common/FooterComponents';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateTutorialComponents from './components/TutorialComponents/CreateTutorialComponents';

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
