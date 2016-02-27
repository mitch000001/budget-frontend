import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {PositionList} from './positions/components/position_list';
import {Position} from './positions/components/position/position';
import {Money} from './positions/components/money/money';
import {stateful} from './utils/components/state_proxy';

const positions = [
  {id: '1', value: 12.34, description: 'booking 1', bookingDate: new Date()},
  {id: '2', value: 23.45, description: 'booking 2', bookingDate: new Date()},
];

ReactDOM.render(
  <div>
    <h2>Money</h2>
    {stateful(<Money value={12.34} currency={'€'} />)}
    <h2>Position</h2>
    {stateful(<Position value={23.67} description={'booking'}currency={'€'} bookingDate={new Date()} />)}
    <h2>PositionList</h2>
    {stateful(<PositionList positions={positions}/>)}
  </div>,
  document.getElementById('root')
);
