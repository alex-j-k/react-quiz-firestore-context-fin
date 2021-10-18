import React, {useContext} from 'react';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import UserBar from '../UserBar';

const Pineapple = () => {

    const { pizza, setPizza } = useContext(UserContext);


    return ( 
        <div className="pineapple">
                <UserBar></UserBar>
                <p  className='slidingtext'>On a scale from 0-100, how likey are you to agree with the statement:</p>
                 <p className='colour'>"Pineapple belongs on pizza"</p>
                <input className='slider' required type="range" id='pizza' min='0' max='100' onChange={(e) => {setPizza(e.target.value)}}/>
                { pizza?  <Link  to={'/colours'}> <i id='icecreamicon' className="fas fa-ice-cream fa-10x">next</i></Link>: null }


        </div>
     );
}
 
export default Pineapple;