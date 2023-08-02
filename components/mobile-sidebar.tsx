"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { FC, useEffect, useState } from "react";

interface MobileSidebarProps {
  apiLimitCount: number;
}
const MobileSidebar: FC<MobileSidebarProps> = ({ apiLimitCount }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
        <SheetContent side="left" className="p-0">
          <Sidebar apiLimitCount={apiLimitCount} />
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  );
};

export default MobileSidebar;
