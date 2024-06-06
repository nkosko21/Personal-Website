import { Carousel } from "@mantine/carousel";
import { useEffect, useState } from "react";
import Counter from "./Components/counter";
import './TriaPageHome.css';

function TriaPageHome() {
  const [view, switchView] = useState(true);
  const [count, setCount] = useState(0);
 
  useEffect(() => {
      const interval = setInterval(() => {
          setCount(count + 1);
      }, 1000);

      return () => clearInterval(interval);
  }, [count]);
    
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
              height={1000}
              slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
              slideGap={{ base: 0, sm: 'md' }}
              loop
              align="start"
            >
              <Carousel.Slide><div style={{width: 950, height: 950}}></div></Carousel.Slide>
              <Carousel.Slide>2</Carousel.Slide>
              <Carousel.Slide>3</Carousel.Slide>
              {/* ...other slides */}
            </Carousel>
        </div>
      )
    )
}

export default TriaPageHome;