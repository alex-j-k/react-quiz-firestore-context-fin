import React, {useState, useContext} from 'react';
import { QuizContext } from '../../context/QuizContext';
import Next from '../buttons/Next';
import Submit from '../buttons/Submit';
import Unlock from '../buttons/Unlock';

import MyMov from '../../videos/MyMov.mp4' ;
import ReactPlayer from 'react-player';




const MultipleChoice = () => {

    const {questionNumber, 
        questionList, 
        lockInAnswer,
        selected,
        submitted,
        correct,
        nextClick,
                    } = useContext(QuizContext);

const[mov, setMov] = useState(false);


    return ( 
    <div className="multiplechoice">
            <div class="marvel-device iphone8plus black">
                    <div class="top-bar"></div>
                    <div class="sleep"></div>
                    <div class="volume"></div>
                    <div class="camera"></div>
                    <div class="sensor"></div>
                    <div class="speaker"></div>
                    <div class="screen">

                    <div className="screenface">

                    {  mov?  <ReactPlayer id='mov' url={MyMov} playing height='80%' width='300%' top='0px' position='absolute'  onEnded={nextClick} style={{opacity: 1, transition: "opacity, 2s ease-in-out"}}/> :null}     
                    
                    <p className='questiontext'>{questionList[questionNumber].text}</p>       
        
                    <Unlock></Unlock>

                    { !mov ? questionList[questionNumber].answers.map(answer => ( 

                    <React.Fragment>


                            <button
                            className=
                            {`multiplechoicebutton ${selected == answer ? 'selected' :''} 
                            // ${selected ? 'disabled' : ''} 
                            // ${submitted && answer == questionList[questionNumber].correctAnswer ? 'correct' : submitted && answer == selected ? 'incorrect' : ''}`}    

                            key={answer} value={answer} onClick={lockInAnswer}
                            >{answer}</button> 

                    </React.Fragment>
                    )
                    ) : null}                  

                    <Submit></Submit>
                    <Next setMov={setMov}></Next>
                  
                    </div>
                    </div>
                    <div class="home"></div>
                    <div class="bottom-bar"></div>
            </div>
    </div> 
    );
}
 
export default MultipleChoice;