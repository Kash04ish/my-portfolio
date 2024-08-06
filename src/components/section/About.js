import React from 'react';
import Skills from '../layouts/Skills';
import { about, skillsBar, section2title } from '../../profile';


const About = () => {
    const gradientStyle = {
        background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
        padding: '50px 20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: '#333'
    };

    return (
        <div id="about" className="effect2" style={gradientStyle}>
            <div className="About-title-box">
                <h1 id="" className="red-line center">{section2title}</h1>
            </div>
            <p className="lead mb-4">
                {about.paragraph}
            </p>
            <div id="Skills">
                <h1 id="" className="red-line center">Skills</h1>
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((skill) => (
                        <Skills 
                            key={skill.name} 
                            faClass={skill.faClass} 
                            svg={skill.svg} 
                            label={skill.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
