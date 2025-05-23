import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// fetching weather data
export const fetchWeatherForecast = createAsyncThunk(
  'weather/fetchForecast',
  async (cityName, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: cityName,
          appid: API_KEY,
          units: 'metric',
          cnt: 40
        }
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return rejectWithValue('Please enter a valid city name');
      }
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    forecast: null,
    cityName: '',
    loading: false,
    error: null,
    hasSearched: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherForecast.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.hasSearched = true;
      })
      .addCase(fetchWeatherForecast.fulfilled, (state, action) => {
        state.loading = false;
        state.forecast = action.payload;
        state.cityName = action.payload.city.name;
        state.error = null;
      })
      .addCase(fetchWeatherForecast.rejected, (state, action) => {
        state.loading = false;
        state.forecast = null;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer; 