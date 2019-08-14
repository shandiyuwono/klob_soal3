import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CardList extends Component {
  render() {
    let data = this.props.data
    return (
      <Col key={data.id} xs={4} style={{ display: 'flex', justifyContent: 'center'}} className="mt-4">
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={data.img} />
          <Card.Body>
            <Link to={{ pathname: `/detail/${data.id}`, state: { data: data } }} style={{ fontSize: '1.5rem', color: '#EF534A', fontWeight: 'bold' }}>{data.name.toUpperCase()}</Link>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
