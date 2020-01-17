import React, {Component} from 'react';

class DigitHolder extends Component{
    
    render(){
        const {digit1, digit2, text} = this.props
        return(
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-between" 
                    style={{                          
                        margin:"5px 2px",
                        width:"100px"
                    }}>
                    <div className="col-6" style={{
                        // background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(17,83,164,1) 35%, rgba(152,229,245,1) 100%)',
                        background: 'linear-gradient(180deg, #171617 0%, black 71.03%, #3A3B3A 100%)',
                        border:"1px solid black",
                        margin: "10% 1px",
                        borderRadius: "5px"
                    }}>
                        <p style={{color:"white", fontSize: "2em"}}>{digit1}</p>
                    </div>
                    <div className="col-6" style={{
                        background: 'linear-gradient(180deg, #171617 0%, black 71.03%, #3A3B3A 100%)',
                        border:"1px solid black",
                        margin: "10% 1px",
                        borderRadius: "5px"
                    }}>
                        <p style={{color:"white", fontSize: "2em"}}>{digit2}</p>
                    </div>                
                </div>
                <div>
                    <p style={{color:"white", fontSize: "1.05em"}}>{text}</p>
                </div>
            </div>
        )
    }
}

export default DigitHolder;