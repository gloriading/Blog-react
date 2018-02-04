import {BASE_URL} from './config';
// const API_KEY = 'API_KEY cb79206736558221f25e2062fa6d0e6015c73820122077002c22b73fac024aea';
function getJwt () {
   return `JWT ${localStorage.getItem('jwt')}`;
 }


 // HTTP REQUESTS


 export const Post = {
   all () {
     return fetch(
       `${BASE_URL}/api/v1/posts`,
       {
         headers: {
           'Authorization': getJwt()
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
           'Authorization': getJwt()
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
           'Authorization': getJwt(),
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(params)
       }
     )
     .then(res => res.json());
   }
 }
