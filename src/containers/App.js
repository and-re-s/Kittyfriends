import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [kitties, setKitties] = useState([]);
  const [filteredKitties, setFilteredKitties] = useState(kitties);

  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setKitties(users));
  }, []);

  useEffect(() => {
    const newFilteredKitties = kitties.filter((kitty) => {
      return kitty.name.toLowerCase().includes(searchField);
    });
    setFilteredKitties(newFilteredKitties);
  }, [kitties, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="tc">
      <div id="inline">
        <h1>KittyFriends</h1>
        <SearchBox searchChange={onSearchChange} />
      </div>
      <Scroll>
        <CardList kitties={filteredKitties} />
      </Scroll>
    </div>
  );
};

export default App;
