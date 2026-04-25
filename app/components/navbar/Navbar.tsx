"use client";

import { authClient } from "@/app/lib/auth-client";
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

function Nav() {
    const { data: session, isPending } = authClient.useSession();

    const isLoggedIn = !!session?.user;

    return (
        <nav className="bg-orange-500 py-2 text-white w-full shadow-md">
            <Navbar
                position="sticky"
                className="container mx-auto px-4"
                maxWidth="lg"
            >
                {/* LEFT SIDE */}
                <NavbarContent>
                    <NavbarMenuToggle className="sm:hidden" />
                    <NavbarBrand>
                        <p className="font-bold text-lg tracking-wide">Bashar</p>
                    </NavbarBrand>
                </NavbarContent>

                {/* CENTER MENU */}
                <NavbarContent className="hidden sm:flex gap-6" justify="center">
                    <NavbarItem>
                        <Link className="text-white/90 hover:text-white" href="#">
                            Features
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link className="text-white/90 hover:text-white" href="#">
                            Dashboard
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link className="text-white/90 hover:text-white" href="#">
                            Pricing
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                {/* RIGHT SIDE */}
                <NavbarContent justify="end" className="gap-3">

                    {/* LOADING STATE */}
                    {isPending ? (
                        <NavbarItem>
                            <span className="text-sm text-white/70">Loading...</span>
                        </NavbarItem>
                    ) : (
                        <>
                            {!isLoggedIn ? (
                                <>
                                    <NavbarItem>
                                        <Link href="/auth/signIn" className="text-white">
                                            Login
                                        </Link>
                                    </NavbarItem>

                                    <NavbarItem>
                                        <Link href="/auth/signUp">
                                            <Button size="sm" className="bg-white text-black">
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </NavbarItem>
                                </>
                            ) : (
                                <NavbarItem>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium">
                                            👋 {session?.user?.name}
                                        </span>

                                        <Button
                                            size="sm"
                                            variant="flat"
                                            className="bg-white/20 text-white"
                                            onClick={() => authClient.signOut()}
                                        >
                                            Logout
                                        </Button>
                                    </div>
                                </NavbarItem>
                            )}
                        </>
                    )}
                </NavbarContent>

                {/* MOBILE MENU */}
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

                    {!isLoggedIn && (
                        <>
                            <NavbarMenuItem>
                                <Link href="/auth/signIn">Login</Link>
                            </NavbarMenuItem>
                            <NavbarMenuItem>
                                <Link href="/auth/signUp">Sign Up</Link>
                            </NavbarMenuItem>
                        </>
                    )}
                </NavbarMenu>
            </Navbar>
        </nav>
    );
}

export default Nav;
