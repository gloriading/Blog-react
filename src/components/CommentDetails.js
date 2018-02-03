import React from 'react';

function CommentDetails(props={}){
  const {onDeleteClick = () => {}} = props;
  return(
    <div className="CommentDetails">
        <h4>Comment:</h4>
        <p>Body: {props.body}</p>
        <p>By {props.author_full_name}</p>
        <p>Created at: {props.created_at} </p>
        <p>Updated at: {props.updated_at} </p>
        <button
          style={{backgroundColor:'lightgray', marginLeft:'10px'}}
          onClick={() => onDeleteClick(props.id)}>
          d e l e t e
        </button>
    </div>

  )
}

export {CommentDetails};
