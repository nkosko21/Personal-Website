import React, { useState } from 'react';
import './PrizeWheel.css';
import datesData from './dates.json';
import { useNavigate } from 'react-router-dom';

type DatesData = {
  dates: string[];
};
const dateList: DatesData = datesData as DatesData;

const DatePicker: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<string | null>(null);
  const { dates } = dateList;
  const navigate = useNavigate();

  const spinWheel = () => {
      if (spinning) return;

      setSpinning(true);
      setSelectedPrize(null);

      const spins = Math.floor(Math.random() * 5) + 5; // Random number of spins
      const prizeIndex = Math.floor(Math.random() * dates.length);
      const segmentAngle = 360 / dates.length;
      const extraRotation = 360 * spins;
      const prizeRotation = segmentAngle * prizeIndex;
      const totalRotation = extraRotation + prizeRotation - (segmentAngle / 2); // Adjust to align the prize at the bottom

      setTimeout(() => {
          setSelectedPrize(dates[prizeIndex]);
          setSpinning(false);
      }, 4000); // Assuming the spin animation takes 4 seconds

      const wheel = document.getElementById('wheel');
      if (wheel) {
          wheel.style.transition = 'transform 4s ease-out';
          wheel.style.transform = `rotate(${totalRotation}deg)`;
      }
  };

  return (
      <div className="prize-wheel-container">
          <h2
              className="back-button"
              onClick={() => navigate('/tria')}
          >
              Back
          </h2>
          <div id="wheel" className="wheel">
              {dates.map((date, index) => (
                  <div
                      key={index}
                      className="segment"
                      style={{
                          transform: `rotate(${index * (360 / dates.length)}deg)`,
                          fontSize: '2rem'
                      }}
                  >
                      <div className="text">{date}</div>
                  </div>
              ))}
          </div>
          <button onClick={spinWheel} disabled={spinning}>Spin</button>
          {selectedPrize && <div className="prize">Looks like we gotta {selectedPrize}!</div>}
      </div>
  );
};

const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


export default DatePicker;