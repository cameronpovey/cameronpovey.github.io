import React, { useState } from 'react';
import './css/home.css';

function Home() {
    return(
        <div className='homeApp'>
            <div className='subpage'>
                Hello World,<br></br>
                I'm Cameron Povey
                <div className='subContent'>
                    and this is my portfolio.
                    <div className='gPara'>
                        {/* para about me */}
                        I am a 20 year old student currently at the University of the West of England studying Computer Science in my third year. I have a strong passion for working with computers and programming. I am well practiced in a range of programming and scripting languages, able to create, develop and problem solve in a range of senarios and environments. I am always keen to learn and develop my developer skills through a range of projects.
                    </div>
                    <div className='sidePointer'>
                        {/* para about me */}
                        ← See my work
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Home;