import React from 'react'; 
import Header from '../../component/Header';
import Footer from '../../component/Footer';
const ProjectPage=()=>{
    return(
     <div>
      <header>
         <Header />
      </header>
      <section className="home_skill" style={{paddingBottom:'80px'}}>
        <div className="container">
            <div className="page_title">
                <h3>My <span>Work</span></h3>
                <p>List of my latest works.</p>
            </div>
        </div>
        <div id="portfolio" className="portfolio container">  
            <div className="product_gallery"> 
                <div class="row portfolio-container">

                      <div className="col-lg-4 col-md-6 portfolio-item">
                           <div className="portfolio-wrap">
                             <div className="product_content">
                                <img src="asset/image/mountains.jpg" className="img-fluid" alt='Dhananjay'/>
                                <div className="portfolio-info">
                                <div className="portfolio-links">
                                    <a href="#" data-gall="portfolioGallery" className="venobox" title="App 1">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                    &nbsp;&nbsp;
                                    <a href="#" title="More Details">
                                        <i className="fa fa-link"></i>
                                    </a>
                                </div>
                                </div>
                                <h4>Project 1</h4>
                               </div>  
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item">
                           <div className="portfolio-wrap">
                             <div className="product_content">
                                <img src="asset/image/mountains.jpg" className="img-fluid" alt='Dhananjay'/>
                                <div className="portfolio-info">
                                <div className="portfolio-links">
                                    <a href="#" data-gall="portfolioGallery" className="venobox" title="App 1">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                    &nbsp;&nbsp;
                                    <a href="#" title="More Details">
                                        <i className="fa fa-link"></i>
                                    </a>
                                </div>
                                </div>
                                <h4>Project 2</h4>
                               </div>  
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item">
                           <div className="portfolio-wrap">
                             <div className="product_content">
                                <img src="asset/image/mountains.jpg" className="img-fluid" alt='Dhananjay'/>
                                <div className="portfolio-info">
                                <div className="portfolio-links">
                                    <a href="#" data-gall="portfolioGallery" className="venobox" title="App 1">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                    &nbsp;&nbsp;
                                    <a href="#" title="More Details">
                                        <i className="fa fa-link"></i>
                                    </a>
                                </div>
                                </div>
                                <h4>Project 3</h4>
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
export default ProjectPage;