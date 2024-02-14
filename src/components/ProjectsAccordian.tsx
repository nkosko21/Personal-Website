import { Group, Avatar, Text, Accordion } from '@mantine/core';
import canvas_icon from '../images/canvas_icon.png';
import spotify_icon from '../images/spotify_logo.png';
import marble_solitaire_icon from '../images/marble_solitaire_icon.png';
import beMeal_logo from '../images/beMeal_logo.png';
import distributed_key_logo from '../images/distributed-key_logo.png';
import bgp_logo from '../images/bgp_logo.webp'
import Image_Processor_Icon from '../images/Image_Processor_Icon.png';
import KanbasWebApp from '../pages/professional projects/KanbasWebApp';
import SpotifyPlaylistTracker from '../pages/professional projects/SpotifyPlaylistTracker';
import MarbleSolitaireGame from '../pages/professional projects/MarbleSolitaireGame';
import BeMeal from '../pages/professional projects/BeMeal';
import ImageProcessor from '../pages/professional projects/ImageProcessor';
import DistributedKeyValue from '../pages/professional projects/DistributedKeyValue';
import BGPRouter from '../pages/professional projects/BGPRouter';
import PersonalWebsite from '../pages/professional projects/PersonalWebsite';
import nick_about from '../images/nick_about.jpg';
import './ProjectsAccordian.css';
import FTPClient from '../pages/professional projects/FTPClient';
import filezilla_logo from '../images/FileZilla_Logo.png'

const projectList = [
  {
    id: 'Personal-Website',
    image: nick_about,
    label: 'Personal Website',
    description: 'This Website',
    content: <PersonalWebsite/>,
  },
  {
    id: 'be-meal',
    image: beMeal_logo,
    label: 'BeMeal',
    description: 'Food-Sharing Social Media',
    content: <BeMeal/>,
  },
  {
    id: 'image-processor',
    image: Image_Processor_Icon,
    label: 'Image Processor',
    description: 'Applies effects on Images',
    content: <ImageProcessor/>,
  },
  {
    id: 'Kanbas-project',
    image: canvas_icon,
    label: 'Kanbas Web App',
    description: 'Copy of Education Website Canvas',
    content: <KanbasWebApp/>,
  },
  {
    id: 'marble-solitaire-project',
    image: marble_solitaire_icon,
    label: 'Marble Solitaire Game',
    description: 'A Playable Game of Marble Solitaire',
    content: <MarbleSolitaireGame/>
  },
  {
    id: 'distributed-key-value-database',
    image: distributed_key_logo,
    label: 'Distributed Key Value Database',
    description: 'Distributed Key Value Database',
    content: <DistributedKeyValue />,
  },
  {
    id: 'bgp-router',
    image: bgp_logo,
    label: 'BGP Router',
    description: 'BGP Router',
    content: <BGPRouter />,
  },
  {
    id: 'spotify-playlist-tracker',
    image: spotify_icon,
    label: 'Spotify Playlist Tracker',
    description: 'Automated Instagram Account to Track Spotify Playlists',
    content: <SpotifyPlaylistTracker/>,
  },
  {
    id: 'ftp-client',
    image: filezilla_logo,
    label: 'FTP Client',
    description: 'File Transfer Protocol Client',
    content: <FTPClient/>
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export default function ProfessionalProjectsAccordian() {
  const items = projectList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control className='control'>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}