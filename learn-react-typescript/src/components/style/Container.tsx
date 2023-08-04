import React from "react";

type ContainerStyle = {
  styles: React.CSSProperties;
};

export const Container = (props: ContainerStyle) => {
  return <div style={props.styles}>TextContent Goes here</div>;
};
