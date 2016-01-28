import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return React.cloneElement(this.props.children, {})
  }
}
