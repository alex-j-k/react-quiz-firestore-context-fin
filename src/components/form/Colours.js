import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import UserBar from '../UserBar';


const Colours = () => {

const {setColour, colour, handleExtraInfoClick} = useContext(UserContext)

    return (
    <div className="colours">
        <UserBar></UserBar>


                        
          
            <p className='colour'>Colour</p>
            <select className='selectcountry' required name="colour" onChange={(e)=> {setColour(e.target.value)}}>
            <option disabled selected value="Choose">Choose your favourite colour...</option>

                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
             </select>

             { colour?  <Link onClick={handleExtraInfoClick} to={'/quiz'}> <i id='icecreamicon' className="fas fa-ice-cream fa-10x">next</i></Link>: null }


    </div>
     );
}
 
export default Colours;