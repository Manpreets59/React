import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurentMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResListData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { Header } from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  promise.resolve({
    json: () => promise.resolve(MOCK_DATA),
  })
);

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("biryani");
  fireEvent.click(accordianHeader);
  // give test id to itemslist item data-testid = "fooditems"

  expect(screen.getAllByTestId("fooditems").length).toBe(4);
  const addBtn = screen.getByRole("button", { name: "Add" });
  fireEvent.click(addBtn[0]);
  screen.getByText("Cart-(1 item)").toBeInTheDocument();
});
