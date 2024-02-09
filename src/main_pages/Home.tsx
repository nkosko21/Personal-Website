import { Grid } from "@mantine/core";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import nick_about from '../images/nick_about.jpg';
import './Home.css';

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

//Option 1
function Home() {
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
            </div>
        </section>
        <section className="about-me-section">
            <div className="about-me-content">
                <h2>Professionally</h2>
                
            </div>

        </section>
    </div>
  );
}

export default Home;
