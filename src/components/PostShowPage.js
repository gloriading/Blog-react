import React from 'react';
import {PostDetails} from './PostDetails';
import {CommentDetails} from './CommentDetails';
import {CommentList} from './CommentList';
import post from '../data/post'


function PostShowPage(){
  const {comments=[]} = post;

  const containerStyle = {
    paddingLeft: '20px',
    fontFamily: 'sans-serif',
    fontSize: '20px'
   }
  return(
    <main className="PostShowPage" style={containerStyle}>
      <h4 style={{fontSize:'30px', color:'Red'}}>Post Show</h4>
      <PostDetails {...post}/>
      <CommentList comments={comments}/>
    </main>
  )
}

export {PostShowPage};
