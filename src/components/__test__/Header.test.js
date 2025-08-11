import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { Header } from "../Header";
import { appStore} from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should Load header component with logIn buttton", () => {
  render(
    <BrowserRouter>
        <Provider store = {appStore}>
          <Header />
        </Provider>
    </BrowserRouter>
    
  );
});
