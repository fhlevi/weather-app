import { z } from 'zod';
import SearchSVG from '@/assets/icons/etc/search.svg';

const WeatherSearchSchema = z.object({
  onSearch: z.function(),
});

type SchemaProps = z.infer<typeof WeatherSearchSchema>;

export const WeatherSearch = ({ onSearch }: SchemaProps) => {
  return (
    <form className="check-location" onSubmit={onSearch}>
      <input
        className="search-here"
        name="search"
        type="text"
        placeholder="Search Location..."
      />
      <button type="submit" className="submit-now">
        <img src={SearchSVG} alt="search-icon" />
      </button>
    </form>
  );
};
