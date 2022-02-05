import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';

const CardRoot = styled(MuiCard)(({ theme }) => ({
    backgroundColor: theme.palette.neutral.light,
    padding: 5,
    zIndex: 3,
}));

function Card(props) {
    return <CardRoot {...props} />;
}

export default Card;