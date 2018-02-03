import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

function PostDetails(props={}){
  return(
    <div>
        <h4>Post:</h4>
        <p>Title: {props.title}</p>
        <p>Body: {props.body}</p>
    </div>

  )
}

function CommentDetails(props={}){
  return(
    <div>
        <h4>Comment:</h4>
        <p>Body: {props.body}</p>
    </div>

  )
}

function PostShow(){
  return(
      <PostDetails
        title="abc"
        body="testing"
      />
  )
}

function CommentShow(){
  return(
      <CommentDetails
        body="testing-2"
      />
  )
}

function App(){
  return(
    <div>
      <PostShow />
      <CommentShow />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
