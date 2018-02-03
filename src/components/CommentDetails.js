import React from 'react';

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

export {CommentDetails};
