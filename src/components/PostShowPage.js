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
    this.delete = this.delete.bind(this);
  }

  delete(){
    this.setState({
      post:{}
    });
  }

  render(){

    const {comments=[]} = this.state.post;

    const containerStyle = {
      paddingLeft: '20px',
      fontFamily: 'sans-serif',
      fontSize: '20px'
     }

     if(Object.keys(this.state.post).length < 1){
       return (
          <main className="PostShowPage" style={containerStyle}>
            <h4>Post does not exist.</h4>
          </main>
       );
     }

    return(
      <main className="PostShowPage" style={containerStyle}>
        <h4 style={{fontSize:'30px', color:'Red'}}>Post Show</h4>
        <PostDetails {...this.state.post}/>
        <button
          style={{backgroundColor:'pink', marginLeft:'10px'}}
          onClick={this.delete}>
          d e l e t e
        </button>
        <CommentList comments={comments}/>
      </main>
    )

  }
}

export {PostShowPage};
