import React, { Component } from 'react';
import Coaches from './Coaches';
import {connect} from 'react-redux'
/* import {addPlayer} from '../actions/addPlayer'
*/

class CoachInput extends Component {

    state = {

      firstname:'',
      lname:'',

    }
    handleCoachFName = (event) => {
      this.setState({firstname: event.target.value})
    }

    handleCoachLName = (event) => {
      this.setState({lastname: event.target.value})
    }


    handleSubmit = (event) => {
      event.preventDefault();
      let coach = {firstname: this.state.firstname, lastname: this.state.lastname}

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
            <input id="firstname" name="firstname" type="text" onChange={this.handleCoachFName} />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input id="lastname" name="lastname" type="text" onChange={this.handleCoachLName} />
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
