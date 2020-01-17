import React, {Component} from 'react';

import app from 'firebase/app';
import 'firebase/auth';
import firebase from "firebase"

import Navbar from "../../Component/Navbar/Navbar"

class Admin extends Component{
    constructor(props){
        super(props);        
        this.auth = app.auth();
        this.db = firebase.database();
        this.state = {
            changingValue : "E Değeri",
            nsValue     : 0,
            m1Value     : 0,
            eValue      : 0,
            faceValue   : 0,
            deoValue    : 0,
            targetDate  : "9999-01-01"
        }

    }
    
    logoutHandler = (event) =>{
        this.auth.signOut()
            .then(()=>{
                console.log('[USER logout]',);
                this.props.history.push("login");
            })
    }

    componentDidMount(){
        const kpis = this.db.ref("kpis")
        kpis.on('value', (snapshot) => {
            const kpisValue = snapshot.val();
            this.setState({...kpisValue});
        })

        const targetDate = this.db.ref("targetDate")
        targetDate.on('value', (snapshot) => {
            const targetDateValue = snapshot.val();
            this.setState({targetDate: targetDateValue});
        })
    }

    setKpiValueToDb = (kpiName, kpiValue, type="kpi") =>{
        let dbref = null;
        
        if(kpiName == "targetDate"){
            dbref = this.db.ref("targetDate")
            dbref.set(kpiValue)
        } else {
            dbref = this.db.ref("kpis/"+kpiName)      
            console.log('[DENEEME]',parseFloat(kpiValue));  
            dbref.set(parseFloat(kpiValue))    
        } 
    }

    onChange = event => {        
        this.setState({ [event.target.name]: event.target.value }, ()=>{});
    };

    onSubmitHandler = (event) => { 
        event.preventDefault();       
        const kpiName = event.target.name
        this.setKpiValueToDb(kpiName,this.state[kpiName])
    }

