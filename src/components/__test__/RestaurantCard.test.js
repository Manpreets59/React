const { render, screen } = require("@testing-library/react")
import {RestaurentCard} from "../RestaurentCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom"

it("should render RestaurantCard component with props data", () => {
    render(<RestaurentCard resData = {MOCK_DATA}/>)
    const name = screen.getByText("Cafe Coffee Day")
    expect(name).toBeInTheDocument();
})

it("should render RestaurantCard component with promoted label using props data", () => {
    //test higher order component with promoted label HW
})