import React, { useState } from 'react';
import './css/projects.css';

function Projects() {
    const projectsLink = () => {
        window.open('https://www.github.com/cameronpovey', '_blank');
    };
    return(
        <div className='projApp'>
            <div className='subpage'>
                My Projects
                <div className='subContent'>
                    To learn and practice my development skills I have utilised various languages and frameworks to assist me in building projects, these projects have had various successes but have allowed me to explore the area more than I initially learned and helping me become familiar with it
                </div>
                <div className='linkOut'>
                    <button className='linkGit' onClick={projectsLink} style={{ cursor: 'pointer' }}>
                        View my projects on Github →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;