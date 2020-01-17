import React, {Component} from 'react';
// import "./Speedometer.css";
import hand from '../../assets/akrep_new.png';
import { ENETUNREACH } from 'constants';

class Speedometer extends Component{   
    constructor(props){
        super(props);
        this.state = {
            currentDegree : 0,
            currentMeter : 0,
            inchValue : 0
        }
    }

    componentWillReceiveProps(nextProps){
        // const {currentDegree, currentMeter} = this.state
        // const {meter, middle, direction, min, max} = this.state

        // if(nextProps.meter != this.props.meter){
        //     console.log('[ADDED VAL]', nextProps);
        // }        
    }

    changeValueHandler = () => {
        const {currentDegree, currentMeter, inchValue} = this.state
        const {meter, middle, direction, min, max} = this.props

        let degree = 0;
        if(meter && currentMeter != meter){
            if(direction == "possitive"){                
                degree = middle > meter ? -1*(120/(middle-min))*(middle-meter) : (120/(max-middle))*(meter-middle)
            } else {
                degree = middle < meter ? 1*(120/(middle-min))*(middle-meter) : -1*(120/(max-middle))*(meter-middle)
            }

            const incrementValue = inchValue == 0 ? (currentDegree-degree) / 2000 : inchValue
            const addedValue = currentDegree - incrementValue
            console.log('[ADDED VAL]', currentDegree, addedValue, meter, incrementValue);
            this.speedometerInterval = setInterval(()=>{                                      
                this.setState({currentMeter:meter, currentDegree: addedValue, inchValue: incrementValue})
            }, 1)
        }    
    }


