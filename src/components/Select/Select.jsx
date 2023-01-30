import { Autocomplete, TextField } from '@mui/material';
import { selects } from './select.utils';

const Select = ({
  name,
  label,
  onSelect,
  options,
  disabled = false,
  reset = false,
  defaultValue,
  data = {},
  required,
  ...props
}) => {
  let select = selects.find(el => el.name === name);
  let value = !reset && data[name] && data[name];
  function handleSelect(ev, value, reason, details) {
    onSelect && onSelect({ ev, value, reason, details });
  }
  return (
    <>
      <Autocomplete
        options={options || select?.options || []}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        disablePortal
        onChange={handleSelect}
        disabled={disabled}
        renderInput={params => (
          <TextField
            variant="standard"
            {...{
              defaultValue,
              value,
              required: required || select?.required,
              label: label || select?.label || 'empty',
            }}
            {...params}
          />
        )}
      />
    </>
  );
};
export default Select;
