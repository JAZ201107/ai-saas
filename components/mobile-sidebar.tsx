"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  );
};

export default MobileSidebar;
