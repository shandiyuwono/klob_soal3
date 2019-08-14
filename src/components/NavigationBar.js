import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: '#EF534A'}} >
          <Navbar.Brand href="#home">
            <img
                alt=""
                src="/klob-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}
