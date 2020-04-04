import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <p key={props.monster.id}>
      <b>{props.monster.name}</b>
      <br />
      {props.monster.email}
    </p>
  </div>
);
