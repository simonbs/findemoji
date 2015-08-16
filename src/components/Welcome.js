import React from 'react';
import { SmileyStatus, emojiForSmileyStatus, emojiForEliteStatus } from '../lib/emojis.js'

export default class Welcome extends React.Component {
  render() {
    return (
      <div className="container">
        <span className="bold">Find an emoji indicating the hygiene of any restaurant.<br /></span><br />
        The emojis range from {emojiForSmileyStatus(SmileyStatus.NoRemarks)} to {emojiForSmileyStatus(SmileyStatus.Critical)}.<br />
        {emojiForEliteStatus(true)} indicates elite status.
      </div>
    );
  }
}
