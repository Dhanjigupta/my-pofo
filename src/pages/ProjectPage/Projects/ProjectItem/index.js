import React from 'react';
// import { NavLink } from 'react-router-dom';

const ProjectItem = (props) =>{
    const {project_title, project_url, porject_image} = props.project;
    return(
        <>
         <div className="col-lg-4 col-md-6 portfolio-item">
            <a target='_blank' href={project_url} title={project_title}>
             <div className="portfolio-wrap">
               <div className="product_content" style={{backgroundColor:'#fff'}}>
                <div className="thumbnail_container">
                  <div className="thumbnail">
                     <img src={porject_image} style={{maxWidth:'100%', height:'100%'}} alt={project_title}/>
                  </div>
                </div>
               </div>  
              </div>
             </a>
          </div>
        </>
    )
}
export default ProjectItem;