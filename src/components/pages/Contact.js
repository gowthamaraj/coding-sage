import React from "react";
import axios from '../../api/api'
class Contact extends React.Component {

    sendData = (e)=>{
        e.preventDefault()
        if(e.target['name'].value!=='' && e.target['email'].value!=='' && e.target['number'].value!=='' && e.target['message'].value!==''){
        axios.post('/contact/data',{
            name: e.target['name'].value,
            email: e.target['email'].value,
            number: e.target['number'].value,
            message: e.target['message'].value,
          }).then((data)=>{
              console.log(data.data)
              document.getElementById('data').innerHTML = `<h4 class="bg-success text-white text-center"> Message sent </h4>`
            })
        }
        else{
            document.getElementById('data').innerHTML = `<h4 class="text-danger text-center">*** Please complete all the fields. </h4>`
        }
            e.target.reset()
            
    }

    render(){
  return (
    <div class="m-0" style={{"width": "90%",}}>
            <div id='data'></div>
      <div class="container contact-form" style={{"background":"-webkit-linear-gradient(left, #0072ff, #00c6ff)"}}>
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form onSubmit={this.sendData}>
                <h3 style={{color:"orange"}}>Drop Us a Message</h3>
               <div class="row">
                    <div class="col-md">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" placeholder="Your Name *" required/>
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control" placeholder="Your Email *" required/>
                        </div>
                        <div class="form-group">
                            <input type="number" name="number" class="form-control" placeholder="Your Phone Number *" required/>
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message"  style={{backgroundColor:"orange"}}/>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-group">
                            <textarea name="message" class="form-control" placeholder="Your Message *" style={{"width": "100%", "height": "150px"}} required></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
<hr/>
    </div>
  );}
}

export default Contact;