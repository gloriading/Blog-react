import React from 'react';


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

export {PostDetails};
