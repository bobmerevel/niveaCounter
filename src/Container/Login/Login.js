import React, {Component} from 'react';
import withDimension from "../../hoc/withDimension"
import { withRouter } from "react-router-dom";


import app from 'firebase/app';
import 'firebase/auth';
import logo from "../../assets/logo.png"
import background from "../../assets/loginFooter.png"
import banner from "../../assets/loginBanner.png"


const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

class Login extends Component{
    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
                
        this.auth = app.auth();
    }

    onSubmit = event => {
        const { email, password } = this.state;
        event.preventDefault();
        
        this.auth.signInWithEmailAndPassword(email, password)
            .then((data)=>{                
                this.auth.onAuthStateChanged(user => {
                    if (user) {                                                    
                      localStorage.setItem('myPage.expectSignIn', '1')
                      this.props.history.push("admin")     
                    } else {
                      localStorage.removeItem('myPage.expectSignIn')
                      this.props.history.push("login")
                    }
                  })  

            })
            .catch((error) => {                
                var errorCode = error.code;
                var errorMessage = error.message;                
            });
        
      };
    
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value }, ()=>{
            // console.log('[STATE]',this.state);
        });
    };

    render(){
        const {windowWidth,isMobileSized} = this.props
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return(   
            <div style={{
                position:"relative",
                zIndex: 0,
                width:"100%",
                height:"100%"
            }}>   
                <div style={{position:"absolute" , zIndex:10, top:0, marginTop:"25px", width:"100%"}}>
                                
                    <div className="d-flex flex-column justify-content-start"  >                                    
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{marginBottom:"25px"}}>
                            <img src={banner} alt="banner" width={isMobileSized ? windowWidth*0.60 : windowWidth*0.25}/>
                        </div>     
                        <div className="d-flex flex-row justify-content-center " style={{width:"100%"}}>
                            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>E-Mail</label>
                                        <input
                                            className="form-control"
                                            name="email"
                                            value={email}
                                            onChange={this.onChange}
                                            type="text"
                                            placeholder="Email Address"
                                        />
                                    </div>    
                                    <div className="form-group">
                                        <label>Şifre</label>
                                        <input
                                            className="form-control"
                                            name="password"
                                            value={password}
                                            onChange={this.onChange}
                                            type="password"
                                            placeholder="Password"
                                            />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary col-sm-12 col-md-6 col-lg-6" disabled={isInvalid} type="submit">
                                            Giriş
                                        </button>
                                    </div>                                
                                    {error && <p>{error.message}</p>}
                                </form> 
                            </div>                            
                        </div>                                               
                    </div>
                           
                </div>   
                
                <div style={{position:"absolute", zIndex:5, left:"0px", bottom:0, width: "100vw", height:"auto"}}>
                    <img src={background} alt={"login-background"} width={windowWidth}/>
                </div>                
                
            </div>
                      
        )
    }
}


export default withRouter(withDimension(Login));