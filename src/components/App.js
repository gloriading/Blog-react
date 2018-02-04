import React, { Component } from 'react';
import {PostShowPage} from './PostShowPage';
import {PostIndexPage} from './PostIndexPage';
import {NavBar} from './NavBar';
import {
 BrowserRouter as Router,
 Link,
 Route
} from 'react-router-dom';

function App(){
  return(
    <Router >
      <div className='App'>
        <NavBar />
        <Route path="/posts" exact component={PostIndexPage} />
        <Route path="/posts/id" component={PostShowPage} />
      </div>
    </Router>
  )
}


export default App;
