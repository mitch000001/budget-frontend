import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import {Money} from './money';

let styles = {
  money: {
    display: 'inline-block'
  }
}

export class Position extends Component {

  formatDate(date) {
    return moment(date).format('L');
  }

  render() {
    return (
      <div>
        <div>{this.formatDate(this.props.bookingDate)}</div>
        <Money value={this.props.value} currency={this.props.currency} />
      </div>
    );
  }

}

Position.propTypes = {
  value: PropTypes.number.isRequired,
  bookingDate: PropTypes.instanceOf(Date).isRequired,
  dueDate: PropTypes.instanceOf(Date),
  currency: PropTypes.string
};

Position.defaultProps = {
  currency: '€'
};
