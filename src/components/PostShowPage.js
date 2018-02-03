import React from 'react';
import {PostDetails} from './PostDetails';
import {CommentDetails} from './CommentDetails';


function PostShowPage(){
  const containerStyle = {
    paddingLeft: '20px',
    fontFamily: 'sans-serif',
    fontSize: '20px'
   }
  return(
    <main className="PostShowPage" style={containerStyle}>
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

export {PostShowPage};
