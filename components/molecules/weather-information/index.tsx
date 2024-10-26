import { z } from 'zod';
import { Label } from '@/components/atoms/label';
import { Flex } from '@/components/atoms/flex';

const WeatherInformationSchema = z.object({
  textColor: z.string(),
  weatherData: z.any(),
});

type SchemaProps = z.infer<typeof WeatherInformationSchema>;

export const WeatherInformation = ({ textColor, weatherData }: SchemaProps) => {
  return (
    weatherData && (
      <>
        <Flex className="city-name-time-date-information">
          <Label className="temp-details" style={{ color: textColor }}>
            {weatherData.main.temp}&#176;
          </Label>

          <Flex direction="col" className="small">
            <Label className="text-[3rem]" style={{ color: textColor }}>
              {weatherData.name}
            </Label>
            <Label className="time" style={{ color: textColor }}>
              {new Date(weatherData.dt * 1000).toLocaleTimeString()}
            </Label>
            <Label className="date" style={{ color: textColor }}>
              {new Date(weatherData.dt * 1000).toLocaleDateString()}
            </Label>
          </Flex>
          <Flex direction="col" className="weather-icon-information">
            <img
              className="icoo"
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
              width="60px"
            />
            <Label
              className="condition-of-the-day"
              style={{ color: textColor }}>
              {weatherData.weather[0].description}
            </Label>
          </Flex>
        </Flex>
      </>
    )
  );
};
