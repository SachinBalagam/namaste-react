import { render, screen } from "@testing-library/react";
import RestaurantCard, { WithPromotedLabel } from "../RestaurantCard";
import MOCK from "../mocks/resMockData.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard data={MOCK} />);

  const name = screen.getByText("SLNS Dosa House");

  expect(name).toBeInTheDocument();
});

// it("Should render RestaurantCard component with promoted label", () => {
//   render(WithPromotedLabel(RestaurantCard));

//   const label = screen.getByRole("label");

//   expect(label).toBeInTheDocument();
// });
