import React, { Component } from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sortBy: "name" };
  }
  handleChange = (filterName) => {
    this.setState(prevState => ({
      sortBy: filterName
    }));
  }

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter handleChange={this.handleChange}></Filter>
        <RecordTable sortBy={this.state.sortBy}></RecordTable>
      </div>
    );
  }
}

export default App;
