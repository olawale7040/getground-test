import { render } from "@testing-library/react";
import ListItemComponent from "./ListItemComponent";

describe("ListItemComponent", () => {
  const mockBook = {
    book_author: ["Wole"],
    book_pages: 104,
    book_publication_city: "London",
    book_publication_country: "UK",
    book_publication_year: "1529",
    book_title: "New Book",
    id: 2086,
  };

  it("should render the component correctly", async () => {
    const { getByRole, getByText } = render(
      <ListItemComponent book={mockBook} />
    );
    const listItems = getByRole("listitem");
    expect(listItems).toBeInTheDocument();
    expect(getByText("New Book")).toBeInTheDocument();
    expect(getByText("1529")).toBeInTheDocument();
  });
});
