import React, {Component } from 'react';

class Coach extends Component {


  render() {
    const { coach } = this.props;
    // console.log(this.props.restaurant)

    return (
      <div>
        Coach
        <li>
          {coach.firstname} - {coach.lastname} -- {coach.position}
            {/*
          <button onClick={()=>this.props.deleteRestaurant(restaurant.id)}> X </button>

          <ReviewsContainer restaurant={restaurant}/>
          */}
        </li>
      </div>
    );
  }
};

export default Coach;
