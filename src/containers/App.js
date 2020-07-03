import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js'

import { setSearchField, requestRobos } from '../actions.js';

//
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobos.searchField,
    robos: state.requestRobos.robos,
    isPending: state.requestRobos.isPending,
    error: state.requestRobos.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobos: () => dispatch(requestRobos())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobos();
  }

  render() {

    const { searchField, onSearchChange, robos, isPending } = this.props;

    const filteredRobos = robos.filter(robo => {
      //return on this condition true
      return robo.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if(isPending) {
      return <h1>Loading...</h1>
    }else {
      return (
        <div className="tc tc bg-black">
          <h1 className='white'>This is the App</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardList robos={filteredRobos}/>
              </ErrorBoundry>
            </Scroll>
        </div>
      );
    } 
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
