import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Courses from './components/pages/Courses'
import Tutor from './components/pages/Tutor'
import Contact from './components/pages/Contact'

function App() {
  return (
    <div class="d-flex">
        <Navbar></Navbar>
        <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/Courses' component={Courses} />
              <Route path='/tutor' component={Tutor} />
              <Route path='/contact' component={Contact} />
        </Switch>
    </div>  
  );
}

export default App;
