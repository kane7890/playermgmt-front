import React, { Component } from 'react';
import Players from './Players';
import {connect} from 'react-redux'
import {addPlayer} from '../../actions/addPlayer'
/* import {addPlayer} from '../actions/addPlayer'
*/

class PlayerInput extends Component {

    state = {

      fname:'',
      lname:'',
      position:'Forward',
      team: ''

    }
    handleUserFName = (event) => {
      this.setState({fname: event.target.value})
    }

    handleUserLName = (event) => {
      this.setState({lname: event.target.value})
    }
    handlePosition= (event) => {
      this.setState({position: event.target.value})
    }

    handleSubmit = (event) => {
      event.preventDefault();
      let player = {fname: this.state.fname, lname: this.state.lname, position: this.state.position}

      // if (user.username !== "" && user.password !== "")
      //   {
      //   this.props.handleLogin(user)
      //   }
      /*
      console.log (user)
      */
      
      this.props.addPlayer(player)
      event=""
      this.setState({name: ''})
    }
  render() {

    return (

      <form onSubmit={event=> this.handleSubmit(event)}>
        <h2> Enter Player </h2>
        <div>
          <label>
            First Name
            <input id="fname" name="firstname" type="text" onChange={this.handleUserFName} />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input id="lname" name="lastname" type="text" onChange={this.handleUserLName} />
          </label>
        </div>
        <div>
          <label>
            Player Position
                  </label>
          <select id="position" name="position" type="position" onChange={this.handlePosition}>
            <option>Forward</option>
            <option>Defenseman</option>
            <option>Goaltender</option>
          </select>

        </div>

        <div>
          <button type="submit">Save Player Info</button>
        </div>
      </form>
      )
    }
  }
/*
const mapDispatchToProps = dispatch => ({
  addPlayer: player => dispatch({ type: "ADD_PLAYER", payload: player }),
  deletePlayer: id => dispatch({type: "DELETE_PLAYER", id})
})
*/


export default connect (null, {addPlayer})(PlayerInput)
