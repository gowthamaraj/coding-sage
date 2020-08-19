import React from "react";

function Contact(props) {
  return (
    <div class="" style={{"width": "90%",}}>
      <div class="container contact-form" style={{"background":"-webkit-linear-gradient(left, #0072ff, #00c6ff)"}}>
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form>
                <h3>Drop Us a Message</h3>
               <div class="row">
                    <div class="col-md">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{"width": "100%", "height": "150px"}}></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
<hr/>
    </div>
  );
}

export default Contact;