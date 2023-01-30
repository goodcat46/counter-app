import { Autocomplete, TextField } from '@mui/material';

const selects = [
  {
    name: 'type',
    label: 'Тип',
    options: [
      { label: 'Дохід', value: 'INCOME', name: 'type' },
      { label: 'Витрата', value: 'EXPENSE', name: 'type' },
      { label: 'Переказ', value: 'TRANSFER', name: 'type' },
    ],
    required: true,
  },
  { name: 'countIn', label: 'Рахунок/IN' },
  { name: 'subCountIn', label: 'Суб-рахунок/IN' },
  { name: 'countOut', label: 'Рахунок/OUT' },
  { name: 'subCountOut', label: 'Суб-рахунок/OUT' },
  { name: 'category', label: 'Категорія' },
  { name: 'subCategory', label: 'Під-категорія' },
  { name: 'contractor', label: 'Контрагент' },
  { name: 'document', label: 'Документ' },
  { name: 'mark', label: 'Мітка' },

  {
    name: 'status',
    label: 'Статус',
    options: [
      { label: 'Перевірено', value: 'checked', name: 'status' },
      { label: 'Узгоджено', value: 'approved', name: 'status' },
      { label: 'Проблема', value: 'problem', name: 'status' },
    ],
  },
];

const Select = ({ name, onSelect, options, disabled, defaultValue, data = {}, ...props }) => {
  let select = selects.find(el => el.name === name);

  if (!select) {
    return null;
  }

  let settings = {
    ...select,
    options: options || select?.options || [],
  };

  return (
    <Autocomplete
      {...settings}
      {...props}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      disablePortal
      onChange={onSelect}
      disabled={disabled}
      renderInput={params => (
        <TextField variant="standard" defaultValue={defaultValue} {...params} label={select?.label} />
      )}
    />
  );
};
export default Select;
