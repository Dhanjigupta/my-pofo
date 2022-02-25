import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
const ErrorPage= () =>{
    return(
     <div>
       <header>
        <Header />
       </header>
 
     <section className="home_skill">
        <div className="container">
            <div className="page_title">
                <h3>404 <span> Error </span></h3>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12" style={{minHeight:'180px'}}>
                <p className="text-center">Oops somethig wend wrong, Please try again.</p>
                </div>
            </div>
       </div>
    </section>

    <Footer />

    </div>
    )
}

export default ErrorPage;   