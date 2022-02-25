import React from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import SkillProgress from '../../component/SkillProgress';
import SkillsList from '../../component/SkillsList';
import WorkExperience from '../../component/WorkExperience';
const HomePage = () =>{
return(
<>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
        <div className="container">
            <a style={{color:'#FFC13E'}} className="navbar-brand" href="/">Dhananjay</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <Navbar />
            </div>
        </div>
      </nav>
    </header>
    <section className="home_carousel">
    <div className="container">
         <div className="row">
            <div className="col-lg-7">
                <div className="carousel_content">
                    <h4>Hello, I'm </h4>
                    <h1>Dhananjay Kumar Sah</h1>
                    <p>A passionate MERN Full Stack Developer</p> 
                    <a href="/about" className="btn btn-warning btn-lg">Know More</a>
                </div>
            </div>
            <div className="col-lg-5">
                <img src="asset/image/dhananjay.png" className="img-fluid"/>
            </div>
         </div>
      </div>
    </section>

    <section className="home_skill">
        <div className="container">
            
         <div class="row">
                <div class="col-lg-6">
                    <div class="title_container title_flip mb-4">
                        <div class="title_highlighter">
                            <div class="ch">
                                <div class="title_highlighter_inner_wrapp">
                                    <span class="line"></span>
                                    <span class="text">My Skills</span>
                                </div>
                            </div>
                        </div>
                        <div class="title_content_container">
                            <h3 class="title_header">
                                What is my skills included
                            </h3>
                            <p> A Mern Full Stack Developer who specializes in JavaScript Technologies across the whole stack (NodeJs, ExpressJs, ReactJs, MongoDB). Experience in building complete Web Application using MERN Stack.
                           </p>
                        </div>
                    </div>
                    <div class="progress_main_container">
                       <SkillProgress />
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="skill_img_container">
                        <img src="asset/image/project_2.jpg" class="skill_img_1"/>
                        <img src="asset/image/bg.jpg" class="skill_img_2" />
                    </div>
                </div>
            </div>


            {/* <div className="row skill_brand_wrapper"> 
               <SkillsList />
            </div> */}

        </div>
    </section> 

    <section className="client_say">
        <WorkExperience />
    </section>

    <section className="home_blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="title_container title_flip mb-4">
                        <div className="title_highlighter">
                            <div className="ch">
                                <div className="title_highlighter_inner_wrapp">
                                    <span className="line"></span>
                                    <span className="text">My Blogs</span>
                                </div>
                            </div>
                        </div>
                        <div className="title_content_container">
                            <h3 className="title_header">
                                Introduce My Blogs
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum hic nisi repellat, quisquam deleniti temporibus officia sunt sequi deserunt cupiditate saepe assumenda.</p>
                        </div>
                    </div>
 
                </div>
                <div className="col-lg-6 text-right">
                    <a href="/blog" className="btn btn-outline-warning">View All</a>
                </div>
            </div> 
            
            <div className="row">
                <div className="col-md-4">
                    <div className="blog-item">
                        <div className="blog-item-img-container">
                            <img src="asset/image/project_1.jpg" alt=""/>
                        </div>
                        <div className="blog-content-container">
                           <h5>Project Management
                             Admin Panel</h5>
                        </div>
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="blog-item">
                        <div className="blog-item-img-container">
                            <img src="asset/image/project_1.jpg" alt=""/>
                        </div>
                        <div className="blog-content-container">
                            <h5>Project Management
                                Admin Panel</h5>
                        </div>
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="blog-item">
                        <div className="blog-item-img-container">
                            <img src="asset/image/project_1.jpg" alt=""/>
                        </div>
                        <div className="blog-content-container">
                            <h5>Project Management
                                Admin Panel</h5>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>

    <Footer />
</>
)
}

export default HomePage;




