# Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information for any city.

## Features

- **City Search**: Search weather information for any city worldwide
- **Real-time Data**: Fetches current weather data from OpenWeatherMap API
- **Weather Display**: Shows temperature, location, humidity, and wind speed
- **Weather Icons**: Dynamic weather icons based on current conditions
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: CSS
- **API**: OpenWeatherMap API
- **Linting**: ESLint

## Project Structure

```
Weather_App/
├── src/
│   ├── components/
│   │   ├── Weather.jsx       # Main weather component
│   │   └── Weather.css       # Weather component styles
│   ├── assets/               # Weather icons and images
│   ├── App.jsx               # Root component
│   ├── App.css               # App styles
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML entry point
├── .env                      # Environment variables
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add your OpenWeatherMap API key:
   ```
   VITE_APP_ID=your_openweathermap_api_key
   ```

   Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

## Running the Application

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

Build the application:
```bash
npm run build
```

## Usage

1. Enter a city name in the search bar
2. Click the search icon or press Enter
3. View the weather information including:
   - Current temperature
   - Location name
   - Humidity percentage
   - Wind speed in km/hr
   - Weather condition icon

## Weather Icons

The app displays weather icons based on OpenWeatherMap icon codes:
- Clear sky (01d, 01n)
- Cloudy (02d, 02n, 03d, 03n)
- Drizzle (04d, 04n)
- Rain (09d, 09n, 10d, 10n)
- Snow (13d, 13n)

## Error Handling

- Displays an alert if no city name is entered
- Shows error messages if the city is not found
- Handles API errors gracefully with console logging

## Future Enhancements

- Add 5-day forecast
- Implement unit conversion (Celsius/Fahrenheit)
- Add location-based weather using geolocation
- Save favorite cities
- Add weather alerts
- Implement dark mode

## License

This project is open source and available under the MIT License.
