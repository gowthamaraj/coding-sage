import React from "react";
import Card from './content/Card'
function Courses(props) {
  let data = [
    {url:"https://pluralsight.imgix.net/paths/python-7be70baaac.png",name:"Python",items:["",'','','','']},
    {url:"https://content.techgig.com/photo/76640646/5-companies-hiring-data-scientist-in-india.jpg?195589",name:"Data Science",items:["",'','','','']},
    {url:"https://img-a.udemycdn.com/course/750x422/548278_b005_9.jpg",name:"Web dev",items:["",'','','','']},
    {url:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200710234318/Why-Cloud-Computing-is-Booming-in-the-Market.png",name:"Cloud Computing",items:["",'','','','']},
    {url:"https://assets.skyfilabs.com/images/blog/top-online-courses-to-learn-ethical-hacking.webp",name:"Ethical Hacking",items:["",'','','','']},
    {url:"https://img-a.udemycdn.com/course/750x422/2564962_073e_3.jpg",name:"MERN stack",items:["",'','','','']},
] 
  return (
    <div class="m-3 p-2" style={{backgroundColor:"#1e2e57",color:"black"}}>
      <h3>Popular Courses</h3>
      <hr/>
      <div class="d-flex flex-wrap">
      <Card data={data[0]}></Card>
      <Card data={data[1]}></Card>
      <Card data={data[2]}></Card>
      <Card data={data[3]}></Card>
      <Card data={data[4]}></Card>
      <Card data={data[5]}></Card>
      </div>
      
    </div>
  );
}

export default Courses;