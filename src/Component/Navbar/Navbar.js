import React, {Component} from 'react';
import logo from "../../assets/logo.png"
import firebase from "firebase"
import { withRouter } from "react-router-dom";

class Navbar extends Component{
    constructor(props){
        super(props);
        this.app = firebase.app();
        this.state = {
            showKpiManu : false
        }
    }
    
    kpiMenuHandler = () => {
        const {showKpiManu} = this.state
        this.setState({showKpiManu: !showKpiManu})
    }

    logoutHandler = (event) =>{
        this.app.auth().signOut()
            .then(()=>{
                console.log('[USER logout from admin panel]');
                this.props.history.push("login");
            })
    }
    
    render(){
       
        
        return(
    
                <nav className="navbar navbar-light bg-light">
                        <img src={logo} alt="logo" style={{height:"40px", width:"auto"}}/>
                        
                        <span className="navbar-brand mb-0 h1" style={{color:"black"}}>Admin Panel</span>                        
                        <button type="button" className="btn btn-secondary btn-sm" onClick={this.logoutHandler}>Çıkış</button>
                </nav>                   
        )
    }
}

export default withRouter(Navbar);