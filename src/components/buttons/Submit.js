import React, {useContext} from 'react'
import { QuizContext } from "../../context/QuizContext";

const Submit = () => {

    const {selected, setSelected, checkAnswer, submitted} = useContext(QuizContext);

    return (  
        <React.Fragment>
                     { selected && !submitted? <i id='submit' onClick={checkAnswer} className="fas fa-ice-cream fa-8x"></i> : null}
        </React.Fragment>
    );
}
 
export default Submit;