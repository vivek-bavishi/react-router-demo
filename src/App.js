import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import List from './list'
import Details from './details'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="routercomponent">
          <ul>
            <li> <Link to="/">Home</Link><br /></li>
            <li><Link to="/list">List</Link><br /></li>
            <li><Link to="/details" >Details</Link><br /></li>
          </ul>
          <Switch>
            <Route exact path="/"><div className='Home'>hello world</div></Route>
            <Route path="/list" component={List}></Route>
            <Route path="/details" component={Details}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
