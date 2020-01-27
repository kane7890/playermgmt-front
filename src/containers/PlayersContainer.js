import React, { Component } from 'react'
import PlayerInput from '../components/players/PlayerInput'
import Players from '../components/players/Players'
import { connect } from 'react-redux'
import {Route, Switch, Link} from 'react-router-dom'


class PlayersContainer extends Component {

  render() {

    return (

      <div>


        <div>
          <Link to='/players' style={{paddingRight: '10px'}}>Players  </Link>
          <Link to='/players/new'> Add Players </Link>
            </div>
        <Switch>
             <Route path='/players/new' component={PlayerInput}/>
             <Route path='/players/:id' render={(routerProps)=> <Players  {...routerProps} players={this.props.players}/>}/>
             <Route exact path='/players' component={Players}/>
           </Switch>





        {
        /*
          render={(routerProps) => <Players {...routerProps} plauyd={this.props.accounts}/>}/>
          */
        }

      </div>

    )
  }
}




export default PlayersContainer
