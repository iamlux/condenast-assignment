import React, { Component } from 'react';
import AppTitle from './AppTitle';
import UpdatedTime from './UpdatedTime';
import Category from './Category';

class App extends Component {
  render() {
    return (
      <div className="condenast_header">
        <AppTitle />
        <UpdatedTime />
        <Category />
      </div>
    );
  }
}

export default App;
