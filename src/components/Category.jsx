import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <div className="condenast_header_label">
        <ul>
          <li><span className="round green"></span> <span className="round_type">Complete</span></li>
          <li><span className="round orange"></span> <span className="round_type">Partial Load</span></li>
        </ul>
        <ul>
          <li><span className="round yellow"></span> <span className="round_type">Quality Alert</span></li>
          <li><span className="round red"></span> <span className="round_type">No Load</span></li>
        </ul>
      </div>
    );
  }
}

export default Category;
