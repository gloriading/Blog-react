 const API_KEY = 'cb79206736558221f25e2062fa6d0e6015c73820122077002c22b73fac024aea';
 const BASE_URL = 'http://localhost:3000';

 // HTTP REQUESTS


 export const Post = {
   all () {
     return fetch(
       `${BASE_URL}/api/v1/posts`,
       {
         headers: {
           'Authorization': API_KEY
         }
       }
     )
       .then(res => res.json())
   },
   get (id) {
     return fetch(
       `${BASE_URL}/api/v1/posts/${id}`,
       {
         headers: {
           'Authorization': API_KEY
         }
       }
     )
       .then(res => res.json())
   },
   create (params) {
     return fetch(
       `${BASE_URL}/api/v1/posts`,
       {
         method: 'POST',
         headers: {
           'Authorization': API_KEY,
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(params)
       }
     )
     .then(res => res.json());
   }
 }
