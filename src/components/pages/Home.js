import React from 'react';
import Main from './content/Main'
import HomePicture from '../../assets/HomePicture.png'

function Home(props){
    return(
        <div class="d-flex m-3">
        <Main></Main>
        <img class="mb-5" src={HomePicture} alt="Logo" style={{"width":"500px","height":"500px"}} />
      </div>
    )
}

export default Home