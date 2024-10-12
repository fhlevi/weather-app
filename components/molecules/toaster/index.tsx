import { Close, Description, Title, Toast } from '@/components/atoms/toast';
import { ToasterWithDataSchema } from '@/types/toaster';

export const Toaster = ({ data, props }: ToasterWithDataSchema) => {
  return (
    <Toast open={props.isOpen} onOpenChange={props.onRequestClose}>
      <Title className="mb-[5px] text-[15px] font-medium text-slate12 [grid-area:_title] text-primary-10">
        {data?.title}
      </Title>
      <Description asChild>
        <div className="m-0 text-[13px] leading-[1.3] text-slate11 [grid-area:_description] text-white">
          {data?.description}
        </div>
      </Description>
      <Close onClick={props.onRequestClose} altText="close" asChild />
    </Toast>
  );
};