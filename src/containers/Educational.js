import React, { Component } from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CardList from '../components/CardList'

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
              <CardList data={educational} />
            )
          })}
        </Row>
      </Container>
    )
  }
}
