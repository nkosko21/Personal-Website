import varsity_tutors_logo from '../../images/varsity_tutors_logo.png';
import React from "react";    
import './Home.css';
import '../../index.css';
import { useDisclosure, useHover } from '@mantine/hooks';

export default function ProfessionalExperience(props: {
    title: string, 
    location: string, 
    company: string,
    timeframe: string, 
    picture: any, 
    details: string,
    label?: string,
}) {
    const { hovered, ref } = useHover();


    return(
        <div className="col professional-container" ref={ref}>
            {hovered ? 
                <div className="col professional-image-text" style={{ height: 460, padding: 5 }}>
                    {window.innerWidth > 600 &&
                        <div className="col" style={{alignItems: "flex-start"}}>
                            {props.picture === varsity_tutors_logo ? 
                            <img className="professional-images" style={{ objectFit: 'contain' }} src={props.picture} id="pic"/>
                            :
                            <img className="professional-images" src={props.picture} id="pic"/>}
                            <p style={{ fontSize: 10, marginLeft: 10 }}>{props.label}</p>
                        </div>
                    }
                    <h3 className="professional-title" style={{ margin: 0, marginTop: 5 }}>{props.title}</h3>
                    <p>
                        {props.details}
                    </p>
                </div>
            :
                <div className="col professional-image-text">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 15}}>
                    <h3 className="professional-title">{props.title}</h3>
                    <p>{props.company}</p>
                    <p>{props.location}</p>
                    <p>{props.timeframe}</p>
                    </div>
                </div>
            }
        </div>
    )
}