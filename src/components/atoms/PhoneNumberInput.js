import intlTelInput from 'intl-tel-input';
import { styled } from '@mui/material/styles';

const Input = styled('input')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.neutral.main,
  border: '1px solid #e6edf0',
  borderRadius: '4px',
  padding: '12px',
  '&:focus': {
    borderColor: theme.palette.primary.main,
    },
  }));

const PhoneNumberInput = ({ value, onChange }) => {
  const phoneInput = document.getElementById('phone-input');
  const phoneInputInstance = intlTelInput(phoneInput, {
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js',
    preferredCountries: ['us', 'ca', 'gb'],
    separateDialCode: true,
    nationalMode: false,
    autoPlaceholder: 'aggressive',
    autoFormat: false,
    autoHideDialCode: false,
    initialCountry: 'us',
  });
  phoneInputInstance.setNumber(value);
  phoneInputInstance.on('change', (event) => {
    onChange(event.target.value);
  } );

  return (
    <Input
      id="phone-number"
      name="phoneNumber"
      type='tel'
      pattern="^(\+?1[ -]?)?\(?[2-9]\d\d\)?[ -]?[2-9]\d\d[ -]?\d{4}$"
      value={value}
      onChange={onChange}
    />
  );
}

export default PhoneNumberInput;