import React from 'react';
import {connect} from 'react-redux';

function mapState(state) {
  return state.toJS();
}

export const Home = React.createClass({
  render: function() {
    return <div className="home">Welcome home!</div>;
  }
});

export const HomeContainer = connect(mapState)(Home);
