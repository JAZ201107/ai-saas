"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/clerk-react";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div>
      <p> Danshboard Page</p>
      <UserButton></UserButton>
    </div>
  );
}
