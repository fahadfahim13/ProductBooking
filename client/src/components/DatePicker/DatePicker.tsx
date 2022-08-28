import React from 'react';
import moment, { Moment } from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider, DatePicker as MaterialDatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { DatePickerProps } from './types';


const DatePicker = (props: DatePickerProps ) => {
    const { label, minDate, value, onChange } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MaterialDatePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
        minDate={minDate}
      />
    </LocalizationProvider>
  )
}

export default DatePicker