    render(){
        const {meter, middle, direction, texts, min, max} = this.props
        const {currentDegree,inchValue} = this.state
        
        // this.changeValueHandler()
        // console.log('[CURRENT DEG]',currentDegree, inchValue);

        // let degree = 0;
        // if(direction == "possitive"){                
        //     degree = middle > meter ? -1*(120/(middle-min))*(middle-meter) : (120/(max-middle))*(meter-middle)
        // } else {
        //     degree = middle < meter ? 1*(120/(middle-min))*(middle-meter) : -1*(120/(max-middle))*(meter-middle)
        // }
        
        const meterTrasnform = "translate(33.17 37.42) rotate("+ currentDegree +" 474.5 496.47)"
        return(
            <div    className="d-flex flex-column justify-content-center align-items-center"
                    style={{margin:"100px 15px", borderRadius: "15px"}}>
                <div>   
                <div style={{position:"relative", display:"inline-block"}}>

                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        height="300px" width="300px" viewBox="0 0 1015.34 1035.42">
                        <defs>
                            <style>
                                {
                                    `.cls-1 {
                                        fill: url(#radial-gradient);
                                    }
        
                                    .cls-2 {
                                        fill: url(#radial-gradient-2);
                                    }
        
                                    .cls-3 {
                                        fill: none;
                                    }
        
                                    .cls-4 {
                                        clip-path: url(#clip-path);
                                    }
        
                                    .cls-5 {
                                        fill: #fdbb16;
                                    }
        
                                    .cls-6 {
                                        fill: #37b34a;
                                    }
        
                                    .cls-7 {
                                        fill: #ed2924;
                                    }
        
                                    .cls-8 {
                                        fill: #ec1c24;
                                    }
        
                                    .cls-9 {
                                        fill: #ed2d24;
                                    }
        
                                    .cls-10 {
                                        fill: #fff;
                                    }
        
                                    .cls-11 {
                                        fill: url(#linear-gradient);
                                    }
        
                                    .cls-12 {
                                        fill: url(#linear-gradient-2);
                                    }
        
                                    .cls-13 {
                                        fill: #f7931e;
                                    }
        
                                    .cls-14 {
                                        mask: url(#mask);
                                    }
        
                                    .cls-15 {
                                        fill: #1a1a1a;
                                    }
        
                                    .cls-16 {
                                        stroke: #fff;
                                        stroke-miterlimit: 10;
                                        stroke-width: 3.12px;
                                    }
        
                                    .cls-17 {
                                        fill: url(#linear-gradient-3);
                                    }
        
                                    .cls-18 {
                                        fill: url(#linear-gradient-4);
                                    }
        
                                    .cls-19 {
                                        mask: url(#mask-2);
                                    }
        
                                    .cls-20 {
                                        fill: url(#linear-gradient-5);
                                    }
                                    `
                                }
                            
                            </style>
                            <radialGradient id="radial-gradient" cx="350.74" cy="383.1" r="75.95" gradientTransform="matrix(1.35, 0.12, -0.11, 1.39, 46.13, -79.26)" gradientUnits="userSpaceOnUse">
                            <stop offset="0.66" stopColor="#c2c2c2"/>
                            <stop offset="0.95"/>
                            </radialGradient>
                            <radialGradient id="radial-gradient-2" cx="494.93" cy="226.79" r="62.8" gradientTransform="matrix(1.18, -0.69, 0.67, 1.22, -259.73, 557.81)" gradientUnits="userSpaceOnUse">
                            <stop offset="0.94"/>
                            <stop offset="0.96" stopColor="#4d4d4d"/>
                            <stop offset="0.98"/>
                            </radialGradient>
                            <clipPath id="clip-path" transform="translate(33.17 37.42)">
                            <ellipse className="cls-3" cx="474.5" cy="493.23" rx="428.75" ry="443.84"/>
                            </clipPath>
                            <linearGradient id="linear-gradient" x1="1291.45" y1="998" x2="1291.45" y2="606.77" gradientTransform="matrix(-1, 0, 0, 1, 1799.12, 37.42)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#fff"/>
                            <stop offset="1" stopColor="#d2d2d2"/>
                            </linearGradient>
                            <linearGradient id="linear-gradient-2" x1="1291.45" y1="991.35" x2="1291.45" y2="613.41" gradientTransform="matrix(-1, 0, 0, 1, 1799.12, 37.42)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#e9e9e9"/>
                            <stop offset="1" stopColor="#b3b3b4"/>
                            </linearGradient>
                            <mask id="mask" x="405.02" y="427.62" width="205.31" height="212.53" maskUnits="userSpaceOnUse">
                            <g transform="translate(33.17 37.42)">
                                <ellipse className="cls-1" cx="474.5" cy="496.47" rx="102.65" ry="106.26"/>
                            </g>
                            </mask>
                            <linearGradient id="linear-gradient-3" x1="533.69" y1="501.2" x2="531.84" y2="317.52" gradientTransform="translate(-192.17 398.74) rotate(-29.57)" gradientUnits="userSpaceOnUse">
                            <stop offset="0.01" stopColor="#17181c"/>
                            <stop offset="0.38" stopColor="#292a30"/>
                            <stop offset="1" stopColor="#4e4f59"/>
                            </linearGradient>
                            <linearGradient id="linear-gradient-4" x1="522.91" y1="333.66" x2="544.45" y2="499.53" gradientTransform="translate(-192.17 398.74) rotate(-29.57)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#56575e"/>
                            <stop offset="1" stopColor="#232428"/>
                            </linearGradient>
                            <mask id="mask-2" x="421.62" y="441.6" width="169.81" height="175.79" maskUnits="userSpaceOnUse">
                            <g transform="translate(33.17 37.42)">
                                <path className="cls-2" d="M515.25,568.5a82.06,82.06,0,0,1-64.47,8.27,83.46,83.46,0,0,1-29.15-15,86.72,86.72,0,0,1-22.1-26.34A89.41,89.41,0,0,1,389,502.29a90.64,90.64,0,0,1,2.5-33.59A88.92,88.92,0,0,1,406,438.53a85.38,85.38,0,0,1,25.45-22.88,82,82,0,0,1,64.47-8.28,83.44,83.44,0,0,1,29.14,15,86.34,86.34,0,0,1,22.1,26.34,89.31,89.31,0,0,1,10.51,33.15,90.66,90.66,0,0,1-2.51,33.59,88.73,88.73,0,0,1-14.49,30.17A85.35,85.35,0,0,1,515.25,568.5ZM434.94,422a78.25,78.25,0,0,0-23.33,21,81.73,81.73,0,0,0-13.29,27.66,83.2,83.2,0,0,0-2.3,30.81,82.17,82.17,0,0,0,9.64,30.4A79.36,79.36,0,0,0,425.92,556a76.79,76.79,0,0,0,26.73,13.76,75.21,75.21,0,0,0,59.12-7.6,78,78,0,0,0,23.33-21,81.36,81.36,0,0,0,13.29-27.66,83,83,0,0,0,2.3-30.81,81.86,81.86,0,0,0-9.63-30.39,79.31,79.31,0,0,0-20.27-24.16,76.46,76.46,0,0,0-26.72-13.75A75.29,75.29,0,0,0,434.94,422Z"/>
                            </g>
                            </mask>
                            <linearGradient id="linear-gradient-5" x1="532.77" y1="496.49" x2="532.77" y2="322.68" gradientTransform="translate(-192.17 398.74) rotate(-29.57)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#0c0d0d"/>
                            <stop offset="0.13" stopColor="#171819"/>
                            <stop offset="0.35" stopColor="#343638"/>
                            <stop offset="0.66" stopColor="#62656c"/>
                            <stop offset="1" stopColor="#9fa3ae"/>
                            </linearGradient>
                        </defs>
                        <title>new_speed</title>
                        <g>
                            <g className="cls-4">
                            <g>
                                <path className="cls-5" d="M802.07,292.34l112.15-67C869.64,145.57,805.41,79.07,728.37,32.93L663.62,149A387,387,0,0,1,802.07,292.34Z" transform="translate(33.17 37.42)"/>
                                <path className="cls-6" d="M852.69,488.12H982.17c0-95.74-24.74-185.49-67.95-262.8l-112.15,67A400.3,400.3,0,0,1,852.69,488.12Z" transform="translate(33.17 37.42)"/>
                                <path className="cls-5" d="M474.5,96.62A366.58,366.58,0,0,1,663.62,149l64.75-116.1A492.2,492.2,0,0,0,474.5-37.42v134Z" transform="translate(33.17 37.42)"/>
                                <path className="cls-6" d="M852.69,488.12A400.27,400.27,0,0,1,802.07,683.9l112.15,67c43.21-77.31,67.95-167.07,67.95-262.81Z" transform="translate(33.17 37.42)"/>
                                <path className="cls-5" d="M474.5,96.62v-134A492.2,492.2,0,0,0,220.63,32.93L285.38,149A366.58,366.58,0,0,1,474.5,96.62Z" transform="translate(33.17 37.42)"/>
                                <path className="cls-7" d="M96.31,488.12H-33.17c0,95.74,24.74,185.5,68,262.81l112.15-67A400.27,400.27,0,0,1,96.31,488.12Z" transform="translate(33.17 37.42)"/>
                                <path className="cls-8" d="M285.38,149,220.63,32.93c-77,46.14-141.27,112.64-185.85,192.39l112.15,67A387,387,0,0,1,285.38,149Z" transform="translate(33.17 37.42)"/>
                                <path className="cls-9" d="M146.93,292.34l-112.15-67c-43.21,77.31-67.95,167.06-67.95,262.8H96.31A400.3,400.3,0,0,1,146.93,292.34Z" transform="translate(33.17 37.42)"/>
                            </g>
                            </g>
                            <g>
                            <rect className="cls-10" x="503.22" y="37.57" width="8.91" height="67.44"/>
                            <polygon className="cls-10" points="371.85 128.99 363.48 132.15 341.2 68.77 349.57 65.61 371.85 128.99"/>
                            <polygon className="cls-10" points="247.96 201.19 241.13 207.12 199.26 155.45 206.08 149.52 247.96 201.19"/>
                            <polygon className="cls-10" points="155.39 312.9 150.94 320.88 94.52 287.16 98.97 279.17 155.39 312.9"/>
                            <polygon className="cls-10" points="920.83 770.38 916.37 778.36 859.95 744.64 864.41 736.65 920.83 770.38"/>
                            <polygon className="cls-10" points="105.32 450.64 103.77 459.73 39.61 448.01 41.16 438.93 105.32 450.64"/>
                            <polygon className="cls-10" points="975.74 609.52 974.19 618.61 910.03 606.89 911.58 597.81 975.74 609.52"/>
                            <polygon className="cls-10" points="103.77 597.81 105.32 606.89 41.16 618.61 39.61 609.52 103.77 597.81"/>
                            <polygon className="cls-10" points="974.19 438.93 975.74 448.01 911.58 459.73 910.03 450.64 974.19 438.93"/>
                            <polygon className="cls-10" points="150.94 736.65 155.39 744.64 98.97 778.36 94.52 770.38 150.94 736.65"/>
                            <polygon className="cls-10" points="916.37 279.17 920.83 287.16 864.41 320.88 859.95 312.9 916.37 279.17"/>
                            <polygon className="cls-10" points="809.26 149.52 816.09 155.45 774.21 207.12 767.38 201.19 809.26 149.52"/>
                            <polygon className="cls-10" points="665.77 65.61 674.15 68.77 651.86 132.15 643.49 128.99 665.77 65.61"/>
                            <polygon className="cls-10" points="437.96 96.88 430.49 98.25 421.54 45.71 429.01 44.35 437.96 96.88"/>
                            <polygon className="cls-10" points="299.47 147.61 292.9 151.54 267.14 105.34 273.7 101.41 299.47 147.61"/>
                            <polygon className="cls-10" points="186.1 244.31 181.22 250.33 141.75 216.04 146.62 210.02 186.1 244.31"/>
                            <polygon className="cls-10" points="111.51 375.32 108.92 382.7 60.49 364.46 63.09 357.08 111.51 375.32"/>
                            <polygon className="cls-10" points="954.85 693.08 952.26 700.46 903.84 682.21 906.43 674.84 954.85 693.08"/>
                            <rect className="cls-10" x="33.17" y="524.84" width="51.53" height="7.85"/>
                            <rect className="cls-10" x="930.64" y="524.84" width="51.53" height="7.85"/>
                            <polygon className="cls-10" points="108.92 674.84 111.51 682.21 63.09 700.46 60.49 693.08 108.92 674.84"/>
                            <polygon className="cls-10" points="952.26 357.08 954.85 364.46 906.43 382.7 903.84 375.32 952.26 357.08"/>
                            <polygon className="cls-10" points="868.72 210.02 873.6 216.04 834.12 250.33 829.25 244.31 868.72 210.02"/>
                            <polygon className="cls-10" points="741.64 101.41 748.21 105.34 722.44 151.54 715.87 147.61 741.64 101.41"/>
                            <polygon className="cls-10" points="586.34 44.35 593.8 45.71 584.85 98.25 577.39 96.88 586.34 44.35"/>
                            <polygon className="cls-10" points="471.57 72.81 466.74 73.25 463.9 39.66 468.73 39.22 471.57 72.81"/>
                            <polygon className="cls-10" points="395.64 86.23 390.95 87.53 382.52 54.95 387.2 53.66 395.64 86.23"/>
                            <polygon className="cls-10" points="323.11 113.09 318.71 115.21 304.94 84.65 309.34 82.53 323.11 113.09"/>
                            <polygon className="cls-10" points="256.18 152.58 252.21 155.46 233.52 127.84 237.5 124.96 256.18 152.58"/>
                            <polygon className="cls-10" points="196.9 203.51 193.47 207.06 170.44 183.21 173.87 179.66 196.9 203.51"/>
                            <polygon className="cls-10" points="147.06 264.31 144.28 268.43 117.59 249.08 120.38 244.97 147.06 264.31"/>
                            <polygon className="cls-10" points="108.18 333.15 106.13 337.7 76.6 323.45 78.65 318.9 108.18 333.15"/>
                            <polygon className="cls-10" points="938.74 734.08 936.69 738.63 907.17 724.38 909.22 719.83 938.74 734.08"/>
                            <polygon className="cls-10" points="81.43 407.94 80.18 412.79 48.71 404.06 49.97 399.21 81.43 407.94"/>
                            <polygon className="cls-10" points="966.63 653.48 965.38 658.33 933.91 649.6 935.17 644.75 966.63 653.48"/>
                            <polygon className="cls-10" points="67.64 486.39 67.22 491.4 34.77 488.46 35.19 483.46 67.64 486.39"/>
                            <polygon className="cls-10" points="980.58 569.08 980.15 574.08 947.7 571.14 948.13 566.14 980.58 569.08"/>
                            <polygon className="cls-10" points="67.22 566.14 67.64 571.14 35.19 574.08 34.77 569.08 67.22 566.14"/>
                            <polygon className="cls-10" points="980.15 483.46 980.58 488.46 948.13 491.4 947.7 486.39 980.15 483.46"/>
                            <polygon className="cls-10" points="80.18 644.75 81.43 649.6 49.97 658.33 48.71 653.48 80.18 644.75"/>
                            <polygon className="cls-10" points="965.38 399.21 966.63 404.06 935.17 412.79 933.91 407.94 965.38 399.21"/>
                            <polygon className="cls-10" points="106.13 719.83 108.18 724.38 78.65 738.63 76.6 734.08 106.13 719.83"/>
                            <polygon className="cls-10" points="936.69 318.9 938.74 323.45 909.22 337.7 907.17 333.15 936.69 318.9"/>
                            <polygon className="cls-10" points="894.97 244.97 897.75 249.08 871.07 268.43 868.28 264.31 894.97 244.97"/>
                            <polygon className="cls-10" points="841.48 179.66 844.91 183.21 821.88 207.06 818.45 203.51 841.48 179.66"/>
                            <polygon className="cls-10" points="777.85 124.96 781.82 127.84 763.14 155.46 759.16 152.58 777.85 124.96"/>
                            <polygon className="cls-10" points="706.01 82.53 710.4 84.65 696.64 115.21 692.24 113.09 706.01 82.53"/>
                            <polygon className="cls-10" points="628.14 53.66 632.83 54.95 624.39 87.53 619.71 86.23 628.14 53.66"/>
                            <polygon className="cls-10" points="546.61 39.22 551.44 39.66 548.61 73.25 543.77 72.81 546.61 39.22"/>
                            </g>
                            <g>
                            <ellipse className="cls-11" cx="507.67" cy="839.8" rx="188.97" ry="195.62"/>
                            <ellipse className="cls-12" cx="507.67" cy="839.8" rx="182.54" ry="188.97"/>
                            </g>                            
                            
                            {
                                texts.map((each)=>{
                                    return <text key={each.key} x={each.x} y={each.y} fill={each.fill} style={{fontSize:`${each.fontSize}`, fontWeight:`${each.fontWeight}`}}>{each.name}</text>
                                })
                            }
                            <polygon points="153,40 142,160 164,160" style={{fill:"#f7931e"}} >
                                <animateTransform attributeName="transform"
                                        attributeType="XML"
                                        type="rotate"
                                        from="0 153 160"
                                        to="-120 153 160"
                                        dur="2s"
                                        fill="freeze"
                                        repeatCount="1"/> 
                            </polygon>

                            
                            <g>
                            <g className="cls-14">
                                <ellipse className="cls-15" cx="507.67" cy="533.89" rx="102.52" ry="106.13"/>
                            </g>
                            <path className="cls-16" d="M516,569.92c-40.2,23.61-91.45,9-114.26-32.64S393.11,442.61,433.3,419s91.45-9,114.26,32.64S556.22,546.31,516,569.92Z" transform="translate(33.17 37.42)"/>
                            <path className="cls-17" d="M517.41,572.45a86.69,86.69,0,0,1-33.68,11.43,85.8,85.8,0,0,1-34.12-2.73A87.85,87.85,0,0,1,419,565.38a91,91,0,0,1-23.24-27.7,94.1,94.1,0,0,1-11.05-34.87,95.23,95.23,0,0,1,2.63-35.32,93.61,93.61,0,0,1,15.24-31.73A89.72,89.72,0,0,1,429.3,411.7,86.3,86.3,0,0,1,497.11,403a87.72,87.72,0,0,1,30.64,15.77A90.93,90.93,0,0,1,551,446.47a94.17,94.17,0,0,1,11,34.86,95.29,95.29,0,0,1-2.64,35.33,93.46,93.46,0,0,1-15.24,31.72A89.63,89.63,0,0,1,517.41,572.45Z" transform="translate(33.17 37.42)"/>
                            <path className="cls-18" d="M513.59,565.47a78.74,78.74,0,0,1-61.92,7.95,80.28,80.28,0,0,1-28-14.4,83.22,83.22,0,0,1-21.23-25.3,86,86,0,0,1-10.09-31.84,86.93,86.93,0,0,1,2.41-32.26,85.37,85.37,0,0,1,13.92-29,82,82,0,0,1,24.44-22,78.85,78.85,0,0,1,61.92-7.95,80.3,80.3,0,0,1,28,14.41,83,83,0,0,1,21.22,25.29,86,86,0,0,1,10.09,31.84,86.92,86.92,0,0,1-2.41,32.26,85.45,85.45,0,0,1-13.91,29A82,82,0,0,1,513.59,565.47Z" transform="translate(33.17 37.42)"/>
                            <g className="cls-19">
                                <path className="cls-20" d="M524.94,422.56a83.41,83.41,0,0,0-29.06-15,81.82,81.82,0,0,0-64.3,8.26,85.12,85.12,0,0,0-25.37,22.81,88.72,88.72,0,0,0-14.45,30.09,90.17,90.17,0,0,0-2.5,33.5,89.12,89.12,0,0,0,10.48,33.06,86.19,86.19,0,0,0,22,26.26,83.29,83.29,0,0,0,29.07,15,81.79,81.79,0,0,0,64.29-8.26,84.86,84.86,0,0,0,25.37-22.81A88.35,88.35,0,0,0,555,515.38a90.36,90.36,0,0,0,2.51-33.5A89.2,89.2,0,0,0,547,448.83,86.26,86.26,0,0,0,524.94,422.56Zm26,60.11a83.45,83.45,0,0,1-2.31,30.9,81.79,81.79,0,0,1-13.33,27.75,78.48,78.48,0,0,1-23.4,21,75.49,75.49,0,0,1-59.3,7.61,76.81,76.81,0,0,1-26.81-13.8A79.73,79.73,0,0,1,405.45,532a83.17,83.17,0,0,1,6-89.14,78.46,78.46,0,0,1,23.4-21,75.42,75.42,0,0,1,59.3-7.62,76.85,76.85,0,0,1,26.8,13.8,79.37,79.37,0,0,1,20.33,24.23A82.18,82.18,0,0,1,550.93,482.67Z" transform="translate(33.17 37.42)"/>
                            </g>
                            </g>
                        </g>
                        </svg>


                </div>             
                
                
                </div>
            </div>
        )
    }
}

export default Speedometer;