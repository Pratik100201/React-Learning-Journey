const example = React.createElement("div", { id: "myText" }, [
  React.createElement(
    "div",
    { id: "myText2" },
    React.createElement("div", { id: "myText3" }, [
      React.createElement("h1", { id: "myText4" }, "Branches Bro"),
      React.createElement("h1", { id: "myText4" }, "Siblings Bro"),
    ])
  ),
  React.createElement(
    "div",
    { id: "myText2" },
    React.createElement("div", { id: "myText3" }, [
      React.createElement("h1", { id: "myText4" }, "Branches Bro"),
      React.createElement("h1", { id: "myText4" }, "Siblings Bro"),
    ])
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(example);
