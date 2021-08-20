import React from "react";

export const Display = ({ input }) => (
  <div id="display-container">
    <h6>{input}</h6>
    {/* <h4 id="display">{[...input].pop()}</h4> */}
  </div>
);
