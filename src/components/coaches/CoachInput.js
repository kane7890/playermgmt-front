import React, { Component } from 'react';
import Coaches from './Coaches';
import {connect} from 'react-redux'
/* import {addPlayer} from '../actions/addPlayer'
*/

class CoachInput extends Component {

    state = {

      fname:'',
      lname:'',

    }
    handleCoachFName = (event) => {
      this.setState({fname: event.target.value})
    }

    handleCoachLName = (event) => {
      this.setState({lname: event.target.value})
    }


    handleSubmit = (event) => {
      event.preventDefault();
      let coach = {fname: this.state.fname, lname: this.state.lname}

      // if (user.username !== "" && user.password !== "")
      //   {
      //   this.props.handleLogin(user)
      //   }
      /*
      console.log (user)
      */
      this.props.addCoach(coach)
      event=""
      this.setState({name: ''})
    }
  render() {
    console.log ("Coach inpuyt")
    return (

      <form onSubmit={event=> this.handleSubmit(event)}>
        <h2> Enter Coach </h2>
        <div>
          <label>
            First Name
            <input id="fname" name="firstname" type="text" onChange={this.handleCoachFName} />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input id="lname" name="lastname" type="text" onChange={this.handleCoachLName} />
          </label>
        </div>

        <div>
          <button type="submit">Save Coach Info</button>
        </div>
      </form>
      )
    }
  }

const mapDispatchToProps = dispatch => ({
  addCoach: coach => dispatch({ type: "ADD_COACH", payload: coach }),
  deleteCoach: id => dispatch({type: 'DELETE_COACH', id})
})


export default connect (null, mapDispatchToProps)(CoachInput)
