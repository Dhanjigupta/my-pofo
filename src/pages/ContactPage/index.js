import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
var net = require('net-browserify')
var nodemailer = require('nodemailer');
 
const ContactPage=()=>{
 const onSubmitHandler = (event) => {
event.preventDefault();
        
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Dkgsigner1@gmail.com',
      pass: 'Dkg123@gmail'
    }
  });
  
  var mailOptions = {
    from: 'test@gmail.com',
    to: 'mr.dhanjigupta@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
        
};

    return(
      <div>
       <header>
          <Header />
       </header>
 
      <section className="home_skill">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                     
                    <h3>Contact Us</h3>
                    <p>If you liked my profile so far, drop me a message and we'll discuss how I can be useful to your project. Or feel free to just say hi. I like that too.</p>

                    <ul className="list-unstyled contact_info">
                        <li><span><i className="fa-solid fa-location-dot"></i></span> Bengaluru (India)</li>
                        <li><span><i className="fa fa-phone"></i></span> Call on : +91 7905041491</li>
                        <li><span><i className="fab fa-whatsapp"></i></span> WhatsApp Number : +91 9525037744</li>
                        <li><span><i className="far fa-envelope"></i></span> Email : mr.dhanjigupta@gmail.com</li>
                        <li><span><i className="fa-brands fa-chrome"></i></span> Website : imdhananjay.com</li>
                    </ul> 
                </div>
                <div className="col-lg-5 ">
                    <div className="contact_form">
                         <h4>Get in Touch</h4>
                         <p>Please feel free to drop a line below.</p>

                         <form onSubmit={onSubmitHandler} className="mt-4">
                            <div className="form-group" >
                                <input style={{color:'white'}} type="text" name="Name" required className="form-control" placeholder="Full Name"/>
                            </div>
                            <div className="form-group">
                                <input style={{color:'white'}} type="email" name="Email" required className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input style={{color:'white'}} type="number" name="Mobile" maxLength="10"  required className="form-control" placeholder="Phone Number"/>
                            </div>
                            <div className="form-group">
                                <input style={{color:'white'}} type="text" name="Subject" required className="form-control" placeholder="Subject"/>
                            </div>
                            <div className="form-group"> 
                                <textarea style={{color:'white'}} name="Message"  className="form-control" cols="30" rows="4"  placeholder="Message"></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-warning btn-lg">Send</button>
                            </div>

                          </form>  
                    </div>
                </div>
            </div> 
        </div>
    </section>


    <Footer />

    </div>
    )
}
export default ContactPage;