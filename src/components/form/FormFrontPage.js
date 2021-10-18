import React, {useContext} from 'react';
import States from './States';
import Countries from './Countries';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';


const FormFrontPage = () => {

const {
        userNameInput,
        setUserName,
        age,
        setAge,
        states,
        setStates,
        country, 
        setCountry,
        handleSubmitCreateUser,
        userNameAvailable,
        globalUserName,

        
} = useContext(UserContext);

    return ( 
        <div className="formfrontpage">
        <form className='userform' onSubmit={handleSubmitCreateUser}>
            <h2>FIRST, PLEASE CREATE A USER:</h2>
          

<div className="username">
                    <label className='username' htmlFor="username">User-Name</label>
                    <input className='usernameinput' type="text" required id='username' placeholder='Please choose a username...' onChange={(e)=> setUserName(e.target.value)}/> 
            </div> 

            <div className="avail">
                    <label>{!userNameAvailable ? 'Your current *USERNAME* is already taken. Please Choose another...' :  'Your username is available'}</label>
            </div>

            <p className='age'>Age</p>

            <div className="radioanswers">
                    <div className="radio">
                        <input className='dot' name={age} type="radio" id='0-15' onChange={(e) => {setAge(e.target.value)}} value='0-15' />
                        <label className="circle" htmlFor="0-15">0-15</label>
                    </div>
                    <div className="radio">
                        <input className='dot' name={age} type="radio" id='15-30' onChange={(e) => {setAge(e.target.value)}} value='15-30' />
                        <label className="circle" htmlFor="15-30">15-30</label>
                    </div>
                    <div className="radio">
                        <input className='dot' name={age} type="radio" id='30-45' onChange={(e) => {setAge(e.target.value)}} value='30-45' />
                        <label className="circle" htmlFor="30-45">30-45</label>
                    </div>
                    <div className="radio">
                        <input className='dot' name={age} type="radio" id='45-60' onChange={(e) => {setAge(e.target.value)}} value='45-60' />
                        <label className="circle" htmlFor="45-60">45-60</label>
                    </div>
                    <div className="radio">
                        <input className='dot' name={age} type="radio" id='60+' onChange={(e) => {setAge(e.target.value)}} value='60+' />
                        <label className="circle" htmlFor="60+">60+</label>
                    </div>
            </div>

            <p className='labels'>Country</p>
            <Countries setCountry={setCountry}></Countries>

            <p className='labels'> States</p>
            <States setStates={setStates}></States>


           
  {userNameAvailable && !globalUserName && age &&states&&country&&userNameInput? <button className='submitform' >Submit</button> : null}
   
{globalUserName ? (<div className='labels'><p>THANK YOU!</p><br/><p>Now, our data scientists have just a few more very, very important questions...</p></div>) : null}

{globalUserName ? <Link to={'./pets'}> <button className='submitform'>NEXT</button></Link> : null}
        </form>
        </div>

     );
}
 
export default FormFrontPage;