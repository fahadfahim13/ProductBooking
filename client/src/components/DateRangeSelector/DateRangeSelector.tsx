import React from 'react'
import DatePicker from 'components/DatePicker'
import { Col, Row } from 'antd'

const DateRangeSelector = () => {
  return (
    <div>
        <Row>
            <Col span={11}> <DatePicker label='From Date' /> </Col>
            <Col span={2}></Col>
            <Col span={11}> <DatePicker label='From Date' /> </Col>
        </Row>
    </div>
  )
}

export default DateRangeSelector;