import React, { Component } from 'react'
import axios from 'axios'
import { Row, Container } from 'react-bootstrap'
import CardList from '../components/CardList'

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
        <Row className="mt-4">
          { this.state.communities.map(community => {
            return (
              <CardList data={community}/>
            )
          })}
        </Row>
      </Container>
    )
  }
}
