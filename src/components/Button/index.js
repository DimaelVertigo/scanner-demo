import React, { Component } from 'react';
import './index.css';

class Button extends Component {
  constructor() {
    super();
    this.onTitleBtnClick = this.onTitleBtnClick.bind(this);
  }
  onTitleBtnClick(e) {
    this.props.setTitle('e.target.innerText')
  }
  render() {
    return (
      <div className="Button">
        <button onClick={this.onTitleBtnClick}>Click to change title</button>
      </div>
    );
  }
}

export default Button;
