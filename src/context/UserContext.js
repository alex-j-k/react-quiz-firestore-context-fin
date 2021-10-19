import React, {createContext, useState, useEffect} from 'react';
import { onSnapshot, collection, setDoc, addDoc,  doc, deleteDoc, query, where, getDocs } from 'firebase/firestore';
import db from '../firebase/FireBase';


export const UserContext = createContext();

const UserContextProvider = (props) => {



// STATE // STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE// STATE

    //Username for global display from userform submit
    const [globalUserName, setGlobalUserName] = useState();

// Global ID // Global ID // Global ID // Global ID // Global ID // Global ID // Global ID // Global ID // Global ID // Global ID // Global ID // Global ID // Global ID 
    const [globalUserNameID, setGlobalUserNameID] = useState();


   

    //LIST OF ANSWERS GIVEN BY USER
    const [markingList, setMarkingList] = useState();

    //ALL DB USERS

    const [databaseList, setDatabaselist] = useState([]);

    //INDIVIDUAL ASPECTS OF USER
    const [userNameInput, setUserName] = useState();
    const [age, setAge] = useState();
    const [states, setStates] = useState();
    const [country, setCountry] = useState();
    const [pet, setPet] = useState();
    const [colour, setColour] = useState();
    const [pizza, setPizza] = useState();
//COMBINED USER OBJECT
    const [user, setUser] = useState();

//IS USERNAME AVAILABALE
    const [userNameAvailable, setUserNameAvailable] = useState(false);

//delete global use asnd id on start
const handleStart = () => {
    setGlobalUserName(null);
    setGlobalUserNameID(null);

}


//USER FORM SUBMIT//USER FORM SUBMIT//USER FORM SUBMIT//USER FORM SUBMIT//USER FORM SUBMIT//USER FORM SUBMIT//USER FORM SUBMIT//USER FORM SUBMIT//USER FORM SUBMIT
    
//OON FORM SUBMIT - COMBINE INFO TO CREATE USER
const handleSubmitCreateUser =(e) => {
    e.preventDefault();
    setUser({userName: userNameInput, age, states, country});
    //WRITE INFO TO THE DB //WRITE INFO TO THE DB //WRITE INFO TO THE DB //WRITE INFO TO THE DB //WRITE INFO TO THE DB //WRITE INFO TO THE DB //WRITE INFO TO THE DB
    const collectionRef = collection(db, 'users');
    const payload = {userNameInput, age, states, country};
     addDoc(collectionRef, payload);
}

// EXTRA INFO TO  DB// EXTRA INFO TO  DB// EXTRA INFO TO  DB// EXTRA INFO TO  DB// EXTRA INFO TO  DB// EXTRA INFO TO  DB// EXTRA INFO TO  DB// EXTRA INFO TO  DB

// const handleExtraInfoClick = async () => {
//     const docRef = doc(db, 'users', globalUserNameID );
//     const payload = {...user, pet, colour, pizza}
//   await setDoc(docRef, payload);
// }

const handleExtraInfoClick = async () => {
    const docRef = doc(db, 'users', globalUserNameID );
    const payload = {...user, pet, colour, pizza}
  await setDoc(docRef, payload);
}

//


//ON USER CHANGE - CREATE GOLBAL USERNAME
useEffect(() => {
    setGlobalUserName(userNameInput)
}, [user])


//SET ALL DB INFO IN STATE //SET ALL DB INFO IN STATE//SET ALL DB INFO IN STATE//SET ALL DB INFO IN STATE//SET ALL DB INFO IN STATE//SET ALL DB INFO IN STATE

useEffect(() => {
 onSnapshot(collection(db, 'users'), (snapshot) => {
 console.log(snapshot.docs.map(user => user.data()))

setDatabaselist(snapshot.docs.map(user => ({   ...user.data(), id:user.id        })           ))
console.log(databaseList);
 });
}, [userNameInput])

//CHECK USERNAME AVAIBABLE//CHECK USERNAME AVAIBABLE//CHECK USERNAME AVAIBABLE//CHECK USERNAME AVAIBABLE//CHECK USERNAME AVAIBABLE//CHECK USERNAME AVAIBABLE

// useEffect(() => {
//   for (var i =0; i < databaseList.length; i++){
//     if (databaseList[i].userName == userNameInput) {
//         setUserNameAvailable(false); break
//     } else { setUserNameAvailable(true) }
//   }
// }, [userNameInput, databaseList])
useEffect(() => {
    for (var i = 0; i < databaseList.length; i ++){
         if (databaseList[i].userName == userNameInput) {
             console.log('y'); setUserNameAvailable(false); break} else {
                 setUserNameAvailable(true);
             }
     }
 }, [userNameInput])




//Loop db in state to find ID ref for user    //Loop db in state to find ID ref for user    //Loop db in state to find ID ref for user

 useEffect(() => {
    databaseList.forEach(user => {
     if (globalUserName && user.userNameInput == globalUserName){
         setGlobalUserNameID(user.id); 
         console.log('yyy');
         console.log('yyy');
         console.log(user.userNameInput);
         console.log(globalUserName);
         console.log('yyy');
         
         console.log('yyy');
     } 
 })
 }, [databaseList])
 //datebaseList

 //setusername from DB , not state

 useEffect(() => {
    databaseList.forEach(user => {
         if (user.id == globalUserNameID)
         {setGlobalUserName(user.userName)}
    //  } 
 })
 }, [])
 //gloablUsernameID

//RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN //RETURN 
return (

    <UserContext.Provider value={{
        userNameInput,
        setUserName,
        age,
        setAge,
        states,
        setStates,
        country, 
        setCountry,
        pet,
        setPet,
        colour,
        setColour,
        pizza, 
        setPizza,
        handleSubmitCreateUser,
        userNameAvailable,
        globalUserName,
        handleExtraInfoClick,
        globalUserNameID,
        handleStart,
    }}>
        {props.children}
    </UserContext.Provider>
)

}

export default UserContextProvider