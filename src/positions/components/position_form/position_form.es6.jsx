import React, {Component, PropTypes} from 'react';

export class PositionForm extends Component {

  handleClick(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form name='create-position'>
        <input type='submit'>Speichern</input>
      </form>
    );
  }
}
