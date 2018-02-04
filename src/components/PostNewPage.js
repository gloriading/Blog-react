import React, {Component} from 'react';
import {PostForm} from './PostForm';
import {Post} from '../requests/posts';

class PostNewPage extends Component {
 constructor (props) {
   super(props);

   this.state = {
     newPost: {
       title: "",
       body: ""
     }
   };

   this.createPost = this.createPost.bind(this);
   this.updateNewPost = this.updateNewPost.bind(this);
 }

 updateNewPost (data) {
   const {newPost} = this.state;

   this.setState({
     newPost: {...newPost, ...data}
   });
 }

 createPost () {
   const {history} = this.props;
   const {newPost} = this.state;
   Post
     .create(newPost)
     .then(({id}) => {
       history.push(`/posts/${id}`)
     });
 }

 render () {
   const {newPost} = this.state;

   return (
     <main
       className="PostNewPage"
       style={{padding: '0  20px'}}
     >
       <h2>Post</h2>
       <PostForm
         post={newPost}
         onChange={this.updateNewPost}
         onSubmit={this.createPost}
       />

     </main>
   );
 }
}

export {PostNewPage};
