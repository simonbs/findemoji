import React from 'react';

import 'style!../styles/footer.scss'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <a target="_blank" href="http://simonbs.dk/">
          <span className="octicon octicon-globe"></span>
        </a>
        <span className="space"></span>
        <a target="_blank" href="http://twitter.com/simonbs">
          <span className="octicon octicon-pencil"></span>
        </a>
        <span className="space"></span>
        <a target="_blank" href="http://github.com/simonbs/findemoji.dk">
          <span className="octicon octicon-mark-github"></span>
        </a>
      </div>
    );
  }
}
