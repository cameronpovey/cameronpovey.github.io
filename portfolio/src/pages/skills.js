import React from 'react';
import './css/skills.css';

function Skills() {
    // BASE LANGUAGES
    const base_imgs = [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',
    ]
    const base_names = [
        'c',
        'csharp',
        'c++',
        'python'
    ]

    // FRONT END
    const front_imgs = [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
    ]
    const front_names = [
        'bootstrap',
        'css3',
        'html5',
        'javascript',
        'react',
    ]

    // BACK END & BAAS
    const back_imgs = [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg',
    ]
    const back_names = [
        'express',
        'firebase',
        'python flask',
        'nodejs'
    ]

    // APP DEVELOPMENT
    const app_imgs = [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        'https://reactnative.dev/img/header_logo.svg',
    ]
    const app_names = [
        'android sutdio',
        'flutter',
        'react native',
    ]

    // DATABASE
    const db_imgs = [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    ]
    const db_names = [
        'firestore',
        'mongodb',
        'mysql',
        'sqllite',
    ]

    // OTHERS
    const others = [
        'Linux',
        'Figma',
        'Windows',
        'MacOS',
        'Unty',
        'Ardiuno',
        'Git',
        'Terminal',
    ]

    return(
        <div className='skillApp'>
            <div className='subpage'>
                My Skills
                <div className='subContent'>
                    I am currently trying to develop my skills in a range of languages, these are a list of langauges I am confident in.
                </div>

                <div className='container'>
                    Notable Base Languages
                    <div className='gridSkills'>
                        {base_imgs.map((image, index) => (
                            <div className='gridItem' key={index}>
                                <img src={image} alt={`${base_names[index]}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='container'>
                    Front End
                    <div className='gridSkills'>
                        {front_imgs.map((image, index) => (
                            <div className='gridItem' key={index}>
                                <img src={image} alt={`${front_names[index]}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='container'>
                    Backend & BaaS
                    <div className='gridSkills'>
                        {back_imgs.map((image, index) => (
                            <div className='gridItem' key={index}>
                                <img src={image} alt={`${back_names[index]}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='container'>
                    App Development
                    <div className='gridSkills'>
                        {app_imgs.map((image, index) => (
                            <div className='gridItem' key={index}>
                                <img src={image} alt={`${app_names[index]}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='container'>
                    Database
                    <div className='gridSkills'>
                        {db_imgs.map((image, index) => (
                            <div className='gridItem' key={index}>
                                <img src={image} alt={`${db_names[index]}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='container'>
                    Other Tools & Skills
                    <div className='gridSkillsOther'>
                        {others.map((other, index) => (
                            <div className='gridItem' key={index}>
                                {other}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;