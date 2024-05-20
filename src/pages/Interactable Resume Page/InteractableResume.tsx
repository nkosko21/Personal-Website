import React from "react";
import NavigationBar from "../../components/NavigationBar";
import { Button, Divider, HoverCard, Image } from "@mantine/core";
import './InteractableResume.css';
import { useNavigate } from "react-router-dom";
import resumeData from './ResumeData'
const openDelay = 425;

/**
 * 
 * languages/frameworks  - relavent projects, comfortability
 * classes - projects, topics
 * interests -expand
 */
export default function InteractableResume() {
  const EasyHoverCard = (target: any, dropdown: any) => (
    <HoverCard width={280} openDelay={openDelay} shadow="md">
      <HoverCard.Target>
        {target}
      </HoverCard.Target>
      <HoverCard.Dropdown style={{ backgroundColor: 'ivory' }}>
        {dropdown}
      </HoverCard.Dropdown>
    </HoverCard>
  );

  return (
  <div>
    <NavigationBar defaultValue={'resume'}/>
    <div className="resume-container">
      <span className="centered-text">
        <h2>Nicholas Kosko</h2>
        <div>
          <span style={{ fontWeight: 'bold' }}>Objective:</span> Full-Time Software Engineering Internship <span style={{ fontWeight: 'bold' }}>Availibility: </span>
          June - December 2024
          <br/>
        </div>
        <div>
          <a target='_blank' href={'https://www.nicholaskosko.net/'}>nicholaskosko.net</a> · nickoy7@gmail.com · Boston, MA (Local)
        </div>
      </span>
        


      <h3>Education</h3>
      <Divider size='sm' />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <span className="bolded-text">Northeastern University, Khoury College of Computer Sciences</span>
        <span>Boston, MA</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <span>B.S. degree in Computer Science and Design</span>
        <span>Sept. 2021 - May 2025</span>
      </div>
      <div>
        <span className="bolded-text">Relavent Coursework</span>{': '}
        {EasyHoverCard(resumeData.webDevelopmentClass.target, resumeData.webDevelopmentClass.dropdown)}
        {EasyHoverCard(resumeData.fundamentalsOfSoftwareEngineering.target, resumeData.fundamentalsOfSoftwareEngineering.dropdown)}
        {EasyHoverCard(resumeData.objectOrientedDesign.target, resumeData.objectOrientedDesign.dropdown)}
      </div>


      <h3>Skills</h3>
      <Divider size='sm' />
      <div>
        <span className="bolded-text">Languages: </span>
          {EasyHoverCard(resumeData.python.target, resumeData.python.dropdown)}
          {EasyHoverCard(resumeData.typescript.target, resumeData.typescript.dropdown)}
          {EasyHoverCard(resumeData.javascript.target, resumeData.javascript.dropdown)}
          {EasyHoverCard(resumeData.swift.target, resumeData.swift.dropdown)}
          {EasyHoverCard(resumeData.java.target, resumeData.java.dropdown)}
          {EasyHoverCard(resumeData.drRacket.target, resumeData.drRacket.dropdown)}
          {EasyHoverCard(resumeData.htmlCSS.target, resumeData.htmlCSS.dropdown)}
          {EasyHoverCard(resumeData.latex.target, resumeData.latex.dropdown)}
      </div>
      <div>
        <span className="bolded-text">Frameworks: </span>
          {EasyHoverCard(resumeData.react.target, resumeData.react.dropdown)}
          {EasyHoverCard(resumeData.django.target, resumeData.django.dropdown)}
          {EasyHoverCard(resumeData.heroku.target, resumeData.heroku.dropdown)}
          {EasyHoverCard(resumeData.aws.target, resumeData.aws.dropdown)}
          <span className="clickable-text">Electron</span>{' | '}
          <span className="clickable-text">Azure</span>{' | '}
          <span className="clickable-text">Express</span>{' | '}
          {EasyHoverCard(resumeData.mongodb.target, resumeData.mongodb.dropdown)}
          
      </div>
      <div>
        <span className="bolded-text">Skills: </span>
          {EasyHoverCard(resumeData.github.target, resumeData.github.dropdown)}
          {EasyHoverCard(resumeData.pgadmin4.target, resumeData.pgadmin4.dropdown)}
          {EasyHoverCard(resumeData.databases.target, resumeData.databases.dropdown)}
          {EasyHoverCard(resumeData.webDesignSkill.target, resumeData.webDesignSkill.dropdown)}
          {EasyHoverCard(resumeData.figma.target, resumeData.figma.dropdown)}
          {EasyHoverCard(resumeData.googleFirebase.target, resumeData.googleFirebase.dropdown)}
          <span className="clickable-text">Leadership</span>
      </div>
      

      <h3>Experience</h3>
      <Divider size='sm' />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <span>
            <span className="bolded-text">Varsity Tutors</span> <span className="italicized-text">Computer Science Tutor</span>
          </span>
          Boston, MA Feb. 2024 - Present
        </span>
        <ul>
        <li style={{ fontFamily: ''}}>
          Provided personalized tutoring sessions in computer science topics including programming languages like
          TypeScript and Python, and concepts such as web development and data structures, to enhance students’
          understanding and proficiency.
        </li>
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <span>
            <span className="bolded-text">SLS Consulting, LLC.</span> <span className="italicized-text">Software Engineer</span>
          </span>
          Boston, MA, Sep. 2023 - December 2023
        </span>
        <ul>
          <li>Designed, developed, tested, and maintained internal automation tools aimed at streamlining and enhancing business processes using TypeScript, React, and Python.</li>
          <li>Deployed and monitored applications on cloud platforms, mainly AWS and Heroku.</li>
          <li>Integrated React-Django stack for seamless front-end and back-end web application functionality.</li>
          <li>Resolved issues, debugged software, and conducted upgrades for optimal performance.</li>
          <li>Engaged in Agile practices, including sprint planning and retrospectives, for efficient development.</li>
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <span>
            <span className="bolded-text">Digital Ready</span> <span className="italicized-text">IT Manager</span>
          </span>
          Boston, MA, April 2023 - Aug. 2023
        </span>
        <ul>
          <li>Directed the design and delivery of IT Automation curriculum, incorporating technical concepts and software including Wordpress, Figma, SQL, Networks, Cloud Computing, Database Management, Linux, and Git.</li>
          <li>Led the design and implementation of a UI/UX curriculum, covering principles and tools like Wordpress, Figma, and user testing methodologies.</li>
          <li>Instructed and created curriculum on Python fundamentals, empowering students to grasp core concepts and build a solid foundation in programming and automation.</li>
        </ul>
      </div>
      

      <h3>Projects</h3>
      <Divider size='sm' />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <span>
            <span className="bolded-text">Covey Town Battleship</span>
            <span className="italicized-text">
              <a 
                href='https://coveytownbattleship.onrender.com/'
                target='_blank'
              > Link to site
              </a>
            </span>
          </span>
          Feb. 2024 - April 2024
        </span>
        <ul>
          <li>Integrated a battleship game into an existing Covey.Town codebase, using an agile workflow writing user stories, working in sprints, writing retrospectives, and participating in numerous code reviews.</li>
          <li>Built and deployed a TypeScript React frontend hosted on onRender.com using custom HTML components, designed and wireframed in Figma.</li>
          <li>Built and deployed a TypeScript backend hosted on Heroku containing game logic and an custom REST API to communicate with the frontend, integrating Firebase authentication and a Firebase real-time database.</li>    
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <span>
            <span className="bolded-text">Personal Website</span>
            <span className="italicized-text">
              <a 
                href='https://github.com/blightjl/Personal-Website'
                target='_blank'
              > GitHub Link
              </a>
            </span>
          </span>
          Jan. 2024 - present
        </span>
        <ul>
          <li>Designed and Implemented a personal website using TypeScript, CSS, HTML, React, and the Mantine component library.</li>
          <li>Hosted the site on AWS and currently working on configuring and AWS S3 Bucket to improve performance and expand the site with new features.</li>
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <span>
            <span className="bolded-text">BeMeal</span>
            <span className="italicized-text">
              <a 
                href='https://github.com/blightjl/beMeal'
                target='_blank'
              > GitHub Link
              </a>
            </span>
          </span>
          May 2023 - July 2023
        </span>
        <ul>
          <li>Created the IOS application “BeMeal” using Swift which allowed users to upload images of their meals throughout the day to share with their friends.</li>
          <li>Created an authentication system with a username and password using Google Firebase Authentication.</li>
          <li>Implemented a social feed where users could upload images of meals and view their friends images, stored on Google Firebase Cloud.</li>
        </ul>
      </div>


      <h3>Interests</h3>
      <Divider size='sm' />
      <div>
        <span className="clickable-text">Soccer</span>{' · '}
        <span className="clickable-text">Film</span>{' · '}
        <span className="clickable-text">Design</span>{' · '}
        <span className="clickable-text">Running</span>{' · '}
        <span className="clickable-text">Currently Reading: Dune Messiah</span>{' · '}
        <span className="clickable-text">Currently Watching: Lost</span>
      </div>


      <span className="italicized-text centered-text">References Availible Upon Request</span>
    </div>
  </div>)
}