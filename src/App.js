import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './containers/Home'
import Community from './containers/Community'
import Company from './containers/Company'
import Education from './containers/Educational'
import NavigationBar from './components/NavigationBar'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Route exact path="/" component={Home} />
          <Route path="/community" component={Community} />
          <Route path="/company" component={Company} />
          <Route path="/educational" component={Education} />
        </div>
      </Router>
    )
  }
}
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Route exact path="/" component={Home} />
//       </div>
//     </Router>
//   );
// }

export default App;
