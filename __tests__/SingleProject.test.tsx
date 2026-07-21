import SingleProject from "@/components/SingleProject";
import { projects } from "@/utils/constants";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

jest.mock("framer-motion", () => {
  const actual = jest.requireActual("framer-motion");
  return { ...actual, useInView: () => true };
});

beforeAll(() => {
  HTMLMediaElement.prototype.play = jest.fn(() => Promise.resolve());
});

describe("Single Project", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<SingleProject {...projects[0]} />);
    expect(getByTestId("single-project")).toBeInTheDocument();
  });
  
  test("conditionally renders video or photo", async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(
      <SingleProject {...projects[0]} hasDemoVideo image={projects[1].image} />
    );

    expect(getByTestId("video-placeholder")).toBeInTheDocument();
    await user.click(getByTestId("video-placeholder"));
    expect(getByTestId("video-demo")).toBeInTheDocument();

    const { getByTestId: testPhoto } = render(
      <SingleProject {...projects[0]} hasDemoVideo={false} image={projects[1].image} />
    );
    expect(testPhoto("photo-demo")).toBeInTheDocument();
  });
});
