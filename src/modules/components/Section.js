import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiContainer from '@mui/material/Container';

const SectionRoot = styled(MuiContainer)(({ theme }) => ({
    background: theme.palette.neutral.main,
    display: 'flex',
    overflow: 'hidden',
    '@media (min-width: 1200px)': {
        maxWidth: 'none',
    },
}));

function Section(props) {
    return <SectionRoot {...props} />
}

export default Section;