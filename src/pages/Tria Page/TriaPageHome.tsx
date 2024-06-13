import { Carousel } from "@mantine/carousel";
import { FileInput } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import Counter from "./Components/counter";
import DatePicker from "./DatePicker/DatePicker";
import Recap from "./Recap/recap";
import './TriaPageHome.css';

function TriaPageHome() {
  const [currentImage, setCurrentImage] = useState();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={
        <div className='home'>
          <Counter />
          <h1
            className="recap-button"
            onClick={() => navigate('recap')}
          >
            Want a Recap?
          </h1>
          <h2
            className="date-button"
            onClick={() => navigate('dates')}
            style={{
              position: 'absolute',
              top: '20%',
              right: '70%',
              rotate: '-20deg',
              fontSize: '3rem'
            }}
          >
            Let's go on a date!
          </h2>
        </div>}
      />
      <Route path="/recap" element={<Recap />} />
      <Route path="/dates" element={<DatePicker />} />
    </Routes>
  );
}

export default TriaPageHome;