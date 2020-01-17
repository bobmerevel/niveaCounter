import React, {Component} from 'react';
// import "./Speedometer.css";
import hand from '../../assets/akrep_new.png';
import { ENETUNREACH } from 'constants';
import "./Speedometer.css"

class Speedometer extends Component{   
    constructor(props){
        super(props);
        this.state = {
            currentDegree : 0,
            currentMeter : 0,
            inchValue : 0
        }
    }

    render(){
        const {name, meter, middle, direction, texts, min, max} = this.props
        
        let degree = 0;
        let meterTrasnform = null
        let testDgree = "rotate(0)"
        if(meter){
            if(direction == "possitive"){                
                degree = middle > meter ? -1*(120/(middle-min))*(middle-meter) : (120/(max-middle))*(meter-middle)
            } else {
                degree = middle < meter ? 1*(120/(middle-min))*(middle-meter) : -1*(120/(max-middle))*(meter-middle)
            }

            testDgree = "rotate("+degree+"deg)"
        }
        
        return(
            <div    className="d-flex flex-column justify-content-center align-items-center"
                    style={{margin:"100px 15px", borderRadius: "15px"}}>
                <div>   
                    <div style={{position:"relative", display:"inline-block"}}>

                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 828.88 774.81" width="300" height="300">
                        <defs>
                            <style>
                            {`.cls-1 {
                                    clip-path: url(#clip-path);
                                }

                                .cls-13, .cls-2, .cls-25 {
                                    fill: none;
                                }

                                .cls-3 {
                                    isolation: isolate;
                                }

                                .cls-4 {
                                    clip-path: url(#clip-path-2);
                                }

                                .cls-5 {
                                    clip-path: url(#clip-path-3);
                                }

                                .cls-6 {
                                    fill: url(#radial-gradient);
                                }

                                .cls-7 {
                                    clip-path: url(#clip-path-4);
                                }

                                .cls-8 {
                                    clip-path: url(#clip-path-5);
                                }

                                .cls-9 {
                                    clip-path: url(#clip-path-6);
                                }

                                .cls-10 {
                                    fill: url(#radial-gradient-2);
                                }

                                .cls-11 {
                                    clip-path: url(#clip-path-7);
                                }

                                .cls-12 {
                                    fill: url(#linear-gradient);
                                }

                                .cls-13 {
                                    stroke: #f26522;
                                    stroke-width: 12.67px;
                                }

                                .cls-13, .cls-25 {
                                    stroke-miterlimit: 10;
                                }

                                .cls-14 {
                                    clip-path: url(#clip-path-8);
                                }

                                .cls-15 {
                                    fill: #fdbc17;
                                }

                                .cls-16 {
                                    fill: #37b44a;
                                }

                                .cls-17 {
                                    fill: #ee2a24;
                                }

                                .cls-18 {
                                    fill: #ed1d24;
                                }

                                .cls-19 {
                                    fill: #ee2e24;
                                }

                                .cls-20 {
                                    fill: #fff;
                                }

                                .cls-21 {
                                    mask: url(#mask);
                                }

                                .cls-22 {
                                    clip-path: url(#clip-path-9);
                                }

                                .cls-23 {
                                    fill: #414042;
                                }

                                .cls-24 {
                                    fill: #010101;
                                }

                                .cls-25 {
                                    stroke: #fff;
                                    stroke-width: 2.64px;
                                }

                                .cls-26 {
                                    clip-path: url(#clip-path-10);
                                }

                                .cls-27 {
                                    fill: url(#linear-gradient-2);
                                }

                                .cls-28 {
                                    mask: url(#mask-2);
                                }

                                .cls-29 {
                                    clip-path: url(#clip-path-11);
                                }

                                .cls-30 {
                                    clip-path: url(#clip-path-12);
                                }

                                .cls-31 {
                                    fill: url(#linear-gradient-3);
                                }`}
                            </style>
                            <clipPath id="clip-path">
                            <rect className="cls-2" x="-83.01" y="-60.03" width="167.39" height="167.39"/>
                            </clipPath>
                            <clipPath id="clip-path-2">
                            <rect className="cls-2" x="-86.63" y="-63.65" width="174.63" height="174.63"/>
                            </clipPath>
                            <clipPath id="clip-path-3">
                            <path className="cls-2" d="M-6.43,107.15a83.8,83.8,0,1,1,14.24-167A83.89,83.89,0,0,1,84.18,30.78,83.88,83.88,0,0,1-6.43,107.15"/>
                            </clipPath>
                            <radialGradient id="radial-gradient" cx="-568.57" cy="3268.4" r="1" gradientTransform="matrix(0, 83.8, 83.8, 0, -273883.95, 47668.49)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#c9cacc"/>
                            <stop offset="0.66" stopColor="#c9cacc"/>
                            <stop offset="0.74" stopColor="#8d8e8f"/>
                            <stop offset="0.84" stopColor="#424243"/>
                            <stop offset="0.92" stopColor="#131313"/>
                            <stop offset="0.95" stopColor="#010101"/>
                            <stop offset="1" stopColor="#010101"/>
                            </radialGradient>
                            <clipPath id="clip-path-4">
                            <rect className="cls-2" x="-69.37" y="-48.92" width="138.24" height="138.24"/>
                            </clipPath>
                            <clipPath id="clip-path-5">
                            <rect className="cls-2" x="-69.93" y="-49.49" width="139.38" height="139.38"/>
                            </clipPath>
                            <clipPath id="clip-path-6">
                            <path className="cls-2" d="M34,80.46A68.76,68.76,0,0,1,7.81,89,68.92,68.92,0,0,1-18.68,87,69,69,0,0,1-42.47,75.16a68.87,68.87,0,0,1-18-20.77,68.76,68.76,0,0,1-8.58-26.14A68.92,68.92,0,0,1-67,1.76,68.8,68.8,0,0,1-55.21-22a68.87,68.87,0,0,1,20.77-18A68.76,68.76,0,0,1-8.3-48.65a68.92,68.92,0,0,1,26.49,2A68.8,68.8,0,0,1,42-34.77,68.87,68.87,0,0,1,60-14,68.76,68.76,0,0,1,68.6,12.14a68.92,68.92,0,0,1-2,26.49A68.8,68.8,0,0,1,54.72,62.42,68.87,68.87,0,0,1,34,80.46M-31.6-35.07a63,63,0,0,0-19,16.54A63.46,63.46,0,0,0-61.5,3.29a63.28,63.28,0,0,0-1.88,24.29,63.16,63.16,0,0,0,7.87,24A63,63,0,0,0-39,70.6,63.46,63.46,0,0,0-17.15,81.45,63.48,63.48,0,0,0,7.14,83.33a63.16,63.16,0,0,0,24-7.87,63.12,63.12,0,0,0,19-16.54A63.46,63.46,0,0,0,61,37.1a63.28,63.28,0,0,0,1.88-24.29,63.1,63.1,0,0,0-7.87-24,63,63,0,0,0-16.54-19A63.46,63.46,0,0,0,16.66-41.06,63.28,63.28,0,0,0-7.63-42.94a63.16,63.16,0,0,0-24,7.87"/>
                            </clipPath>
                            <radialGradient id="radial-gradient-2" cx="-564.2" cy="3268.08" r="1" gradientTransform="matrix(69.29, 0, 0, -69.29, 39094.95, 226478.32)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#010101"/>
                            <stop offset="0.94" stopColor="#010101"/>
                            <stop offset="0.94" stopColor="#19191a"/>
                            <stop offset="0.95" stopColor="#565659"/>
                            <stop offset="0.96" stopColor="#6d6e71"/>
                            <stop offset="0.96" stopColor="#545457"/>
                            <stop offset="0.98" stopColor="#010101"/>
                            <stop offset="1" stopColor="#010101"/>
                            </radialGradient>
                            <clipPath id="clip-path-7" transform="translate(414.69 400.74)">
                            <path className="cls-2" d="M-184.19,183.56c0,101.72,82.45,184.18,184.17,184.18A184.18,184.18,0,0,0,184.16,183.56Z"/>
                            </clipPath>
                            <linearGradient id="linear-gradient" x1="-568.78" y1="3263.44" x2="-567.78" y2="3263.44" gradientTransform="matrix(368.35, 0, 0, -368.35, 209739.59, 1202762)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#eaeaea"/>
                            <stop offset="0.47" stopColor="#cfcfcf"/>
                            <stop offset="1" stopColor="#b5b5b5"/>
                            </linearGradient>
                            <clipPath id="clip-path-8" transform="translate(414.69 400.74)">
                            <path className="cls-2" d="M-350.26,17.73c0,193.3,156.71,350,350,350s350-156.71,350-350-156.71-350-350-350-350,156.7-350,350"/>
                            </clipPath>
                            <mask id="mask" x="313.16" y="322.19" width="204.42" height="204.42" maskUnits="userSpaceOnUse">
                            <g transform="translate(414.69 400.74)">
                                <g className="cls-1">
                                <rect x="-86.63" y="-63.66" width="174.63" height="174.63"/>
                                <g className="cls-3">
                                    <g className="cls-4">
                                    <g className="cls-5">
                                        <rect className="cls-6" x="-93.84" y="-70.87" width="189.05" height="189.05" transform="translate(-22.94 22.34) rotate(-85.13)"/>
                                    </g>
                                    </g>
                                </g>
                                </g>
                            </g>
                            </mask>
                            <clipPath id="clip-path-9" transform="translate(414.69 400.74)">
                            <rect className="cls-2" x="-83.01" y="-60.03" width="167.39" height="167.39"/>
                            </clipPath>
                            <clipPath id="clip-path-10" transform="translate(414.69 400.74)">
                            <path className="cls-2" d="M-8.71-52.21a72.39,72.39,0,0,0-27.5,9A72.31,72.31,0,0,0-58-24.21,72.35,72.35,0,0,0-70.49.81a72.59,72.59,0,0,0-2.16,27.85,72.56,72.56,0,0,0,9,27.5A72.31,72.31,0,0,0-44.65,78a72.53,72.53,0,0,0,25,12.44A72.59,72.59,0,0,0,8.22,92.6a72.56,72.56,0,0,0,27.5-9,72.44,72.44,0,0,0,21.84-19A72.44,72.44,0,0,0,70,39.58a72.64,72.64,0,0,0,2.16-27.86,72.57,72.57,0,0,0-9-27.49,72.46,72.46,0,0,0-19-21.85,72.7,72.7,0,0,0-25-12.44A72.83,72.83,0,0,0-.27-52.7a72.38,72.38,0,0,0-8.44.49"/>
                            </clipPath>
                            <linearGradient id="linear-gradient-2" x1="-566.14" y1="3259.69" x2="-565.14" y2="3259.69" gradientTransform="matrix(0, -146.1, -146.1, 0, 476241.52, -82619.87)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#17181c"/>
                            <stop offset="0.01" stopColor="#17181c"/>
                            <stop offset="0.52" stopColor="#32333a"/>
                            <stop offset="1" stopColor="#4e505a"/>
                            </linearGradient>
                            <mask id="mask-2" x="284.57" y="291.07" width="259.74" height="259.74" maskUnits="userSpaceOnUse">
                            <g transform="translate(414.69 400.74)">
                                <g className="cls-7">
                                <rect x="-69.93" y="-49.49" width="139.38" height="139.38"/>
                                <g className="cls-3">
                                    <g className="cls-8">
                                    <g className="cls-9">
                                        <rect className="cls-10" x="-95.51" y="-75.07" width="190.53" height="190.53" transform="translate(-10 2.51) rotate(-29.57)"/>
                                    </g>
                                    </g>
                                </g>
                                </g>
                            </g>
                            </mask>
                            <clipPath id="clip-path-11" transform="translate(414.69 400.74)">
                            <rect className="cls-2" x="-69.37" y="-48.92" width="138.24" height="138.24"/>
                            </clipPath>
                            <clipPath id="clip-path-12" transform="translate(414.69 400.74)">
                            <path className="cls-2" d="M41.87-34.62a68.9,68.9,0,0,0-23.73-11.8,69,69,0,0,0-26.42-2,68.79,68.79,0,0,0-26.07,8.55,68.74,68.74,0,0,0-20.71,18A68.9,68.9,0,0,0-66.86,1.81a69,69,0,0,0-2,26.42A68.79,68.79,0,0,0-60.35,54.3,68.75,68.75,0,0,0-42.35,75a68.76,68.76,0,0,0,23.72,11.8,69.16,69.16,0,0,0,26.42,2,68.63,68.63,0,0,0,26.07-8.56,68.6,68.6,0,0,0,20.71-18,68.85,68.85,0,0,0,11.8-23.72,69,69,0,0,0,2-26.42,68.79,68.79,0,0,0-8.55-26.07,68.62,68.62,0,0,0-18-20.71m21.21,47.4a63.48,63.48,0,0,1-1.89,24.37A63.37,63.37,0,0,1,50.31,59a63.22,63.22,0,0,1-19.1,16.6,63.57,63.57,0,0,1-24,7.89A63.48,63.48,0,0,1-17.2,81.63,63.28,63.28,0,0,1-39.08,70.75a63.34,63.34,0,0,1-16.6-19.1,63.39,63.39,0,0,1-7.89-24A63.45,63.45,0,0,1-61.68,3.24,63.41,63.41,0,0,1-50.8-18.65,63.33,63.33,0,0,1-31.7-35.24a63.4,63.4,0,0,1,24-7.89,63.48,63.48,0,0,1,24.37,1.89A63.43,63.43,0,0,1,38.59-30.37a63.26,63.26,0,0,1,16.6,19.11,63.4,63.4,0,0,1,7.89,24"/>
                            </clipPath>
                            <linearGradient id="linear-gradient-3" x1="-565.95" y1="3259.59" x2="-564.95" y2="3259.59" gradientTransform="matrix(0, -138.2, -138.2, 0, 450488.84, -78127.33)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#0d0e0e"/>
                            <stop offset="0.12" stopColor="#141516"/>
                            <stop offset="0.3" stopColor="#282a2c"/>
                            <stop offset="0.53" stopColor="#494b4f"/>
                            <stop offset="0.79" stopColor="#767980"/>
                            <stop offset="1" stopColor="#a1a4af"/>
                            </linearGradient>
                        </defs>
                        <title>Speedometer</title>
                        
                        <g>
                            
                            <g className="cls-11">
                            <rect className="cls-12" x="230.49" y="584.3" width="368.35" height="184.17"/>
                            </g>
                            <path className="cls-13" d="M184.16,183.56C184.16,285.28,101.7,367.73,0,367.73A184.16,184.16,0,0,1-184.19,183.56" transform="translate(414.69 400.74)"/>
                            <g className="cls-14">
                            <path className="cls-15" d="M267.17-140.69l91.55-52.86A416.51,416.51,0,0,0,207-345.27l-52.86,91.56a310.3,310.3,0,0,1,113,113" transform="translate(414.69 400.74)"/>
                            <path className="cls-16" d="M308.49,13.7H414.2a412.49,412.49,0,0,0-55.48-207.25l-91.55,52.86A307.38,307.38,0,0,1,308.49,13.7" transform="translate(414.69 400.74)"/>
                            <path className="cls-15" d="M-.24-295a307.31,307.31,0,0,1,154.39,41.33L207-345.27A412.52,412.52,0,0,0-.24-400.74Z" transform="translate(414.69 400.74)"/>
                            <path className="cls-16" d="M308.49,13.7a307.38,307.38,0,0,1-41.32,154.39L358.72,221A412.49,412.49,0,0,0,414.2,13.7Z" transform="translate(414.69 400.74)"/>
                            <path className="cls-15" d="M-.24-295v-105.7a412.53,412.53,0,0,0-207.25,55.47l52.86,91.56A307.26,307.26,0,0,1-.24-295" transform="translate(414.69 400.74)"/>
                            <path className="cls-17" d="M-309,13.7H-414.69A412.49,412.49,0,0,0-359.21,221l91.55-52.86A307.38,307.38,0,0,1-309,13.7" transform="translate(414.69 400.74)"/>
                            <path className="cls-18" d="M-154.63-253.71l-52.86-91.56A416.51,416.51,0,0,0-359.21-193.55l91.55,52.86a310.3,310.3,0,0,1,113-113" transform="translate(414.69 400.74)"/>
                            <path className="cls-19" d="M-267.66-140.69l-91.55-52.86A412.49,412.49,0,0,0-414.69,13.7H-309a307.38,307.38,0,0,1,41.32-154.39" transform="translate(414.69 400.74)"/>
                            </g>                            
                            <g>
                            <rect className="cls-20" x="411.05" y="33.01" width="7.27" height="53.19"/>
                            <rect className="cls-20" x="-127.03" y="-345.98" width="7.27" height="53.19" transform="translate(516.5 339.26) rotate(-20)"/>
                            <rect className="cls-20" x="-235.53" y="-283.33" width="7.27" height="53.19" transform="translate(525.46 191.63) rotate(-40)"/>
                            <rect className="cls-20" x="-316.07" y="-187.35" width="7.27" height="53.19" transform="translate(397.7 49.79) rotate(-60)"/>
                            <rect className="cls-20" x="308.8" y="173.42" width="7.27" height="53.19" transform="translate(397.67 771.29) rotate(-59.99)"/>
                            <rect className="cls-20" x="-358.92" y="-69.62" width="7.27" height="53.19" transform="translate(163.46 15.3) rotate(-80)"/>
                            <rect className="cls-20" x="351.65" y="55.68" width="7.27" height="53.19" transform="translate(627.26 818.62) rotate(-80)"/>
                            <rect className="cls-20" x="-381.88" y="78.63" width="53.19" height="7.27" transform="translate(395 340.3) rotate(-10)"/>
                            <rect className="cls-20" x="328.69" y="-46.66" width="53.19" height="7.27" transform="translate(427.55 461.78) rotate(-10)"/>
                            <rect className="cls-20" x="-339.03" y="196.37" width="53.19" height="7.27" transform="translate(272.82 271.32) rotate(-30)"/>
                            <rect className="cls-20" x="285.84" y="-164.4" width="53.19" height="7.27" transform="translate(536.93 535.42) rotate(-30)"/>
                            <rect className="cls-20" x="205.3" y="-260.38" width="53.19" height="7.27" transform="translate(694.21 486.67) rotate(-50)"/>
                            <rect className="cls-20" x="96.8" y="-323.02" width="53.19" height="7.27" transform="translate(796.02 306.52) rotate(-70)"/>
                            <rect className="cls-20" x="-66.71" y="-362.17" width="6.19" height="42.07" transform="translate(472.98 384.5) rotate(-10)"/>
                            <rect className="cls-20" x="-186.26" y="-318.66" width="6.19" height="42.07" transform="translate(538.97 269.26) rotate(-30)"/>
                            <rect className="cls-20" x="-283.72" y="-236.88" width="6.19" height="42.07" transform="translate(479.79 108.66) rotate(-50)"/>
                            <rect className="cls-20" x="-347.33" y="-126.7" width="6.19" height="42.07" transform="matrix(0.34, -0.94, 0.94, 0.34, 287.49, 7.74)"/>
                            <rect className="cls-20" x="341.14" y="123.88" width="6.19" height="42.07" transform="matrix(0.34, -0.94, 0.94, 0.34, 505.01, 819.56)"/>
                            <rect className="cls-20" x="27.33" y="417.27" width="42.07" height="6.19"/>
                            <rect className="cls-20" x="759.98" y="417.27" width="42.07" height="6.19"/>
                            <rect className="cls-20" x="-365.27" y="141.82" width="42.07" height="6.19" transform="translate(344.36 291.74) rotate(-20)"/>
                            <rect className="cls-20" x="323.2" y="-108.76" width="42.07" height="6.19" transform="translate(471.59 512.11) rotate(-20)"/>
                            <rect className="cls-20" x="259.59" y="-218.94" width="42.07" height="6.19" transform="translate(619.07 530.62) rotate(-40)"/>
                            <rect className="cls-20" x="162.13" y="-300.72" width="42.07" height="6.19" transform="translate(763.99 410.57) rotate(-59.99)"/>
                            <rect className="cls-20" x="42.58" y="-344.23" width="42.07" height="6.19" transform="translate(803.2 181.51) rotate(-80)"/>
                            <rect className="cls-20" x="-34.58" y="-366.31" width="3.96" height="26.59" transform="translate(445.42 396.54) rotate(-5.02)"/>
                            <rect className="cls-20" x="-98.79" y="-354.99" width="3.96" height="26.59" transform="translate(499.84 364.03) rotate(-15)"/>
                            <rect className="cls-20" x="-160.07" y="-332.69" width="3.96" height="26.59" transform="translate(534.88 303.98) rotate(-25.01)"/>
                            <rect className="cls-20" x="-216.53" y="-300.09" width="3.96" height="26.59" transform="matrix(0.82, -0.57, 0.57, 0.82, 540.39, 225.78)"/>
                            <rect className="cls-20" x="-266.48" y="-258.18" width="3.96" height="26.59" transform="translate(510.37 141.98) rotate(-45)"/>
                            <rect className="cls-20" x="-308.39" y="-208.23" width="3.96" height="26.59" transform="translate(443.68 66.58) rotate(-55.01)"/>
                            <rect className="cls-20" x="-341" y="-151.76" width="3.96" height="26.59" transform="translate(344.46 13.57) rotate(-65)"/>
                            <rect className="cls-20" x="337.04" y="164.41" width="3.96" height="26.59" transform="translate(449.35 810.58) rotate(-65)"/>
                            <rect className="cls-20" x="-363.3" y="-90.49" width="3.96" height="26.59" transform="translate(221.45 -5.48) rotate(-75)"/>
                            <rect className="cls-20" x="359.34" y="103.14" width="3.96" height="26.59" transform="translate(570.01 836.05) rotate(-75)"/>
                            <rect className="cls-20" x="-374.62" y="-26.27" width="3.96" height="26.59" transform="translate(87.44 17.67) rotate(-85)"/>
                            <rect className="cls-20" x="370.66" y="38.93" width="3.96" height="26.59" transform="translate(702.83 819.64) rotate(-85)"/>
                            <rect className="cls-20" x="-385.94" y="50.25" width="26.59" height="3.96" transform="translate(408.72 368.48) rotate(-5)"/>
                            <rect className="cls-20" x="359.34" y="-14.96" width="26.59" height="3.96" transform="translate(417.23 433.15) rotate(-5)"/>
                            <rect className="cls-20" x="-374.61" y="114.46" width="26.59" height="3.96" transform="translate(372.24 311.19) rotate(-15)"/>
                            <rect className="cls-20" x="348.02" y="-79.17" width="26.59" height="3.96" transform="translate(446.98 491.63) rotate(-15)"/>
                            <rect className="cls-20" x="-352.31" y="175.73" width="26.59" height="3.96" transform="translate(307.79 274.1) rotate(-25)"/>
                            <rect className="cls-20" x="325.72" y="-140.44" width="26.59" height="3.96" transform="translate(504.99 531.06) rotate(-25)"/>
                            <rect className="cls-20" x="293.12" y="-196.91" width="26.59" height="3.96" transform="translate(581.87 541.22) rotate(-34.99)"/>
                            <rect className="cls-20" x="251.21" y="-246.86" width="26.59" height="3.96" transform="translate(665.31 516.05) rotate(-45)"/>
                            <rect className="cls-20" x="201.26" y="-288.77" width="26.59" height="3.96" transform="translate(741.12 454.2) rotate(-55)"/>
                            <rect className="cls-20" x="144.79" y="-321.37" width="26.59" height="3.96" transform="translate(795.46 359.58) rotate(-65.01)"/>
                            <rect className="cls-20" x="83.52" y="-343.67" width="26.59" height="3.96" transform="translate(816.48 241.02) rotate(-75)"/>
                            <rect className="cls-20" x="19.31" y="-355" width="26.59" height="3.96" transform="translate(796.12 110.98) rotate(-85)"/>

                            <polygon points="390,414.44 414,100 438,414.44" 
                                style={{fill:"#f7931e", transform: testDgree, transformOrigin:"50% 53.5%", transitionDuration:"2s"}} 
                            />

                            <g className="cls-21">
                                <g className="cls-22">
                                <path className="cls-23" d="M-82.7,16.55a83.69,83.69,0,1,1,76.28,90.5A83.69,83.69,0,0,1-82.7,16.55" transform="translate(414.69 400.74)"/>
                                </g>
                            </g>
                            {
                                texts.map((each)=>{
                                    return <text key={each.key} x={each.x} y={each.y} fill={each.fill} style={{fontFamily:"niveafont", fontSize:`${each.fontSize}`, fontWeight:`${each.fontWeight}`}}>{each.name}</text>
                                })
                            }

                            

                            <path className="cls-24" d="M34.59,81.58A68.5,68.5,0,0,1-58.69,55.84,68.49,68.49,0,0,1-32.94-37.43,68.49,68.49,0,0,1,60.33-11.69,68.49,68.49,0,0,1,34.59,81.58" transform="translate(414.69 400.74)"/>
                            <path className="cls-25" d="M34.59,81.58A68.5,68.5,0,0,1-58.69,55.84,68.49,68.49,0,0,1-32.94-37.43,68.49,68.49,0,0,1,60.33-11.69,68.49,68.49,0,0,1,34.59,81.58Z" transform="translate(414.69 400.74)"/>
                            </g>
                            <g className="cls-26">
                            <rect className="cls-27" x="-100.56" y="-79.71" width="200.62" height="200.41" transform="translate(404.36 403.39) rotate(-30.15)"/>
                            </g>
                            <g className="cls-28">
                            <g className="cls-29">
                                <g className="cls-30">
                                <rect className="cls-31" x="-95.25" y="-74.81" width="190" height="190" transform="translate(404.69 403.25) rotate(-29.57)"/>
                                </g>
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