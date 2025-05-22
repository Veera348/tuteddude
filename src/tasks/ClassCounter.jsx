import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <div className="text-center">
        <h4 className="mb-3">Class Counter</h4>

        <p className="fs-3 fw-bold text-primary">
          Count: {this.state.count}
        </p>

        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-danger px-4" onClick={this.decrement}>
            –
          </button>
          <button className="btn btn-success px-4" onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
