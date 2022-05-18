import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ kitties: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterKitties = this.state.kitties.filter((kitty) => {
      return kitty.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>KittyFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <br />
        <Scroll>
          <CardList kitties={filterKitties} />
        </Scroll>
      </div>
    );
  }
}

export default App;
