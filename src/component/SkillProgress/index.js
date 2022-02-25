import React from 'react';
const SkillProgress=()=>{
    return(
        <>
        <div className="progress_container">
            <div className="progress_title_container">
                <label>Node Js</label>
                <span>95 %</span>
            </div>
            <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{width:'95%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

        <div className="progress_container">
            <div className="progress_title_container">
                <label>Express Js</label>
                <span>90 %</span>
            </div>
            <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{width:'90%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

        <div className="progress_container">
            <div className="progress_title_container">
                <label>MongoDB / MySQL</label>
                <span>90 %</span>
            </div>
            <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{width:'90%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

        <div className="progress_container">
            <div className="progress_title_container">
                <label>React Js / Redux</label>
                <span>85 %</span>
            </div>
            <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{width:'85%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

        <div className="progress_container">
            <div className="progress_title_container">
                <label>HTML5 / CSS3 / Bootstrap</label>
                <span>85 %</span>
            </div>
            <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{width:'85%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

       
    </>
    )
}
export default SkillProgress;