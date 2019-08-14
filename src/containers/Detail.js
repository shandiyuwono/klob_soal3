import React, { Component } from 'react'
import { Card, Container, Col, Row, Image } from 'react-bootstrap'
import axios from 'axios'

export default class Detail extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      detail: {}
    }
  }
  
  componentDidMount() {
    const id = this.props.match.params.id
    
    let type;

    if(id.includes('comp')) type = 'company'
    else if(id.includes('com')) type ='community'
    else type = 'educational'

    axios.get(`../${type}.json`)
      .then(({ data }) => {
        data.data.forEach(detail => {
          this.setState({
            detail
          })
        })
      })
      .catch(({response}) => {
        console.log(response)
      })
  }

  render() {
    return (
      <Container>
        <Row style={{ justifyContent: 'center'}} className="mt-3">
          <Col xs={9}>
            <Image
              src={this.state.detail.img}
              fluid
            >
            </Image>
          </Col>
          <Col xs={9}>
            <h2 style={{ ...styles.font, textTransform: 'uppercase'}}>{this.state.detail.name}</h2>
          </Col>
          <Col xs={9}>
            <p style={styles.font}>{this.state.detail.desc}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

const styles = {
  font: {
    fontWeight: 'bold',
    color: '#EF534A'
  }
}
