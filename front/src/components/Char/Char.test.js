import React from "react";
import ReactDOM from "react-dom";
import Char from "./Char";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer'

const char = {
    id: 26,
    name: "Rick",
    species:
        "Human",
    status: 'alive'
};

afterEach(cleanup)

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<div></div>, div);
});

it("renders Char with props correctly", () => {
    const { getByTestId } = render(<Char char={char}></Char>);
    expect(getByTestId("char")).toHaveTextContent("Rick");
});

it("renders Char with props correctly and checks body by text", () => {
    const { getByText } = render(<Char char={char}></Char>);
    expect(
        getByText(
            "Human"
        )
    ).toBeVisible;
});

it("matches snapshot", () => {
    const compTree = renderer.create(<Char char={char}></Char>).toJSON();
    expect(compTree).toMatchSnapshot();
})
