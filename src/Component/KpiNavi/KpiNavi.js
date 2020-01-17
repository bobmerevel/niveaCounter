import React, {Component} from 'react';
import withDimension from "../../hoc/withDimension"

class KpiNavi extends Component{
    constructor(props){
        super(props);
        this.state = {
            changingValue: null,            
        }
    }
    
    render(){
        const {windowHeight} = this.props
        return(
            <div className="d-flex flex-column justify-content-start" 
                style={{
                    position:"absolute",
                    top:0,
                    bottom: 0,
                    left:0,
                    height:windowHeight-56,
                    width:"100%",                                                        
                    backgroundColor: "#1F598C",                                      
                    boxShadow: "0 25px 25px rgba(74, 150, 217, 0.30)"
                }}>
                    <button className="btn btn-primary btn-sm" style={{margin:"15px 5px", backgroundColor:"#3498BF"}}>NS Değeri</button>
                    <button className="btn btn-primary btn-sm" style={{margin:"10px 5px", backgroundColor:"#3498BF"}}>M1 Değeri</button>
                    <button className="btn btn-primary btn-sm" style={{margin:"10px 5px", backgroundColor:"#3498BF"}}>E Değeri</button>
                    <button className="btn btn-primary btn-sm" style={{margin:"10px 5px", backgroundColor:"#3498BF"}}>Deo Değeri</button>
                    <button className="btn btn-primary btn-sm" style={{margin:"10px 5px", backgroundColor:"#3498BF"}}>Face Değeri</button>
                    <button className="btn btn-primary btn-sm" style={{margin:"10px 5px", backgroundColor:"#3498BF"}}>Hedef Tarih</button>
            </div>
        )
    }
}

export default withDimension(KpiNavi);