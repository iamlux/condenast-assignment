import React, { Component } from 'react';
import Card from './Card';

class CardLayout extends Component {

  constructor(props) {
    super(props);
  }

  renderCards() {
    return this.props.data.map((val, index) => {
      return <Card data={val}/>
    });
  }

  render() {
    return (
      <div className="listof-section">
         <h3>{this.props.title}</h3>
         {this.renderCards()}
      </div>
    );
  }
}

export default CardLayout;
