import React, { PropTypes } from 'react';

export default class NoResults extends React.Component {
  render() {
    const { query } = this.props;
    return (
      <div className="container">
        { (() => {
          if (query != null) {
            return "No results were found for the query '" + query + "'."
          } else {
            return "No results were found."
          }
         })()
        }
      </div>
    );
  }
}

NoResults.PropTypes = {
  query: PropTypes.string
}
