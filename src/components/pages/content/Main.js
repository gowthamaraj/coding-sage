import React from "react";

function Main(props) {
  return (
    <div class="p-2" style={{backgroundColor:"#1e2e57",color:"white"}}>
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
      <div>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Know more
</button>

<div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModal3Label" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModal3Label">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


       </div>
    </div>
  );
}

export default Main;
