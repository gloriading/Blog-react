import React, { Component } from 'react';
import {PostShowPage} from './PostShowPage';
import {PostIndexPage} from './PostIndexPage';
import {PostNewPage} from './PostNewPage';
import {NavBar} from './NavBar';
import {
 BrowserRouter as Router,
 Switch,
 Route
} from 'react-router-dom';

function App(){
  return(
    <Router >
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path="/posts" exact component={PostIndexPage} />
          {/* new must higher than show  */}
          <Route path="/posts/new" component={PostNewPage} />
          <Route path="/posts/:id" component={PostShowPage} />
        </Switch>
      </div>
    </Router>
  )
}


export default App;
