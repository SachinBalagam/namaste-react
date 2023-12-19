// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World From JavaScript";
// const root = document.getElementById("root");
// root.appendChild(heading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From Nested"
// );

// const child = React.createElement("div", { id: "child" }, heading);

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      {
        id: "title1",
        style: {
          color: "blue",
        },
      },
      "Namaste React 🚀"
    ),
    React.createElement(
      "h2",
      {
        id: "title2",
        style: { color: "pink", fontSize: 12 },
      },
      "Hello World From child1-heading2"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { id: "title3", style: { paddingLeft: 50 } },
      "Hello Sachin From child2-heading3"
    ),
    React.createElement(
      "h2",
      { id: "title4" },
      "Hello World From child2-heading4"
    ),
  ]),
]);

// const heading = React.createElement("h1", {}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
