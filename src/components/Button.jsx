import React, { Component, PropTypes } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button onClick={ e => this.handleClick(e) }>
        {this.props.text}
      </button>
    )
  }

  handleClick(e) {
    this.props.onClick(e)
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
