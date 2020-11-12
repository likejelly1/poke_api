import './Assets/scss/style.scss';
import  {Header}  from './Components';
import  {Home}  from './Pages';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
