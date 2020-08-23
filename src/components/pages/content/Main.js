import React from "react";

import HomePicture from '../../../assets/HomePicture.png'
function Main(props) {
  return (
    <div class="p-2 m-1 justify-content-center" style={{backgroundColor:"#1e2e57",color:"white",width:'90%'}}>
      <h1>CODING SAGE</h1>
    
      <p>
        The Coding Sage is your one-stop solution for all your fun learning
        needs. With a pool of students based both in India and in the
        international shores, we have we have certainly come a long ways since
        we started our journey. 
        </p>
        <p>
        We offer an extensive basket of courses that
        include web design and development, data science and machine leraning,
        Ethical Hacking, AWS and much more. 
        </p>
        <p>
            We are an Indian based online
        training institute, with a difference. In today's times, we comprehend
        that it is not simply suffice to have a good-looking promotions and ads.
        What we need is a place where we have fun in learning and able to have
        many projects at the end of your completion. Industry-ready is the term
        we love to use.
      </p>
        <button type="button" class="btn btn-primary">
          Know more
        </button>
      <img class="m-5" src={HomePicture} alt="Logo" style={{width:'300px',height:"400px", display:"block"}} />
      <div>


       </div>
    </div>
  );
}

export default Main;
