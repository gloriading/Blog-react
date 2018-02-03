import React from 'react';

 function PostForm (props) {
   const {
     onSubmit = () => {},
     onChange = () => {},
     post = {}
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
       </div>

       <div>
         <label htmlFor="body">Body</label> <br />
         <input
           onChange={handleChange("body")}
           value={post.body}
           name="body"
           id="body" />
       </div>

       <div>
         <input type="submit" value="Submit"/>
       </div>
     </form>
   );
 }

 export {PostForm}
