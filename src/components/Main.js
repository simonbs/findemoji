import React from 'react'
import Router from 'react-router';
import { connect } from 'react-redux';

import Footer from './Footer';

import 'style!../styles/main.scss'

class Main extends React.Component { 
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default connect()(Main);
