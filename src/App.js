import React , {Component}from 'react';
import {
  BrowserRouter as Router,  
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Main from "./Container/Main/Main"
import Admin from "./Container/Admin/Admin"
import Login from "./Container/Login/Login"
import PrivateRoute from "./hoc/hocPrivateRoute"
import withDimension from "./hoc/withDimension"
import config from "./firebaseConfig"
import app from 'firebase/app';
import 'firebase/auth';

// background: "linear-gradient(180deg, rgba(2,0,36,1) %, rgba(17,83,164,1) 79%, rgba(148,222,237,1) 100%)",

class  App extends Component{
  constructor(props){
    super(props);
    app.initializeApp(config);
    this.auth = app.auth();
  }


  componentDidMount() {    
    this.auth.onAuthStateChanged(user => {
      if (user) {        
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        console.log('[user.email]',user.email);        
      } else {
        localStorage.removeItem('myPage.expectSignIn')
        console.log('[User did logout -APP!]');
      }
    })
  }

  render(){

    const {windowHeight} = this.props;
    return (
      <div style={{height:windowHeight, width:"auto", fontFamily:"nivefont"}}>
        {/* style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 49%, rgba(17,83,164,1) 79%, rgba(148,222,237,1) 100%);"}} */}
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/admin" component={Admin} />
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default withDimension(App);
