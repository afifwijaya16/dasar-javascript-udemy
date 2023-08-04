import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fecthing data";
  }
  return (
    <div>
      <h5>Status - {message}</h5>
    </div>
  );
};
