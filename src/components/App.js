import React, { Component } from 'react';
import {PostShowPage} from './PostShowPage';
import {PostIndexPage} from './PostIndexPage';
import {CurrentDateTime} from './CurrentDateTime';

function App(){
  return(
    <div className='App'>
      <CurrentDateTime />
      <PostShowPage />
      <PostIndexPage />
    </div>
  )
}

export default App;
