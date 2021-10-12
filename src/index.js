import React from "react";
import ReactDom from "react-dom";
import { AppointmentDayView } from "./AppointmentDayView";
import { sampleAppointments } from "./sampleData";

console.log(document.getElementById("root"));

ReactDom.render(
  <AppointmentDayView appointments={sampleAppointments} />,
  document.getElementById("root")
);
