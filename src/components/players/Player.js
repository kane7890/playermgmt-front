import React, { Component } from 'react';

class Player extends Component {


  render() {
    const { player } = this.props;
    // console.log(this.props.restaurant)

    return (
      <div>
        Player
        <li>
          {player.fname} - {player.lname} -- {player.position}
            {/*
          <button onClick={()=>this.props.deleteRestaurant(restaurant.id)}> X </button>

          <ReviewsContainer restaurant={restaurant}/>
          */}
        </li>
      </div>
    );
  }
};

export default Player;
