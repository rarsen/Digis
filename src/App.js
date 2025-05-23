import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CitySearch from './components/CitySearch';
import WeatherChart from './components/WeatherChart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CitySearch />
        <WeatherChart />
      </div>
    </Provider>
  );
}

export default App;
