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

            meterTrasnform = <animateTransform attributeName="transform"
                                        attributeType="XML"
                                        type="rotate"
                                        from="0 153 160"
                                        to={degree+" 153 160"}
                                        dur="2s"
                                        // fill="freeze"
                                        // repeatCount="1"
                                        /> 
            testDgree = "rotate("+degree+"deg)"
        }
        
        return(
            <div    className="d-flex flex-column justify-content-center align-items-center"
                    style={{margin:"100px 15px", borderRadius: "15px"}}>
                <div>   
                    <div style={{position:"relative", display:"inline-block"}}>

                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                            width="300px" height="300px" viewBox="0 0 305.24 311.27">
                            <defs>
                                <style>
                                {`.cls-1 {
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
                                .cls-font{
                                    font-family:NiveaMedium
                                }
                                .cls-20 {
                                    fill: url(#linear-gradient-5);
                                }
                                .cls-21, .cls-24 {
                                  fill: none;
                                }
                        
                                .cls-22 {
                                  clip-path: url(#clip-path);
                                }
                        
                                .cls-23 {
                                  fill: url(#linear-gradient);
                                }
                        
                                .cls-24 {
                                  stroke: #f26522;
                                  stroke-miterlimit: 10;
                                  stroke-width: 12.67px;
                                }`}
                                </style>
                                <radialGradient id="radial-gradient" cx="-35.26" cy="55.34" r="22.83" gradientTransform="matrix(1.35, 0.12, -0.11, 1.39, 204.05, 76.26)" gradientUnits="userSpaceOnUse">
                                <stop offset="0.66" stopColor="#c2c2c2"/>
                                <stop offset="0.95"/>
                                </radialGradient>
                                <radialGradient id="radial-gradient-2" cx="135.61" cy="0.8" r="18.88" gradientTransform="matrix(1.18, -0.69, 0.67, 1.22, -10.08, 240.56)" gradientUnits="userSpaceOnUse">
                                <stop offset="0.94"/>
                                <stop offset="0.96" stopColor="#4d4d4d"/>
                                <stop offset="0.98"/>
                                </radialGradient>
                                <clipPath id="clip-path" transform="translate(2.4 11.27)">
                                <ellipse className="cls-3" cx="150" cy="148.5" rx="129" ry="133.5"/>
                                </clipPath>
                                <linearGradient id="linear-gradient" x1="549.73" y1="300" x2="549.73" y2="182.39" gradientTransform="matrix(-1, 0, 0, 1, 702.35, 11.27)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#fff"/>
                                <stop offset="1" stopColor="#d2d2d2"/>
                                </linearGradient>
                                <linearGradient id="linear-gradient-2" x1="549.73" y1="298" x2="549.73" y2="184.38" gradientTransform="matrix(-1, 0, 0, 1, 702.35, 11.27)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#e9e9e9"/>
                                <stop offset="1" stopColor="#b3b3b4"/>
                                </linearGradient>
                                <mask id="mask" x="121.76" y="128.55" width="61.72" height="63.89" maskUnits="userSpaceOnUse">
                                <g transform="translate(2.4 11.27)">
                                    <ellipse className="cls-1" cx="150.22" cy="149.23" rx="30.86" ry="31.94"/>
                                </g>
                                </mask>
                                <linearGradient id="linear-gradient-3" x1="236.63" y1="210.7" x2="236.07" y2="155.48" gradientTransform="translate(-146.09 105.24) rotate(-29.57)" gradientUnits="userSpaceOnUse">
                                <stop offset="0.01" stopColor="#17181c"/>
                                <stop offset="0.38" stopColor="#292a30"/>
                                <stop offset="1" stopColor="#4e4f59"/>
                                </linearGradient>
                                <linearGradient id="linear-gradient-4" x1="233.39" y1="160.33" x2="239.86" y2="210.2" gradientTransform="translate(-146.09 105.24) rotate(-29.57)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#56575e"/>
                                <stop offset="1" stopColor="#232428"/>
                                </linearGradient>
                                <mask id="mask-2" x="126.75" y="132.75" width="51.05" height="52.85" maskUnits="userSpaceOnUse">
                                <g transform="translate(2.4 11.27)">
                                    <path className="cls-2" d="M162.47,170.88a24.82,24.82,0,0,1-9.63,3.27,24.53,24.53,0,0,1-9.75-.78,25.07,25.07,0,0,1-8.77-4.51,26,26,0,0,1-6.64-7.92,27.08,27.08,0,0,1-2.4-20.06,26.62,26.62,0,0,1,4.35-9.07,25.67,25.67,0,0,1,7.65-6.88,24.67,24.67,0,0,1,19.38-2.49,25.11,25.11,0,0,1,8.76,4.51,26,26,0,0,1,6.65,7.92,27,27,0,0,1,3.16,10,27.31,27.31,0,0,1-.76,10.1,26.81,26.81,0,0,1-4.35,9.07A25.54,25.54,0,0,1,162.47,170.88Zm-24.14-44a23.49,23.49,0,0,0-7,6.3,24.64,24.64,0,0,0-4,8.32,25,25,0,0,0-.69,9.26,24.63,24.63,0,0,0,2.89,9.14,23.8,23.8,0,0,0,6.09,7.26,23.06,23.06,0,0,0,8,4.14A22.63,22.63,0,0,0,161.42,169a23.49,23.49,0,0,0,7-6.3,24.55,24.55,0,0,0,4-8.32,24.94,24.94,0,0,0,.69-9.26,24.63,24.63,0,0,0-2.89-9.14,23.81,23.81,0,0,0-6.1-7.26,22.82,22.82,0,0,0-8-4.13,22.57,22.57,0,0,0-17.77,2.28Z"/>
                                </g>
                                </mask>
                                <linearGradient id="linear-gradient-5" x1="236.35" y1="209.28" x2="236.35" y2="157.03" gradientTransform="translate(-146.09 105.24) rotate(-29.57)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#0c0d0d"/>
                                    <stop offset="0.13" stopColor="#171819"/>
                                    <stop offset="0.35" stopColor="#343638"/>
                                    <stop offset="0.66" stopColor="#62656c"/>
                                    <stop offset="1" stopColor="#9fa3ae"/>
                                </linearGradient>
                            </defs>                
                            <g>
                                <g className="cls-4">
                                    <g>
                                        <path className="cls-5" d="M248.69,87.86l33.72-20.15A156.17,156.17,0,0,0,226.54,9.88l-19.47,34.9A116.3,116.3,0,0,1,248.69,87.86Z" transform="translate(2.4 11.27)"/>
                                        <path className="cls-6" d="M263.91,147h38.93a161.58,161.58,0,0,0-20.43-79L248.69,88.14A120.34,120.34,0,0,1,263.91,147Z" transform="translate(2.4 11.27)"/>
                                        <path className="cls-5" d="M150,29a110.19,110.19,0,0,1,56.85,15.76l19.47-34.9A148,148,0,0,0,150-11.27V29Z" transform="translate(2.4 11.27)"/>
                                        <path className="cls-6" d="M263.91,147a120.34,120.34,0,0,1-15.22,58.86L282.41,226a161.58,161.58,0,0,0,20.43-79Z" transform="translate(2.4 11.27)"/>
                                        <path className="cls-5" d="M150,29V-11.27A148,148,0,0,0,73.68,9.88l19.47,34.9A110.19,110.19,0,0,1,150,29Z" transform="translate(2.4 11.27)"/>
                                        <path className="cls-7" d="M36.53,147H-2.4A161.58,161.58,0,0,0,18,226l33.71-20.15A120.44,120.44,0,0,1,36.53,147Z" transform="translate(2.4 11.27)"/>
                                        <path className="cls-8" d="M93.36,44.78,73.9,9.88A156.17,156.17,0,0,0,18,67.71L51.74,87.86A116.38,116.38,0,0,1,93.36,44.78Z" transform="translate(2.4 11.27)"/>
                                        <path className="cls-9" d="M51.74,88.14,18,68A161.58,161.58,0,0,0-2.4,147H36.53A120.44,120.44,0,0,1,51.74,88.14Z" transform="translate(2.4 11.27)"/>
                                    </g>
                                </g>
                                <g>
                                    <rect className="cls-10" x="151.4" y="11.27" width="3" height="20"/>
                                    <polygon className="cls-10" points="111.79 38.78 109.27 39.73 102.57 20.67 105.09 19.73 111.79 38.78"/>
                                    <polygon className="cls-10" points="74.54 60.48 72.49 62.26 59.9 46.73 61.95 44.95 74.54 60.48"/>
                                    <polygon className="cls-10" points="46.72 94.06 45.38 96.47 28.41 86.33 29.75 83.93 46.72 94.06"/>
                                    <polygon className="cls-10" points="276.82 231.59 275.48 233.99 258.52 223.86 259.86 221.46 276.82 231.59"/>
                                    <polygon className="cls-10" points="31.66 135.47 31.2 138.2 11.91 134.68 12.37 131.95 31.66 135.47"/>
                                    <polygon className="cls-10" points="293.33 183.24 292.86 185.97 273.58 182.45 274.04 179.72 293.33 183.24"/>
                                    <polygon className="cls-10" points="31.2 179.72 31.66 182.45 12.37 185.97 11.91 183.24 31.2 179.72"/>
                                    <polygon className="cls-10" points="292.86 131.95 293.33 134.68 274.04 138.2 273.58 135.47 292.86 131.95"/>
                                    <polygon className="cls-10" points="45.38 221.46 46.72 223.86 29.75 233.99 28.41 231.59 45.38 221.46"/>
                                    <polygon className="cls-10" points="275.48 83.93 276.82 86.33 259.86 96.47 258.52 94.06 275.48 83.93"/>
                                    <polygon className="cls-10" points="243.28 44.95 245.34 46.73 232.75 62.26 230.69 60.48 243.28 44.95"/>
                                    <polygon className="cls-10" points="200.15 19.73 202.66 20.67 195.97 39.73 193.45 38.78 200.15 19.73"/>
                                    <polygon className="cls-10" points="131.66 29.13 129.42 29.54 126.73 13.74 128.97 13.33 131.66 29.13"/>
                                    <polygon className="cls-10" points="90.03 44.38 88.05 45.55 80.31 31.67 82.28 30.49 90.03 44.38"/>
                                    <polygon className="cls-10" points="55.95 73.45 54.48 75.25 42.61 64.95 44.08 63.14 55.95 73.45"/>
                                    <polygon className="cls-10" points="33.52 112.83 32.74 115.05 18.18 109.56 18.96 107.35 33.52 112.83"/>
                                    <polygon className="cls-10" points="287.05 208.36 286.27 210.57 271.71 205.09 272.49 202.87 287.05 208.36"/>
                                    <rect className="cls-10" x="9.4" y="158.27" width="16" height="2"/>
                                    <rect className="cls-10" x="279.4" y="158.27" width="16" height="2"/>
                                    <polygon className="cls-10" points="32.74 202.87 33.52 205.09 18.96 210.57 18.18 208.36 32.74 202.87"/>
                                    <polygon className="cls-10" points="286.27 107.35 287.05 109.56 272.49 115.05 271.71 112.83 286.27 107.35"/>
                                    <polygon className="cls-10" points="261.16 63.14 262.62 64.95 250.76 75.25 249.29 73.45 261.16 63.14"/>
                                    <polygon className="cls-10" points="222.95 30.49 224.93 31.67 217.18 45.55 215.21 44.38 222.95 30.49"/>
                                    <polygon className="cls-10" points="176.27 13.33 178.51 13.74 175.82 29.54 173.58 29.13 176.27 13.33"/>
                                    <polygon className="cls-10" points="141.77 21.89 140.31 22.02 139.46 11.92 140.91 11.79 141.77 21.89"/>
                                    <polygon className="cls-10" points="118.94 25.92 117.53 26.31 115 16.52 116.4 16.13 118.94 25.92"/>
                                    <polygon className="cls-10" points="97.13 34 95.81 34.64 91.67 25.45 92.99 24.81 97.13 34"/>
                                    <polygon className="cls-10" points="77.01 45.87 75.82 46.74 70.2 38.43 71.4 37.57 77.01 45.87"/>
                                    <polygon className="cls-10" points="59.19 61.18 58.16 62.25 51.24 55.08 52.27 54.01 59.19 61.18"/>
                                    <polygon className="cls-10" points="44.21 79.46 43.37 80.69 35.35 74.88 36.19 73.64 44.21 79.46"/>
                                    <polygon className="cls-10" points="32.52 100.15 31.9 101.52 23.03 97.24 23.64 95.87 32.52 100.15"/>
                                    <polygon className="cls-10" points="282.21 220.68 281.59 222.05 272.72 217.77 273.33 216.4 282.21 220.68"/>
                                    <polygon className="cls-10" points="24.48 122.64 24.1 124.09 14.64 121.47 15.02 120.01 24.48 122.64"/>
                                    <polygon className="cls-10" points="290.59 196.45 290.21 197.91 280.76 195.28 281.13 193.83 290.59 196.45"/>
                                    <polygon className="cls-10" points="20.33 146.22 20.21 147.73 10.45 146.84 10.58 145.34 20.33 146.22"/>
                                    <polygon className="cls-10" points="294.79 171.08 294.66 172.58 284.9 171.7 285.03 170.19 294.79 171.08"/>
                                    <polygon className="cls-10" points="20.21 170.19 20.33 171.7 10.58 172.58 10.45 171.08 20.21 170.19"/>
                                    <polygon className="cls-10" points="294.66 145.34 294.79 146.84 285.03 147.73 284.9 146.22 294.66 145.34"/>
                                    <polygon className="cls-10" points="24.1 193.83 24.48 195.28 15.02 197.91 14.64 196.45 24.1 193.83"/>
                                    <polygon className="cls-10" points="290.21 120.01 290.59 121.47 281.13 124.09 280.76 122.64 290.21 120.01"/>
                                    <polygon className="cls-10" points="31.9 216.4 32.52 217.77 23.64 222.05 23.03 220.68 31.9 216.4"/>
                                    <polygon className="cls-10" points="281.59 95.87 282.21 97.24 273.33 101.52 272.72 100.15 281.59 95.87"/>
                                    <polygon className="cls-10" points="269.05 73.64 269.88 74.88 261.86 80.69 261.03 79.46 269.05 73.64"/>
                                    <polygon className="cls-10" points="252.97 54.01 254 55.08 247.07 62.25 246.04 61.18 252.97 54.01"/>
                                    <polygon className="cls-10" points="233.84 37.57 235.03 38.43 229.42 46.74 228.22 45.87 233.84 37.57"/>
                                    <polygon className="cls-10" points="212.24 24.81 213.56 25.45 209.43 34.64 208.1 34 212.24 24.81"/>
                                    <polygon className="cls-10" points="188.83 16.13 190.24 16.52 187.71 26.31 186.3 25.92 188.83 16.13"/>
                                    <polygon className="cls-10" points="164.32 11.79 165.78 11.92 164.92 22.02 163.47 21.89 164.32 11.79"/>
                                </g>
                                <g> 
                                    <ellipse className="cls-11" cx="152.62" cy="252.46" rx="56.81" ry="58.81"/>
                                    <ellipse className="cls-12" cx="152.62" cy="252.46" rx="54.88" ry="56.81"/>
                                </g>
                                
                                {
                                    texts.map((each)=>{
                                        return <text key={each.key} x={each.x} y={each.y} fill={each.fill} style={{fontFamily:"niveafont", fontSize:`${each.fontSize}`, fontWeight:`${each.fontWeight}`}}>{each.name}</text>
                                    })
                                }

                                <polygon points="153,40 142,160 164,160" style={{fill:"#f7931e", transform: testDgree, transformOrigin:"50% 50%", transitionDuration:"2s"}} >                            
                                </polygon>
                                <path style={{fill:"red"}} d="M149.73,24.62 L150.11,24.62 Z"/>
                                
                                <g>
                                    <g className="cls-14">
                                        <ellipse className="cls-15" cx="152.62" cy="160.5" rx="30.82" ry="31.9"/>
                                    </g>
                                    
                                    <path className="cls-17" d="M163.12,172.07a26.14,26.14,0,0,1-29.6-2.13,27.33,27.33,0,0,1-7-8.32,28.52,28.52,0,0,1-2.52-21.1,27.81,27.81,0,0,1,4.58-9.54,26.88,26.88,0,0,1,8-7.24,26,26,0,0,1,10.13-3.43,25.76,25.76,0,0,1,10.25.82,26.44,26.44,0,0,1,9.22,4.74,27.25,27.25,0,0,1,7,8.33,28.5,28.5,0,0,1,2.52,21.1,27.77,27.77,0,0,1-4.58,9.53A26.88,26.88,0,0,1,163.12,172.07Z" transform="translate(2.4 11.27)"/>
                                    <path className="cls-18" d="M162,170a23.7,23.7,0,0,1-18.62,2.39,24.06,24.06,0,0,1-8.41-4.33,24.84,24.84,0,0,1-6.38-7.6,26.12,26.12,0,0,1,1.87-28,24.57,24.57,0,0,1,7.35-6.61,23.69,23.69,0,0,1,18.61-2.39,24.1,24.1,0,0,1,8.42,4.33,25,25,0,0,1,6.38,7.61,26.12,26.12,0,0,1-1.87,28A24.67,24.67,0,0,1,162,170Z" transform="translate(2.4 11.27)"/>
                                    <g className="cls-19">
                                        <path className="cls-20" d="M165.38,127a25.08,25.08,0,0,0-8.74-4.5,24.58,24.58,0,0,0-9.72-.78,24.84,24.84,0,0,0-9.6,3.26,25.67,25.67,0,0,0-7.63,6.86,26.71,26.71,0,0,0-4.35,9.05,27.08,27.08,0,0,0,2.4,20,26,26,0,0,0,6.63,7.89,25,25,0,0,0,8.73,4.5,24.6,24.6,0,0,0,19.33-2.48,25.67,25.67,0,0,0,7.63-6.86,26.69,26.69,0,0,0,4.34-9.05,27,27,0,0,0-2.39-20A25.89,25.89,0,0,0,165.38,127Zm7.81,18.07a25.1,25.1,0,0,1-.69,9.29,24.5,24.5,0,0,1-4,8.34,23.51,23.51,0,0,1-7,6.33,22.67,22.67,0,0,1-17.83,2.29,23.17,23.17,0,0,1-8.06-4.15,24.06,24.06,0,0,1-6.11-7.28,25,25,0,0,1-2.21-18.46,24.5,24.5,0,0,1,4-8.34,23.51,23.51,0,0,1,7-6.33,22.79,22.79,0,0,1,17.83-2.29,23.17,23.17,0,0,1,8.06,4.15,24,24,0,0,1,6.11,7.29A24.68,24.68,0,0,1,173.19,145.08Z" transform="translate(2.4 11.27)"/>
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