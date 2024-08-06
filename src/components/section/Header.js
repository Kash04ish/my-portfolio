import React from 'react';
import HeaderButton from '../layouts/HeaderButton';
import { header } from '../../profile';

const Header = () => {
    const scrollTo = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        });
    };

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark-mode');
        const elementsToToggle = ['not-dark', 'not-dark2'];
        elementsToToggle.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.classList.toggle('inverse-dark');
        });
        const imgElements = document.getElementsByClassName('img-pro');
        for (let i = 0; i < imgElements.length; i++) {
            imgElements[i].classList.toggle('inverse-dark');
        }
        const mode = document.documentElement.classList.contains('dark-mode') ? 'Dark' : 'Light';
        localStorage.setItem('mode', mode);
    };

    return (
        <div className="Header" style={{
            background: 'linear-gradient(135deg, rgba(255, 223, 186, 1) 0%, rgba(255, 178, 89, 1) 100%)',
            color: 'rgb(20, 33, 61)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1 style={{
                fontSize: '5.5em',
                fontFamily: `'Dancing Script', cursive`,
                fontWeight: 700,
                WebkitFontSmoothing: 'antialiased'
            }}>
                {`I'm ${header.name}`}
            </h1>

            <p className="line-1 anim-typewriter">and this is my portfolio...</p>

            <label className="switch">
                <input
                    id="mode-switch"
                    onClick={toggleDarkMode}
                    type="checkbox"
                    aria-label="Toggle dark mode"
                />
                <span className="slider round"></span>
            </label>

            <HeaderButton />

            <img
                id="not-dark"
                onClick={scrollTo}
                alt="Contact Me"
                title="Contact Me"
                className="gtp"
                src="profile.png"
                style={{ cursor: 'pointer', marginTop: '20px' }}
            />
        </div>
    );
};

export default Header;
