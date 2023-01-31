import React from 'react';
import { TextField } from '@mui/material';

const Input = props => {
  return <TextField variant="standard" {...{ ...props }} />;
};

export default Input;
