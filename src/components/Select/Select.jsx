import { Autocomplete, TextField } from '@mui/material';
import { selects } from './select.utils';

const Select = ({ name, onSelect, options, disabled = false, reset = false, defaultValue, data = {}, ...props }) => {
  let select = selects.find(el => el.name === name);
  let value = !reset && data[name] && data[name];
  return (
    <>
      <Autocomplete
        options={options || select?.options || []}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        disablePortal
        onChange={onSelect}
        disabled={disabled}
        renderInput={params => (
          <TextField
            variant="standard"
            {...{ defaultValue, value, required: select?.required, label: select?.label || 'empty' }}
            {...params}
          />
        )}
      />
    </>
  );
};
export default Select;
