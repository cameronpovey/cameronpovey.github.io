import React, { useState } from 'react';
import './css/about.css';

function About() {
    return(
        <div className='aboutApp'>
            <div className='subpage'>
                About Me
                <div className='subContent'>
                    A bit of context about me
                    <div className='gPara'>
                        I am a student at the University of the West of England studying Computer Science.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;