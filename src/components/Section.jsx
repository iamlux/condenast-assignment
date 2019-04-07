import React, { Component } from 'react';
import CardLayout from './CardLayout';
import {userEngagement} from '../mockdata/exampleData';
import {adDelivery} from '../mockdata/exampleData';
import {consumerMarketing} from '../mockdata/exampleData';

class Section extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <CardLayout data={userEngagement} title="User Engagement"/>
          <CardLayout data={adDelivery} title="Ad Delivery"/>
          <CardLayout data={consumerMarketing} title="Consumer Marketing"/>
        </section>
      </div>
    );
  }Section
}

export default Section;
