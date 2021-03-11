import React from "react"
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Switch, Route} from 'react-router-dom';

import './app.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

import HelloWorld from './components/HelloWorld'

const App = () => {
  return(
    <div>
      <Header/>

      <Switch>
        <Route exact path='/home' component={HomePage}/>

        <Route path="/hello" render={()=><HelloWorld greeting="Friend"/>}/>
      </Switch>
    </div>

  )
  }

export default App

