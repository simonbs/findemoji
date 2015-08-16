import React from 'react';
import { SmileyStatus, emojiForSmileyStatus, emojiForEliteStatus } from '../lib/emojis.js'

export default class Welcome extends React.Component {
  render() {
    return (
      <div className="container">
        <span className="bold">Smileyordningen er kedelig. Emojiordningen er sjovere.<br /></span><br />
        Emojis går fra {emojiForSmileyStatus(SmileyStatus.NoRemarks)} til {emojiForSmileyStatus(SmileyStatus.Critical)}.<br />
        {emojiForEliteStatus(true)} indikerer elitestatus.
      </div>
    );
  }
}
