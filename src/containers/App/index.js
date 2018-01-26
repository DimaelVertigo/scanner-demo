import React, { Component } from 'react';
import './index.css';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Footer from '../../components/Footer';
import logo from './logo.png';
import Button from '../../components/Button';
import Title from '../../components/Title';
import * as pageActions from '../../actions/PageActions';

class App extends Component {
  render() {
    const { setTitle } = this.props.pageActions;
    const {title} = this.props.user;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo"/>
          <Button setTitle={setTitle}/>
          <Title title={title}/>
        </header>ffvfvfcffvfcvfvfcx
        {this.props.user.age}
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
