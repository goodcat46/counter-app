import { useEffect, useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';

import s from './Transaction.module.scss';

const inputs = [
  { name: 'date', label: '', type: 'date' },
  { name: 'time', label: '', type: 'time' },
  { name: 'value', label: 'Сума', type: 'number' },
  { name: 'counterParty', label: 'Контрагент', type: 'text' },
  { name: 'document', label: 'Документ', type: 'text' },
  { name: 'comment', label: 'Коментар', type: 'text' },
];
const selects = [
  {
    name: 'type',
    label: 'Тип',
    type: '',
    options: [
      { label: 'Дохід', value: 'income' },
      { label: 'Витрата', value: 'expense' },
      { label: 'Переказ', value: 'transfer' },
    ],
  },
  { name: 'countIn', label: 'Рахунок - ДТ', type: '', options: [{ label: 'Рахунок' }] },
  { name: 'subCountIn', label: 'Суб-рахунок - ДТ', type: '', options: [] },
  { name: 'countOut', label: 'Рахунок - КТ', type: '', options: [] },
  { name: 'subCountOut', label: 'Суб-рахунок - КТ', type: '', options: [] },
  { name: 'category', label: 'Категорія', type: '', options: [] },
  { name: 'subCategory', label: 'Під-категорія', type: '', options: [] },
];

const initialState = {
  date: '',
  time: '',
  value: '',
  comment: '',
  type: '',
  countIn: '',
  subCountIn: '',
  countOut: '',
  subCountOut: '',
  category: '',
  subCategory: '',
};
const Transaction = ({
  disabled = true,
  data,
  idx,
  onCreateTransaction,
  onDeleteTransaction,
  onEditTransaction,
  onCopyTransaction,
}) => {
  const [transactionData, setTransactionData] = useState(initialState);

  function onChange(ev) {
    const { name, value } = ev.target;
    setTransactionData(prevState => {
      return { ...prevState, [name]: value };
    });
    console.log(transactionData);
  }
  function onSelect(ev, value, reason, details) {
    console.log({ ev, value, reason, details });
  }

  useEffect(() => {
    if (!data) {
      return;
    }
    setTransactionData(data);
  }, [data]);

  return (
    <>
      <fieldset className={s.rowContainer}>
        {/* <div className={s.rowActions}>
          <Button>
            <SvgIcon iconId="actions-h" style={{ fill: '#000' }} />
          </Button>
          <div className={s.actionsList}>
            <Button>
              <SvgIcon iconId="close" style={{ fill: '#000' }} />
            </Button>
            <Button>
              <SvgIcon iconId="copy" style={{ fill: '#000' }} />
            </Button>
            <Button>
              <SvgIcon iconId="delete" style={{ fill: '#000' }} />
            </Button>
          </div>
        </div> */}

        <div className={s.inputs}>
          <TextField variant="outlined" {...inputs[0]} onChange={onChange} disabled />
          <TextField variant="outlined" {...inputs[1]} onChange={onChange} disabled />

          {selects.map(item => (
            <Autocomplete
              key={item.name}
              disablePortal
              id={item.name}
              options={item?.options}
              onChange={onSelect}
              renderInput={params => <TextField {...params} label={item.label} />}
              disabled
            />
          ))}
          <TextField variant="outlined" {...inputs[2]} onChange={onChange} disabled />
          <TextField variant="outlined" {...inputs[3]} onChange={onChange} disabled />
          <TextField variant="outlined" {...inputs[4]} onChange={onChange} disabled />
          <TextField variant="outlined" {...inputs[5]} onChange={onChange} disabled />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            isOptionEqualToValue={inputs[3].value}
            options={[]}
            onChange={onSelect}
            disabled
            renderInput={params => <TextField {...params} label="Статус" />}
          />
        </div>
      </fieldset>
    </>
  );
};

export default Transaction;
