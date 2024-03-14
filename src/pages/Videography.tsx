import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import NavigationBar from "../components/NavigationBar";
import '../index.css';
import videoData from './VideoData';
import './videography.css';


export default function Videography() {
    return (
        <div>
            <NavigationBar defaultValue={'videography'}/> 
            <section className='videography-container'>
                <div className='container'>
                    {videoData.map((video, index) => (
                    <Card shadow="sm" padding="lg" radius="md" withBorder id={video.id} style={{margin: 10}} key={index}>
                        <Card.Section>
                            <Image
                            src={video.image}
                            height={400 }
                            alt="Norway"
                            />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>{video.title}</Text>
                        </Group>

                        <Text size="sm" c="dimmed">
                            {video.description}
                        </Text>

                        <a href={video.link} target="_blank">
                            <Button color="blue" fullWidth mt="md" radius="md">
                                Watch Video on Instagram
                            </Button>
                        </a>
                    </Card>))}
                </div>
            </section>
        </div>
    );
}