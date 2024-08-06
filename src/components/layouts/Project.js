import React, { useState } from 'react';

const Project = ({ id, name, url, skills, description }) => {
    const [showDescription, setShowDescription] = useState(false);
    
    const handleDescriptionToggle = () => {
        setShowDescription(!showDescription);
    };

    const descriptionLines = description ? description.split('\n').filter(line => line.trim() !== '') : [];

    return (
        <div data-aos="fade-up" className="col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}>
                <h2>{name}</h2>
            </a>
            {skills && <h3>{skills.map(skill => skill)}</h3>}
            {description && (
                <>
                    <button className="description-btn" onClick={handleDescriptionToggle}>
                        {showDescription ? 'Hide Details' : 'View Details'}
                    </button>
                    {showDescription && (
                        <div className="project-description">
                            {descriptionLines.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Project;
