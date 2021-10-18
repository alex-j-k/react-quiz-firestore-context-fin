import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FrontPage from './components/FrontPage';
import React from 'react';
import FormFrontPage from './components/form/FormFrontPage';
import UserContextProvider from './context/UserContext';
import Colours from './components/form/Colours';
import Pets from './components/form/Pets';
import Pineapple from './components/form/Pineapple';
import Quiz from './components/Quiz';



function App() {
  return (
    <Router>

        <UserContextProvider>
          
                    <div className="App">
                    <Switch>
                          <Route exact path='/'>
                              <FrontPage></FrontPage>
                          </Route>
                          <Route exact path='/formfrontpage'>
                              <FormFrontPage></FormFrontPage>
                          </Route>
                          <Route exact path='/pets'>
                            <Pets></Pets>
                          </Route>
                          <Route exact path='/colours'>
                            <Colours ></Colours>
                          </Route>
                          <Route exact path='/pineapple'>
                            <Pineapple ></Pineapple>
                          </Route>
                          <Route exact path='/quiz'>
                            <Quiz></Quiz>
                          </Route>
                    </Switch>
                    </div>

          </UserContextProvider>

    </Router>
  );
}

export default App;
