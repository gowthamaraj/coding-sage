import React from 'react'

function Card(props){
    return(
        <div class="card m-2">
  <img class="card-img-top" style={{width:"320px",height:"250px"}} src="https://pluralsight.imgix.net/paths/python-7be70baaac.png" alt="Card image cap" />
  <div class="card-body">
    <h4 class="card-title">Python</h4>
    <p class="card-text">
        
        <li>Data Science Certification Course Training</li>
        <li>11,200+ Professionals Trained</li>
        <li>97.3% Placement Record</li>
        <li>160 Hours Of Training</li>
        <li>Live Projects / Internship</li>
    </p>
    <a href="#!" class="btn btn-primary">Know More!!</a>
  </div>
  </div>
    )
}

export default Card