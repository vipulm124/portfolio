import React from "react";
import './Skills.css';


function Skills(){

    return(
        <div className="skills-container">
            <span className="heading">skills()</span>
            <div className="skill-images-container">
                <img src={require('../../assets/images/netcore.png')} className='skill-images'/>
                <img src={require('../../assets/images/csharp.png')} className='skill-images'/>
                <img src={require('../../assets/images/azure.png')} className='skill-images'/>
                <img src={require('../../assets/images/databricks.png')} className='skill-images'/>
                <img src={require('../../assets/images/pyspark.png')} className='skill-images'/>
                <img src={require('../../assets/images/react.png')} className='skill-images'/>
                <img src={require('../../assets/images/reactnative.webp')} className='skill-images'/>
                <img src={require('../../assets/images/python.png')} className='skill-images'/>

            </div>
        </div>
    )
}

export default Skills;