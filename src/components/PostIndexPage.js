import React, {Component} from 'react';
import posts from '../data/posts'

class PostIndexPage extends Component{
  constructor(props){
    super(props);

    this.state={
      posts:posts
    };

    this.deletePost = this.deletePost.bind(this);
  }

  deletePost(postId){
    return () =>{
      const {posts} = this.state;
      this.setState({
        posts:posts
        .filter(post=> post.id !== postId)
      });
    }


  }

  render(){
    return(
      <main className="PostIndexPage" style={{paddingLeft: '20px'}}>
        <h4 style={{fontSize:'30px', color:'green'}}>Post Index</h4>
        <ul>
          {
            this.state.posts.map(post=>(
              <li key={post.id} style={{fontSize:'20px'}}>
                <a href="">{post.title}</a>
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
