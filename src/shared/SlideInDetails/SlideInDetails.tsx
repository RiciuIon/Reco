import React from "react";
import { SlideInDetailsProps } from "../../types/types";

const SlideInDetails: React.FC<SlideInDetailsProps> = ({ data }) => {
  console.log("data from slide");
  console.log(data);
  return (
    <div className="slide-in-wrapper" style={{ zIndex: 10 }}>
      <h3>App overview</h3>
      <p>{data.name}</p>
      <div style={{ padding: "10px", backgroundColor: "lightblue" }}>
        <p>App name: {data.name}</p>
        <p>Category: {data.category}</p>
        <p>Users: {data.connectedUsers.length}</p>
        <p>Connector: {data.connector}</p>
        <p>Last classification: {data.lastClassification}</p>
      </div>
    </div>
  );
};

export default SlideInDetails;
