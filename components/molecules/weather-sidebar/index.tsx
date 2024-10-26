import { Label } from '@/components/atoms/label';
import { z } from 'zod';

const WeatherSidebarSchema = z.object({
  weatherData: z.any(),
  children: z.unknown(),
  textColor: z.string(),
});

type SchemaProps = z.infer<typeof WeatherSidebarSchema>;

export const WeatherSidebar = ({
  children,
  weatherData,
  textColor,
}: SchemaProps) => {
  return (
    <div className="side-bar">
      {children}

      {weatherData && (
        <ul className="deatlis-information-in-side-bar">
          <Label style={{ color: textColor }}>Weather Details</Label>
          <li>
            <Label style={{ color: textColor }}>Cloudy</Label>
            <Label className="cloud" style={{ color: textColor }}>
              {weatherData.clouds.all}%
            </Label>
          </li>
          <li>
            <Label style={{ color: textColor }}>Humidity</Label>
            <Label className="humidity" style={{ color: textColor }}>
              {weatherData.main.humidity}%
            </Label>
          </li>
          <li>
            <Label style={{ color: textColor }}>Wind</Label>
            <Label className="wind" style={{ color: textColor }}>
              {weatherData.wind.speed} km/h
            </Label>
          </li>
        </ul>
      )}
    </div>
  );
};
