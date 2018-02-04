import React, {Component} from 'react';
import {Post} from '../requests/posts';
import {Link} from 'react-router-dom';

class PostIndexPage extends Component{
  constructor(props){
    super(props);

    this.state={
      loading:true,
      posts:[]
    };

    this.deletePost = this.deletePost.bind(this);
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


  render(){
    const {loading, posts} = this.state;


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
