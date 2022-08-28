import React from 'react';

import {Snackbar, Alert as AlertMaterial} from '@mui/material';
import {Props} from './types';

const Alert = (props: Props) => {
    const {open, vertical="top", horizontal="center", message, onClose, severity="info"} = props;
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            key={vertical + horizontal}
            onEnded={onClose}
        >
            <AlertMaterial onClose={onClose} severity={severity}>{message}</AlertMaterial>
        </Snackbar>
    );
};

export default Alert;