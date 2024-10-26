import { z } from 'zod';
import { WeatherTitle } from '../../molecules/weather-title';
import { WeatherInformation } from '@/components/molecules/weather-information';
import { WeatherSidebar } from '@/components/molecules/weather-sidebar';
import { WeatherSearch } from '@/components/molecules/weather-search';
import { CitiesList } from '@/components/molecules/cities-list';

const WeatherContentSchema = z.object({
  textColor: z.string(),
  weatherData: z.any(),
  handleSubmit: z.function().args(z.unknown()),
  handleCityClick: z.function().args(z.unknown()),
});

type SchemaProps = z.infer<typeof WeatherContentSchema>;

export const WeatherContent = ({ 
  textColor, 
  weatherData, 
  handleSubmit, 
  handleCityClick 
}: SchemaProps) => {
  return (
    <div className="small-container">
      <WeatherTitle
        textColor={textColor}
        text='The Weather'
      />

      <WeatherInformation
        textColor={textColor}
        weatherData={weatherData}
      />

      <WeatherSidebar weatherData={weatherData} textColor={textColor}>
        <WeatherSearch onSearch={handleSubmit} />
        
        <CitiesList 
          textColor={textColor} 
          onCityClick={handleCityClick} 
        />
      </WeatherSidebar>
    </div>
  );
};