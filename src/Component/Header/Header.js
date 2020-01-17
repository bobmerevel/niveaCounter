import React, {Component} from 'react';
import logo from "../../assets/logo.png"
import firebase from "firebase"



class Header extends Component{    
    constructor(props){
        super(props);
        this.state = {
            currentPicture: "http://peripolagency.ist/static/media/Amerika_gece_v2-8-11.mp4",
            playing:true
        }  
        this.db = firebase.database();      
    }

    

    componentDidMount(){
        this.targetTimeInterval()        
    }

    getTimeAsInteger = (currentTime) =>{
        let hourPart = null
        
        if(currentTime.getHours() < 10){
            hourPart = currentTime.getHours()*100
        } else{
            hourPart = currentTime.getHours()*100
        } 
        let minutePart = null
        if(currentTime.getMinutes() < 10){
            minutePart = currentTime.getMinutes()
        } else{
            minutePart = currentTime.getMinutes()
        }

        return hourPart + minutePart;
    } 

    targetTimeInterval = () => {
        
        this.myInterval = setInterval(()=>{
            let currPic = null;
            const currentTime = this.getTimeAsInteger(new Date());
            const treshold1 = this.getTimeAsInteger(new Date("2019-01-01 08:00"));
            const treshold2 = this.getTimeAsInteger(new Date("2019-01-01 11:00"));
            const treshold3 = this.getTimeAsInteger(new Date("2019-01-01 15:00"));
            const treshold4 = this.getTimeAsInteger(new Date("2019-01-01 17:00"));
            const treshold5 = this.getTimeAsInteger(new Date("2019-01-01 18:00"));            

            // const treshold1 = this.getTimeAsInteger(new Date("2019-01-01 18:28"));
            // const treshold2 = this.getTimeAsInteger(new Date("2019-01-01 18:36"));
            // const treshold3 = this.getTimeAsInteger(new Date("2019-01-01 18:44"));
            // const treshold4 = this.getTimeAsInteger(new Date("2019-01-01 18:52"));
            // const treshold5 = this.getTimeAsInteger(new Date("2019-01-01 18:60"));
            // const treshold6 = this.getTimeAsInteger(new Date("2019-01-01 18:68"));
            
            
            if(treshold1 <= currentTime && currentTime < treshold2 ) {
                // console.log('[CURRENT IMAGE]',"banner");
                this.setState({currentPicture: "http://peripolagency.ist/static/media/Amerika_gece_v2-8-11.mp4"})
            } else if (treshold2 <= currentTime && currentTime < treshold3 ) {
                // console.log('[CURRENT IMAGE]',"banner1");
                this.setState({currentPicture: "http://peripolagency.ist/static/media/Amerika_sabah_v2 11-15.mp4"})
            } else if (treshold3 <= currentTime && currentTime < treshold4 ) {
                // console.log('[CURRENT IMAGE]',"banner2");
                this.setState({currentPicture: "http://peripolagency.ist/static/media/Amerika_oglen_v2_15-17.mp4"})
            } else if (treshold4 <= currentTime && currentTime < treshold5 ) {
                // console.log('[CURRENT IMAGE]',"banner3");
                this.setState({currentPicture: "http://peripolagency.ist/static/media/Amerika_aksamustu_17-18.mp4"})
            } else {
                // console.log('[CURRENT IMAGE]',"banner5");
                this.setState({currentPicture: "http://peripolagency.ist/static/media/Amerika_aksamustu_17-18.mp4"})
            }
                     
        }, 2000)          
    }

    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
    

    render(){
        const {currentPicture} = this.state
        
        return(
            <div style={{
                position:"relative",
                zIndex: 0,
                height:"25%",
                width:"100%"
            }}>
                <div style={{position: "absolute", zIndex:2, left:"50px"}}>
                    <img src={logo} alt={"logo"} style={{width:"120px", height:"auto", margin:"25px 0px"}} />
                </div>
                <div style={{position: "absolute", zIndex:1, left:"0px", top:"0px"}}>                    
                    <div style={{
                        width: '1080px',
                        height: "auto",
                        overflow: 'hidden',
                    }}>
                        <video  id="header-video"
                                ref={this.handleRef}
                                type="video/mp4"
                                width="100%" 
                                height="auto"                                 
                                loop   
                                autoPlay                             
                        >
                            <source src={currentPicture} type="video/mp4" />
                        </video>
                        
                    </div>                    
                </div>
            </div>
        )
    }
}

export default Header;