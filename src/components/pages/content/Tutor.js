import React from 'react'

function Tutor(props){
    return(
        <div class="card m-3" style={{"width": "18rem"}}>
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Gowthamaraj</h5>
    <p class="card-text">I am a self-taught Software Engineer who loves building software applications. Currently, I am working in Web development and have found it to be very exciting.
I believe that “I hear and I forget. I see and I remember. I do and I understand”. Hence, I am always working on new projects to learn new things in the field.
Skills: Python, JavaScript, React.js, Nodejs, PHP, Flask, SQL, MongoDB. </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Skills: </li>
    <li class="list-group-item">Experience: </li>
    <li class="list-group-item">Github: </li>
  </ul>
</div>
    )
}

export default Tutor