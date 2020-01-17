import React, {Component} from 'react';
import withDimension from "../../hoc/withDimension"
import Body from "../../Component/Body/Body"
import background from "../../assets/background.png"
import Header from "../../Component/Header/Header"

// const Header = () => {return <div style={{minHeight:"350px", width:"auto",  backgroundColor:"#494b4d"}}>Header Area</div>}


class Main extends Component{

    render(){
        const {windowHeight} = this.props
        
        return(
            <div className="d-flex flex-column justify-content-start"
                 style={{
                    height:windowHeight,
                    backgroundImage: `url(${background})`,
                    backgroundAttachment:"fixed",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"center",
                    backgroundSize:"cover"
                }}                    
            >                                
                <Header />                
                <Body />                                                                  
            </div>            
        )
    }
}

export default withDimension(Main);