import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
const ContactPage=()=>{
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

                         <div action="" className="mt-4">
                            <div className="form-group">
                                <input type="text" name="" className="form-control " placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="" className="form-control " placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="" className="form-control " placeholder="Phone Number"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="" className="form-control " placeholder="Subject"/>
                            </div>
                            <div className="form-group"> 
                                <textarea name=""  className="form-control " cols="30" rows="4"  placeholder="Message"></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-warning btn-lg">Send</button>
                            </div>

                          </div>  
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