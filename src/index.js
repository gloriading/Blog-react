import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

function PostDetails(props={}){
  const {author={}} = props;
  return(
    <div>
        <h4>Post:</h4>
        <p>Title: {props.title}</p>
        <p>Body: {props.body}</p>
        <p>By {author.full_name}</p>
        <p>Created at: {props.created_at} </p>
        <p>Updated at: {props.updated_at} </p>
    </div>

  )
}

function CommentDetails(props={}){
  return(
    <div>
        <h4>Comment:</h4>
        <p>Body: {props.body}</p>
        <p>By {props.author_full_name}</p>
        <p>Created at: {props.created_at} </p>
        <p>Updated at: {props.updated_at} </p>
    </div>

  )
}

function PostShowPage(){
  return(
    <main className="PostShowPage">
      <PostDetails
        title="abc"
        body="things ..."
        author={{full_name: "Jon Snow"}}
        created_at="2018-2-3"
        updated_at="2018-2-3"
      />
      <CommentDetails
        body="comment1"
        author_full_name="Mary Lee"
        created_at="2018-2-3"
        updated_at="2018-2-3"
      />
    </main>
  )
}



function App(){
  return(
    <div>
      <PostShowPage />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
