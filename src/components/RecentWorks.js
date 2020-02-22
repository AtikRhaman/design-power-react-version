import React from "react";
import RecentWorksItem from "../components/RecentWorksItem"

const RecentWorks = () => {
  return (
    <section className="recent-works-section">
      <div className="container">
        <div className="section-border">
          <h1 className="section-border__heading">Recent works</h1>
        </div>
        <div className="recent-works">
          <RecentWorksItem />
          <RecentWorksItem />
          <RecentWorksItem />
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
