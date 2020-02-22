import React from "react";
import Service from "./Service";
import RecentWorks from "./RecentWorks";
import Testimonials from "./Testimonials";

const Main = props => {
  return (
    <main className="main-block">
      <Service />
      <RecentWorks />

      <Testimonials />
    </main>
  );
};

export default Main;
