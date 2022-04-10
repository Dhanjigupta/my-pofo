import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProjectItem from "./ProjectItem";
const projectUrl = "https://admin-mypofo.herokuapp.com/my-all-projects";
const Products =()=>{
    const [projects, SetProjects] = useState([]);
    useEffect(()=>{
        axios
        .get(`${projectUrl}`)
        .then((response) =>{
            SetProjects(response.data.data);
        })
        .catch((error)=> console.log(error));
    },[]);
    return(
        <>
          {projects.map(project => <ProjectItem project={project} /> )}
        </>
    )
}

export default Products;


 
 

                       

                        