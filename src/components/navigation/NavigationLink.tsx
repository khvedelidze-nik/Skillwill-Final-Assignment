import type React from "react";
import { NavLink } from "react-router-dom";

interface LinkInterface {
  to: string;
  children: React.ReactNode;
}

const NavigationLink: React.FC<LinkInterface> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "font-bold" : "")}
    >
      {children}
    </NavLink>
  );
};

export default NavigationLink;
