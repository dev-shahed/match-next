'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarItem } from "@nextui-org/react";

type NavLink = {
  href: string;
  label: string;
};

const memberLinks: NavLink[] = [
  { href: "/matches", label: "Matches" },
  { href: "/discover", label: "Discover" },
  { href: "/chat", label: "Chat" },
];

const adminLinks: NavLink[] = [{ href: "/admin/profile", label: "Profile" }];

export default function NavLinks() {
  const pathname = usePathname();
  const links = [...memberLinks, ...adminLinks];

  return (
    <>
      {links.map(({ href, label }) => (
        <NavbarItem
          key={href}
          isActive={pathname === href}
          as={Link}
          href={href}
          className={`text-white hover:text-yellow-200 transition-colors duration-100 py-2 px-4 ${
            pathname === href ? "text-yellow-400" : ""
          }`}
        >
          <span className="font-bold">{label.toUpperCase()}</span>
        </NavbarItem>
      ))}
    </>
  );
}
