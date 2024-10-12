import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

export const useToaster = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    setIsOpen((prevStateIsOpen) => {
      if (prevStateIsOpen) {
        setTimeout(() => {
          setIsOpen(true);
        }, 200);
        return false;
      }
      return true;
    });
  };

  const close = () => setIsOpen(false);

  const props = {
    isOpen,
    onRequestClose: close,
  };

  return {
    open,
    close,
    props,
  };
};

export const useToasterWithData = (initialData?: FieldValues|undefined) => {
  const modal = useToaster();
  const [modalData, setModalData] = useState(initialData);

  const open = (data: FieldValues | unknown) => {
    data && setModalData(data);
    setTimeout(() => {
      modal.open();
    }, 1);
  };

  return {
    open,
    close: modal.close,
    props: modal.props,
    data: modalData,
  };
};