import React, { Component } from 'react'
import axios from 'axios'
import { Row, Container } from 'react-bootstrap'
import CardList from '../components/CardList'

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
              <CardList data={company} />
            )
          })}
        </Row>
      </Container>
    )
  }
}
