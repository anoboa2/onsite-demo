import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiContainer from '@mui/material/Container';

const SectionRoot = styled(MuiContainer)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    overflow: 'hidden',
    '@media (min-width: 1200px)': {
        maxWidth: 'none',
    },
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    p: 10,
    backgroundColor: theme.palette.neutral.main,
}));

function Section(props) {
    return <SectionRoot {...props}>{props.children}</SectionRoot>
}

export default Section;