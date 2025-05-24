"use client";

import React from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Homepage", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
  { label: "Subscription", href: "/subscription" },
];

const NavItems = () => {
  const pathname = usePathname().split("/").pop();

  return (
    <div className="flex items-center gap-8 text-sm font-light">
      {navItems.map((item: { label: string; href: string }) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "hover:text-primary transition-colors",
            pathname === item.href.split("/").pop() && "text-primary"
          )}
        >
          {item.label}
        </Link>
      ))}
      <ThemeToggle />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto w-full px-14 py-4 max-sm:px-4">
      <Logo />
      <NavItems />
    </nav>
  );
};

export default Navbar;
