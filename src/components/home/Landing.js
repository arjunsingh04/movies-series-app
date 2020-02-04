import React, { Component } from 'react'
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import Spinner from '../layout/Spinner';
import MoviesContainer from './MoviesContainer';

export class Landing extends Component {
   render() {
      const { loading } = this.props;
      return (
         <div className="container">
            <SearchForm />
            {false ? <Spinner /> : <MoviesContainer />}
         </div>
      )
   }
}

const mapStatesToProps = state => ({
   loading: state.movies.loading
});

export default connect(mapStatesToProps)(Landing);
