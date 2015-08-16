import React, { PropTypes, findDOMNode } from 'react';
import classNames from 'classnames';

import 'style!../styles/search.scss'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  getInputValue() {
    return findDOMNode(this.refs.input).value;
  }
  
  render() {
    const { placeholder, latestQuery } = this.props;
    return (
      <div className="search">
        <span>
          <input type="text"
                 ref="input"
                 className="field"
                 value={latestQuery}
                 placeholder={placeholder}
                 onKeyUp={this.handleKeyUp} />
        </span>
      </div>
    );
  }

  handleKeyUp(e) {
    this.props.onChange(this.getInputValue())
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  latestQuery: PropTypes.string
}
