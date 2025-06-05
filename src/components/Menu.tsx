import React from 'react';
import { Connect } from './Connect';
import NavbarButton from './NavbarButton';

// SVG Icon Components (using currentColor to inherit color from NavbarButton)
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5"/>
  </svg>
);

const DocsIcon = () => ( // Using an information icon for Docs as in the image
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

const SubmitIcon = () => ( // Example: PlusCircleIcon for "Submit"
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Menu = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral-800 px-2 pt-2 pb-1 shadow-[-4px_0_15px_rgba(0,0,0,0.2)] rounded-t-xl z-50">
      {/* Adjusted main container for items: justify-around, items-center */}
      <div className="flex justify-around items-center w-full">
        {/* space-x-8 is removed as justify-around will handle spacing */}
        <NavbarButton to="/" icon={<HomeIcon />} end>
          Home
        </NavbarButton>
        <NavbarButton to="/docs" icon={<DocsIcon />}>
          Docs
        </NavbarButton>
        <NavbarButton to="/submission" icon={<SubmitIcon />}>
          Submit
        </NavbarButton>
        <NavbarButton to="/profile" icon={<ProfileIcon />}>
          Profile
        </NavbarButton>
      </div>
    </nav>
  );
};

export default Menu; 