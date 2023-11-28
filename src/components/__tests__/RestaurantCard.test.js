import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../Mock_Data/resMockData.json";
import "@testing-library/jest-dom";

test("it should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Shree Sai Krupa Veg-Nonveg Restaurant");
  expect(name).toBeInTheDocument();
});
