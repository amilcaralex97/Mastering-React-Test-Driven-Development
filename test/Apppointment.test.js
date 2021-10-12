import ReactTestUtils from "react-dom/test-utils";
import React from "react";
import ReactDOM from "react-dom";
import { Appointment, AppointmentDayView } from "../src/Appointment";

describe("Apppointment", () => {
  beforeEach(() => {
    container = document.createElement("div");
  });

  let container;
  let customer;

  const render = (component) => ReactDOM.render(component, container);
  it("renders coustumer first name", () => {
    customer = { firstName: "Ashley" };
    document.body.appendChild(container);

    render(<Appointment customer={customer} />);

    expect(container.textContent).toMatch("Ashley");
  });

  it("renders another coustumer first name", () => {
    customer = { firstName: "Jordan" };
    document.body.appendChild(container);

    render(<Appointment customer={customer} />);

    expect(container.textContent).toMatch("Jordan");
  });
});

describe("ApppointmentDayView", () => {
  let container;
  const today = new Date();
  const appointments = [
    { startsAt: today.setHours(12, 0), customer: { firstName: "Ashley" } },
    { startsAt: today.setHours(13, 0), customer: { firstName: "Jordan" } },
  ];

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component) => ReactDOM.render(component, container);

  it("renders a div with the right id", () => {
    render(<AppointmentDayView appointments={[]} />);
    expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders multiple appointments in an ol element", () => {
    render(<AppointmentDayView appointments={appointments} />);

    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(2);
  });

  it("renders each appointment in an li", () => {
    render(<AppointmentDayView appointments={appointments} />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
    expect(container.querySelectorAll("li")[0].textContent).toEqual("12:00");
    expect(container.querySelectorAll("li")[1].textContent).toEqual("13:00");

    render(<AppointmentDayView appointments={appointments} />);
  });

  it("initially shows a message saying there are no appointments  today", () => {
    render(<AppointmentDayView appointments={[]} />);
    expect(container.textContent).toMatch(
      "There are no appointments scheduled for today."
    );
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentDayView appointments={appointments} />);
    expect(container.textContent).toMatch("Ashley");
  });

  it("has a button element in each li", () => {
    render(<AppointmentDayView appointments={appointments} />);

    expect(container.querySelectorAll("li > button")).toHaveLength(2);
    expect(container.querySelectorAll("li > button")[0].type).toEqual("button");
  });

  it("renders another  appointment when selected", () => {
    render(<AppointmentDayView appointments={appointments} />);
    const button = container.querySelectorAll("button")[1];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch("Jordan");
  });
});
