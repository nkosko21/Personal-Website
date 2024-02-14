import { Card, Image} from '@mantine/core';
import React from 'react';
import './studentLife.css';
import '../../index.css';
import london from '../../images/london.jpeg';
import st_pauls from '../../images/st_pauls.jpeg';

export default function InLondon() {
    return (
        <div className="student-life-container">
            <div className='row' style={{ justifyContent: 'space-between'}}>
                <div className='col'>
                    <h1>In London</h1>
                    <p>
                        In the Fall of my 2021 I spent a semester abroad in London, England with Northeasterns NUin program. 
                        During my time here I took classes on London culture and the Fundamentals of Computer Science, using DrRacket to learn the basics
                        of function oriented languages. I was also elected as a Student Coordinator on the Student government board 
                        where I helped organize community events and various administrative tasks.
                    </p>
                    <p>
                        I also took the opportunity to travel around Europe, visiting places such as Paris, Edinburgh, Madrid, Barcelona, Geneva, and Aberdeen, 
                        documenting my travels on video.
                    </p>
                </div>
                <Image
                    src={st_pauls}
                    alt="A photo I took of St.Paul's Cathedral"
                    style={{ height: 576, width: 'auto', margin: 10 }}
                    radius="md"
                />
            </div>
        </div>
    );
}