import canvas_icon from '../../images/canvas_icon.png';
import spotify_icon from '../../images/spotify_logo.png';
import marble_solitaire_icon from '../../images/marble_solitaire_icon.png';
import beMeal_logo from '../../images/beMeal_logo.png';
import distributed_key_logo from '../../images/distributed-key_logo.png';
import bgp_logo from '../../images/bgp_logo.webp'
import Image_Processor_Icon from '../../images/Image_Processor_Icon.png';
import KanbasWebApp from './projects/KanbasWebApp';
import SpotifyPlaylistTracker from './projects/SpotifyPlaylistTracker';
import MarbleSolitaireGame from './projects/MarbleSolitaireGame';
import BeMeal from './projects/BeMeal';
import ImageProcessor from './projects/ImageProcessor';
import DistributedKeyValue from './projects/DistributedKeyValue';
import BGPRouter from './projects/BGPRouter';
import PersonalWebsite from './projects/PersonalWebsite';
import nick_about from '../../images/nick_about.jpg';
import FTPClient from './projects/FTPClient';
import filezilla_logo from '../../images/FileZilla_Logo.png';
import battleship_logo from '../../images/Battleship_logo.jpeg';
import Battleship from './projects/Battleship';

const projectData = [
    {
      id: 'Personal-Website',
      image: nick_about,
      label: 'Personal Website',
      description: 'This Website',
      content: <PersonalWebsite/>,
      timeframe: 'Jan. 2024 - Present'
    },
    {
      id: 'be-meal',
      image: beMeal_logo,
      label: 'BeMeal',
      description: 'Food-Sharing Social Media',
      content: <BeMeal/>,
      timeframe: 'May - June 2023'
    },
    {
      id: 'Battleship',
      image: battleship_logo,
      label: 'Battleship Game',
      description: 'battleship',
      content: <Battleship />,
      timeframe: 'Feb. 2024 - Present'
    },
    {
      id: 'Kanbas-project',
      image: canvas_icon,
      label: 'Kanbas Web App',
      description: 'Copy of Education Website Canvas',
      content: <KanbasWebApp/>,
      timeframe: 'Jan. 2024 - Present'
    },
    {
      id: 'image-processor',
      image: Image_Processor_Icon,
      label: 'Image Processor',
      description: 'Applies effects on Images',
      content: <ImageProcessor/>,
      timeframe: 'Sep. - Nov. 2022'
    },
    {
      id: 'marble-solitaire-project',
      image: marble_solitaire_icon,
      label: 'Marble Solitaire',
      description: 'A Playable Game of Marble Solitaire',
      content: <MarbleSolitaireGame/>,
      timeframe: 'Sep. - Nov. 2022'
    },
    {
      id: 'distributed-key-value-database',
      image: distributed_key_logo,
      label: 'Distributed Database',
      description: 'Distributed Key Value Database',
      content: <DistributedKeyValue />,
      timeframe: 'Feb. - Apr. 2023'
    },
    {
      id: 'bgp-router',
      image: bgp_logo,
      label: 'BGP Router',
      description: 'BGP Router',
      content: <BGPRouter />,
      timeframe: 'Feb. - Apr. 2023'
  
    },
    {
      id: 'spotify-playlist-tracker',
      image: spotify_icon,
      label: 'Playlist Tracker',
      description: 'Automated Instagram Account to Track Spotify Playlists',
      content: <SpotifyPlaylistTracker/>,
      timeframe: 'Dec. 2023 - Present'
    },
    {
      id: 'ftp-client',
      image: filezilla_logo,
      label: 'FTP Client',
      description: 'File Transfer Protocol Client',
      content: <FTPClient/>,
      timeframe: 'Feb. - Apr. 2023'
    },
];

export default projectData