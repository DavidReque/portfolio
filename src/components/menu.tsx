'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {name: 'About', href: 'about'},
    {name: 'Work', href: 'work'},
    {name: 'Contact', href: 'contact'}
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
         <Link href='/'>
          <img className="w-7 h-7" src="/img/logo.png" alt="Logo" />
         </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#work" aria-current="page">
            Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/*<NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
  </NavbarItem>*/}
      </NavbarContent>
      <NavbarMenu>
        <ul className="flex justify-center flex-col items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 1 ? "primary" : 'foreground'
              }
              className="w-full"
              href={`#${item.href}`}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        </ul>
      </NavbarMenu>
    </Navbar>
  );
}
