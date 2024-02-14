import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import NavigationBar from "../components/NavigationBar";
import RFE_S4_m2 from '../images/RFE_S4_M2.png';
import RFE_S3 from '../images/RFE_S3.png';
import GG_2023 from '../images/GG_2023.png';
import GG_2022 from '../images/GG_2022.jpg';
import '../index.css';
import './videography.css';

const videos = [
    {
        id: 'rfes4m2',
        title: 'Rare Fish Enthusiasts Season 4 Matchweek 2',
        image: RFE_S4_m2,
        description: 'The second matchweek of the fourth season of the Rare Fish Enthusiasts',
        link: 'https://www.instagram.com/reel/C256Ag8O7tR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 'rfes3',
        title: 'Rare Fish Enthusiasts Season 3',
        image: RFE_S3,
        description: 'The third season of the Rare Fish Enthusiasts',
        link: 'https://www.instagram.com/reel/CvoIcfSLxOW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 'gg22',
        title: 'Lifeguard Games 2022',
        image: GG_2022,
        description: 'The 2022 Lifeguard Games',
        link: 'https://www.instagram.com/reel/CvoJNR4gsXE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 'gg23',
        title: 'Lifeguard Games 2023',
        image: GG_2023,
        description: 'The 2023 Lifeguard Games',
        link: 'https://www.instagram.com/reel/CvsId4WAe_3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
]

export default function Videography() {
    return (
        <div>
            <NavigationBar defaultValue={'videography'}/> 
            <section className='videography-container'>
                <h1>Personal Projects</h1>
                <div className='container'>
                    {videos.map((video) => (
                    <Card shadow="sm" padding="lg" radius="md" withBorder id={video.id} style={{margin: 10}}>
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