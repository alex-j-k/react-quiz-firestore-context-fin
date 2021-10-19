import React, {useContext} from 'react';
import { QuizContext } from '../../context/QuizContext';


const ScoreDisplay = () => {

    const {questionNumber, questionList, score, gameOver} = useContext(QuizContext);

    return (  
        <React.Fragment>
        { 
                !gameOver ? (
                <div className="scoredisplay">

                    {questionList[questionNumber].type !== 'school' ? <p className="todayslesson">Today's Specials:</p> : <p className="todayslesson">Today's lesson: Ice-cream 101</p>}

                   <div> <span className="questionnumber">Question Number: {questionNumber +1}</span> <span className="questiontype"> {questionList[questionNumber].type}</span></div>
                <p className="score">You have answered correctly {score} out of {questionNumber}</p>
                </div>
                            ) : null
         }
        </React.Fragment>

    );
}
 
export default ScoreDisplay