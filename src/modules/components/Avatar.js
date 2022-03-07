import React from 'react';
import Avatar from '@mui/material/Avatar';

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
}
  
function stringAvatar(name) {
    return {
        sx: {
        height: 80,
        width: 80,
        bgcolor: stringToColor(name),
        fontSize: 30,
        mx: 'auto',
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}
  
export default function BackgroundLetterAvatars(props) {
    return <Avatar {...stringAvatar(props.name)} />
}