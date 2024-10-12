import { useState } from 'react';

export const useDialog = () => {
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