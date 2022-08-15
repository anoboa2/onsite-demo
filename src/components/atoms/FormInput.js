import { Box, FormControl, Input, InputLabel } from '@mui/material';
import { useState } from 'react';

const FormInput = ({ label, name, value, onChange, type, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Box mb={2}>
      <FormControl variant="outlined" {...props}>
        <InputLabel
          htmlFor={name}
          variant={isFocused || isFilled ? 'filled' : 'outlined'}
          {...props}
        >
          {label}
        </InputLabel>
        <Input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </FormControl>
    </Box>
  );
}

export default FormInput;