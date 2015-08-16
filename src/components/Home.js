import React, { PropTypes, findDOMNode } from 'react'
import { connect } from 'react-redux';
import Search from './Search';
import Welcome from './Welcome';
import RestaurantList from './RestaurantList';
import NoResults from './NoResults';
import Loading from './Loading';
import { clearRestaurants, fetchRestaurants } from '../actions/';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  render() {
    const { isFetching, latestQuery } = this.props;
    return (
      <div>
        <Search value={latestQuery}
                placeholder="Søg efter en restaurant"
                isFetching={isFetching}
                onChange={this.handleSearchChange} />
        {this.renderContent()}
      </div>
    );
  }

  renderContent() {
    const { restaurants, isFetching, latestQuery } = this.props;
    if (restaurants.length > 0) {
      return <RestaurantList items={restaurants} />
    } else if (!isFetching && latestQuery != null) {
      return <NoResults query={latestQuery} />
    } else if (isFetching) {
      return <Loading />
    }
      
    return <Welcome />
  }

  handleSearchChange(nextValue) {
    const { dispatch } = this.props;
    if (nextValue) {
      dispatch(fetchRestaurants(nextValue));
    } else {
      dispatch(clearRestaurants());
    }
  }  
}

Home.propTypes = {
  isFetching: PropTypes.bool,
  restaurants: PropTypes.array,
  latestQuery: PropTypes.string
};

function mapStateToProps(state) {
  return {
    isFetching: state.restaurants.isFetching,
    restaurants: state.restaurants.items,
    latestQuery: state.restaurants.latestQuery
  };
}

export default connect(mapStateToProps)(Home);
