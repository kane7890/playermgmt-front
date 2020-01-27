import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from './Player';
/*
import Player from './Player';
*/

class Players extends Component {
  renderPlayers = () => {
  //  debugger;
    console.log(" players")
    return (<div>
      {
        this.props.players.map (player=> <Player player={player}/>)
         }
    </div>)


  }
  render() {
    return (
      <ul>
        {this.renderPlayers()}
      </ul>
    );
  }
}
//
// const mapStateToProps = (state) =>  { players: state.playerReducer.players}

const mapStateToProps = state => {
  return { players: state.players.players}
}

export default connect(mapStateToProps)(Players);
