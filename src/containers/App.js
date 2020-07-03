import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js'

import { setSearchField } from '../actions.js';

//
const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state={
      robos: []
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
      return response.json();
    }).then(users => {
      this.setState({ robos: users})
    });
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  // }

  render() {

    const { searchField, onSearchChange } = this.props;

    const filteredRobos = this.state.robos.filter(robos => {
      //return on this condition true
      return robos.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });

    if(this.state.robos.length === 0) {
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
