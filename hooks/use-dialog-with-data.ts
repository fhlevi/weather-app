import { useState } from 'react';
import { useDialog } from './use-dialog';
import { FieldValues } from 'react-hook-form';

export const useDialogWithData = (initialData?: FieldValues|undefined) => {
  const modal = useDialog();
  const [modalData, setModalData] = useState(initialData);

  const open = (data: FieldValues|unknown) => {
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