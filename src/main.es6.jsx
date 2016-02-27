import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {

  handleOnLoad(evt) {
    console.log("Loaded:", evt);
  }

  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }

}

ReactDOM.render(
  <Hello name={'John'} />,
  document.getElementById('root')
);
