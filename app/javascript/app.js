import React from "react"
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Switch, Route} from 'react-router-dom';

import './app.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import HelloWorld from './components/HelloWorld'

const App = () => {
  return(
    <div>
      <Header/>
      <Switch>
        <Route path="/hello" render={()=><HelloWorld greeting="Friend"/>}/>
        {/* <Route path="/signin" render={()=><SignInAndSignUpPage/>}/> */}
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
        <Route path='/' component={HomePage}/>
      </Switch>
    </div>

  )
  }

export default App

