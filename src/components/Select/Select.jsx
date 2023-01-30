import { Autocomplete, TextField } from '@mui/material';
import { selects } from './select.utils';

const Select = ({ name, onSelect, options, disabled = false, defaultValue = null, data = {}, ...props }) => {
  let select = selects.find(el => el.name === name);

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
            defaultValue={defaultValue}
            {...params}
            required={select?.required}
            label={select?.label || 'empty'}
          />
        )}
      />
    </>
  );
};
export default Select;
