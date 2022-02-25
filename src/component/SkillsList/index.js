import React from 'react';
const SkillsList = ()=>{
return(
    <>  
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
            <div className="skill_brand_container">
                <img src="asset/image/brands-html5.svg" alt="HTML5"/>
                <p>HTML5</p>
            </div>
        </div>
        
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
            <div className="skill_brand_container">
                <img src="asset/image/brands-css3.svg" alt="CSS3"/>
                <p>CSS3</p>
            </div>
        </div>
        
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
            <div className="skill_brand_container">
                <img src="asset/image/brands-node-js.svg" alt="Node Js"/>
                <p>Node Js</p>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
            <div className="skill_brand_container">
                <img src="asset/image/express.svg" alt="Express Js"/>
                <p>Express Js</p>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
            <div className="skill_brand_container">
                <img src="asset/image/brands-react.svg" alt="React Js"/>
                <p>React Js</p>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
            <div className="skill_brand_container">
                <img src="asset/image/mongodb.svg" alt="Mongo Db"/>
                <p>MongoDB</p>
            </div>
        </div>
        
    </>
 )
}

export default SkillsList;
