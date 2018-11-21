import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You touched my title!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Pet Adoption"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "bird",
        breed: "Seagull"
      }),
      React.createElement(Pet, {
        name: "Patch",
        animal: "cat",
        breed: "Tabby"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
