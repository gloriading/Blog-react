import React, {Component} from 'react';
import {PostForm} from './PostForm';
import {Post} from '../requests/posts';
import {Link} from 'react-router-dom';

class PostIndexPage extends Component{
  constructor(props){
    super(props);

    this.state={
      loading:true,
      posts:[],
      newPost:{
        title:"",
        body:"",
        author:{}
      }
    };

    this.deletePost = this.deletePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.updateNewPost = this.updateNewPost.bind(this);
  }

  componentDidMount(){
    Post
    .all()
    .then(posts=>{
      this.setState({loading:false, posts})
    });
  }

  deletePost(postId){
    return () =>{
      const {posts} = this.state;
      this.setState({
        posts:posts
        .filter(post=> post.id !== postId)
      });
    };
  }

  addPost(){
    const {posts, newPost} = this.state;
    this.setState({
      posts:[newPost, ...posts],
      newPost:{
        title:"",
        body:"",
        author:{}
      }
    });
  }

  updateNewPost(data){
    console.log(data);
    const {newPost} = this.state;
    this.setState({
      newPost: {...newPost, ...data}
    })
  }

  render(){
    const {newPost, loading, posts} = this.state;


    if(loading){
      return(
        <main className="PostIndexPage" style={{paddingLeft: '20px'}}>
          <h4 style={{color:'red', fontSize:'20px'}}>Loading...</h4>
        </main>
      )
    }

    return(
      <main className="PostIndexPage" style={{paddingLeft: '20px'}}>
        <h4 style={{fontSize:'30px', color:'green'}}>Post Index</h4>
        <PostForm
          post = {newPost}
          onChange={this.updateNewPost}
          onSubmit={this.addPost} />
        <ul>
          {
            posts.map(post=>(
              <li key={post.id} style={{fontSize:'20px'}}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>

                {' '}
                <button
                  style={{backgroundColor:'pink', marginLeft:'10px'}}
                  onClick={this.deletePost(post.id)}
                  >d e l e t e</button>
              </li>
            ))
          }
        </ul>
      </main>
    )
  }
}

export {PostIndexPage};
