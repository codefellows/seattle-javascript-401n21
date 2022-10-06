const { createElement } = require("react");

const {
  cleanup,
  fireEvent,
  render,
  screen,
} = require("@testing-library/react");

const { Cookie, Header } = require("./lecture");

afterEach(cleanup);

describe("Header", () => {
  it("can render a header", () => {
    render(
      createElement(Header, { siteName: "Test Site", headerColor: [0, 0, 0] })
    );

    // JSX equivalent
    // const testComponent = render(<Header siteName="Test Site" headerColor={[0, 0, 0]} />);

    expect(screen.queryByText("Test Site")).toBeTruthy();
  });
});

describe("Cookie", () => {
  it("can click cookies", async () => {
    render(createElement(Cookie));

    const button = cookie.queryByText("Clicks: 0");

    // await fireEvent.click(cookie.queryByText(/Clicks:/)); // Anything that contains "Clicks:" (or the regedx)
    // await fireEvent.click(cookie.queryByText("Clicks: 0")); // Anything with exactly "Clicks: 0"

    expect(button).toBeTruthy();
    await fireEvent.click(button); // Anything with exactly "Clicks: 0"

    expect(screen.queryByText("Clicks: 1")).toBeTruthy();
  });
});
