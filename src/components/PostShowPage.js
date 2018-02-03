import React, {Component} from 'react';
import {PostDetails} from './PostDetails';
import {CommentList} from './CommentList';
import post from '../data/post'


class PostShowPage extends Component{
  constructor (props) {
    super(props);
    this.state = {
      post:post
    };
  }

  render(){

    const {comments=[]} = this.state.post;

    const containerStyle = {
      paddingLeft: '20px',
      fontFamily: 'sans-serif',
      fontSize: '20px'
     }
    return(
      <main className="PostShowPage" style={containerStyle}>
        <h4 style={{fontSize:'30px', color:'Red'}}>Post Show</h4>
        <PostDetails {...this.state.post}/>
        <CommentList comments={comments}/>
      </main>
    )

  }
}

export {PostShowPage};
