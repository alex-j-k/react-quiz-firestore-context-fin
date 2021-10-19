import React, {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import ReactPlayer from 'react-player';
import MyMov from '../videos/MyMov.mp4' 

const FrontPage = () => {

    const[mov, setMov] = useState(false);

    let history = useHistory();
    const redirect = () => {history.push('./formfrontpage')}

const {handleStart} = useContext(UserContext);

    return ( 
    <div className="frontpage">
            <h1>
                    THE 
                    GREAT<br/>  
                    <span className='spanish'>SPANISH </span>  <br/>  
                    ICE CREAM QUIZ 
            </h1>
                {/* <Link to={'./formfrontpage'}> */}
                    <i id='icecreamicon' className="fas fa-ice-cream fa-10x" onClick={()=> setMov(true)}></i>
                {/* </Link> */}
                    <h3>¡Vamos!</h3>
                 {  mov?  <ReactPlayer id='mov' url={MyMov} playing height='80%' width='80%'  onEnded={redirect} style={{opacity: 1, transition: "opacity, 2s ease-in-out"}}/> :null}     
    </div>
     );
}
 
export default FrontPage;