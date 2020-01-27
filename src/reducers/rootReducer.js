import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  players: playerReducer,
  coaches: coachReducer,


  }
)
export default rootReducer;


function coachReducer(state = {coaches: []}, action) {
    switch (action.type) {

      case 'ADD_COACH':
      /*  debugger; */
        return {...state, coaches: [...state.coaches, action.payload]}
  /*    case 'ADD_TRANSACTION':
        let coaches = state.coaches.map(player => {
          if (player.id === action.payload.id) {
            return action.payload
          } else {
            return player
          }
        })
        return {...state, accounts: accounts}
        */
      case 'DELETE_COACH':
        let coachesTwo = state.coaches.map(coach => {
          if (coach.id === action.payload.id) {
            return action.payload
          } else {
            return coach
          }
        })
        return {...state, coaches: coachesTwo}
    default:
      return state;
  }
}

 function playerReducer(state = {players: []}, action) {
  switch (action.type) {
    case 'FETCH_PLAYERS':
      return {accounts: action.payload}
    case 'ADD_PLAYER':
    /*  debugger; */
      return {...state, players: [...state.players, action.payload]}
/*    case 'ADD_TRANSACTION':
      let players = state.players.map(player => {
        if (player.id === action.payload.id) {
          return action.payload
        } else {
          return player
        }
      })
      return {...state, accounts: accounts}
      */
    case 'DELETE_PLAYER':
      let playersTwo = state.players.map(player => {
        if (player.id === action.payload.id) {
          return action.payload
        } else {
          return player
        }
      })
      return {...state, players: playersTwo}
      /* case 'TRADE_PLAYER':
      */
      /*
    case 'EDIT_ACCOUNT':
      let accountsThree = state.accounts.map(account => {
        if (account.id === action.payload.id) {
          return action.payload
        } else {
          return account
        }
      })
      return {...state, accounts: accountsThree}
      */
      default:

        return state;
    }
}
