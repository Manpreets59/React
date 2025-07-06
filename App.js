import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const HeadingComponents = () => {
  return (
    <>
      <h1>Hello</h1>
      {heading}
      {number}
    </>
  );
};

const number = <>1000 {heading}</>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponents />);
