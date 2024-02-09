import { Group, Avatar, Text, Accordion } from '@mantine/core';
import React from 'react';
import canvas_icon from '../images/canvas_icon.png';
import spotify_icon from '../images/spotify_logo.png';
import marble_solitaire_icon from '../images/marble_solitaire_icon.png';
import beMeal_logo from '../images/beMeal_logo.png';
import distributed_key_logo from '../images/distributed-key_logo.png';
import bgp_logo from '../images/bgp_logo.webp'

const projectList = [
  {
    id: 'Kanbas-project',
    image: canvas_icon,
    label: 'Kanbas Web App',
    description: 'Making the thing',
    content: <h1>Kanbas</h1>,
  },
  {
    id: 'spotify-playlist-tracker',
    image: spotify_icon,
    label: 'Spotify Playlist Tracker',
    description: 'tracks the playlist',
    content: <h2>Spotify</h2>,
  },
  {
    id: 'marble-solitaire-project',
    image: marble_solitaire_icon,
    label: 'Marble Solitaire Game',
    description: 'game with marbles',
    content: <h3>marble</h3>,
  },
  {
    id: 'be-meal',
    image: beMeal_logo,
    label: 'BeMeal',
    description: 'meal Social Media',
    content: <p>meal</p>,
  },
  {
    id: 'image-processor',
    image: '',
    label: 'Image Processor',
    description: 'processes images',
    content: <p>image</p>,
  },
  {
    id: 'distributed-key-value-database',
    image: distributed_key_logo,
    label: 'Distributed Key Value Database',
    description: 'database',
    content: <p>database</p>,
  },
  {
    id: 'bgp-router',
    image: bgp_logo,
    label: 'BGP Router',
    description: 'router',
    content: <p>router</p>,
  }
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
      <Accordion.Control>
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