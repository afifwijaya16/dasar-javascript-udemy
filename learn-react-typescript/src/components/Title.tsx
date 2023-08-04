import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

export const Title = (props: TitleProps) => {
  return <div>{props.children}</div>;
};
