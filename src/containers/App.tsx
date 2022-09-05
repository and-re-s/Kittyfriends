import React, { useState, useEffect, ChangeEvent } from "react";
import CardList from "../components/CardList.tsx";
import SearchBox from "../components/SearchBox.tsx";
import Scroll from "../components/scroll";

import { getData } from "../utils/data.utils.ts";
import "./App.css";

export type Kitty = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [kitties, setKitties] = useState<Array<Kitty>>([]);
  const [filteredKitties, setFilteredKitties] = useState(kitties);

  console.log("render");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Array<Kitty>>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setKitties(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredKitties = kitties.filter((kitty) => {
      return kitty.name.toLowerCase().includes(searchField);
    });
    setFilteredKitties(newFilteredKitties);
  }, [kitties, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
