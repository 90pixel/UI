import React from "react";
interface ButtonInterface {
  title: string;
}
const Button: React.FC<ButtonInterface> = ({ title }) => {
  return <div>{title}</div>;
};

export default Button;
