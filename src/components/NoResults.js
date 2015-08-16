import React, { PropTypes } from 'react';

export default class NoResults extends React.Component {
  render() {
    const { query } = this.props;
    return (
      <div className="container">
        { (() => {
          if (query != null) {
            return "Ingen resultater fundet for søgningen '" + query + "'."
          } else {
            return "Ingen resultater funder."
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
