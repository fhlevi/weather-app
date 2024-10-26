import { z } from 'zod';

const CitiesListSchema = z.object({
    onCityClick: z.function().args(z.unknown()),
    textColor: z.string(),
});

type SchemaProps = z.infer<typeof CitiesListSchema>;

export const CitiesList = ({ onCityClick, textColor }: SchemaProps) => {
    return (
        <ul className="cities-list">
            {['Bandung', 'Yogyakarta', 'Bali', 'Surabaya', 'Jakarta'].map((city) => (
                <li key={city} className="city" onClick={() => onCityClick(city)}>
                    <div style={{ color: textColor }}>{city}</div>
                </li>
            ))}
        </ul>
    );
};
