'use client'
import { Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

interface MenuItem {
  name: string;
  href: string;
  children?: MenuItem[]
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems: MenuItem[] = [
    {
      name: "Definiciones",
      href: '/definicion'
    },
    {
      name: "Planes de entrenamiento",
      href: '/plan'
    }
  ];

  return (
    <NextNavbar height={"var(--cm-navbar-height)"}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <Link href="/" color="foreground" className="font-bold">
            CALISMOVE®
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            className="mx-auto w-full max-w-4xl"
            key={`${item.name}`}
          >
            <Link
              onClick={() => setIsMenuOpen(false)}
              color="foreground"
              className="w-full"
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
}