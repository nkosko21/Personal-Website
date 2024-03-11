import {  Image} from '@mantine/core';
import './studentLife.css';
import '../Home.css';
import st_pauls from '../../images/st_pauls.jpg';

export default function InLondon() {
    return (
        <div className="student-life-container">
            <div className='row'>
                <div className='col'>
                    <h1 className="student-life-titles">In London</h1>
                    <p style={{textAlign: window.innerWidth < 600 ? 'center': 'start', fontSize: window.innerWidth < 600 ? '.9rem': '1.1rem'}}>
                        In the Fall of my 2021 I spent a semester abroad in London, England with Northeastern's NUin program. 
                        During my time there I took classes on London culture and the Fundamentals of Computer Science, using DrRacket to learn the basics
                        of function oriented languages. I was also elected as a Student Coordinator on the Student government board 
                        where I helped organize community events and various administrative tasks.
                    </p>
                    <p style={{textAlign: window.innerWidth < 600 ? 'center': 'start', fontSize: window.innerWidth < 600 ? '.9rem': '1.1rem'}}>
                        I also took the opportunity to travel around Europe, visiting places such as Paris, Edinburgh, Madrid, Barcelona, Geneva, and Aberdeen, 
                        documenting my travels on video.
                    </p>
                </div>
                {window.innerWidth > 600 &&
                <Image
                    src={st_pauls}
                    alt="A photo I took of St.Paul's Cathedral"
                    style={{ height: 576, width: 432, margin: 10 }}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    radius="md"
                />}
            </div>
        </div>
    );
}