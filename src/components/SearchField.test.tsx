import { render, fireEvent } from "@testing-library/react";
import SearchField from "./SearchField";
import store from "../store";
import { Provider } from "react-redux";
import { ReactElement } from "react";

describe("SearchField", () => {
  const renderComponent = (component: ReactElement) =>
    render(<Provider store={store}>{component}</Provider>);

  it("should render the searchField component correctly", async () => {
    const screen = renderComponent(<SearchField />);

    expect(screen.getByTestId("book-search-field")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search title book")
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "search" })).toBeInTheDocument();
  });

  it("should be able to type in the input", async () => {
    const screen = renderComponent(<SearchField />);

    expect(screen.getByTestId("book-search-field")).toBeInTheDocument();
    const inputElement = screen.getByPlaceholderText(
      "Search title book"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Latest book" } });
    expect(inputElement.value).toBe("Latest book");
  });
});
