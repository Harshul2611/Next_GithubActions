"use client";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumb = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/").filter(Boolean);
  return (
    <div className="mt-2 p-3 flex items-center gap-1">
      <span>Home</span> <ChevronRight size={16} /> <span>{currentPath[0]}</span>
    </div>
  );
};

export default BreadCrumb;
