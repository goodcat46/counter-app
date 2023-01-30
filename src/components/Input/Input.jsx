import React from 'react';
import { TextField } from '@mui/material';

const Input = props => {
  return <TextField variant="standard" {...{ ...props, value: props?.data[props?.name] || '' }} />;
};

export default Input;
