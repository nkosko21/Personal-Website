import {  Image} from '@mantine/core';
import './studentLife.css';
import '../../index.css';
import st_pauls from '../../images/st_pauls.jpg';

export default function InLondon() {
    return (
        <div className="student-life-container">
            <div className='row'>
                <div className='col'>
                    <h1>In London</h1>
                    <p>
                        In the Fall of my 2021 I spent a semester abroad in London, England with Northeasterns NUin program. 
                        During my time there I took classes on London culture and the Fundamentals of Computer Science, using DrRacket to learn the basics
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
                    style={{ height: 576, width: 432, margin: 10 }}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    radius="md"
                />
            </div>
        </div>
    );
}