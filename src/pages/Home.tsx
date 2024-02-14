import { Affix, Grid, rem, Tooltip, Transition } from "@mantine/core";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import nick_about from '../images/nick_about.jpg';
import './Home.css';
import '../index.css';
import nick_sitting from '../images/nick_sitting.png';
import nick_showing from '../images/nick_showing.png';
import nick_walking from '../images/nick_walking.jpeg';
import nick_DEM_group from '../images/nick_DEM_Group.jpg';
import nick_governer_vice from '../images/nick_governer_vice.jpg';
import nick_shaking_hands from '../images/nick_shaking_hand.jpg';
import SLS_logo from '../images/SLS_logo.png';
import '@mantine/carousel/styles.css';
import { Carousel } from "@mantine/carousel";
import InTheClassroom from "./student life carousel/InTheClassroom";
import OutsideTheClassroom from "./student life carousel/OutsideTheClassroom";
import InLondon from "./student life carousel/InLondon";
import { useWindowScroll } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";


// export default function Home() {
//     const navigate = useNavigate();
    
//     return (
//         <div>
//             <NavigationBar defaultValue="home"/> 
//             <h1>Home</h1>
//             <p>This is the home page</p>

//             <Grid grow gutter="sm">
//                 <Grid.Col span={4}>
//                     <h1>About Me</h1>
//                     <br/>
//                     Hi I'm Nick, a third year student at Northeastern University majoring in Computer Science and Design
//                 </Grid.Col>
//                 <Grid.Col span={4}>
//                     <img src={nick_about} alt='Nick' style={{ height: 400, width: 'auto' }}/>
//                 </Grid.Col>
//                 <Grid.Col span={4}>
//                     <h1>Professionally</h1>
//                     <br/>
//                     Professionally, I am interested in software development and design. I have experience in full stack development and am interested in learning more about the design process. I've worked in IT as an IT Manager where
//                     I was able to work with underprivileged Boston to help teach IT Curriculum and topics such as Python, databasing, and Networks. I also worked as a Software Developer at SLS Consulting, LLC. working on various
//                     internal softwares used by employees on a daily basis, with my experience culminating on a month long project to create a task board system and database for the entire company to use. 
//                 </Grid.Col>
//                 <Grid.Col span={4}>
//                     <h1>Personally</h1>
//                     <br/>
//                     Personally, I love everything that has to do with film and the outdoors. As you can see in the <Link to='/videography'>Videography Tab</Link> I like to make videos about things that I do.
//                 </Grid.Col>
//                 <Grid.Col span={4}>
//                     <h1>Some tidbits about this website</h1>
//                 </Grid.Col>
//             </Grid>
//             {/* <div style={ {display: 'flex', flexDirection: 'row' }}>
//                 <img src={nick_about} alt='Nick' style={{ height: 600, width: 'auto' }}/>
//                 <div style={{ bottom: 300 }}>
//                     <h1>About Nick</h1>
//                 </div>
//             </div> */}
//         </div>
//     );
// }

//Option 2
function Home() {
    const [scroll, scrollTo] = useWindowScroll();
    
  return (
    <div>
        <NavigationBar defaultValue="home"/> 
        <section className="about-me-section">
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
        <Affix position={{ bottom: 20, right: (window.innerWidth / 2) - 25}}>
            <Transition transition="slide-up" mounted={scroll.y < 50}>
            {(transitionStyles) => (
                // <p>More Info Down Here!</p>
                <IconChevronDown 
                    // style={{ width: rem(16), height: rem(16) }} 
                    size={48}
                    style={{ ...transitionStyles, justifyContent: 'center'}}
                />
            )}
            </Transition>
        </Affix>
        
        <section className="about-me-section">
            <div className="about-me-content" style={{ maxWidth: 'none' }}>
                <h2>Professional Life</h2>
                <div className="row" style={{ justifyContent: 'center'}}>
                    <div className="col professional-image-text">
                        <Tooltip label="Me pictured with the Governer of Rhode Island Dan McKee">
                            <img className="professional-images" src={nick_shaking_hands} alt="Shaking Hands with the Governer of Rhode Island"/>
                        </Tooltip>
                        <p>
                            During the summers (April-September) from 2018-2021, I worked as a Lifeguard at Roger Wheeler State Beach in Narragansett, Rhode Island where 
                            I was responsible for the safety of the patrons at the beach, performing various minor first aids and ocean. The following summers
                            I returned as a Lifeguard Manager, which included managing the lifeguard staff, scheduling, training new lifeguards and performing 
                            life-threatening first-aids and rescues.
                        </p>
                    </div>
                    <div className="col professional-image-text">
                        <Tooltip label="Me helping a student with their assignment">
                            <img className="professional-images" src={nick_showing} alt="Showing Students Curriculum"/>
                        </Tooltip>
                        <p>
                            From April to August of 2023 I Worked as an IT Manager at Digital Ready, a non-profit organization in Boston, MA with the mission to teach
                            underserved boston youth STEM Curriculum. In this role, I was responsible for teaching the students IT Curriculum, such as Python, Databasing, and Networks.
                        </p>
                    </div>
                    <div className="col professional-image-text">
                        <img className="professional-images" src={SLS_logo} alt="Sitting with Students"/>
                        <p>
                            From September to December of 2023, I worked as a Software Developer at SLS Consulting, LLC. where I worked on various internal softwares used by employees on a daily basis.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="about-me-section">
            <div className="about-me-content">
                <h2>Student Life</h2>
            </div>  
            <Carousel slideSize="70%" align="center" loop>
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
