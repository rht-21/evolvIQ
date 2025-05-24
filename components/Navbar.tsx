"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { IconMenu } from "@tabler/icons-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const navItems = [
  { label: "Homepage", href: "/" },
  { label: "Companions", href: "/companion" },
  { label: "My Journey", href: "/my-journey" },
  { label: "Subscription", href: "/subscription" },
];

const NavItems = () => {
  const pathname = usePathname().split("/").pop();

  return (
    <div className="flex items-center gap-8 text-sm font-light max-sm:hidden">
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
      <SignedOut>
        <SignInButton>
          <button className="btn-signin">Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

const MobileNav = () => {
  const pathname = usePathname().split("/").pop();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="max-sm:block hidden" asChild>
        <IconMenu stroke={1.5} className="text-foreground cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex justify-between px-8 py-12">
        <SheetTitle className="sr-only" />
        <div className="flex flex-col text-xl gap-8">
          {navItems.map((item: { label: string; href: string }) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "hover:text-primary transition-colors",
                pathname === item.href.split("/").pop() && "text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </SheetContent>
    </Sheet>
  );
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between mx-auto w-full md:px-14 px-8 py-4 max-sm:px-4 bg-background">
      <Logo />
      <div className="flex items-center gap-8 max-sm:gap-4">
        <NavItems />
        <ThemeToggle />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
