import React from 'react';
import {CommentDetails} from './CommentDetails';

function CommentList(props){
  const {comments=[], onCommentDeleteClick = () => {}} = props;

  return(
    <ul className='CommentList'>
      {
        comments.map(comment=>(
          <li key={comment.id}>
            <CommentDetails
              {...comment}
              onDeleteClick={onCommentDeleteClick}
            />
          </li>
        ))
      }
    </ul>
  )
}

export {CommentList};
