import { NavLink } from "react-router-dom";

const NavigationLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
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
