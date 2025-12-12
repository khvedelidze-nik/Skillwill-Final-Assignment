import React from "react";

interface RuleProps {
  className?: string;
}
const VerticalRule: React.FC<RuleProps> = ({ className }) => {
  return (
    <div
      className={`w-0 border-s border-r-2 ${
        className ? className : "border-black"
      }`}
    ></div>
  );
};

export default VerticalRule;
