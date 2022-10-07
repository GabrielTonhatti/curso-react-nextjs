import { render, screen } from "@testing-library/react";
import { Home } from "./index";

test("renders Load more posts", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Load more posts/i);
  expect(linkElement).toBeInTheDocument();
});
