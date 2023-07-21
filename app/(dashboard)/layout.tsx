"use client";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  <div className="h-full relative">
    <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 md:w-72">
      <div>Hello Sidebar</div>
    </div>

    <main className="md:pl-72">
      <Navbar />
      Hello Content
      {children}
    </main>
  </div>;
};

export default DashboardLayout;
