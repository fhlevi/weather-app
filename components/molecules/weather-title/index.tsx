import { Label } from '@/components/atoms/label';
import { z } from 'zod';

const WeatherTitleSchema = z.object({
    textColor: z.string(),
    text: z.string(),
});

type SchemaProps = z.infer<typeof WeatherTitleSchema>;

export const WeatherTitle = ({ textColor, text }: SchemaProps) => {
    return (
        <Label
            size="1.5rem"
            style={{ color: textColor }}>
            {text}
        </Label>
    )
}