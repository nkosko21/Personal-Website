import { Image } from "@mantine/core";
import northeastern_classroom from '../../images/Northeastern_Classroom.jpg';

export default function InTheClassroom() {
    return (
        <div className="student-life-container">
            <div className='row'>
                <div className='col'>
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
                {window.innerWidth > 600 &&
                <Image
                    src={northeastern_classroom}
                    style={{ height: 576, width: 432, margin: 10 }}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    radius="md"
                />}
            </div>
        </div>
    );
}