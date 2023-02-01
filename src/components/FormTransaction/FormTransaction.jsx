import { useEffect, useState } from 'react';
import Select from 'components/Select/Select';
import Input from 'components/Input/Input';
import { useModal } from 'components/ModalContent/Modal';
import { useSelector } from 'react-redux';
import { categoriesSelector, countsSelector } from 'redux/selectors.store';
import SelectDbl from 'components/Select/SelectDbl';
import { selects } from 'data';
import { toast } from 'react-toastify';
import FormButtons from './FormButtons/FormButtons';

import s from './FormTransaction.module.scss';
// import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

// const adds = [
//   { item: false },
//   { item: true },
//   { item: true },
//   { item: true },
//   { item: true },
//   { item: true },
//   { item: true },
//   { item: true },
//   { item: false },
//   { item: true },
//   { item: true },
//   { item: true },
//   { item: false },
// ];

const inputs = {
  date: {
    name: 'transactionDate',
    label: '',
    type: 'datetime-local',
    variant: 'standard',
  },
  time: { name: 'time', label: '', type: 'time', variant: 'standard' },
  amount: { name: 'amount', label: 'Сума', type: 'number', variant: 'standard' },
  comment: { name: 'comment', label: 'Коментар', type: 'text', variant: 'standard' },
};
const emptyObj = { name: '', _id: '', type: '' };
// const selects = [
//   { name: 'type' },
//   { name: 'countIn' },
//   { name: 'subCountIn' },
//   { name: 'countOut' },
//   { name: 'subCountOut' },
//   { name: 'category' },
//   { name: 'counterParty' },
//   { name: 'provider' },
//   { name: 'customer' },
//   { name: 'subCategory' },
//   { name: 'status' },
// ];
export const initialTransactionState = {
  transactionDate: '',
  type: '',
  countIn: emptyObj,
  subCountIn: emptyObj,
  countOut: emptyObj,
  subCountOut: emptyObj,
  category: emptyObj,
  subCategory: emptyObj,
  amount: 0,
  contractor: emptyObj,
  document: emptyObj,
  project: emptyObj,
  mark: emptyObj,
  tags: [],
  comment: '',
};

// const trTypes = {
//   EXPENSE: 'Списання',
//   INCOME: 'Дохід',
//   TRANSFER: 'Переказ',
// };

const FormTransaction = ({
  data = null,
  disabled = false,
  onAddNewTransaction,
  onEditTransaction,
  onCopyTransaction,
}) => {
  const [formData, setFormData] = useState(data || { ...initialTransactionState });
  const [closeAfterSubmit, setCloseAfterSubmit] = useState(true);
  const [clearAfterSubmit, setClearAfterSubmit] = useState(true);
  const { categories = [] } = useSelector(categoriesSelector);
  const { counts = [] } = useSelector(countsSelector);
  const modal = useModal();

  function nandleCloseAfterSubmit(ev) {
    const { checked } = ev.target;
    toast.info(`Форма ${!checked ? ' не ' : ' '}закриється після підтвердження`);
    setCloseAfterSubmit(checked);
  }
  function nandleClearAfterSubmit(ev) {
    const { checked } = ev.target;
    toast.info(`Форма${!checked ? ' не ' : ' '}очиститься після підтвердження`);
    setClearAfterSubmit(checked);
  }
  function afterSubmit() {
    if (clearAfterSubmit) {
      setFormData({});
    }
    if (closeAfterSubmit) {
      modal.handleToggleModal();
    }
  }
  function onChange(ev) {
    const { name, value } = ev.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  }
  function onSelect({ value }) {
    setFormData(prev => {
      return { ...prev, [value.name]: value?.value };
    });
  }
  function handleDblSelect({ value }) {
    // console.log('handleDblSelect', { [value?.dataKey]: value });

    setFormData(prev => {
      return { ...prev, [value?.dataKey]: value };
    });
  }
  function onSuccess(response) {
    toast.success(response?.data?.message);
    afterSubmit();
  }
  function onError(error) {
    toast.error(error.message);
    afterSubmit();
  }
  function onSubmit(ev) {
    ev.preventDefault();
    // console.log('formData ===========>>>>>>>>>>', formData);

    onAddNewTransaction && onAddNewTransaction({ ev, data: formData, onSuccess, onError });
    onEditTransaction && onEditTransaction({ ev, data: formData, onSuccess, onError });
    onCopyTransaction && onCopyTransaction({ ev, data: formData, onSuccess, onError });
  }

  useEffect(() => {
    if (!data) {
      return;
    }
    setFormData(data);
  }, [data]);

  return (
    <>
      <form
        className={s.subForm}
        onSubmit={onSubmit}
        onReset={() => {
          modal.handleToggleModal();
        }}
      >
        <div className={s.header}>
          {onAddNewTransaction && <span>{`Нова транзакція`}</span>}
          {onEditTransaction && <span>{`Змінити транзакцію ${formData?._id}`}</span>}
          {onCopyTransaction && <span>{`Копія транзакції ${formData?._id}`}</span>}
        </div>

        <div className={s.scroll}>
          <div className={s.inputs}>
            <Input {...{ ...inputs.date, onChange, disabled, data: formData }} />

            <Select {...{ onSelect, disabled, data: formData }} {...selects.trType} />

            <SelectDbl
              options={counts}
              onSelect={handleDblSelect}
              parentName={selects.countIn.name}
              parentLabel={selects.countIn.label}
              childName={selects.subCountIn.name}
              childLabel={selects.subCountIn.label}
              formData={formData}
              disabled={formData.type === 'EXPENSE'}
            />

            <SelectDbl
              options={counts}
              onSelect={handleDblSelect}
              parentName={selects.countOut.name}
              parentLabel={selects.countOut.label}
              childName={selects.subCountOut.name}
              childLabel={selects.subCountOut.label}
              formData={formData}
              disabled={formData.type === 'INCOME'}
            />

            <SelectDbl
              options={categories.filter(option => option?.type === formData?.type)}
              onSelect={handleDblSelect}
              parentName={selects.category.name}
              parentLabel={selects.category.label}
              childName={selects.subCategory.name}
              childLabel={selects.subCategory.label}
              formData={formData}
              disabled={!formData.type}
            />
            <Input {...{ ...inputs.amount, value: formData.amount, onChange, disabled, data: formData }} />

            <Select {...{ onSelect, disabled, data: formData }} {...selects.project} />
            <Select {...{ onSelect, disabled, data: formData }} {...selects.document} />
            <Select {...{ onSelect, disabled, data: formData }} {...selects.mark} />

            <Input
              {...{
                ...inputs.comment,
                onChange,
                disabled,
                data: formData,
              }}
            />
          </div>

          {/* <div className={s.btns}>
            {adds.map(el => {
              return (
                <>
                  {el.item ? (
                    <ButtonIcon styleType="BrandClrBtn" iconId={iconId.plus} styles={{ height: '100%' }} />
                  ) : (
                    <div></div>
                  )}
                </>
              );
            })}
          </div> */}
        </div>
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
    </>
  );
};

export default FormTransaction;
