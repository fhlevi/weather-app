import { Container } from '@/components/atoms/container';
import { WeatherContent } from '@/components/organisms/weather-content';
import { useWeather } from '@/hooks/use-weather';

export const WeatherApp = () => {
  const {
    backgroundImage,
    loading,
    textColor,
    weatherData,
    handleSubmit,
    handleCityClick,
  } = useWeather();

  return (
    <Container
      style={{
        backgroundImage,
        opacity: loading ? 0 : 1,
      }}>
      <WeatherContent
        textColor={textColor}
        weatherData={weatherData}
        handleSubmit={handleSubmit}
        handleCityClick={handleCityClick}
      />
    </Container>
  );
};
