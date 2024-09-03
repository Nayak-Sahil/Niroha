import React, { useEffect, useState } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
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
import NirohaLog from "/icons/niroha.png";

const routerList = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Explore Plants",
    link: "/explore-plants",
  },
  {
    text: "Virtual Farm",
    link: "/virtual-farm",
  },
  {
    text: "AI Plants Identification",
    link: "/identify",
  },
];

export default function Navbar() {
  const [pageData, setPageData] = useState({
    isPlantDataPage: false,
    link: "/auth",
  });
  const url = useParams();
  const [navListArr, setNavList] = useState([]);
  useEffect(() => {
    if (url.hasOwnProperty("plantsID")) {
      setNavList([]);
      setPageData({
        isPlantDataPage: true,
        link: "/explore-plants",
        plantData: {
          scientificName: "Matricaria chamomilla",
          commonName: ["Chamomile", "German Chamomile"],
          family: "Asteraceae",
          genus: "Matricaria",
          species: "M. chamomilla",
        },
      });
    } else {
      setNavList(routerList);
      setPageData({ isPlantDataPage: false, link: "/auth" });
    }
  }, [url]);

  return (
    <header className="w-full sticky top-0 flex h-16 items-center gap-4 px-4 md:px-6 bg-transparent bg-clip-padding pt-5">
      {/* <header className="w-full sticky top-0 flex h-16 items-center gap-4 px-4 md:px-6 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 shadow-md"> */}
      <div className="w-[450px] h-full flex items-center">
        <img src={NirohaLog} className="pl-5 mr-2" width={55} alt="NirohaLogo" />
        <p className="text-white font-medium">{pageData.isPlantDataPage ? pageData.plantData.scientificName : ""}</p>
      </div>
      <nav className="w-full hidden flex-col justify-end gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {navListArr.map((list, index) => {
          return <LinkUI key={index} text={list.text} link={list.link} />;
        })}
        <Link
          to={pageData.link}
          className="leaf-shape bg-transparent border border-primary"
        >
          {pageData.isPlantDataPage ? "Go back" : "Get started"}
        </Link>
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

export const LinkUI = ({ text, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `${
          isActive ? "text-primary" : "text-primary-foreground"
        } transition-colors text-base hover:text-foreground`
      }
      end
    >
      <span>{text}</span>
    </NavLink>
  );
};
