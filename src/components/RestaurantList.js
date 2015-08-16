import React, { PropTypes } from 'react';
import Restaurant from './Restaurant';

import 'style!../styles/restaurant-list.scss'

export default class RestaurantList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <ul className="restaurants">
        {items.map(item =>
          <Restaurant key={item.Id} item={item} />
        )}
      </ul>
    );
  }
}

RestaurantList.propTypes = {
  items: PropTypes.array.isRequired
}
