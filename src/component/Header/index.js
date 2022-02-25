import React from 'react';
import Navbar from '../../component/Navbar';
const Header=()=>{
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light show_all" id="navbar">
         <div className="container">
            <a style={{color:'#FFC13E'}} className="navbar-brand" href="/">Dhananjay</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Navbar/>
            </div>
         </div>
        </nav>
      </>
    )
}

export default Header;

