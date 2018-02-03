import React, { Component } from 'react';
import {PostShowPage} from './PostShowPage';
import {PostIndexPage} from './PostIndexPage';

function App(){
  return(
    <div className='App'>
      <PostShowPage />
      <PostIndexPage />
    </div>
  )
}

export default App;
