import React, {Component, PropTypes} from 'react';

let styles = {
  valueEarning: {
    color: '#000000'
  },
  valueExpense: {
    color: '#ff0000'
  }
}

export class Money extends Component {

  formatValue(value) {
    return value.toFixed(2);
  }

  render() {
    let valueStyles = this.props.value > 0 ? styles.valueEarning : styles.valueExpense;
    return (
      <div style={valueStyles}>
        {this.formatValue(this.props.value)}&nbsp;{this.props.currency}
      </div>
    );
  }

}

Money.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string
};
Money.defaultProps = {
  currency: '€'
};
