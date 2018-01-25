import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {this.props.user}
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
