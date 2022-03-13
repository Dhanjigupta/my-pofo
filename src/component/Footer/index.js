import React from 'react';
const Footer =()=>{
    return(
        <footer>
         <div className="social_media_container">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/dhananjay-kumar-sah" target="_blank" className="media_btn"> 
                <i className="fab fa-linkedin-in"></i>
                <span>Linkedin</span>
            </a> 
            <a rel="noopener noreferrer" href="https://github.com/Dhanjigupta" target="_blank" className="media_btn"> 
                <i className="fab fa-github"></i>
                <span>Github</span>
            </a>  
            <a rel="noopener noreferrer" href="https://www.facebook.com/mr.dhanjigupta/" target="_blank" className="media_btn"> 
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
            </a>
            <a rel="noopener noreferrer" href="https://twitter.com/Dhanjigupta" target="_blank" className="media_btn"> 
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
            </a>    
        </div>
        <div className="footer_buttom">
            <h3>Let's Contact</h3>
            <a href="/contact" className="btn btn-warning btn-lg">Contact</a>
            <p>Design & Developed by &hearts; Dhananjay</p>
        </div>
    </footer>
    )
}
export default Footer;