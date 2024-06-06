import React from 'react';
import './counter.css';

function Counter() {

  const dayOne = new Date('2023-03-19');

  const currentDate = new Date();

  const differenceInMs = currentDate.getTime() - dayOne.getTime();

  const daysSinceDayOne = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  const hoursSinceDayOne = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesSinceDayOne = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
  const secondsSinceDayOne = Math.floor((differenceInMs % (1000 * 60)) / 1000);
  
  return (
    <div className='counter col'>
      <p className='we-been'>
        We've been dating for...
      </p>
      <br />
      <div className='row' style={{ alignSelf: 'center'}}>
        {numberTile(daysSinceDayOne, 'days')}
        {numberTile(hoursSinceDayOne, 'hours')}
        {numberTile(minutesSinceDayOne, 'min.')}
        {numberTile(secondsSinceDayOne, 'sec.')}
      </div>
    </div>
  )
}

const numberTile = (num: number, title: string) => {
  return (
    <div className='titleTile col' style={{ alignItems: 'flex-start' }}>
      <div className='numberTile'>
        {num}
      </div>
      <span style={{ marginLeft: 10 }}>{title}</span>
    </div>
  )
}

export default Counter;