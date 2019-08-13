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
            <div>
               <Container>
                   <Row>
                       { this.state.index.map((data, index) => {
                           return (
                               <Col key={index} sm>
                                   <Card style={{ width: '18rem' }}>
                                       <Card.Img variant="top" src={data.img} />
                                       <Card.Body>
                                           <Link to={`/${data.name}`} href="#">{data.name.toUpperCase()}</Link>
                                       </Card.Body>
                                   </Card>
                               </Col>
                           )
                       })}
                  
                   </Row>
               </Container>
            </div>
        )
    }
}
