import nick_showing from '../../images/nick_showing.png';
import nick_shaking_hands from '../../images/nick_shaking_hand.jpg';
import SLS_logo from '../../images/SLS_logo.png';
import varsity_tutors_logo from '../../images/varsity_tutors_logo.png';

export const professionalExperienceData = [
    {
        title: 'IT Manager',
        location: 'Boston, MA',
        company: 'Digital Ready',
        timeframe: 'April 2023 - August 2023',
        picture: nick_showing,
        details: 'From April to August of 2023 I Worked as an IT Manager at Digital Ready, a non-profit organization in Boston, MA with the mission to teach underserved boston youth STEM Curriculum. In this role, I was responsible for teaching the students IT Curriculum, such as Python, Databasing, and Networks.',
        label: 'Nicholas helping a student with their assignment'
    },
    {
        title: 'Software Developer',
        location: 'Boston, MA',
        company: 'SLS Consulting, LLC',
        timeframe: 'September 2023 - December 2023',
        picture: SLS_logo,
        details: "From September to December of 2023, I worked as a Software Developer at SLS Consulting, LLC. where I designed, developed, tested," +
        "and maintained internal automation tools using TypeScript, React, and Python to streamline and enhance business processes. I deployed and " + 
        "monitored applications on cloud platforms, primarily AWS and Heroku, and integrated the React-Django stack to achieve seamless " + 
        "front-end and back-end web application functionality.",
    },
    {
        title: 'Lifeguard/Lifeguard Manager',
        location: 'Narragansett, RI',
        company: 'RI Dept. of Environmental Management',
        timeframe: 'Summers 2018 - December 2021',
        picture: nick_shaking_hands,
        details: "During the summers from 2018-2021, I worked as a Lifeguard at Roger Wheeler State Beach in Narragansett, Rhode Island where " +
        "I was responsible for the safety of the patrons at the beach, performing various minor first aids and ocean rescues. The following summer" +
        "I returned as a Lifeguard Manager whose responsibilities included managing the lifeguard staff, scheduling, training new lifeguards and performing " +
        "life-threatening first-aids and rescues.",
        label: 'Nicholas pictured with the Governer of Rhode Island Dan McKee'
    },
    {
        title: 'Computer Science Tutor',
        location: 'Boston, MA (remote)',
        company: 'Varsity Tutors',
        timeframe: 'February 2024 - present',
        picture: varsity_tutors_logo,
        details: 'Recently I\'ve been working as a tutor for Varsity Tutors as a freelance Computer Science tutor teaching pupils ages 15-20 computer science concepts such as programming, databases, and web design.',
    }
]