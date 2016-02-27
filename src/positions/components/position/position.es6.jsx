import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import {Money} from '../money/money';
import styles from './styles.css';

export class Position extends Component {

  formatDate(date) {
    return moment(date).format('L');
  }

  render() {
    return (
      <div className={styles.container} style={this.props.style}>
        <div>{this.formatDate(this.props.bookingDate)}</div>
        <div className={styles.description}>{this.props.description}</div>
        <Money style={{padding: 0}} value={this.props.value} currency={this.props.currency} />
      </div>
    );
  }

}

Position.propTypes = {
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  bookingDate: PropTypes.instanceOf(Date).isRequired,
  dueDate: PropTypes.instanceOf(Date),
  currency: PropTypes.string,
  style: PropTypes.object,
};

Position.defaultProps = {
  currency: '€',
  style: {},
};
