import React from 'react'
import Router from 'react-router';
import { connect } from 'react-redux';

import 'style!../styles/main.scss'

class Main extends React.Component { 
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(Main);
