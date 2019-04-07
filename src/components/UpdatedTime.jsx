import React, { Component } from 'react';
import {RefreshTime} from '../mockdata/exampleData';

class UpdatedTime extends Component {
  render() {
    return (
      <div className="condenast_header_time">
        <div className="condenast_header_time--wrap">
          <span className="update_name">Updated</span>
          <span className="update_datetime">{RefreshTime}</span>
        </div>
      </div>
    );
  }
}

export default UpdatedTime;
