# Weather Forecast App

A React application that displays weather forecast data for any city using the OpenWeatherMap API.

## Features

-  **City Search**: Search for weather forecast by city name
-  **Interactive Chart**: Vertical bar chart showing temperature forecast using Recharts
-  **Redux State Management**: Centralized state management using Redux Toolkit
-  **Error Handling**: Proper error messages for invalid cities or API failures
-  **Responsive Design**: Works on desktop and mobile devices
-  **Clean UI**: Simple and intuitive user interface

## Tech Stack

- **React** - Frontend framework
- **Redux Toolkit** - State management
- **Axios** - HTTP client for API requests
- **Recharts** - Chart library for data visualization
- **OpenWeatherMap API** - Weather data provider
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rarsen/Digis.git
   cd forecast
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.


## Project Structure

```
src/
├── components/
│   ├── CitySearch.js          # City search input component
│   ├── CitySearch.css         # Styles for city search
│   ├── WeatherChart.js        # Weather chart component
│   └── WeatherChart.css       # Styles for weather chart
├── store/
│   ├── store.js              # Redux store configuration
│   └── weatherSlice.js       # Weather state slice
├── App.js                    # Main app component
├── App.css                   # App styles
└── index.js                  # App entry point
```

## API

This application uses the [OpenWeatherMap 5 Day Weather Forecast API](https://openweathermap.org/forecast5).

## Error Handling

The app handles various error scenarios:
- Invalid city names
- Network errors
- API key expiration
- No search results