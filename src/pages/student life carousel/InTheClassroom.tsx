import React from "react";
import { Image } from "@mantine/core";



export default function InTheClassroom() {
    return (
        <div className="student-life-container">
            <div className='row'>
                <div className='col'>
                    <h1>Inside The Classroom</h1>
                    <p>
                        As a third year Computer Science Student, I've taken a variety of difference classes, and here are some of my favourites.
                        I'm currently taking a Web Development class where I'm learning how to build a full stack web application using React, Node.js, and MongoDB.
                        I'm also taking a class on the Fundamentals of Computer Science, where I'm learning the building blocks of function oriented languages using DrRacket, 
                        even building our own programming language using scheme. Some of my other favourite classes include a class on the Fundamentals of Software Engineering, 
                        which covers the software development lifecycle and real world software development standards. 
                    </p>
                    <p>
                        I've also taken classes on Algorithms, Object Oriented Design, Networks & Distrubuted Systems, Discrete Structures, and Philosiphy in Film.
                    </p>
                </div>
                <Image
                    src={null}
                    style={{ height: 576, width: 432, margin: 10 }}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    radius="md"
                />
            </div>
        </div>
    );
}