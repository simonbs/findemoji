import React, { PropTypes } from 'react';
import { emojiForSmileyStatus, emojiForEliteStatus } from '../lib/emojis.js'

export default class Restaurant extends React.Component {
  render() {
    const { item } = this.props;
    const adr = item.Address;
    return (
      <li>
        <div className="emoji">
          {emojiForEliteStatus(item.HasEliteSmiley)}
        </div>
        <div className="emoji">
          {emojiForSmileyStatus(item.LatestStatus)}
        </div>
        <div className="texts">
          <div className="text title">
            {item.Name}
          </div>
          <div className="text detail">
            {adr.Street} {adr.HouseNumber}, {adr.ZipCode} {adr.City}
          </div>
        </div>
      </li>
    );
  }
}

Restaurant.propTypes = {
  item: PropTypes.object.isRequired
}
