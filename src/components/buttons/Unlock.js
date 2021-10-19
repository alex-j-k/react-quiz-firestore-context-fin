import React, {useContext} from 'react';
import { QuizContext } from "../../context/QuizContext";


const Unlock = () => {

    const {selected, setSelected, submitted} = useContext(QuizContext);

    return (  
        <React.Fragment>
            {selected && !submitted ? <i id='padlock' class="fas fa-lock-open fa-4x" onClick={()=> setSelected('')}></i> : null}
        </React.Fragment>
    );
}
 
export default Unlock;