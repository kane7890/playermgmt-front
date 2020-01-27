import React, { Component } from 'react';
import { connect } from 'react-redux';
import Coach from './Coach';
/*
import Player from './Player';
*/

class Coaches extends Component {
  renderCoaches = () => {

    return (<div>

      {this.props.coaches.map (coach=> <Coach coach={coach}/>)}


    </div>

    )

  }
  render() {

    return (
      <ul>
        {this.renderCoaches()}
      </ul>
    );
  }
};
const mapStateToProps = (state) => ({coaches: state.coaches.coaches})

export default connect(mapStateToProps)(Coaches);
