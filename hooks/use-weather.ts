import { useEffect, useState } from "react";

export const useWeather = () => {
  const [cityInput, setCityInput] = useState<string>('JAKARTA');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [colorIndex, setColorIndex] = useState<number>(0);

  const colors = ['black', 'white'];

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=fcc5355f37742f006545c61338ea7b1e&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error: any) {
      alert(error.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [cityInput]);

  useEffect(() => {
    const timeOfDay = weatherData?.sys?.sunset * 1000 > Date.now() ? 'day' : 'night';
    if (timeOfDay === 'day') setColorIndex(0);
    else setColorIndex(1);
  }, [weatherData]);

  const handleCityClick = (city: any) => {
    setCityInput(city);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (searchValue.length === 0) {
      alert('Please type in a city name');
    } else {
      setCityInput(searchValue);
      e.target.reset();
    }
  };

  const updateBackgroundImage = () => {
    if (!weatherData) return '';
    const timeOfDay = weatherData?.sys?.sunset * 1000 > Date.now() ? 'day' : 'night';
    const code = weatherData?.weather[0].id;

    if (code === 800) {
      return `url(../assets/images/${timeOfDay}/clear.jpg)`;
    } else if (code >= 801 && code <= 804) {
      return `url(../assets/images/${timeOfDay}/cloudy.jpg)`;
    } else if (code >= 500 && code <= 531) {
      return `url(../assets/images/${timeOfDay}/rainy.jpg)`;
    } else if (code >= 600 && code <= 622) {
      return `url(../assets/images/${timeOfDay}/snowy.jpg)`;
    } else {
      return `url(../assets/images/${timeOfDay}/default.jpg)`;
    }
  };

  return {
    backgroundImage: updateBackgroundImage(),
    textColor: colors[colorIndex],
    colors,
    colorIndex,
    loading,
    weatherData,
    
    handleSubmit,
    handleCityClick
  };
};