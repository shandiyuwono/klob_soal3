import React, { Component } from 'react'
import axios from 'axios'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Company extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companies : []
        }
    }

    componentDidMount() {
        axios.get('./company.json')
            .then(({data}) => {
                this.setState({
                    companies: data.data
                })
            })
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.companies.map(company => {
                        return (
                            <Col key={company.id} xs={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={company.img} />
                                    <Card.Body>
                                        <Link to={{ pathname: `/detail/${company.id}`, state: { data: company }} }>{company.name.toUpperCase()}</Link>
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
