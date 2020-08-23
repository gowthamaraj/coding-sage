import React from "react";
import Home from './navbar/Home'
import About from './navbar/About'
import Courses from './navbar/Courses'
import Tutors from './navbar/Tutors'
import Contact from './navbar/Contact'
import logo from '../assets/sage.png'
function Navbar(props) {
  return (
    <nav class="bg-dark sage">
      <ul class="nav flex-column rounded">
      <img class="mb-5" src={logo} alt="Logo" style={{"width":"5rem","height":"5rem"}} />
        <Home></Home>
        <About></About>
        <Courses></Courses>
        <Tutors></Tutors>
        <Contact></Contact>
      </ul>
    </nav>
  );
}

export default Navbar;
