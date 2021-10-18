import React, {useContext} from 'react';
import { UserContext } from '../context/UserContext';

const UserBar = () => {

    const { globalUserName, globalUserNameID } = useContext(UserContext);


    return ( 
        <div className="userbar">
                <p className='userbarname'>Username: {globalUserName}</p> <p className='userbarid'>id: {globalUserNameID}</p>
        </div>
     );
}
 
export default UserBar;
<div className="userbar">

</div>