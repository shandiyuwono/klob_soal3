import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'

export default class Detail extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            detail: {}
        }
    }
    componentDidMount() {
        this.setState({
            detail: this.props.location.state.data
        })
    }

    render() {
        return (
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.detail.img} />
                    <Card.Body>
                        <h2>{this.state.detail.name}</h2>
                        <p>{this.state.detail.desc}</p>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}
