'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { GiSelfLove } from "react-icons/gi";
import NavLinks from "./nav-links";
import Link from "next/link";

export default function TestNav() {
  return (
    <Navbar
      disableAnimation
      isBordered
      aria-label="Top Navigation"
      className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 "
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand as={Link} href="/">
          <GiSelfLove size={30} className="text-gray-200" />
          <div className="font-bold sm:text-xl md:text-2xl lg:text-3xl text-gray-200">
            MatchNext
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand as={Link} href="/">
          <GiSelfLove size={40} className="text-gray-200" />
          <div className="font-bold text-3xl text-gray-200">MatchNext</div>
        </NavbarBrand>
        <NavLinks />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/register"
            variant="flat"
            className="text-white sm:text-sm outline-none px-6 py-2"
          >
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="sm:hidden pr-3 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
        <NavLinks />
      </NavbarMenu>
    </Navbar>
  );
}
