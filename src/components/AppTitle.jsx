import React, { Component } from 'react';
import logo from '../assets/images/logo.png';

class AppTitle extends Component {
  render() {
    return (
      <div className="condenast_header_logo">
        <img src={logo} className="img_logo"/>
        <h1 className="header_text">Data Status</h1>
      </div>
    );
  }
}

export default AppTitle;
