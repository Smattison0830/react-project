import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Sora",
//       animal: "Dog",
//       breed: "Shih tzu",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Bella", animal: "Cat", breed: "Mix" }),
//   ]);
// };

const app = () => {
  return (
    <div>
      <h1></h1>
      <Pet name="Sora" animal="Dog" breed="Shih Tzu" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Bella" animal="Cat" breed="Mix" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
