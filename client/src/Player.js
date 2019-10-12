import React from 'react';

const Player = props => {
  // console.log(props);
  return (
    <div className='players'>
	      <p><strong>Name:</strong> {props.name}</p>
	      <p><strong>country:</strong> {props.country}</p>
    </div>
  )
};

export default Player; 