import React from "react";
// import TutorCard from './content/Tutor'
function Tutor(props) {
  let data = {'a':'Python Data-Science  HTML CSS Flask MongoDB R-basics Pandas Web-Scraping Streamlit'.split(' '),
'p':'Python Data-Science Pandas Web-Scraping Streamlit HTML CSS Flask MongoDB R-basics'.split(' '),
'g':'React Redux Python C C++ JAVA PHP MySQL MongoDB R Perl Dart HTML5 CSS3 JS NodeJS Express Bootstrap4 OpenCV Flask NumPy Scikit-learn Pandas MATLAB shell scripting'.split(' ')
}
  return (
    <div class="m-3 p-2" style={{backgroundColor:"#1e2e57",color:"black"}}>
      <h3>Our Best Tutors</h3>
      <hr/>

      <div class="card-columns flex-wrap">
      <div class="card m-3" style={{"width": "18rem"}}>
  <img src="https://avatars0.githubuserconten.com/u/25692143?s=460&u=5ce1a2e0acb75c873ba1fc4edebd12fb5a101fd2&v=4" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Gowthamaraj</h5>
    <p class="card-text"><em>I am a self-taught Software Engineer who loves building software applications. Currently, I am working in Web development and have found it to be very exciting.
I believe that “I hear and I forget. I see and I remember. I do and I understand”. Hence, I am always working on new projects to learn new things in the field.
Skills: Python, JavaScript, React.js, Nodejs, PHP, Flask, SQL, MongoDB. </em></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Skills: {data['g'].map((item)=>{
      return <span class="badge badge-dark m-1">{item}</span>
      }
      )}</li>
    <li class="list-group-item">Experience: <span class="badge badge-success">2+ years</span></li>
    <li class="list-group-item">Github: <a class="bg-info text-white" href="https://github.com/gowthamaraj?tab=repositories">https://github.com/gowthamaraj?tab=repositories</a></li>
  </ul>
</div>


      <div class="card m-3" style={{"width": "18rem"}}>
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Poonam Singh</h5>
    <p class="card-text"><em>I have passion and love to make solutions to real world problems
using Data science and AI.</em>
 </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Skills: {data['p'].map((item)=>{
      return <span class="badge badge-dark m-1">{item}</span>
      }
      )}</li>
    <li class="list-group-item">Experience: <span class="badge badge-success">3+ years</span></li>
  </ul>
</div>


<div class="card m-3" style={{"width": "18rem"}}>
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Aishwarya</h5>
    <p class="card-text"><em>I am an avid problem solver. I have passion and love to make
solutions to real world problems using Data science and AI.</em></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Skills: {data['a'].map((item)=>{
      return <span class="badge badge-dark m-1">{item}</span>
      }
      )}</li>
    <li class="list-group-item">Experience: <span class="badge badge-success">3+ years</span></li>
  </ul>
</div>

      </div>
      
    </div>
  );
}

export default Tutor;