import React from 'react';
import {Link} from 'react-router-dom';

const FrontPage = () => {
    return ( 
    <div className="frontpage">
            <h1>
                    THE 
                    GREAT<br/>  
                    <span className='spanish'>SPANISH </span>  <br/>  
                    ICE CREAM QUIZ 
            </h1>
                <Link to={'./formfrontpage'}>
                    <i id='icecreamicon' className="fas fa-ice-cream fa-10x"></i>
                </Link>
                    <h3>¡Vamos!</h3>
    </div>
     );
}
 
export default FrontPage;