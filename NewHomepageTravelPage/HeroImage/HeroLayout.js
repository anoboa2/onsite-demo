import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const HeroLayoutRoot = styled('section')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
        height: '100%',
        minHeight: 500,
        maxHeight: 1300,

    },

}));

const Background = styled(Box)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
});

function HeroLayout(props) {
    const { sxBackground, children } = props;

    return (
        <HeroLayoutRoot>
            <Container
                sx={{
                    mt: 3,
                    mb: 14,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
                maxWidth={false}
            >
                {children}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        opacity: 0,
                        zIndex: -1,
                    }}
                />
                <Background sx={sxBackground} />
            </Container>
        </HeroLayoutRoot >
    );
}

HeroLayout.propTypes = {
    children: PropTypes.node,
    sxBackground: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default HeroLayout;
