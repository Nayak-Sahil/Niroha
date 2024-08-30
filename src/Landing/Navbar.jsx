import React from "react";
import { NavLink, Link } from "react-router-dom";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navListArr = [
  {
    text: "Niroha",
    link: "/"
  },
  {
    text: "Virtual Tour",
    link: "/tour"
  },
  {
    text: "Guide",
    link: "/guide"
  }
]

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 flex h-16 items-center gap-4 px-4 md:px-6 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 shadow-md">
      <nav className="w-full hidden flex-col justify-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      {
        navListArr.map((list)=>{
          return(
            <LinkUI text={list.text} link={list.link} />
          )
        })
      }
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export const LinkUI = ({text, link}) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => `${
        isActive ? "text-primary" : "text-primary-foreground"
      } transition-colors hover:text-foreground`}
    end>
      <span>{text}</span>
    </NavLink>
  );
};
