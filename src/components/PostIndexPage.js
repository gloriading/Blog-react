import React from 'react';
import posts from '../data/posts'

function PostIndexPage(props){
  return(
    <main className="PostIndexPage" style={{paddingLeft: '20px'}}>
      <h4 style={{fontSize:'30px', color:'green'}}>Post Index</h4>
      <ul>
        {
          posts.map(post=>(
            <li key={post.id} style={{fontSize:'20px'}}>
              <a href="">{post.title}</a>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export {PostIndexPage};
