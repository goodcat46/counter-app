import { createContext, useContext, useState } from 'react';
import { useModal } from 'components/ModalContent/Modal';
import { toast } from 'react-toastify';
import FormButtons from './FormButtons/FormButtons';

import s from './FormBase.module.scss';
import AppLoader from 'components/AppLoader/AppLoader';

export const FormBaseCTX = createContext();
export const useFormBase = () => useContext(FormBaseCTX);

const FormBase = ({
  data = null,
  disabled = false,
  initialState,
  onAddNewTransaction,
  onEditTransaction,
  onCopyTransaction,
  children,
  title = 'Форма',
  CTXvalue,
  handleSubmit,
  isLoading = false,
  ...props
}) => {
  const [formData, setFormData] = useState(initialState || {});
  const [settings, setSettings] = useState({ title });
  const [closeAfterSubmit, setCloseAfterSubmit] = useState(true);
  const [clearAfterSubmit, setClearAfterSubmit] = useState(true);
  const modal = useModal();

  function setFormSettings(settings) {
    setSettings(prev => {
      return { ...prev, ...settings };
    });
  }
  function onFormStateChange(data) {
    setFormData(prev => {
      return { ...prev, ...data };
    });
  }
  function nandleCloseAfterSubmit(ev) {
    const { checked } = ev.target;
    setCloseAfterSubmit(checked);
    toast.info(`Форма${!checked ? ' не ' : ' '}закриється після підтвердження`);
  }
  function nandleClearAfterSubmit(ev) {
    const { checked } = ev.target;
    toast.info(`Форма${!checked ? ' не ' : ' '}очиститься після підтвердження`);
    setClearAfterSubmit(checked);
  }
  function afterSubmit(error) {
    if (clearAfterSubmit) {
      setFormData();
    }
    if (closeAfterSubmit) {
      modal.handleToggleModal();
    }
  }
  function onSuccess(response) {
    toast.success(response?.data?.message);
    afterSubmit();
  }
  function onError(error) {
    toast.error(error.message);
    // afterSubmit();
  }
  function onSubmit(ev, data) {
    ev.preventDefault();

    // console.log('formData ===========>>>>>>>>>>', formData);

    const payload = {
      ev,
      formData,
      data: formData,
      onSuccess: data?.onSuccess || onSuccess,
      onError: data?.onError || onError,
    };

    handleSubmit && handleSubmit(payload);
    onAddNewTransaction && onAddNewTransaction(payload);
    onEditTransaction && onEditTransaction(payload);
    onCopyTransaction && onCopyTransaction(payload);
  }
  const CTX = {
    onFormStateChange,
    onSubmit,
    formData,
    onAddNewTransaction,
    onEditTransaction,
    onCopyTransaction,
    closeAfterSubmit,
    clearAfterSubmit,
    modal,
    data,
    disabled,
    setFormSettings,
    CTXvalue,
    ...props,
  };

  return (
    <>
      <FormBaseCTX.Provider value={CTX}>
        <AppLoader {...{ isLoading }} />
        <form
          className={s.subForm}
          onSubmit={onSubmit}
          onReset={() => {
            modal.handleToggleModal();
          }}
        >
          <div className={s.header}>
            {settings?.title && <span>{settings?.title}</span>}
            {onAddNewTransaction && <span>{`Нова транзакція`}</span>}
            {onEditTransaction && <span>{`Змінити транзакцію ${formData?._id ? formData?._id : ''}`}</span>}
            {onCopyTransaction && <span>{`Копія транзакції ${formData?._id ? formData?._id : ''}`}</span>}
          </div>

          <div className={s.scroll}>{children}</div>

          <FormButtons
            {...{
              disabled: false,
              nandleCloseAfterSubmit,
              closeAfterSubmit,
              nandleClearAfterSubmit,
              clearAfterSubmit,
            }}
          />
        </form>
      </FormBaseCTX.Provider>
    </>
  );
};

export default FormBase;
