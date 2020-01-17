import React, {Component} from 'react';
import moment from "moment"
import firebase from "firebase"
import DigitHolder from "./DigitHolder"
import { Z_FIXED } from 'zlib';


class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            startDate : Date.now(),
            endDate : Date.now() + 1000000,
            diffDuration : 0,
            targetDateValue: null
        }
        this.db = firebase.database();
    }

    componentDidMount(){
        const targetDate = this.db.ref("targetDate")
        targetDate.on('value', (snapshot) => {
            const targetDate = snapshot.val();
                                   
            this.setState({targetDateValue: targetDate})
        })

        this.targetTimeInterval()
    }

    targetTimeInterval = () => {
        this.myInterval = setInterval(()=>{
            const hedefdate = moment(this.state.targetDateValue);     
            const currentDate = moment(new Date());
            const diff = hedefdate.diff(currentDate)
            const diffDuration = moment.duration(diff);                        
            this.setState({diffDuration: diffDuration._data})
        }, 1000)  
    }

    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
    
    getDigits = (data) => {
        let value1 = 0
        let value2 = 0
        
        if(data>=10){
            value1 = Math.floor(data/10);
            value2 = data-value1*10;
        } else {
            value2 = Math.round(data)
        }
        
        return {"val1": 0, "val2": 0}
    }

    render(){
        const {diffDuration} = this.state
        
        let monthVal = {"val1":0, "val2":0}
        let firstVal = {"val1":0, "val2":0}  
        let secondVal = {"val1":0, "val2":0}
        let thirdVal = {"val1":0, "val2":0}
        let fourthVal = {"val1":0, "val2":0}
        
        if(diffDuration){
            monthVal = this.getDigits(diffDuration.months)
            firstVal  = this.getDigits(diffDuration.minutes)
            secondVal = this.getDigits(diffDuration.hours)
            thirdVal  = this.getDigits(diffDuration.days)
            fourthVal  = this.getDigits(diffDuration.seconds)
        }   

        return(
            <div>
                <div className="d-flex flex-row justify-content-between col-12"
                    style={{                                               
                        background: 'linear-gradient(-180deg, #171617 0%, black 57.15%, #3A3B3A 100%)',
                        // 'linear-gradient(180deg, black 0%, rgba(9,9,121,1) 99%, rgba(0,212,255,1) 100%)',                        
                        marginLeft:"240px",
                        marginTop:"25px",
                        width:"600px",
                        height:"120px",
                        borderRadius: "5px",
                        border: "5px solid #F15A29",
                        paddingRight:"15px"                        
                    }}
                >                       
                    <DigitHolder digit1={monthVal.val1} digit2={monthVal.val2} text={"Ay"} />
                    <DigitHolder digit1={thirdVal.val1} digit2={thirdVal.val2} text={"Gün"} />
                    <DigitHolder digit1={secondVal.val1} digit2={secondVal.val2} text={"Saat"} />                    
                    <DigitHolder digit1={firstVal.val1} digit2={firstVal.val2} text={"Dakika"} />  
                    <DigitHolder digit1={fourthVal.val1} digit2={fourthVal.val2} text={"Saniye"} />
                </div>
            </div>
            
        )
    }
}

export default Timer;