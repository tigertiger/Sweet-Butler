import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({title, handleAction}) {
    return (
        <Button variant="outlined" color="secondary" onClick={handleAction}>{title}</Button>
    );
}