import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { Header } from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with logIn buttton", () => {
  render(
    <BrowserRouter>
        <Provider store = {appStore}>
          <Header />
        </Provider>
    </BrowserRouter>
  );


  // const logInButton = screen.getByRole("button")
  //same in more descriptive way 
  const logInButton = screen.getByRole("button", {name: "Login"});
  // const logInButton = screen.getByText("Login")
  expect(logInButton).toBeInTheDocument();

});

it("Should render header component with CartItems of length 0", () => {
  render(
    <BrowserRouter>
        <Provider store = {appStore}>
          <Header />
        </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/cart/);
  expect(cartItems).toBeInTheDocument();
});

it("Should render header component with logIn buttton and change login to logout", () => {
  render(
    <BrowserRouter>
        <Provider store = {appStore}>
          <Header />
        </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", {name: "Login"});
  fireEvent.click(logInButton);
  const logoutButton = screen.getByRole("button", {name: "Logout"})
  expect(logoutButton).toBeInTheDocument();
});
