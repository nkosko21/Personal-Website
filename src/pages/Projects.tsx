import { Box, Divider } from "@mantine/core";
import { IconCornerDownLeft, IconCornerLeftUp, IconCornerRightDown, IconCornerRightUp, IconCornerUpLeftDouble, IconLayoutNavbarExpand } from "@tabler/icons-react";
import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ProjectMiniList from '../components/ProjectMiniList';
import './Projects.css'

export default function ProfessionalProjects() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const [content, setContent] = useState<any>({content: <h2>Click on a project to view!</h2>, id: 'basic'});

    const handleContent = (data: any) => {
        setContent(data);
    };

    const scrollToContent = () => {
        document.getElementById("content")!.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div style={{ backgroundColor: 'ivory' }}>
            <NavigationBar defaultValue="professional"/> 
            <ProjectMiniList 
                limit={isExpanded ? 200: window.innerWidth / 350} 
                handleContent={handleContent} 
                scrollToContent={scrollToContent}   
                currentID={content.id}
            /> 
            <Divider
                my="xs"
                size="lg"
                labelPosition="center"
                color='#d4af37'
                // style={{ transition: 'transform 1s ease' }}
                label={
                    <>
                            <Box 
                                ml={5} 
                                color='black' 
                                style={{ cursor: 'pointer' }}
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                Click To Show {isExpanded ? 'Less': 'More'}
                            </Box>
                            {isExpanded ? 
                                <IconCornerRightUp size={12} style={{ cursor: 'pointer' }}/>
                            :
                                <IconCornerRightDown size={12} style={{ cursor: 'pointer' }}/>
                            }
                    </>
                }
            />
            <div id="content" className="content-container">
                {content.content}
            </div>
        </div>
    );
}