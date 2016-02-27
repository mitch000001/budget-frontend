import React, {Component, PropTypes} from 'react';
import {Position} from './position/position';

export class PositionList extends Component {

  render() {
    return (
      <div>
        {this.props.positions.map((position) => {
          return (
            <Position
              key={position.id}
              value={position.value}
              description={position.description}
              bookingDate={position.bookingDate}
              date={position.date} />
          );
        })}
      </div>
    );
  }

}

PositionList.propTypes = {
  positions: PropTypes.arrayOf(
    PropTypes.shape(
      Object.assign(
        {
          id: PropTypes.string.isRequired
        },
        Position.propTypes,
      ),
    ),
  ),
}

PositionList.defaultProps = {
  positions: [],
};
