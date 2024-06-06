import { Carousel } from "@mantine/carousel";
import { FileInput } from "@mantine/core";
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
  const [year, setYear] = useState(2023);

  useEffect(() => {
      const interval = setInterval(() => {
          setCount(count + 1);
      }, 1000);

      return () => clearInterval(interval);
  }, [count]);
    
  const setDate = (month: string, year: number) => {
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
            <Carousel.Slide><div style={{width: 950, height: 950}}></div></Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
          </Carousel>

          <h2>2023</h2>
          <div className="months-container">
            {months1.map((month: string) => 
              <p onClick={() => setDate(month, 2023)} className="month-button">{month}</p>
            )}
          </div>

          <h2>2024</h2>
          <div className="months-container">
            {months2.slice(0, 6).map((month: string) => 
              <p className="month-button">{month}</p>
            )}
          </div>

          <FileInput clearable label="Upload files" placeholder="Upload files" value={value} onChange={setValue}/>
      </div>
    )
  )
}

export default TriaPageHome;