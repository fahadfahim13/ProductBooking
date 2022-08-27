import React from 'react';

import {Snackbar, Alert as AlertMaterial} from '@mui/material';
import {Props} from './types';

const Alert = (props: Props) => {
    const {open, vertical="top", horizontal="center", message, onClose} = props;
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            key={vertical + horizontal}
        >
            <AlertMaterial onClose={onClose} severity="error">{message}</AlertMaterial>
        </Snackbar>
    );
};

export default Alert;