import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserContext } from './UserContext';
///
import { onSnapshot, collection, setDoc, addDoc,  doc, deleteDoc, query, where, getDocs, updateDoc } from 'firebase/firestore';
import db from '../firebase/FireBase';
import { FirebaseError } from 'firebase/app';
///


export const QuizContext = createContext();

const QuizContextProvider = (props) => {

    const {globalUsername, globalUserNameID, databaseList} = useContext(UserContext);




//ON STARTUP, GAMOEVER IS TRUE, CLICK START TO SET GAMOVER TO FALSE
    const [gameOver, setGameOver] = useState(true);
//PUSH ANSWER BUTTON TO SELECT ANSWER BUTTON - CHANGE CLASS - HIGHLIGHT SELECTED AND DISABLE BUTTONS
    const [selected, setSelected] = useState();
//PUSH SUBMIT TO CHECK ANSWER
     const [submitted, setSubmitted] = useState(false);
    // const [userAnswer, setUserAnswer] = useState();
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [correct, setCorrect] = useState(false);

    const [resultsArray, setResultsArray] = useState([]);

    const [allTimeResultsArray, setAllTimeResultsArray] = useState([]);
    

 const questionList = [
 {id:1, type: 'Multiple Choice' , text: 'Choose your answer' , answers: ['q1','q2','q3','q4'] , correctAnswer: 'q1'  },
 {id:2, type: 'Multiple Choice' , text: 'Choose your answer' , answers: ['q5','q6','q7','q8'] , correctAnswer: 'q5'  },
 {id:3, type: 'Multiple Choice' , text: 'Choose your answer' , answers: ['q9','q10','q11','q12'] , correctAnswer: 'q9'  },
 {id:4, type: 'Multiple Choice' , text: 'Choose your answer' , answers: ['q13','q14','q15','q16'] , correctAnswer: 'q16'  },
 {id:5, type: 'Multiple Choice' , text: 'Choose your answer' , answers: ['q17','q18','q19','q20'] , correctAnswer: 'q20'  },

 {id:6, type: 'dragndrop' , text: 'Place in order from...' , toptext: 'Most', bottomtext:'Least',  answers: ['50','25','100','75'] , correctAnswer: ['100','75','50','25']   },
 {id:7, type: 'dragndrop' , text: 'Place in order from...' , toptext: 'Tallest', bottomtext:'Shortest',  answers: ['Mauna Kea','Denali','Kilamanjaro','Mt Blanc'] , correctAnswer: ['Denali','Kilamanjaro','Mt blanc','Mauna Kea']   },

 ]


//SET GAME OVER AT START OR ONCE ALL QUESTIONS FINISHED
 const clickStartHandler = () => {
    setGameOver(false);
 }

//ON SELECT ANSWER - DISABLE BUTTONS AND SETSELECTED
const lockInAnswer = (e) => {
    setSelected(e.target.value);
    console.log(e.target.value)
}

//ON SUBMIT CHECK ANSWER - SHOW CORRECT ANSWER - CALCULATE SCORE -  DISPLAY NEXT BUTTON
const checkAnswer =()=> {
    setSubmitted(true);


    if (selected == questionList[questionNumber].correctAnswer){
        setScore(score + 1); 
        setCorrect(true);
    }
}

                    



//ON NEXT - QUESTION NUMBER +1 - RESET selected, submitted, 

const nextClick = () => {
    setQuestionNumber(questionNumber+1);
    setSelected(null);
    setSubmitted(null);
    setCorrect(false);
    let prevarr = allTimeResultsArray;
    setAllTimeResultsArray([...prevarr, resultsArray])


    if (questionNumber == questionList.length - 1 ) {setGameOver(true)}

}

//Set reults array on submit when correct updates

useEffect(() => {
    setResultsArray([{num: questionNumber+1, res: correct }])
}, [submitted])


////////after this

// const handleResultsInfoClick = async () => {
//     const docRef = doc(db, 'users', globalUserNameID );
//     const payload = {results: [...results, resultsArray]}
//   await setDoc(docRef, payload);
// }


// const handleResultsInfoClick = async () => {
    useEffect(() => {

   const docRef = doc(db, 'users', globalUserNameID );
    updateDoc(docRef, {[questionNumber +1]: resultsArray})
}, [resultsArray])
// }

useEffect(() => {

    const asd = db.collection('users');
    console.log(asd);
    console.log(asd);
    console.log(asd);
    console.log(asd);
    console.log(asd);
    console.log(asd);
    console.log(asd);
    console.log(asd);
    console.log(asd);
 }, [resultsArray, gameOver])

////b4 this


    return (
        <QuizContext.Provider
        value={{
            gameOver,
            setGameOver,
            questionNumber,
            questionList,
            clickStartHandler,
            score,
            lockInAnswer,
            selected,
            setSelected,
            submitted,
            correct,
            checkAnswer,
            nextClick,
            resultsArray,
        }}
        >
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider