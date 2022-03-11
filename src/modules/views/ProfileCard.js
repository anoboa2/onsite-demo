import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

function ProfileCard() {
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardHeader
                avatar={'avater'
                    // ternary operator if Rownd.user.data.get({value}) if filled, then return success icon
                    // ) : ( if null or empty string, return X incomplete icon
                }
                >
                </CardHeader>
        </Card>
    )
}