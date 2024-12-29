"use client";

import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Link Types
type NavLink = {
  href: string;
  label: string;
};

const memberLinks: NavLink[] = [
  { href: "/matches", label: "matches" },
  { href: "/discover", label: "Discover" },
  { href: "/chat", label: "Chat" },
];

const adminLinks: NavLink[] = [{ href: "/admin/profile", label: "Profile" }];

// NavLinks Component
export default function NavLinks() {
  const pathname = usePathname();
  const links = [...memberLinks, ...adminLinks];

  console.log(links);

  return (
    <>
      {links.map(({ href, label }) => (
        <NavbarItem
          key={href}
          isActive={pathname === href}
          as={Link}
          href={href}
          className="hover:text-yellow-30"
        >
          <span className="text-white-300">{label}</span>
        </NavbarItem>
      ))}
    </>
  );
}
