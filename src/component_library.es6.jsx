import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Position} from './positions/components/position';
import {Money} from './positions/components/money';
import {stateful} from './utils/components/state_proxy';

ReactDOM.render(
  <div>
    <h2>Money</h2>
    {stateful(<Money value={12.34} currency={'€'} />)}
    <h2>Position</h2>
    {stateful(<Position value={23.67} currency={'€'} bookingDate={new Date()} />)}
  </div>,
  document.getElementById('root')
);
