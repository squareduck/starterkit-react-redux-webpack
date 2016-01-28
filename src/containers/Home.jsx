import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import {connect} from 'react-redux'
import {clickButton} from '../actions/common'
import Button from '../components/Button'

const styles = {
  home: {
    color: 'green',
    ':hover': {
      color: 'red'
    }
  }
}

function mapState(state) {
  return state.common.toJS()
}

export class HomePure extends Component {
  render() {
    const { dispatch, buttonText } = this.props
    return (
      <div style={styles.home}>
        <p>Welcome home!</p>
        <Button text={buttonText} onClick={ () => { dispatch(clickButton()) } }/>
      </div>
    )
  }
}


export default connect(mapState)(Radium(HomePure))
