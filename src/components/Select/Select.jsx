import { Autocomplete, TextField } from '@mui/material';

const Select = ({
  name,
  label = 'Empty',
  onSelect,
  options = [],
  disabled = false,
  reset = false,
  defaultValue,
  value,
  data = {},
  required = false,
  ...props
}) => {
  function onChange(ev, value, reason, details) {
    console.log(value);
    onSelect && onSelect({ ev, value, reason, details });
    !onSelect && console.log({ name, label, ev, value, reason, details });
  }

  return (
    <Autocomplete
      {...{
        isOptionEqualToValue: (option, value) => option.value === value.value,
        disablePortal: true,
        disabled,
        onChange,
        defaultValue,
        options: options || [],
      }}
      renderInput={params => (
        <TextField
          variant="standard"
          {...{
            value,
            required,
            label,
          }}
          {...params}
        />
      )}
    />
  );
};
export default Select;
