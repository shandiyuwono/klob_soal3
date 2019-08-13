import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './containers/Home'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
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
