import { Affix, HoverCard, Tooltip, Transition, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import nick_about from '../../images/nick_about.jpg';
import './Home.css';
import '../../index.css';
import '@mantine/carousel/styles.css';
import { Carousel } from "@mantine/carousel";
import { useWindowScroll } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import ProfessionalExperience from "./ProfessionalExperience";
import carouselData from "./CarouselData";
import { professionalExperienceData } from "./ProfessionalExperienceData";

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
                        Hello! I'm Nick, a Computer Science & Design student based in Boston studying at Northeastern University. 
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
            <h2 id="professional-title" style={{ textAlign: "center" }}>Professional Experience</h2>
            <div className="row" style={{ justifyContent: 'center', flexWrap: 'wrap', maxWidth: window.innerWidth }}>
                {professionalExperienceData.map((experience, index) => 
                    <ProfessionalExperience 
                        title={experience.title} 
                        location={experience.location} 
                        company={experience.company}
                        timeframe={experience.timeframe} 
                        picture={experience.picture} 
                        details={experience.details} 
                        label={experience.label}                        
                    /> 
                )}
            </div>
        </section>

        <section style={backgroundStyle}>
            <div className="about-me-content">
                <br/>
                <br/>
                <h2 id="student-life-title">Student Life</h2>
            </div>  
            <Carousel 
                slideSize={window.innerWidth > 600 ? "70%" : '90%'}
                align={window.innerWidth < 600 ? "center": "center"} 
                loop 
                slideGap="xl"
                withIndicators
            >
                {carouselData.map((slide, index) => 
                    <Carousel.Slide key={index}>
                        <div className="student-life-container">
                            <div className='row'>
                                {slide.body}
                                {window.innerWidth > 600 && slide.image}
                            </div>
                        </div>
                    </Carousel.Slide>
                )}
            </Carousel>
        </section>
    </div>
  );
}

export default Home;
