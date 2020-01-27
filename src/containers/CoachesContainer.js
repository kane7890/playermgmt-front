import React, { Component } from 'react'
import CoachInput from '../components/coaches/CoachInput'
import Coaches from '../components/coaches/Coaches'
import { connect } from 'react-redux'
import {Route, Switch, Link} from 'react-router-dom'

class CoachesContainer extends Component {

  render() {

    return (

      <div>
        {/*
       <CoachInput />


        <Coaches />
        */}
        <Link to='/coaches' style={{paddingRight: '10px'}}>Coaches  </Link>
        <Link to='/coaches/new'> Add Coaches </Link>
        <Switch>
          <Route path='/coaches/new' component={CoachInput}/>
          <Route path='/coaches/:id' render={(routerProps)=> <Coaches  {...routerProps} players={this.props.players}/>}/>
          <Route exact path='/coaches' component={Coaches}/>
        </Switch>
      </div>

    )
  }
}



export default CoachesContainer
