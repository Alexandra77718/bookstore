import React from "react";

export const MoreDetails = ({
  width = "10",
  height = "7",
  fill = "#313037",
}) => {
  return (
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1L5 5L1 1"
        stroke="#313037"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
