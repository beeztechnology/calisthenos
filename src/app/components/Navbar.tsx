'use client'
import { Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { metadata } from "../metadata";
import Breadcrumb, { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { useBreadcrumbStore } from "../../store/breadcrumb.store";
import { AnyObject } from "antd/es/_util/type";

interface MenuItem {
  name: string;
  href: string;
  children?: MenuItem[]
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const items = useBreadcrumbStore((state) => state.items)

  const menuItems: MenuItem[] = [
    {
      name: "Definiciones",
      href: '/definicion'
    },
    {
      name: "Ejercicios",
      href: '/ejercicios'
    },
    {
      name: "Planes de entrenamiento",
      href: '/plan'
    },
  ];

  function itemRender(item: ItemType, params: AnyObject, items: ItemType[], paths: string[]) {
    const last = items.indexOf(item) === items.length - 1;
    return last
      ? <Link href={paths.join('/')}>{item.title}</Link>
      : <Link href={"/"}>{item.title}</Link>;
  }

  return (
    <NextNavbar height={"var(--cm-navbar-height)"}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <Link href="/" color="foreground" className="font-bold">
            {metadata.title?.toString()}
          </Link>
        </NavbarBrand>
        <Breadcrumb items={items} itemRender={itemRender} />
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