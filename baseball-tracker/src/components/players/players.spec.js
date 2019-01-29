import React from "react";

import { render, fireEvent, getAllByTestId } from "react-testing-library";
import "jest-dom/extend-expect";
import Players from "./players";

describe("<Players />", () => {
    it("renders strikes", () => {
        const { getByTestId, debug, container } = render(<Players />);
        const strike = getByTestId("strikesOutput");

        expect(strike).toHaveTextContent("1");
    });
});
