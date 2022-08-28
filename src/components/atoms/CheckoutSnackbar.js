import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';
import CheckoutSnackbarOptions from '../../content/CheckoutSnackbarOptions';

const CheckoutSnackbar = () => {
  const [ checkout, setCheckout] = useState({});
  const [ isOpen, setOpen ] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const search = useLocation().search;

  useEffect(() => {
    const source = new URLSearchParams(search).get('checkout');
    switch (source) {
      case 'cancel':
        setCheckout(CheckoutSnackbarOptions.cancel);
        setOpen(true);
        break;
      case 'success':
        setCheckout(CheckoutSnackbarOptions.success);
        setOpen(true);
        break;
      default:
        setOpen(false);
        setCheckout({});
        break;
    }
  }, [])

  return (
    {checkout} && (
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={isOpen}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} variant="filled" severity={checkout.severity} sx={{ width: '100%' }}>
          {checkout.message}
        </Alert>
      </Snackbar>
    )
  );
}

export default CheckoutSnackbar;
