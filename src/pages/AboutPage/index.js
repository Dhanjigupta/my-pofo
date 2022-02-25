import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import SkillsList from '../../component/SkillsList';
import SkillProgress from '../../component/SkillProgress';
import WorkExperience from '../../component/WorkExperience';
const AboutPage= () =>{
    return(
     <div>
       <header>
          <Header />
       </header>
 
     <section className="home_skill">
        <div className="container">
            <div className="page_title">
                <h3>About <span>Me</span></h3>
                <p>Learn more about me.</p>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                     <p className="text-justify">
                       I am an experienced developer, having good knowledge in backend architecture and worked on multiple core technologies like (Node.js, Express.js, React.js/redux, mongodb and many more). Experience in building complete Web Application Development using MERN Stack.
                      <br/><br/>
                      My mission in life is to use my experience combined with technical abilities and technical know-how to benefit other people and organisations.
                      <br/>
                      Outside of programming, My favourite pastimes are acquiring knowledge, Watching movies, reading books, Swimming and travel to explore.
                     </p> 

                     <ul style={{listStyle:'none', paddingLeft:'0px'}}>
                        <li><i style={{color:"#ffc13e"}} class="fa fa-chevron-right"></i> <strong>Highest Qualification:</strong> MCA (Master of Computer Application)</li>
                        <li><i style={{color:"#ffc13e"}} class="fa fa-chevron-right"></i> <strong>Experience:</strong> 5+ Years</li>
                        <li><i style={{color:"#ffc13e"}} class="fa fa-chevron-right"></i> <strong>Speciality:</strong> MERN Full Stack Development</li>
                        <li><i style={{color:"#ffc13e"}} class="fa fa-chevron-right"></i> <strong>Email:</strong> mr.dhanjigupta@gmail.com</li>
                        <li><i style={{color:"#ffc13e"}} class="fa fa-chevron-right"></i> <strong>Mobile:</strong> 9525037744</li>
                        <li><i style={{color:"#ffc13e"}} class="fa fa-chevron-right"></i> <strong>Website:</strong> imdhananjay.com </li>
                    </ul>
               </div>
               <div className="col-lg-6">
                   <div class="progress_main_container">
                     <SkillProgress />
                    </div>
               </div>     

              </div>
            
              <div className="row skill_brand_wrapper"> 
                <SkillsList />
              </div>

             {/* OTHER SKILL SET START */}
              
             <div class="interests">
                <br/><br/>
                <div class="section-title">
                   <h5>Other Technical Skills</h5>
                </div>
                <br/><br/>

                <div class="row">
                
                <div class="col-lg-3 col-md-4">
                    <div class="icon-box">
                    <i class="fa-brands fa-bootstrap" style={{color:'#8511f7'}}></i>
                    <h3>Bootstrap</h3>
                    </div>
                </div>

                <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
                    <div class="icon-box">
                    <i class="fa-brands fa-js-square" style={{color:'#efd81d'}}></i>
                    <h3>Javascript / ES6</h3>
                    </div>
                </div>

                <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box">
                    <i class="fab fa-php" style={{color:'#777bb3'}}></i>
                    <h3>PHP</h3>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box">
                    <i class="fa-solid fa-database" style={{color:'#e80368'}}></i>
                    <h3>MySql</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                    <i class="fa-brands fa-git" style={{color:'#e84d31'}}></i>
                    <h3>Git</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                    <i class="fa-brands fa-github" style={{color:'#b20969'}}></i>
                    <h3>Github</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                    <i class="fa-brands fa-aws" style={{color:'#ff9900'}}></i>
                    <h3>AWS</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                    <i class="fa-brands fa-jira" style={{color:'#2580f7'}}></i>
                    <h3>Jira </h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                    <i class="fa-brands fa-wordpress" style={{color:'#ff5828'}}></i>
                    <h3>Wordpress</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                    <i class="fa-solid fa-c" style={{color:'#47aeff'}}></i>
                    <h3>C & C++ Language</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                    <i class="fa-brands fa-java" style={{color:'#ffa76e'}}></i>
                    <h3>Core Java</h3>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                    <i class="fa-solid fa-c" style={{color:'#29cc61'}}></i>
                    <h3>C# / ASP.Net</h3>
                    </div>
                </div>
                </div>

                </div>

             
             {/* OTHER SKILL SET END */}
        </div>
    </section>

    <section className="client_say">
        <WorkExperience />
    </section>
 
    <Footer />

    </div>
    )
}

export default AboutPage;   