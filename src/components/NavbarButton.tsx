import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface NavbarButtonProps extends Omit<NavLinkProps, 'className' | 'style'> {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ icon, children, className, ...rest }) => {
  return (
    <NavLink
      {...rest}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center p-1 w-16 h-16 transition-colors duration-150 rounded-lg 
        ${isActive ? 'text-lime-400' : 'text-gray-400 hover:text-gray-200'} 
        ${className || ''}`
      }
    >
      {icon && <span className="mb-0.5">{icon}</span>}
      <span className="text-xs">{children}</span>
    </NavLink>
  );
};

export default NavbarButton;
