import React, {useContext} from 'react'
import { QuizContext } from '../context/QuizContext';
import DragNDrop from './questiontypes/DragNDrop';
import MultipleChoice from './questiontypes/MultipleChoice';
import School from './questiontypes/School';
import ScoreDisplay from './questiontypes/ScoreDisplay';
import UserBar from './UserBar';

const Quiz = () => {
    
        const {gameOver,
            setGameOver,
            questionNumber,
            questionList,
        clickStartHandler,
        } = useContext(QuizContext);
        
        
        
            return (  
                <div className="quiz">
                    <UserBar></UserBar>
                    {gameOver? <button onClick={clickStartHandler} className='start'> Start </button>: null}

                    {!gameOver ? <ScoreDisplay></ScoreDisplay> : null }

                    {!gameOver && questionList[questionNumber].type == 'school' ? 
                    <School></School>
                    : null}

                    {!gameOver && questionList[questionNumber].type == 'Multiple Choice' ? 
                    <MultipleChoice></MultipleChoice>
                    : null}

                    {!gameOver && questionList[questionNumber].type == 'dragndrop' ? 
                    <DragNDrop></DragNDrop>
                    : null}

                </div>
                );
        
    }
        export default Quiz

