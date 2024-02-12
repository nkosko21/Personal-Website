import { Tabs, rem } from '@mantine/core';
import { IconHome, IconCamera, IconMovie, IconTie } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.css';

export default function NavigationBar(props: {defaultValue: string}) {
  return (
    <div className='nav-bar'>
      <Tabs defaultValue={props.defaultValue}>
        <Tabs.List justify="center">
          <Link to="/">
            <Tabs.Tab value="home" leftSection={<IconHome/>}>Home</Tabs.Tab>
          </Link>
          <Link to="/professional">
            <Tabs.Tab value="professional" leftSection={<IconTie/>}>Professional Projects</Tabs.Tab>
          </Link>
          <Link to='/videography'>
            <Tabs.Tab value="videography" leftSection={<IconCamera/>}>Videography</Tabs.Tab>
          </Link>
          <Link to='/photography'>
            <Tabs.Tab value="photography" leftSection={<IconMovie/>}>Photography</Tabs.Tab>
          </Link>
        </Tabs.List>
      </Tabs>
    </div>
  );
}