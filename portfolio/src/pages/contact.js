import React, { useState } from 'react';
import './css/contact.css';

function Contact() {
    const github = () => {
        window.open('https://www.github.com/cameronpovey', '_blank');
    };

    const linkedin = () => {
        window.open('https://www.linkedin.com/in/cameron-povey-47bb17146/', '_blank');
    };

    const email = () => {
        window.location.href = 'mailto:cameronpovey@gmail.com';
    }

    const phone = () => {
        window.location.href = 'tel:+44 7566 228453';
    }

    return(
        <div className='contApp'>
            <div className='subpage'>
                Get in touch
                <div className='subContent'>
                    Reach out and get in contact with me
                    <div className='gPara'>
                        <div className='barWrap'>
                            <button className='linkSocials' onClick={github} style={{ cursor: 'pointer' }}>
                                Follow me on Github →
                            </button>
                        </div>
                        <div className='barWrap'>
                            <button className='linkSocials' onClick={linkedin} style={{ cursor: 'pointer' }}>
                                Connect with me on LinkedIn →
                            </button>
                        </div>
                        <div className='barWrap'>
                            <button className='linkSocials' onClick={email} style={{ cursor: 'pointer' }}>
                                Drop me an email:
                            </button>
                            <div className='info'>
                                cameronpovey@gmail.com
                            </div>
                        </div>
                        <div className='barWrap'>
                            <button className='linkSocials' onClick={phone} style={{ cursor: 'pointer' }}>
                                Give me a call:
                            </button>
                            <div className='info'>
                                +44 7566 228453
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;