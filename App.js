//  ----------------Episode-1-----------------------

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

// ----------------------Episode-2-----------------------------

// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement(
//       "h1",
//       {
//         id: "title1",
//         style: {
//           color: "blue",
//         },
//       },
//       "Namaste React 🚀"
//     ),
//     React.createElement(
//       "h2",
//       {
//         id: "title2",
//         style: { color: "pink", fontSize: 12 },
//       },
//       "Hello World From child1-heading2"
//     ),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement(
//       "h1",
//       { id: "title3", style: { paddingLeft: 50 } },
//       "Hello Sachin From child2-heading3"
//     ),
//     React.createElement(
//       "h2",
//       { id: "title4" },
//       "Hello World From child2-heading4"
//     ),
//   ]),
// ]);

// // const heading = React.createElement("h1", {}, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//----------------------Episode-3---------------------------------

//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

import React from "react";
import ReactDOM from "react-dom/client";

// const header = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", { class: "heading1" }, "Hello,I am heading1"),
//   React.createElement("h1", { class: "heading2" }, "Hello,I am heading2"),
//   React.createElement("h1", { class: "heading3" }, "Hello,I am heading3"),
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(header);

//Create the same element using JSX

// const header1 = (
//   <div className="title">
//     <h1 className="heading1">Hello, I am heading1</h1>
//     <h1 className="heading1">Hello, I am heading1</h1>
//     <h1 className="heading1">Hello, I am heading1</h1>
//   </div>
// );

// root.render(header1);

//Create a functional component of the same with JSX

const Header = () => {
  return (
    <div className="title">
      <h1 style={{ color: "red" }}>Hello, I am heading1</h1>
      <h1>Hello, I am heading14</h1>
      <h1>Hello, I am heading1</h1>
    </div>
  );
};

// root.render(<Header />);

// Composition of Component(Add a component inside another)

const Head = () => {
  return (
    <div>
      <h1>First Component</h1>
      <Header />
    </div>
  );
};

root.render(<Head />);
