import axios from 'axios';
import React, { useState } from 'react';
import _ from 'lodash';
const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [locationArr, setLocationArr] = useState([]);
  const handleClickBtn = async () => {
    let response = await axios({
      method: 'post',
      url: 'http://localhost:8080/get-data-by-url',
      data: { url: `https://www.metaweather.com/api/location/search/?query=${keyword}` }
    });
    console.log('🚀 >>>>> handleClickBtn >>>>> response:', response);
    if (response && response.data) {
      let result = response.data;
      let _locationArr = [];
      if (_.isEmpty(result)) setLocationArr([]);
      else {
        for (let key in result) {
          _locationArr.push(result[key]);
        }
        setLocationArr(_locationArr);
      }
    }
  };
  return (
    <div className='search-weather-container'>
      <div className='search-input'>
        <input
          type='text'
          placeholder='Search any city...'
          value={keyword}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
        <button onClick={() => handleClickBtn()}>Search</button>
      </div>
      <div className='result-container'>
        {locationArr &&
          locationArr.length > 0 &&
          locationArr.map((item, index) => {
            return (
              <div
                className='result'
                key={`location${index}`}>
                <div className='title'>Title:{item.title}</div>
                <div className='type'>Type:{item.location_type}</div>
                <div className='woeid'>Woeid:{item.woeid}</div>
                <div className='latt_long'>Latt_long:{item.latt_long}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
