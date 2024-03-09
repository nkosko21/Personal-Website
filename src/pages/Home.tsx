import { Affix, HoverCard, Tooltip, Transition, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import nick_about from '../images/nick_about.jpg';
import './Home.css';
import '../index.css';
import nick_showing from '../images/nick_showing.png';
import nick_shaking_hands from '../images/nick_shaking_hand.jpg';
import SLS_logo from '../images/SLS_logo.png';
import varsity_tutors_logo from '../images/varsity_tutors_logo.png';
import '@mantine/carousel/styles.css';
import { Carousel } from "@mantine/carousel";
import InTheClassroom from "./student life carousel/InTheClassroom";
import OutsideTheClassroom from "./student life carousel/OutsideTheClassroom";
import InLondon from "./student life carousel/InLondon";
import { useWindowScroll } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import ProfessionalExperience from "./ProfessionalExperience";

function Home() {
    const [scroll, scrollTo] = useWindowScroll();
    
    const [scrollSection, setscrollSection] = useState(0);
    const professionalTitle = document.getElementById("professional-title");
    const studentLife = document.getElementById("student-life-title");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < 300) {
            setscrollSection(0);
        } else if (scrollPosition < 1000) {
            setscrollSection(1);
        } else {
            setscrollSection(2);
        }
        };

        window.addEventListener('scroll', handleScroll);

        setIsVisible(true);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToProfessional = () => {
        if (scroll.y < 750) {
            professionalTitle!.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            studentLife!.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const backgroundStyle = {
        backgroundColor: scrollSection == 0 ? 'ivory': scrollSection == 1  ? '#d6c8b9' : '#aea397',
        transition: 'background-color 0.3s ease',
      };
    
  return (
    <div>
        <NavigationBar defaultValue="home"/> 
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <section className="about-me-section" style={backgroundStyle}>
                <div className="about-me-content">
                    <h2>Nicholas Kosko</h2>
                    <img className="profile-image" src={nick_about} alt="Profile" />
                    <p>
                        Hello! I'm Nick, a Computer Science student based in Boston currently studying at Northeastern University. 
                    </p>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </section>
        </div>
        <Affix position={{ bottom: 5, right: (window.innerWidth / 2) - 25}}>
            <Transition transition="slide-up" mounted={scroll.y < 50 || (scroll.y > 750 && scroll.y < 850)}>
            {(transitionStyles) => (
                <IconChevronDown 
                    // style={{ width: rem(16), height: rem(16) }} 
                    size={48}
                    style={{ ...transitionStyles, justifyContent: 'center', cursor: 'pointer'}}
                    onClick={scrollToProfessional}
                />
            )}
            </Transition>
        </Affix>
        
        <section className="about-me-section" style={backgroundStyle}>
            {/* <div className="about-me-content" style={{ maxWidth: 'none' }}> */}
                <h2 id="professional-title" style={{ textAlign: "center" }}>Professional Life</h2>
                <div className="row" style={{ justifyContent: 'center', flexWrap: 'wrap', maxWidth: window.innerWidth }}>
                    <ProfessionalExperience 
                        title={"IT Manager"} 
                        location={"Boston, MA"} 
                        company={"Digital Ready"}
                        timeframe={"April 2023 - August 2023"} 
                        picture={nick_showing} 
                        details={"From April to August of 2023 I Worked as an IT Manager at Digital Ready, a non-profit organization in Boston, MA with the mission to teach underserved boston youth STEM Curriculum. In this role, I was responsible for teaching the students IT Curriculum, such as Python, Databasing, and Networks."} 
                        label={"Nicholas helping a student with their assignment"}                        
                    />
                    <ProfessionalExperience 
                        title={"Software Developer"} 
                        location={"Boston, MA"} 
                        company={"SLS Consulting, LLC"}
                        timeframe={"September 2023 - December 2023"} 
                        picture={SLS_logo} 
                        details={
                            "From September to December of 2023, I worked as a Software Developer at SLS Consulting, LLC. where I designed, developed, tested," +
                            "and maintained internal automation tools using TypeScript, HTML, and Python to streamline and enhance business processes. I deployed and " + 
                            "monitored applications on cloud platforms, primarily AWS and Heroku, and integrated the React-Django stack to achieve seamless " + 
                            "front-end and back-end web application functionality."}                     
                    />
                    <ProfessionalExperience 
                        title={"Lifeguard/Lifeguard Manager"} 
                        location={"Narragansett, RI"} 
                        company={"RI Dept. of Environmental Management"}
                        timeframe={"Summers 2018 - December 2021"} 
                        picture={nick_shaking_hands} 
                        details={
                            "During the summers from 2018-2021, I worked as a Lifeguard at Roger Wheeler State Beach in Narragansett, Rhode Island where " +
                            "I was responsible for the safety of the patrons at the beach, performing various minor first aids and ocean rescues. The following summer" +
                            "I returned as a Lifeguard Manager whose responsibilities included managing the lifeguard staff, scheduling, training new lifeguards and performing " +
                            "life-threatening first-aids and rescues."} 
                        label={"Nicholas pictured with the Governer of Rhode Island Dan McKee"}                        
                    />
                    <ProfessionalExperience 
                        title={"Computer Science Tutor"} 
                        location={"Boston, MA (remote)"} 
                        company={"Varsity Tutors"}
                        timeframe={"February 2024 - present"} 
                        picture={varsity_tutors_logo} 
                        details={"Recently I've been working as a tutor for Varsity Tutors as a freelance Computer Science tutor teaching pupils ages 15-20 computer science concepts such as programming, databases, and web design."}                  
                    />
                </div>
            {/* </div> */}
        </section>

        <section style={backgroundStyle}>
            <div className="about-me-content">
                <br/>
                <br/>
                <h2 id="student-life-title">Student Life</h2>
            </div>  
            <Carousel slideSize="70%" align={window.innerWidth < 600 ? "start": "center"} loop slideGap="xl">
                <Carousel.Slide>
                    <InTheClassroom/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <OutsideTheClassroom/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <InLondon/>
                </Carousel.Slide>
            </Carousel>
        </section>
    </div>
  );
}

export default Home;
