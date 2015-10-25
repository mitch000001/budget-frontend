import React, {Component, Children} from 'react';

export function stateful(component) {
  class StateProxy extends Component {
    constructor(props) {
      super(props);
      let stateProps = Object.assign({}, props.children.props);
      let resetComponentProps = this.resetComponentProps(stateProps).bind(this);
      let initialState = Object.assign({}, stateProps, {resetComponentProps});
      this.state = initialState;
    }

    resetComponentProps(props) {
      return () => {
        this.setState(props);
      }
    }

    render() {
      return (
        <div>
          {Children.map(
            this.props.children,
            (child) => React.cloneElement(child, this.state)
          )}
        </div>
      );
    }
  }

  let {type: {name}} = component;
  StateProxy.displayName = `${name}(StateProxy)`;
  return (
    <StateProxy>
      {component}
    </StateProxy>
  );
}
