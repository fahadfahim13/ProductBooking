import React from 'react';

import {Button} from '@mui/material';
import {Props} from "./types";

const ActionButton = (props: Props) => {
    const { variant="outlined", startIcon=null, value="Button", color="primary", onClick } = props;
    return (
        <Button variant={variant} startIcon={startIcon} color={color} onClick={onClick}>
            {value}
        </Button>
    );
};

export default ActionButton;