import React from "react";

function About(props) {
  return (
    <div class="m-3 p-2" style={{backgroundColor:"#1e2e57",color:"white"}}>
      <em>Basic info About the Institute</em>
      <h3>Innovative and practical driven approach In Training</h3>
      <p>
        Coding sage specializes in providing state-of-the-art technical training
        on all popular IT/ITES technologies offered globally. The world class
        training at Coding sage is offered through several innovative learning
        methods and delivery models to cater the unique requirements of a global
        customer base.
      </p>
      <p>
        Coding sage is home to several global certified trainers who are subject
        matter experts in their respective domains. We're the fastest growing
        IT/ITES training provider in India with the widest range of IT and non
        IT courses under one roof. Over the years, Coding sage has been
        providing IT training to the global workforce from several Fortune 500
        companies and governments worldwide.
      </p>
      <hr />

    <div class="card-columns flex-wrap">
     

    <div
        class="card text-white bg-dark mb-3"
        style={{ "max-width": "18rem"}}
      >
        <div class="card-header">Coding Sage Objectives</div>
        <div class="card-body">
          <h5 class="card-title">Objectives</h5>
          <div class="card-text">
            <ul>
              <li>Practical training to students by working professionals from leading Software companies.</li>
              <li>Get trained by working on real-time projects.</li>
              <li>Interactive sessions makes complete interactivity between the student and the trainer.</li>
              <li>Flexible Timings on Weekday, Weekend & Fast-track sessions.</li>
              <li>Soft skills to build your technical interview skills.</li>
            </ul>
          </div>
        </div>
      </div>


      <div
        class="card text-white bg-dark mb-3"
        style={{ "max-width": "18rem" }}
      >
        <div class="card-header">Projects</div>
        <div class="card-body">
          <h5 class="card-title">Guided Projects</h5>
          <div class="card-text">
            Guided Projects are to learn job-relevant skills and industry tools.
            Guided Projects are self-paced, require a smaller time commitment,
            and provide practice using tools in real-world scenarios, so you can
            build the job skills you need, right when you need them.
          </div>
        </div>
      </div>

      <div
        class="card text-white bg-dark mb-3"
        style={{ "max-width": "18rem" }}
      >
        <div class="card-header">Support</div>
        <div class="card-body">
          <h5 class="card-title">Academic support</h5>
          <p class="card-text">
            Academic support where you can request feedback
            through our portal to the tutors. You will be assisted throughout your journey.
          </p>
        </div>
      </div>

      <div
        class="card text-white bg-dark mb-3"
        style={{ "max-width": "18rem" }}
      >
        <div class="card-header">Key Features & Facilities</div>
        <div class="card-body">
          <h5 class="card-title">We provide</h5>
          <div class="card-text">
            <ul>
              <li>1-1 tutoring</li>
              <li>Individual attention for each student with limited class strength per batch</li>
              <li>Up-to-date, industry-relevant course curriculam</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="card text-white bg-dark mb-3"
        style={{ "max-width": "18rem" }}
      >
        <div class="card-header">Certification</div>
        <div class="card-body">
          <h5 class="card-title">Certification on completion</h5>
          <div class="card-text">
            <ul>
              <li>An assessment will be Evaluated on the basis of an online test and Project performance at the end of the course.</li>
              <li>Performance of Project Evaluation is 30% and that of test is 70%. 50% is the Mandatory minimum score in online test is required.</li>
              <li>On completion of the Assessment (Project + Test) with a minimum of 70% marks We will be issued a certificate of successful completion from BIX.</li>
              <li>re-attempts will be provided to clear online test, in case of the candidate scores less than 70%.</li>
              <li>A Participation certificate will be issued, if the candidate does not score above 70% in the Assessment.</li>
              <li>A Soft copy certificate will be issued to the participant, on completion of the course.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
}

export default About;
