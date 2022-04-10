import React from 'react'; 
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import ProjectsList from './Projects';
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
                <div className="row portfolio-container">
                    <ProjectsList />  
                </div>
            </div> 
        </div>
        </section>
       <Footer />
     </div>
    )
}
export default ProjectPage;