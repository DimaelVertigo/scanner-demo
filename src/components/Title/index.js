import React, { Component } from 'react';
import './index.css';

class Title extends Component {
  render() {
    return (
      <div className="Title">
        <h2>{this.props.title ? this.props.title : 'nope'}</h2>
      </div>
    );
  }
}

export default Title;
