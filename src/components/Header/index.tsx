"use client"
import { NavbarLinks } from "../Navbar"

export const Header = (): JSX.Element => {
  return (
    <>
      <header className="flex fixed top-0 z-10 border-b-2  border-blue-700 h-36 gap-4 items-center w-full p-12 justify-center bg-gradient-linear">
        <div className="flex items-center gap-5 w w-2/3 bg-orange-500 justify-between px-4">
          <h2 className="text-2xl font-semibold">Isaias Candido</h2>
          <NavbarLinks />
        </div>
      </header>
    </>
  );
};
