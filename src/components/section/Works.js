import React from 'react';
import Project from '../layouts/Project';
import { projects, experience, section3Title, section4Title } from '../../profile';

const Works = () => {
    const gradientStyle = {
        background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
        padding: '50px 20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: '#333'
    };

    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third" style={gradientStyle}>
                <div className="pp-head-line mx-auto text-center">
                    <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                </div>
                <div className="row">
                    {projects && projects.map((x) => 
                        <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                    )}
                </div>
            </div>

            <div className="third" style={gradientStyle}>
                <div className="pp-head-line mx-auto text-center">
                    <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                </div>
                <div className="row">
                    {experience && experience.map((x) => 
                        <Project key={x.id} id={x.id} url={x.url} name={x.name} description={x.description}/>
                    )}
                </div>
            </div>
        </>
    );
}

export default Works;
