import React from 'react'
import { Col, Row } from 'antd';
import DatePicker from 'components/DatePicker'
import { DateRangeSelectorProps } from './types';
import Alert from 'components/Alert';

const DateRangeSelector = (props: DateRangeSelectorProps) => {
  const { dateRangeState, onDateFromChange, onDateToChange } = props;
  return (
    <div>
        <Row>
            <Col span={11}> <DatePicker label='From Date' minDate={dateRangeState.minDateFrom} value={dateRangeState.dateFrom} onChange={onDateFromChange} /> </Col>
            <Col span={2}></Col>
            <Col span={11}> <DatePicker label='To Date' minDate={dateRangeState.minDateTo} value={dateRangeState.dateTo} onChange={onDateToChange} /> </Col>
        </Row>
    </div>
  )
}

export default DateRangeSelector;