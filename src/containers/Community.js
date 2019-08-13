import React, { Component } from 'react'
import axios from 'axios'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Community extends Component {
    constructor(props) {
        super(props)
        this.state = {
            communities : []
        }
    }

    componentDidMount() {
        axios.get('./community.json')  
            .then(({data}) => {
                this.setState({
                    communities: data.data
                })
            })
    }
    render() {
        return (
            <Container>
                <Row>
                    { this.state.communities.map(community => {
                        return (
                            <Col key={community.id} xs={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={community.img} />
                                    <Card.Body>
                                        <Link to={{ pathname: `/detail/${community.id}`, state: { data: community } }}>{community.name.toUpperCase()}</Link>
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
