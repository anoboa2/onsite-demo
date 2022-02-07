import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';

const InputRoot = styled(MuiInput)(({ theme }) => ({
    ...theme.typography.subtitle1,
    paddingLeft: 12,
    background: theme.palette.neutral.dark,
    color: theme.palette.text.secondary,
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
        fontSize: '.9em',
    },
    // [theme.breakpoints.down('md')]: {
    //     fontSize: '.9em',
    // },
}));

function Input(props) {
    return <InputRoot {...props} />
}

export default Input;