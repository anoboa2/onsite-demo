import * as React from 'react';
import WaitlistLanding from '../modules/views/WaitlistLanding';
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import withRoot from '../modules/withRoot';

// const backgroundImg =
//   'https://images.unsplash.com/photo-1536789966001-6a8beea3779b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80';

// const Background = styled(Box)({
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     zIndex: -2,
//     backgroundImage: `url(${backgroundImg})`
// });


function Waitlist() {
    return (
        <WaitlistLanding />
    )
}

export default withRoot(Waitlist);