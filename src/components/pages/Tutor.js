import React from "react";
import TutorCard from './content/Tutor'
function Tutor(props) {
  return (
    <div class="m-3">
      <em>Basic info About the Institute</em>
      <h3>Popular Courses</h3>
      <hr/>
      <div class="d-flex flex-wrap">
      <TutorCard></TutorCard>
      <TutorCard></TutorCard>
      <TutorCard></TutorCard>
      </div>
      
    </div>
  );
}

export default Tutor;