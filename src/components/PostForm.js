import React from 'react';
import {FormErrors} from './FormErrors';

 function PostForm (props) {
   const {
     onSubmit = () => {},
     onChange = () => {},
     post = {},
     errors = []
   } = props;

   const handleSubmit = event => {
     event.preventDefault();
     onSubmit();
   };

   const handleChange = name => event => {
     onChange({[name]: event.currentTarget.value});
    };

   return (
     <form
       className="PostForm"
       onSubmit={handleSubmit}
     >
       <div>
         <label htmlFor="title">Title</label> <br />
         <input
           onChange={handleChange("title")}
           value={post.title}
           name="title"
           id="title" />
            <FormErrors forField='title' errors={errors} />
       </div>

       <div>
         <label htmlFor="body">Body</label> <br />
         <textarea
           onChange={handleChange("body")}
           value={post.body}
           name="body"
           id="body" />
            <FormErrors forField='body' errors={errors} />
       </div>

       <div>
         <input type="submit" value="Submit"/>
       </div>
     </form>
   );
 }

 export {PostForm}
