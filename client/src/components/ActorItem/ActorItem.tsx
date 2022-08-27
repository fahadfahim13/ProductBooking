import React from 'react'
import { Avatar, Col, Row } from 'antd'

const ActorItem = (props: {actorName: string; characterName?: string;}) => {
  const { actorName, characterName } = props;
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
        <Col className="gutter-row" span={4}><Avatar size={50} /></Col>
        <Col className="gutter-row" span={4}></Col>
        <Col className="gutter-row" span={16}><Row>{actorName}</Row> {characterName && <Row>{characterName}</Row>}</Col>
    </Row>
  )
}

export default ActorItem