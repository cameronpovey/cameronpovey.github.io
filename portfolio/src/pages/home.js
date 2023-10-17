import React, { useState } from 'react';
import './css/home.css';

function Home() {
    return(
        <div className='homeApp'>
            <div className='subpage'>
                Hello World,<br></br>
                I'm Cameron Povey
                <div className='subContent'>
                    A student at the University of the West of England studying Computer Science
                </div>
            </div>
        </div>
    );
};

export default Home;