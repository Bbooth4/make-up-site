import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Textarea = ({
  label,
  defaultValue = '',
  ...rest
}) => (
  <TextField
    {...rest}
    multiline
    rows='4'
    label={label}
    variant='outlined'
    defaultValue={defaultValue}
  />
);

export default Textarea;
