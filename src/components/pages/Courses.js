import React from "react";
import Card from './content/Card'
function Courses(props) {
  return (
    <div class="m-3">
      <em>Basic info About the Institute</em>
      <h3>Popular Courses</h3>
      <hr/>
      <div class="d-flex flex-wrap">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
      
    </div>
  );
}

export default Courses;