import { Button } from "@mantine/core";
import React from "react";


const resumeData = {
  webDevelopmentClass: {
    target: <span><span className="clickable-text">Web Development</span>{', '}</span>,
    dropdown: 
      <>
        <p className="hovercard-text">
        CS4350 Web Development was a class I took my Spring 2024 semester where we learned about creating 
        interactive websites using technologies such as React, MongoDB, HTML, CSS, Express, and more. The 
        final project was <a target='_blank' href='projects/?projectID=uniswap'>UniSwap</a>, a student-driven marketplace created using the MEAN stack.
        </p>
      </>,
  },
  fundamentalsOfSoftwareEngineering: {
    target: <span><span className="clickable-text">Fundamentals of Software Engineering</span>{', '}</span>,
    dropdown: 
    <>
      <p className="hovercard-text">
        CS4550 Fundamentals of Software Engineering was a class I took in the Spring of 2024. The assignement structure 
        mimmicked a real software development lifecycle, where we worked on a group project participating in code reviews, AGILE sprints, and 
        sprint retrospectives. In addition to assignments we covered various topics such as Distrubuted Systems, code testing, CI/CD pipelines, 
        and cloud infrastructure.
      </p>
      {/* <Button onClick={() => viewProject('Battleship')}>View Project Details</Button> */}
    </>
  },
  objectOrientedDesign: {
    target: <span className="clickable-text">Object Oriented Design</span>,
    dropdown:
    <p className="hovercard-text">
      CS3500 Object-Oriented Design I took during my Spring 2023 semester, and blah blah blah.
    </p>
  },
  python: {
    target: <span><span className="clickable-text">Python</span>{' | '}</span>,
    dropdown:
    <p className="hovercard-text">
      I'm extremely comfortable with Python and have used it at SLS consulting (see below) to work on 
      the backend and database, in addition to various school projects, such as my{' '}
      <a target='_blank' href='projects/?projectID=image-processor'>image processor</a> or{' '}
      <a target='_blank' href='projects/?projectID=bgp-router'>BGP Router</a>. 
    </p>
  },
  typescript: {
    target: <span><span className="clickable-text">TypeScript</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
      TypeScript is my favourite language and definetly the one I'm most skilled at. I've used it extensively from the React 
      frontend during my time at SLS Consulting (see below), to the entire backend & frontend of my{' '}
      <a target='_blank' href='projects/?projectID=Battleship'>Battleship Game</a>, and even{' '}
      <a target='_blank' href='projects/?projectID=Personal-Website'>this website!</a>
    </p>
  },
  javascript: {
    target: <span><span className="clickable-text">JavaScript</span>{' | '}</span>,
    dropdown:
    <p className="hovercard-text">
      Because of my comfortability with TypeScript, JavaScript comes as a second nature. The biggest Project 
      I've used JavaScript for is my{' '}
      <a target='_blank' href='projects/?projectID=spotify-playlist-tracker'>Spotify Playlist Tracker</a>.
    </p>
  },
  swift: {
    target: <span><span className="clickable-text">Swift</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        I used swift to create <a target='_blank' href='projects/?projectID=be-meal'>BeMeal</a>, and found it
        super interesting and fun to work with. I haven't used it extensively but still feel very comfortable using it.
      </p>
  },
  java: {
    target: <span><span className="clickable-text">Java</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        Like most programmers Java was the first langauge I learned. Since starting University, I haven't work with
        it as much as I used to for projects, but I still work with it occasionally.
      </p>
  },
  drRacket: {
    target: <span><span className="clickable-text">DrRacket</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        I learned DrRacket in my Fundamentals of Computer Science classes, and worked with it for a bit in Programming Languages,
        but it's definetly not my favourite.
      </p>
  },
  htmlCSS: {
    target: <span><span className="clickable-text">HTML/CSS</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        With TypeScript, HTML and CSS have been essential to all the work I've done in React. Just about all frontends I've worked on 
        I've built using HTML and CSS, and when I say TypeScript is my favourite language HTML and CSS have to be included in there with it.
      </p>
  },
  latex: {
    target: <span className="clickable-text">LaTeX</span>,
    dropdown:
      <p className="hovercard-text">
        I've used LaTeX to write academic papers in my CS3000 Algorithm's and Data class to write proofs and essays,
        and even used it to create this resume (this copy is build using HTML though). I like the freedom it gives me when creating documents
        and find it much more useful then the average word editor.
      </p>
    },
  react: {
    target: <span><span className="clickable-text">React</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        I absolutely LOVE React. It's by far my favourite piece of technology I've ever worked with. During my time at SLS Consulting I used
        it frequently while working on the frontend and have worked on numerous projects that've incorporated it such as{' '}
        <a target='_blank' href='projects/?projectID=Battleship'>Battleship Game</a> and{' '}
        <a target='_blank' href='projects/?projectID=Kanbas-project'>Kanbas Web App</a>.
      </p>
  },
  django: {
    target: <span><span className="clickable-text">Django</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        While working as a Software Engineer at SLS Consulting, I used Django to build a relational database to store project and 
        client information, implemented in the Python backend. To view and edit data, I used PGAdmin 4.
      </p>
  },
  heroku: {
    target: <span><span className="clickable-text">Heroku</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        To host my <a target='_blank' href='projects/?projectID=Battleship'>Battleship Game</a>, I used Heroku to run the backend, finding
        the various debugging and deployment tools that it provides very useful with fixing errors. I discovered Heroku while working at SLS
        consulting, where we used it to deploy the frontend and backend of the main website.
      </p>
  },
  aws: {
    target: <span><span className="clickable-text">AWS</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        I've used AWS in my own personal projects, such as hosting <a target='_blank' href='projects/?projectID=Battleship'>this website</a> 
        on a Route53 hosted zone, and Electric Beanstalk (insert!!), as well as teaching students about AWS and its features during my time 
        at Digital Ready.
      </p>
  },
  mongodb: {
    target: <span><span className="clickable-text">MongoDB</span></span>,
    dropdown:
      <p className="hovercard-text">
        MongoDB is my database of choice when it comes to personal projects due to its easy setup and maintainability. I implemented it in my{' '}
        <a target='_blank' href='projects/?projectID=uniswap'>UniSwap</a> program to store users, product, and various other data.
      </p>
  },
  github: {
    target: <span><span className="clickable-text">GitHub</span>{' | '}</span>,
    dropdown: 
      <p className="hovercard-text">
        I don't think any programmer could survice without using GitHub. It's been my version control software of choice for virtually every
        code-related project I've worked on. You can view my profile{' '}
        <a target='_blank' href='https://github.com/nkosko21'>here</a>.
      </p>
  },
  pgadmin4: {
    target: <span><span className="clickable-text">PGAdmin 4</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        I used PGAdmin 4 during my time at SLS Consulting to view and edit data in the Django Database.
      </p>
  },
  databases: {
    target:
      <span><span className="clickable-text">Databases</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        I've become very comfortable with databases and UML Diagrams, creating a relational database while working at SLS Consulting, and 
        various no SQL databases using MongoDB, as seen in <a target='_blank' href='projects/?projectID=uniswap'>UniSwap</a>.
      </p>
  },
  webDesignSkill: {
    target: <span><span className="clickable-text">Web Design</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        Ever since I discovered React, I've fallen in love with Web Design (as shown by this website). I love designing and implementing
        pages and using the various technologies and tools that are used in the process. I think my favourite part of programing is 
        creating something that people will use and interact with, and web design does exactly that.
      </p>
  },
  figma: {
    target: <span><span className="clickable-text">Figma</span>{' | '}</span>,
    dropdown:
      <p className="hovercard-text">
        When it comes to designing an interface, Figma is my first choice. I've used it to wireframe every website I've designed and find it 
        a great jumping-off point when I have an idea for a website or feature.
      </p>
  },
  googleFirebase: {
    target: <span><span className="clickable-text">Google Firebase</span>{' | '}</span>,
    dropdown: 
      <p className="hovercard-text">
        I've used Google Firebase for both user authentication and it's real-time database, implementing both using Swift in 
        my <a target='_blank' href='https://github.com/nkosko21'>BeMeal</a> IOS application.
      </p>
  } 

}
export default resumeData;