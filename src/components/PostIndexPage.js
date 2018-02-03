import React, {Component} from 'react';
import posts from '../data/posts'

class PostIndexPage extends Component{
  constructor(props){
    super(props);
    this.state={
      posts:posts
    };
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
              </li>
            ))
          }
        </ul>
      </main>
    )
  }
}

export {PostIndexPage};
