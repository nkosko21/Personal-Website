import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import NavigationBar from "../../components/NavigationBar";
import '../../index.css';
import videoData from './VideoData';
import './videography.css';


export default function Videography() {
    return (
        <div>
            <NavigationBar defaultValue={'videography'}/> 
            <section className='videography-container'>
                    {videoData.map((video, index) => (
                    <a href={video.link} target="_blank">
                    <Card 
                        shadow="sm" 
                        padding="lg" 
                        radius="md" 
                        withBorder 
                        id={video.id} 
                        style={{ margin: 10, width: 282, height: 310}}
                        color='#a2824e'
                        key={index}
                    >
                        <Card.Section>
                            <Image
                            src={video.image}
                            height={200}
                            alt={video.id}
                            />
                        </Card.Section>

                        <div className="col" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                <p className="videography-title">{video.title}</p>
                            <a href={video.link} target="_blank">
                                <Button 
                                    color="	#a2824e" 
                                    fullWidth mt="xs" 
                                    radius="md" 
                                    style={{ margin: 0 }}
                                >
                                    Watch Video on Instagram
                                </Button>
                            </a>
                        </div>
                    </Card>
                    </a>))}
            </section>
        </div>
    );
}