import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherForecast } from '../store/weatherSlice';
import './CitySearch.css';

const CitySearch = () => {
  const [inputValue, setInputValue] = useState('');
  const { loading, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (inputValue.trim()) {
      dispatch(fetchWeatherForecast(inputValue.trim()));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="city-search">
      <h1>Weather Forecast</h1>
      <div className="search-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter city name..."
          className="city-input"
          disabled={loading}
        />
        <button 
          onClick={handleSearch} 
          disabled={loading || !inputValue.trim()}
          className="search-button"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
    </div>
  );
};

export default CitySearch; 