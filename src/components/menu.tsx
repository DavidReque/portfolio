'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {name: 'Sobre mi', href: 'about'},
    {name: 'Trabajo', href: 'work'},
    {name: 'Contacto', href: 'contact'}
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
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#work" aria-current="page">
            Trabajo
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="https://docs.google.com/document/d/1xNjgeBZxAEsPd8pXOF0jhqkA3wud2yO-6E3sFZAC3lM/edit" variant="flat">
          {/*./assets/Curriculum David Requeno.pdf*/}
            CV
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <ul className="flex justify-center flex-col items-center">
        {menuItems.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <Link
          href={`#${item.href}`}>
            <span className={`w-full ${index === 1 ? "text-primary" : 'text-foreground'} text-lg`}>
        {item.name}
      </span>
        </Link>
      </NavbarMenuItem>
        ))}
        </ul>
      </NavbarMenu>
    </Navbar>
  );
}
