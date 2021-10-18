import React, {useContext} from 'react';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import UserBar from '../UserBar';

const Pets = () => {

    const { pet, setPet } = useContext(UserContext);

    return ( 
    <div className="pets">
            <UserBar></UserBar>
            <div className="petanswers">

                    <h2 className='h2questions'>Are you a dog person or a cat person?</h2>
                    <input className='dotquestions' name={pet} type="radio" id='dog' value='dog' onChange={(e) => {setPet(e.target.value)}}/>
                    <label className='circlequestions' htmlFor="dog">Dog Lover</label> <br/>
                    <input id='cat' className='dotquestions' name={pet} type="radio" id='cat' value='cat' onChange={(e) => {setPet(e.target.value)}}/>
                    <label className='circlequestions' htmlFor="cat">Cat Lover</label>
            </div>
    { pet?  <Link  to={'./pineapple'}> <i id='icecreamicon' className="fas fa-ice-cream fa-10x">next</i></Link>: null }
    </div> 







    );
}
 
export default Pets;