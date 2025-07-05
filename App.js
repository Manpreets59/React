const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag of  child 2"),
    React.createElement("h2", {}, "I am an h2 tag of child 2 "),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
