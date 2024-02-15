import { Tabs } from '@mantine/core';
import { IconHome, IconCamera, IconFolder, IconDeviceLandlinePhone } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

export default function NavigationBar(props: {defaultValue: string}) {
  return (
    <div className='nav-bar' >
      <Tabs 
        defaultValue={props.defaultValue}
        color='#003366'
      >
        <Tabs.List 
          justify="center"
          classNames={{list: 'list'}}
        >
          <Link to="/">
            <Tabs.Tab value="home" leftSection={<IconHome/>} className='tab'>Home</Tabs.Tab>
          </Link>
          <Link to="/professional">
            <Tabs.Tab value="professional" leftSection={<IconFolder/>} className='tab'>Projects</Tabs.Tab>
          </Link>
          <Link to='/videography'>
            <Tabs.Tab value="videography" leftSection={<IconCamera/>} className='tab'>Videography</Tabs.Tab>
          </Link>
          <Link to='/contact'>
            <Tabs.Tab value="contact" leftSection={<IconDeviceLandlinePhone/>} className='tab'>Contact</Tabs.Tab>
          </Link>
          {/* <Link to='/photography'>
            <Tabs.Tab value="photography" leftSection={<IconMovie/>} className='tab'>Photography</Tabs.Tab>
          </Link> */}
        </Tabs.List>
      </Tabs>
    </div>
  );
}