"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetOverlay } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [isTOCOpen, setIsTOCOpen] = React.useState(false);

  return (
    <div className="bg-[#FFD700] z-50">
      <div className="flex items-center justify-between py-3 px-8 max-w-[90rem] mx-auto">
        <a href="#" className="md:hidden flex-shrink-0">
          <span className="text-black font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DD3B3C]">
            <img src="/logo2.jpeg" alt="" className="w-12 h-12" />
          </span>
        </a>
        <NavigationMenu className="flex-1 hidden md:block">
          <div className="w-full">
            <NavigationMenuList className="justify-start w-full gap-x-4">
              <NavigationMenuItem className="flex-shrink-0">
                <a href="/">
                  <NavigationMenuLink className="text-black font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DD3B3C]">
                    <img src="/logo2.jpeg" alt="" className="w-12 h-12" />
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#tokenomics">
                  <NavigationMenuLink className="text-black font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#000] to-[#000]">
                    Tokenomics
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#product">
                  <NavigationMenuLink className="bg-transparent hover:bg-transparent text-black font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#000] to-[#000] text-base">
                    Products
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/quack">
                  <NavigationMenuLink className="bg-transparent hover:bg-transparent text-black font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#000] to-[#000] text-base">
                    Quack Futures
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        </NavigationMenu>
        <NavigationMenu className="ms-auto">
          <NavigationMenuList className="gap-x-2 ">
            <NavigationMenuItem className="hidden lg:block">
              <NavigationMenuLink className="bg-transparent hover:bg-transparent">
                <Button className="bg-[#20222a] hover:bg-[#20222a] text-white hover:text-white">
                  ON BOARD
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuLink className="bg-transparent hover:bg-transparent">
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-transparent text-black hover:text-black border-black"
                >
                  English
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="">
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-transparent text-black hover:text-black border-black"
                >
                  Connect Wallet
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className=" md:hidden">
              <Sheet open={isTOCOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  onClick={() => setIsTOCOpen(true)}
                >
                  <path
                    d="M1.09766 12.5C0.814323 12.5 0.57699 12.404 0.385656 12.212C0.193656 12.0207 0.0976562 11.7833 0.0976562 11.5C0.0976562 11.2167 0.193656 10.9793 0.385656 10.788C0.57699 10.596 0.814323 10.5 1.09766 10.5H17.0977C17.381 10.5 17.6183 10.596 17.8097 10.788C18.0017 10.9793 18.0977 11.2167 18.0977 11.5C18.0977 11.7833 18.0017 12.0207 17.8097 12.212C17.6183 12.404 17.381 12.5 17.0977 12.5H1.09766ZM1.09766 7.5C0.814323 7.5 0.57699 7.404 0.385656 7.212C0.193656 7.02067 0.0976562 6.78333 0.0976562 6.5C0.0976562 6.21667 0.193656 5.979 0.385656 5.787C0.57699 5.59567 0.814323 5.5 1.09766 5.5H17.0977C17.381 5.5 17.6183 5.59567 17.8097 5.787C18.0017 5.979 18.0977 6.21667 18.0977 6.5C18.0977 6.78333 18.0017 7.02067 17.8097 7.212C17.6183 7.404 17.381 7.5 17.0977 7.5H1.09766ZM1.09766 2.5C0.814323 2.5 0.57699 2.40433 0.385656 2.213C0.193656 2.021 0.0976562 1.78333 0.0976562 1.5C0.0976562 1.21667 0.193656 0.979 0.385656 0.787C0.57699 0.595667 0.814323 0.5 1.09766 0.5H17.0977C17.381 0.5 17.6183 0.595667 17.8097 0.787C18.0017 0.979 18.0977 1.21667 18.0977 1.5C18.0977 1.78333 18.0017 2.021 17.8097 2.213C17.6183 2.40433 17.381 2.5 17.0977 2.5H1.09766Z"
                    fill="url(#paint0_linear_11003_44445)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_11003_44445"
                      x1="-1.32809"
                      y1="0.5"
                      x2="21.9041"
                      y2="3.74266"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#B809B5"></stop>
                      <stop offset="0.510417" stopColor="#ED1C51"></stop>
                      <stop offset="1" stopColor="#FFB000"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <SheetOverlay
                  onClick={() => {
                    setIsTOCOpen(false);
                  }}
                />
                <SheetContent side="top" className="bg-[#FFD700]">
                  <button
                    onClick={() => {
                      setIsTOCOpen(false);
                    }}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </button>
                  <div className="flex flex-col gap-4">
                    <a
                      onClick={() => {
                        setIsTOCOpen(false);
                      }}
                      href="#tokenomics"
                    >
                      <span className="text-black font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#000] to-[#000] ">
                        Tokenomics
                      </span>
                    </a>

                    <a href="#product">
                      <span
                        onClick={() => {
                          setIsTOCOpen(false);
                        }}
                        className="bg-transparent hover:bg-transparent text-black font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#000] to-[#000] text-base"
                      >
                        Products
                      </span>
                    </a>
                    <Link to="/quack">
                      <span
                        onClick={() => {
                          setIsTOCOpen(false);
                        }}
                        className="bg-transparent hover:bg-transparent text-black font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#000] to-[#000] text-base"
                      >
                        Quack Futures
                      </span>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href="#"
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
