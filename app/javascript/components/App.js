import React from "react"
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Switch, Route} from 'react-router-dom'
// import HelloWorld from './HelloWorld'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" render={()=> ("Home!")}/>

      {/* <Route path="/hello" render={()=><HelloWorld greeting="Friend"/>}/> */}
    </Switch>
  </div>
)

export default App
