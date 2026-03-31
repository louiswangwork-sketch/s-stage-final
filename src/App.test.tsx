
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the main brand title", () => {
    render(<App />);
    expect(screen.getByText("S-STAGE")).toBeInTheDocument();
  });

  it("renders the LOUNGE D section", () => {
    render(<App />);
    expect(screen.getByText("LOUNGE D")).toBeInTheDocument();
  });

  it("renders all service cards", () => {
    render(<App />);
    expect(screen.getByText("イマーシブエンターテインメント制作・運営")).toBeInTheDocument();
    expect(screen.getByText("AIコンテンツ制作（映像・画像・ショートドラマ）")).toBeInTheDocument();
  });
});
