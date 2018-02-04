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
import {NotFoundPage} from './NotFoundPage';
import {HomePage} from './HomePage';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:null,
      loading:true
    };
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }


  signIn () {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const payload = jwtDecode(jwt);
      this.setState({user: payload});
      this.setState({user: payload, loading: false});
    } else {
      this.setState({loading: false});
    }
  }

  signOut () {
     localStorage.removeItem('jwt');
     this.setState({user: null});
    }

   componentDidMount () {
     this.signIn();
   }

   isAuth () {
     return !!this.state.user
   }

  render(){
    const {user, loading} = this.state;
     if (loading) {
       return (
         <div>
           Loading...
         </div>
       );
     }

    return(
      <Router >
        <div className='App' style={{backgroundColor:"#FDF2E9"}}>
          <NavBar user={user} onSignOutClick={this.signOut} />
          <Switch>
               <Route exact path="/" component={HomePage} />
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
                <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    )


  }

}


export default App;
