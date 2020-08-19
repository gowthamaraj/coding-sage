import React from 'react'

function Card(props){
    return(
        <div class="card m-2 flex-grow-1" style={{"maxWidth": "18rem"}}>
  <img class="card-img-top" style={{width:"100%",height:"250px"}} src={props.data.url} />
  <div class="card-body">
    <h4 class="card-title">{props.data.name}</h4>
    <p class="card-text">
        
        <li>{props.data.items[0]}</li>
        <li>{props.data.items[0]}</li>
        <li>{props.data.items[0]}</li>
        <li>{props.data.items[0]}</li>
        <li>{props.data.items[0]}</li>
    </p>
    <a href="#!" class="btn btn-secondary">Contact Us!!!</a>
  </div>
  </div>
    )
}

export default Card