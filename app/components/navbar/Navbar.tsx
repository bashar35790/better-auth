"use client";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@heroui/navbar";

import { Link, Button } from "@heroui/react";
import { useState } from "react";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-400 w-full py-2">
            <Navbar position="sticky" className=" container mx-auto px-4" maxWidth="lg" onMenuOpenChange={setIsMenuOpen}>
                    <NavbarContent>
                        <NavbarMenuToggle className="sm:hidden" />
                        <NavbarBrand>
                            <p className="font-bold">Bashar</p>
                        </NavbarBrand>
                    </NavbarContent>
                    <NavbarContent className="hidden md:flex">
                        <NavbarItem>
                            <Link href="#">Features</Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="#">Dashboard</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link href="#">Pricing</Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Link href="#">Login</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button>Sign Up</Button>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarMenu>
                        <NavbarMenuItem>
                            <Link href="#">Features</Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem>
                            <Link href="#">Dashboard</Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem>
                            <Link href="#">Pricing</Link>
                        </NavbarMenuItem>
                    </NavbarMenu>
            </Navbar>
        </nav>
    );
}

export default Nav;
