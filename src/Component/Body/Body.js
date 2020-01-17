import React, {Component} from 'react';

import Timer from "../Timer/Timer"
import Speedometer from "../Speedometer/Speedometer4"
import withDimension from "../../hoc/withDimension"
import moment from 'moment-timezone'
import footer from "../../assets/footer.png"
import subBanner from "../../assets/subBanner.png"
import soundfile from '../../assets/wow.mp3'

import firebase from "firebase"

import "./Body.css"

const getNumberPart = (value) => {
    if(value != null ){
        const stringNumber = value.toString()
        const decimalStart = stringNumber.indexOf(".");
        const decimalStartNew = decimalStart == -1 ? stringNumber.length : decimalStart
        const newString = stringNumber.substr(0, decimalStartNew)
        return newString
    } else {
        return ""
    }    
}

const getDecimalPart = (value) => {
    if(value != null ){
        let newValue = value-Math.floor(value);
        newValue = newValue.toFixed(2);
        const stringNumber = newValue.toString();    
        const substrTrim = stringNumber.length - 2;
        if(substrTrim <= 0){
            return "00"
        } else {
            const substrLength = substrTrim <= 0 ? 0 : substrTrim
            return stringNumber.substr(2, substrLength)
        }  
    } else {
        return ""
    }  
}

class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            nsValue : null,
            m1Value: null,
            eValue: null,
            faceValue:null,
            deoValue:null,
            targetCityTime:"00:00",
            targetCityWeather: null,
            targetCityWeatherIcon: null,
            play: false
        }
        this.db = firebase.database();
        this.audio = new Audio(soundfile)
    }

    componentDidMount(){        
        const kpis = this.db.ref("kpis")
        kpis.on('value', (snapshot) => {
            const kpisValue = snapshot.val();
            this.togglePlay()

            setTimeout(() => {                
                this.setState({...kpisValue});
                this.togglePlay()
            }, 2000);
            
        })
        this.getWeather()
        this.getWeatherInterval()
        this.timeZoneInterval()        
    }

    togglePlay = () => {
        this.audio.currentTime = 0
        this.setState({ play: !this.state.play }, () => {            
            this.state.play ? this.audio.play() : this.audio.pause();
        });
    }

    timeZoneInterval = () => {
        this.myInterval = setInterval(()=>{
            var jun = moment(new Date());
            this.setState({
                targetCityTime: jun.tz("America/Havana").format("hh:mm:ss A")
            })
        }, 1000)  
    }

    getWeatherInterval = () => {
        this.weatherInterval = setInterval(()=>{
            this.getWeather()
        }, 3600000)  
        
    }

    getWeather = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=4164138&APPID=8dd36b061d002ba19a94402cfa29a99f&units=metric')
            .then(response => response.json())
            .then(data => {
                const temp = Math.round(data["main"]["temp"]);
                const icon = "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png"
                this.setState({targetCityWeather:temp, targetCityWeatherIcon:icon})
            });
    }

    componentWillUnmount(){
        clearInterval(this.myInterval)
        clearInterval(this.weatherInterval)
    }
    
    render(){
        const {windowWidth} = this.props
        const {nsValue, m1Value, eValue, faceValue, deoValue, targetCityTime, targetCityWeather, targetCityWeatherIcon} = this.state
    
        return(
            <div className="d-flex flex-column justify-content-between" style={{fontFamily:"niveafont"}}>
                <div className="d-flex flex-row justify-content-center" style={{maqrginTop:"25px"}}>
                    <img src={subBanner} alt={"subBanner"} style={{width:windowWidth*0.90, height:"auto", marginTop:"15px"}} />
                </div>                
                <div>
                    
                    <Timer />                                   
                    
                    <div className="d-flex flex-row justify-content-center" style={{marginTop:"-75px"}}>                                            
                        <Speedometer name="NS" meter={nsValue} middle={120} min={0} max={240} direction={"possitive"}
                            texts={[
                                {key:1 ,x:370,y:690,fill:"black",fontSize:"70px", fontWeight:"bold", name:"NS"}
                            ]}
                        />
                        <Speedometer name="M1" meter={m1Value} middle={120} min={0} max={240} direction={"possitive"}
                            texts={[
                                {key:1 ,x:370,y:690,fill:"black",fontSize:"70px", fontWeight:"bold", name:"M1"}
                            ]}
                        />
                        <Speedometer name="E" meter={eValue} middle={120} min={0} max={240} direction={"possitive"}
                            texts={[
                                {key:1 ,x:345,y:690,fill:"black",fontSize:"70px", fontWeight:"bold", name:"EBIT"}                                
                            ]}
                        />                    
                    </div>
                    <div  className="d-flex flex-row justify-content-center" style={{margin:"-150px 0px"}}> 
                        <Speedometer name="DEO" meter={deoValue} middle={120} min={0} max={240} direction={"possitive"}
                            texts={[                                
                                {key:2 ,x:340,y:690,fill:"black",fontSize:"70px", fontWeight:"bold", name:"DEO"}
                            ]}
                        />  
                        <Speedometer name="FACE" meter={faceValue} middle={120} min={0} max={240} direction={"possitive"}
                            texts={[                                
                                {key:2 ,x:328,y:690,fill:"black",fontSize:"70px", fontWeight:"bold", name:"FACE"}
                            ]}
                        />
                    </div>
                </div> 
                <div onClick={this.togglePlay} className="d-flex flex-row justify-content-between" style={{margin:"100px 100px 25px 100px"}}>
                    {/* <div id="openweathermap-widget-13" /> */}
                    <div className="d-flex flex-row justify-content-center align-items-center"
                        style={{width:"180px", height:"55px", backgroundColor:"#febe3b", borderRadius: "5px", 
                        boxShadow: "0 15px 20px rgba(0, 0, 0, 0.3)"
                        }} > 
                            <p style={{marginTop:"15px"}}>
                                <strong>
                                    {targetCityWeather}<span> &deg;C</span>
                                </strong>
                            </p>
                            {targetCityWeatherIcon ? <img src={targetCityWeatherIcon} alt="weathericon" /> : null}
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center" 
                         style={{width:"180px", height:"55px", backgroundColor:"#febe3b", borderRadius: "5px", 
                                    boxShadow: "0 15px 20px rgba(0, 0, 0, 0.3)"
                         }} > 
                            <p style={{marginTop:"15px"}}>
                                <strong>
                                    {targetCityTime}
                                </strong>
                            </p>
                    </div>   
                </div>               
                {/* <div className="d-flex flex-row justify-content-center" style={{margin:"25px 10%", bottom:"52px", position:"absolute"}}>
                    <img src={footer} alt={"footer"} style={{height:"auto", width:"50%", marginLeft:"0"}} /> 
                </div>                  */}
                
            </div>
        )
    }
}

export default withDimension(Body);