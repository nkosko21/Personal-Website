import { Carousel } from "@mantine/carousel";
import { FileInput } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Counter from "./Components/counter";
import './TriaPageHome.css';

const months1 = ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const months2 = ['January', 'February', 'March', 'April', 'May', 'June'];

function TriaPageHome() {
  const [value, setValue] = useState<File | null>(null);
  const [view, switchView] = useState(true);
  const [count, setCount] = useState(0);
  const [month, setMonth] = useState('March');
  const [year, setYear] = useState('2023');
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
      const interval = setInterval(() => {
          setCount(count + 1);
      }, 1000);

      return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    const uploadFile = async () => {
      if (value) {
        const formData = new FormData();
        formData.append('name', value.name);
        if (value) {
          formData.append('image', value);
          formData.append('month', month);
          formData.append('year', year);
        }
    
        try {
          const response = await axios.post('http://localhost:2000/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error uploading the image', error);
        }  
      }
    };
    uploadFile();
  }, [value]);
  
  useEffect(() => {
    const fetchImages = async (month: string, year: string) => {
      try {
        // const response = await axios.get('https://personal-website-backend-nick-d5f3f69822d1.herokuapp.com/images', {
        const response = await axios.get('http://localhost:2000/images', {
          params: {
            month,
            year,
          },
        });
        const images = response.data
        console.log(images)
        setAllImages(images)
      } catch (error) {
        console.error('Error fetching images', error);
      }
    };
    
    fetchImages(month, year);
  }, [month, year]);

  
  const setDate = (month: string, year: string) => {
    setMonth(month);
    setYear(year);
  }

  return (
    view ? (
      <div className='home'>
        <Counter />
        <h1
          className="recap-button"
          onClick={() => switchView(!view)}
        >
          Want a Recap?
        </h1>
      </div>
    ) : (
      <div className='home'>
          <Carousel
            withIndicators
            height={500}
            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
            slideGap={{ base: 0, sm: 'md' }}
            loop
            align="start"
          >
            {allImages.map(image => 
              <Carousel.Slide><img src={image} style={{ width: 400 }}/></Carousel.Slide>
            )}
          </Carousel>

          <h2>2023</h2>
          <div className="months-container">
            {months1.map((monthInner: string) => 
              <p 
                onClick={() => setDate(monthInner, '2023')}
                className={`month-button${monthInner === month && year === '2023' ? '-special' : ''}`}
              >
                {monthInner}
              </p>
            )}
          </div>

          <h2>2024</h2>
          <div className="months-container">
            {months2.slice(0, 6).map((monthInner: string) => 
              <p
                onClick={() =>setDate(monthInner, '2024')}
                className={`month-button${monthInner === month && year === '2024' ? '-special' : ''}`}
              >
                {monthInner}
              </p>
            )}
          </div>

          <FileInput clearable label="Upload files" placeholder="Upload files" value={value} onChange={setValue}/>
      </div>
    )
  )
}

export default TriaPageHome;