import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const FormRadioGroup = ({ label, name, value, onChange, options }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup aria-label={label} name={name} value={value} onChange={onChange}>
        {options.map(option => (
          <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default FormRadioGroup;