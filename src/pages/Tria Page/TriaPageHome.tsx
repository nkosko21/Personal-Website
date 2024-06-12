import { Carousel } from "@mantine/carousel";
import { FileInput } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import Counter from "./Components/counter";
import Recap from "./Recap/recap";
import './TriaPageHome.css';

function TriaPageHome() {
  const [currentImage, setCurrentImage] = useState();
  const navigate = useNavigate();

  const switchView = () => {
    navigate('recap');
  } 
  

  return (
    <Routes>
      <Route path="/" element={
        <div className='home'>
          <Counter />
          <h1
            className="recap-button"
            onClick={switchView}
          >
            Want a Recap?
          </h1>
        </div>}
      />
      <Route path="/recap" element={<Recap />} />
      {/* <Route path="/dates" element={datePicker} /> */}
    </Routes>
  );
}

export default TriaPageHome;