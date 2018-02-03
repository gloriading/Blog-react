import React from 'react';
import {CommentDetails} from './CommentDetails';

function CommentList(props){
  const {comments=[]} = props;

  return(
    <ul className='CommentList'>
      {
        comments.map(comment=>(
          <li key={comment.id}>
            <CommentDetails {...comment} />
          </li>
        ))
      }
    </ul>
  )
}

export {CommentList};
