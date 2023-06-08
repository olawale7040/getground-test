import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header component test", () => {
  it("should render right title", async () => {
    const { getByTestId, getByRole } = render(<Header />);
    expect(getByTestId("app-header")).toBeInTheDocument();
    expect(getByRole("heading")).toHaveTextContent(
      "Books and Authors Information"
    );
  });
});
