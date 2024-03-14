import { Image } from "@mantine/core";
import northeastern_classroom from '../../images/Northeastern_Classroom.jpg';
import './studentLife.css';
import './Home.css';
import st_pauls from '../../images/st_pauls.jpg';
import nick_tackle from '../../images/Nick_Tackle.jpg';

const carouselData: any[] = [
    {
        body: (
            <div className="col">
                <h1 className="student-life-titles">Inside The Classroom</h1>
                <p style={{textAlign: window.innerWidth < 600 ? 'center': 'start', fontSize: window.innerWidth < 600 ? '.9rem': '1.1rem'}}>
                    As a third year Computer Science Student, I've taken a variety of different classes ranging from Computer Science to Design.
                    I'm currently taking a Web Development class where I'm learning how to build a full stack web application using React, Node.js, and MongoDB.
                    I'm also enrolled in a Programming Languages course, where I'm learning the building blocks of function oriented languages using DrRacket, 
                    even building our own programming language using Scheme. My favorite however is Fundamentals of Software Engineering, a course 
                    which covers the software development lifecycle and real world software development standards. 
                </p>
                <p style={{textAlign: window.innerWidth < 600 ? 'center': 'start', fontSize: window.innerWidth < 600 ? '.9rem': '1.1rem'}}>
                    I've also taken classes on Algorithms, Object Oriented Design, Networks & Distrubuted Systems, Discrete Structures, and Philosophy in Film.
                </p>
            </div>
        ),
        image: (
            <Image
                src={northeastern_classroom}
                style={{ height: 576, width: 432, margin: 10 }}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                radius="md"
            />
        )
    },
    {
        body: (
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
        ),
        image: (
            <Image
                src={st_pauls}
                alt="A photo I took of St.Paul's Cathedral"
                style={{ height: 576, width: 432, margin: 10 }}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                radius="md"
            />
        )
    }, 
    {
        body: (
            <div className='col'>
                <h1 className='student-life-titles'>Outside The Classroom</h1>
                <p style={{textAlign: window.innerWidth < 600 ? 'center': 'start', fontSize: window.innerWidth < 600 ? '.9rem': '1.1rem'}}>
                    I do a variety of different clubs and personal projects. I was on the Northeastern Club swim team for 3 years,
                    coming .01 seconds away from reaching the National Championships in the 100m freestyle before suffering an injury, requiring surgery and postponing 
                    any swimming for the foreseeable future. 
                </p>
                <p style={{textAlign: window.innerWidth < 600 ? 'center': 'start', fontSize: window.innerWidth < 600 ? '.9rem': '1.1rem'}}>
                    I also was a founder of 'Rare Fish Enthusiasts', a team where we participate in various sports activities and are 
                    currently competing in Northeastern Intramural Soccer. I run our {<a href='https://www.instagram.com/rarefishenthusiasts/' target="_blank">Social Media</a>} where I post 
                    various content I make from silly highlight videos to graphics. I also have a {<a href='https://www.instagram.com/7nkfilms/' target="_blank">Personal Instagram</a>} where
                    I post my personal videos and photography.
                </p>
                <p style={{textAlign: window.innerWidth < 600 ? 'center': 'start', fontSize: window.innerWidth < 600 ? '.9rem': '1.1rem'}}>
                    Finally, I volunteer on weekends as an Assistant Youth Soccer Coach at VOLO Sports, helping underserved children ages 5-10 learn the fundamentals of Soccer
                    and teamwork.
                </p>
            </div>
        ),
        image: (
            <Image
                src={nick_tackle}
                style={{ height: 576, width: 432, margin: 10 }}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                radius="md"
            />
        )
    }
]
export default carouselData