import React, { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext';

const Next = ({setMov}) => {

    const {submitted, nextClick} = useContext(QuizContext);

    return ( 
        <React.Fragment>
            { submitted?    <i id='next' onClick={()=>setMov(true)}  onMouseUp={()=>setTimeout(() => {setMov(false) }, 9000)} class="fas fa-arrow-circle-right fa-5x"></i> : null }
        </React.Fragment>
     );
}
 
export default Next;