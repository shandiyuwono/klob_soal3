import React, { Component } from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: []
        }
    }

    componentDidMount(){
        axios.get('./index.json')
            .then(({data}) => {
                console.log(data)
                this.setState({
                    index: data.data
                })
            }) 
            .catch(err => {
                console.log(err)
            })
    }

    render() {
      return (
        <Container fluid>
          <Row className="mt-5">
            { this.state.index.map((data, index) => {
              return (
                <Col key={index} sm style={{ display: 'flex', justifyContent: 'center'}}>
                  <Card style={{ width: '27rem' }}>
                    <Card.Img variant="top" src={data.img} />
                    <Card.Body>
                      <Link to={`/${data.name}`} href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#EF534A'}}>{data.name.toUpperCase()}</Link>
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
