import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';

import NavHeader from './components/NavHeader';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        
          <header>
            <NavHeader />
          </header>

          {/* ROUTER OUTLETS HERE  */}
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          {/* https://reacttraining.com/react-router/web/example/basic */}
          {/*- - - - - - - - - - - */}

        </div>
      </Router>
    );
  }
}

export default App;


