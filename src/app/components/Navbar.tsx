'use client'
import { Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { metadata } from "../metadata";
import Breadcrumb, { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { useBreadcrumbStore } from "../../store/useBreadcrumbStore";
import { AnyObject } from "antd/es/_util/type";

interface MenuItem {
  name: string;
  href: string;
  children?: MenuItem[]
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBreadcrumb, setShowBreadcrumb] = useState(true)
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

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (!isMenuOpen) {
      timeoutId = setTimeout(() => {
        setShowBreadcrumb(true);
      }, 150);
    } else {
      setShowBreadcrumb(false);
    }
    return () => {
      clearTimeout(timeoutId)
    }
  }, [isMenuOpen])

  return (
    <div className="sticky top-0 z-10 select-none">
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
        </NavbarContent>
        <NavbarMenu className="select-none">
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
      <div className={`py-4 overflow-x-auto inset-x-0 backdrop-blur-lg backdrop-saturate-150 bg-background/70 data-[show-breadcrumb=false]:opacity-0`} data-show-breadcrumb={showBreadcrumb}>
        <div className="max-w-5xl mx-auto px-6">
          <Breadcrumb className="max-w-5xl" items={items} itemRender={(item) => <Link href={item.href ?? ''}>{item.title}</Link>} />
        </div>
      </div>
    </div>
  );
}