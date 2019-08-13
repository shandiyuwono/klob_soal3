import React, { Component } from 'react'
import NavigationBar from '../components/NavigationBar'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import axios from 'axios'

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
               <NavigationBar /> 
               <Container>
                   <Row>
                       { this.state.index.map(data => {
                           return (
                               <Col sm>
                                   <Card style={{ width: '18rem' }}>
                                       <Card.Img variant="top" src={data.img} />
                                       <Card.Body>
                                           {/* <Card.Title>{data.name.toUpperCase()}</Card.Title> */}
                                           <a href="#">{data.name.toUpperCase()}</a>
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
