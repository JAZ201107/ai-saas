import React, { FC } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center p-4">
      <Button variant="ghost" size="icon">
        <Menu />
      </Button>
    </div>
  );
};

export default Navbar;