import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';

const styles = {
  home: {
    color: 'green',
    ':hover': {
      color: 'red'
    }
  }
};

function mapState(state) {
  return state.toJS();
}

export const Home = React.createClass({
  render: function() {
    return <div style={styles.home}>Welcome home!</div>;
  }
});


export const HomeContainer = connect(mapState)(Radium(Home));