    render(){
        const {} = this.props
        const {nsValue, m1Value, eValue, faceValue, deoValue, targetDate} = this.state
        return(
            <div>
                <Navbar />
                <div className="d-flex flex-column justify-content-start" >                     
                    
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card" style={{margin:"25px 25px"}}>
                                    <div className="card-header">
                                        <h5 className="card-title">KPI - NS</h5>
                                    </div>
                                    <div className="card-body" style={{minHeight:"300px", boxShadow: "0 15px 25px rgba(74, 150, 217, 0.30)"}} > 
                                        <div className="d-flex flex-column justify-content-center">
                                            <form name="nsValue" onSubmit={this.onSubmitHandler}>
                                                <div className="form-group">
                                                    <label>Kpi Değeri</label>
                                                    <input
                                                        className="form-control"
                                                        name="nsValue"
                                                        value={nsValue}
                                                        onChange={this.onChange}
                                                        type="text"
                                                        placeholder="NS Değerini Giriniz..."
                                                    />
                                                </div>                                                    
                                                <div className="d-flex justify-content-center">
                                                    <button className="btn btn-primary col-sm-12 col-md-6 col-lg-6" type="submit">
                                                        Değiştir
                                                    </button>
                                                </div>
                                            </form>
                                        </div>                               
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card" style={{margin:"25px 25px"}}>
                                    <div className="card-header">
                                        <h5 className="card-title">KPI - M1</h5>
                                    </div>
                                    <div className="card-body" style={{minHeight:"300px", boxShadow: "0 15px 25px rgba(74, 150, 217, 0.30)"}} > 
                                        <div className="d-flex flex-column justify-content-center">
                                            <form name="m1Value" onSubmit={this.onSubmitHandler}>
                                                <div className="form-group">
                                                    <label>Kpi Değeri</label>
                                                    <input
                                                        className="form-control"
                                                        name="m1Value"
                                                        value={m1Value}
                                                        onChange={this.onChange}
                                                        type="text"
                                                        placeholder="M1 Değerini Giriniz..."
                                                    />
                                                </div>                                                    
                                                <div className="d-flex justify-content-center">
                                                    <button className="btn btn-primary col-sm-12 col-md-6 col-lg-6" type="submit">
                                                        Değiştir
                                                    </button>
                                                </div>
                                            </form>
                                        </div>                             
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card" style={{margin:"25px 25px"}}>
                                    <div className="card-header">
                                        <h5 className="card-title">KPI - E</h5>
                                    </div>
                                    <div className="card-body" style={{minHeight:"300px", boxShadow: "0 15px 25px rgba(74, 150, 217, 0.30)"}} >
                                        <div className="d-flex flex-column justify-content-center">
                                            <form name="eValue" onSubmit={this.onSubmitHandler}>
                                                <div className="form-group">
                                                    <label>Kpi Değeri</label>
                                                    <input
                                                        className="form-control"
                                                        name="eValue"
                                                        value={eValue}
                                                        onChange={this.onChange}
                                                        type="text"
                                                        placeholder="E Değerini Giriniz..."
                                                    />
                                                </div>                                                    
                                                <div className="d-flex justify-content-center">
                                                    <button className="btn btn-primary col-sm-12 col-md-6 col-lg-6" type="submit">
                                                        Değiştir
                                                    </button>
                                                </div>
                                            </form>
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card" style={{margin:"25px 25px"}}>
                                    <div className="card-header">
                                        <h5 className="card-title">KPI - FACE</h5>
                                    </div>
                                    <div className="card-body" style={{minHeight:"300px", boxShadow: "0 15px 25px rgba(74, 150, 217, 0.30)"}} > 
                                        <div className="d-flex flex-column justify-content-center">
                                            <form name="faceValue" onSubmit={this.onSubmitHandler}>
                                                <div className="form-group">
                                                    <label>Kpi Değeri</label>
                                                    <input
                                                        className="form-control"
                                                        name="faceValue"
                                                        value={faceValue}
                                                        onChange={this.onChange}
                                                        type="text"
                                                        placeholder="FACE Değerini Giriniz..."
                                                    />
                                                </div>                                                    
                                                <div className="d-flex justify-content-center">
                                                    <button className="btn btn-primary col-sm-12 col-md-6 col-lg-6" type="submit">
                                                        Değiştir
                                                    </button>
                                                </div>
                                            </form>
                                        </div>                               
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card" style={{margin:"25px 25px"}}>
                                    <div className="card-header">
                                        <h5 className="card-title">KPI - DEO</h5>
                                    </div>
                                    <div className="card-body" style={{minHeight:"300px", boxShadow: "0 15px 25px rgba(74, 150, 217, 0.30)"}} > 
                                        <div className="d-flex flex-column justify-content-center">
                                            <form name="deoValue" onSubmit={this.onSubmitHandler}>
                                                <div className="form-group">
                                                    <label>Kpi Değeri</label>
                                                    <input
                                                        className="form-control"
                                                        name="deoValue"
                                                        value={deoValue}
                                                        onChange={this.onChange}
                                                        type="text"
                                                        placeholder="DEO Değerini Giriniz..."
                                                    />
                                                </div>                                                    
                                                <div className="d-flex justify-content-center">
                                                    <button className="btn btn-primary col-sm-12 col-md-6 col-lg-6" type="submit">
                                                        Değiştir
                                                    </button>
                                                </div>
                                            </form>
                                        </div>                               
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card" style={{margin:"25px 25px"}}>
                                    <div className="card-header">
                                        <h5 className="card-title">Hedef Tarih</h5>
                                    </div>
                                    <div className="card-body" style={{minHeight:"300px", boxShadow: "0 15px 25px rgba(74, 150, 217, 0.30)"}} > 
                                        <div className="d-flex flex-column justify-content-center">
                                            <form name="targetDate" onSubmit={this.onSubmitHandler}>
                                                <div className="form-group">
                                                    <label>Kpi Değeri</label>
                                                    <input
                                                        className="form-control"
                                                        name="targetDate"
                                                        value={targetDate}
                                                        onChange={this.onChange}
                                                        type="text"
                                                        placeholder="Hedef Tarih Değerini Giriniz..."
                                                    />
                                                </div>                                                    
                                                <div className="d-flex justify-content-center">
                                                    <button className="btn btn-primary col-sm-12 col-md-6 col-lg-6" type="submit">
                                                        Değiştir
                                                    </button>
                                                </div>
                                            </form>
                                            <div style={{marginTop:"5%"}}>
                                                <p><strong>*Hedef Tarih YYYY-MM-DD formatında girilmelidir!</strong></p>
                                            </div>                                            
                                        </div>                               
                                    </div>
                                </div>
                            </div>
                        </div>                                                                          
                    </div>
                
            </div>
            
        )
    }
}

export default Admin;