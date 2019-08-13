import React, { Component } from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Educational extends Component {
    constructor(props) {
        super(props)
        this.state = {
            educationals: []
        }
    }

    componentDidMount() {
        axios.get('./educational.json')
            .then(({data}) => {
                this.setState({
                    educationals: data.data
                })
            })
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.educationals.map(educational => {
                        return (
                            <Col key={educational.id} xs={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={educational.img} />
                                    <Card.Body>
                                        <Link to={{ pathname: `/detail/${educational.id}`, state: { data: educational }} }>{educational.name.toUpperCase()}</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}
