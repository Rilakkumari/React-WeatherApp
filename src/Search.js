import React from "react";

export default function Search() {
  return (
    <form id="change-city-form">
      <input
        id="search-text-input"
        type="text"
        placeholder="Change city"
        autocomplete="off"
        autofocus="on"
        input="search-text"
      />
      <input type="submit" value="Search" className="btn btn-secondary" />
    </form>
  );
}
