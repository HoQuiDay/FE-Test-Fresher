import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Search from './Search';
import './Weather.scss';
function Weather() {
  const [apiData, setApiData] = useState('');
  // useEffect(() => {
  //   let isCancel = false;
  //   const fetchData = async () => {
  //     let data = await axios({
  //       method: 'post',
  //       url: 'http://localhost:8080/get-data-by-url',
  //       data: { url: 'https://www.metaweather.com/api/location/1236594' }
  //     });
  //     setApiData(data.data.title);
  //     console.log('🚀 >>>>> useEffect >>>>> data:', data);
  //   };
  //   if (!isCancel) {
  //     fetchData();
  //   }
  //   return () => {
  //     isCancel = true;
  //   };
  // }, []);

  return (
    <div className='weather-app-container'>
      <Search />
    </div>
  );
}

export default Weather;
