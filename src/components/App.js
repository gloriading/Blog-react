import React, { Component } from 'react';
import {PostShowPage} from './PostShowPage';
import {PostIndexPage} from './PostIndexPage';
import {PostNewPage} from './PostNewPage';
import {NavBar} from './NavBar';
import {SignInPage} from './SignInPage';
import {
 BrowserRouter as Router,
 Switch,
 Route
} from 'react-router-dom';
import {AuthRoute} from './AuthRoute';
import jwtDecode from 'jwt-decode';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:null
    };
    this.signIn = this.signIn.bind(this);
  }

  signIn () {
     const jwt = localStorage.getItem('jwt');
     if (jwt) {
       const payload = jwtDecode(jwt);
       this.setState({user: payload});
     }
   }

   componentDidMount () {
     this.signIn();
   }

   isAuth () {
     return !!this.state.user
   }

  render(){
    const {user} = this.state;
    return(
      <Router >
        <div className='App'>
          <NavBar user={user} />
          <Switch>
           <Route path="/sign_in" render={props => {
             return <SignInPage {...props} onSignIn={this.signIn} />
           }} />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/posts"
              exact
              component={PostIndexPage} />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/posts/new"
              component={PostNewPage} />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/posts/:id"
              component={PostShowPage} />

          </Switch>
        </div>
      </Router>
    )


  }

}


export default App;
