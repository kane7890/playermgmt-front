import thunk from 'redux-thunk'

export const addPlayer = (data) => {
  debugger;
  return (dispatch) => {
    fetch('http://localhost:3000/api/players', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(player => dispatch({type: 'ADD_PLAYER', payload: player}))
  }

}
/*   .then(player => dispatch({type: 'ADD_PLAYER', payload: player})) */
