import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker as MaterialDatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';


const DatePicker = (props: {label: string}) => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());
    const { label } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MaterialDatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default DatePicker