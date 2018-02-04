import React, {Component} from 'react';
import {PostDetails} from './PostDetails';
import {CommentList} from './CommentList';
import {Post} from '../requests/posts';


class PostShowPage extends Component{
  constructor (props) {
    super(props);
    this.state = {
      post:{},
      loading:true
    };
    this.delete = this.delete.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentDidMount(){
    const {params} = this.props.match;

    Post
    .get(params.id)
    .then(post=>{
      this.setState({loading:false, post})
    });
  }

  delete(){
    this.setState({
      post:{}
    });
  }

  deleteComment(commentId){
    const {post} = this.state;
    const {comments} = post;
    this.setState({
      post:{
        ...post,
        comments: comments.filter(comment => comment.id !== commentId)
      }
    });

  }

  render(){
    const {post, loading} = this.state;
    const {comments=[]} = post;

    const containerStyle = {
      paddingLeft: '20px',
      fontFamily: 'sans-serif',
      fontSize: '20px'
     }

     if (loading) {
        return (
          <main className="PostShowPage" style={containerStyle}>
            <h4>Loading post...</h4>
          </main>
        )
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
        <PostDetails {...post}/>
        <button
          style={{backgroundColor:'pink', marginLeft:'10px'}}
          onClick={this.delete}>
          d e l e t e
        </button>
        <CommentList
          comments={comments}
          onCommentDeleteClick={this.deleteComment}
        />
      </main>
    )

  }
}

export {PostShowPage};
