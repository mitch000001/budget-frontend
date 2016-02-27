import React, {Component, PropTypes} from 'react';
import styles from './styles.css';

export class Money extends Component {

  formatValue(value) {
    return value.toFixed(2);
  }

  render() {
    let valueStyles = this.props.value > 0 ? styles.earning : styles.expense;
    return (
      <div className={valueStyles} style={this.props.style}>
        {this.formatValue(this.props.value)}&nbsp;{this.props.currency}
      </div>
    );
  }

}

Money.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string,
  style: PropTypes.object,
};
Money.defaultProps = {
  currency: '€',
  style: {},
};
