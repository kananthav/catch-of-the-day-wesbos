import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="button">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;