import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <Link to='/players' style={{paddingRight: '10px'}}>Players  </Link>
      <Link to='/players/new'> Add Players</Link>
    </div>

    

  )
}

export default NavBar
