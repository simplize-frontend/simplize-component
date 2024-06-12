import React from "react";

interface Props {
  title?: string;
  style?: React.CSSProperties;
}

const Typography: React.FC<Props> = (props): JSX.Element => {
  const { title = "Typography", style } = props;

  return <h1 style={style}>{title}</h1>;
};

export default Typography;
