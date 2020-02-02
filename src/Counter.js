import React from "react";
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, RESET } from './actions';

class Counter extends React.Component {
  // state = { count: 0 };

  increment = () => {
    /*
    this.setState({
      count: this.state.count + 1
    });
    */
    this.props.dispatch({ type : INCREMENT });
  };

  decrement = () => {
    /*
    this.setState({
      count: this.state.count - 1
    });
    */
    this.props.dispatch({ type : DECREMENT });
  };

  reset = () => {
    this.props.dispatch({ type : RESET });
  }

  render() {
    return (
      <div>
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{
            // this.state.count
            this.props.count
          }</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
      <br />
      <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count : state.count
  };
}

// export default Counter;
export default connect(mapStateToProps)(Counter);
