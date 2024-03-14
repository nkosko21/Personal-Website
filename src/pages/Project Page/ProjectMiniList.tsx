import { Group, Avatar, Text, Accordion, Flex } from '@mantine/core';
import '../../pages/Home Page/Home.css';
import projectData from './ProjectData';
import './ProjectMiniList.css';

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

export default function ProjectMiniList(props: 
  { 
    limit: number, 
    handleContent: Function, 
    currentID: string, 
    scrollToContent: Function
  }
  ) {
  const handleItemClick = (contentData: any) => {
    return () => {
      props.handleContent(contentData);
      props.scrollToContent();
    };
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {projectData.map((item: any, index: number) =>  ( index < props.limit &&
        <div 
          className={props.currentID === item.id ? "professional-container-selected" : "professional-container"}
          style={{ width: 250}}
          onClick={handleItemClick(item)}
          key={item.id}
        >
          <div className="professional-image-text">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 5 }}>
                <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                  <img className="profile-image" src={item.image} alt="Profile" style={{ width: 45, height: 45, margin: 0, marginRight: 10 }}/>
                  <div className='col'>
                    <h3 className="professional-title" style={{ fontSize: '1rem' }}>{item.label}</h3>
                    <p>{item.timeframe}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>)
      )}
    </div>)
}