import { Autocomplete, TextField } from '@mui/material';

const selects = [
  {
    name: 'type',
    label: 'Тип',
    type: '',
    options: [
      { label: 'Дохід', value: 'income', name: 'type' },
      { label: 'Витрата', value: 'expense', name: 'type' },
      { label: 'Переказ', value: 'transfer', name: 'type' },
    ],
    required: true,
  },
  { name: 'countIn', label: 'Рахунок - ДТ', type: '', options: [{ label: 'Рахунок', value: 'countIn' }] },
  { name: 'subCountIn', label: 'Суб-рахунок - ДТ', type: '', options: [] },
  { name: 'countOut', label: 'Рахунок - КТ', type: '', options: [] },
  { name: 'subCountOut', label: 'Суб-рахунок - КТ', type: '', options: [] },
  { name: 'category', label: 'Категорія', type: '', options: [] },
  { name: 'counterParty', label: 'Контрагент', type: '', options: [] },
  { name: 'provider', label: 'Постачальник', type: '', options: [] },
  { name: 'customer', label: 'Клієнт', type: '', options: [] },
  {
    name: 'subCategory',
    label: 'Під-категорія',
    type: '',
    options: [],
  },
  {
    name: 'status',
    label: 'Статус',
    type: '',
    options: [
      { label: 'Перевірено', value: 'approved', name: 'status' },
      { label: 'Узгоджено', value: 'ok', name: 'status' },
      { label: 'Проблема', value: 'problem', name: 'status' },
    ],
  },
];

const Select = ({ name, onSelect, disabled, data = {}, ...props }) => {
  let select = selects.find(el => el.name === name);
  const { label = null } = select;

  if (!select) {
    return null;
  }

  let settings = {
    ...select,
    // isOptionEqualToValue()
    // defaultValue: select?.options.find(el => el.value === data[name])?.label || null,
    options: select?.options || [],
  };
  // console.log('settings', settings.defaultValue, 'data', data);

  return (
    <Autocomplete
      {...settings}
      {...props}
      disablePortal
      onChange={onSelect}
      disabled={disabled}
      renderInput={params => <TextField variant="standard" {...params} {...{ label }} />}
    />
  );
};
export default Select;
