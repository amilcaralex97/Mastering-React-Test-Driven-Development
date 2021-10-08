import React from "react";
import ReactDOM from "react-dom";
import { Appointment } from "../src/Appointment";

describe("Apppointment", () => {
  beforeEach(() => {
    container = document.createElement("div");
  });

  let container;
  let customer;

  const render = (component) => ReactDOM.render(component, container);
  it("renders coustumer first name", () => {
    customer = { firstname: "Ashley" };
    document.body.appendChild(container);

    render(<Appointment customer={customer} />);

    expect(container.textContent).toMatch("Ashley");
  });

  it("renders another coustumer first name", () => {
    customer = { firstname: "Jordan" };
    document.body.appendChild(container);

    render(<Appointment customer={customer} />);

    expect(container.textContent).toMatch("Jordan");
  });
});
