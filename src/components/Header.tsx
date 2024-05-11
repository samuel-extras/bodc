"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Header() {
  return (
    <div className="bg-[#101010] z-50">
      <div className="flex items-center justify-between py-3 px-8 max-w-[90rem] mx-auto">
        <a href="/" className="md:hidden flex-shrink-0">
          <span className="text-[#a5a5a5] font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DD3B3C]">
            <img src="/logo.png" alt="" className="w-12 h-12" />
          </span>
        </a>
        <NavigationMenu className="flex-1 hidden md:block">
          <div className="w-full">
            <NavigationMenuList className="justify-start w-full ">
              <NavigationMenuItem className="flex-shrink-0">
                <a href="/">
                  <NavigationMenuLink className="text-[#a5a5a5] font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DD3B3C]">
                    <img src="/logo.png" alt="" className="w-12 h-12" />
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/">
                  <NavigationMenuLink className="text-[#a5a5a5] font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DD3B3C]">
                    Tokenomics
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/docs">
                  <NavigationMenuLink className="text-[#a5a5a5] px-6 font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DD3B3C]">
                    Company
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-[#a5a5a5] font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DD3B3C] text-base">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden lg:block">
                <a href="/">
                  <NavigationMenuLink className="text-[#a5a5a5] px-6 font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DD3B3C]">
                    Dex V2
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        </NavigationMenu>
        <NavigationMenu className="ms-auto">
          <NavigationMenuList className="gap-x-2 ">
            <NavigationMenuItem className="hidden lg:block">
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
                <Button className="bg-[#20222a] hover:bg-[#20222a] text-white hover:text-white">
                  ON BOARD
                </Button>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[320px] gap-3 p-4  ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-transparent text-white hover:text-white"
                >
                  English
                </Button>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4  ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/">
                <NavigationMenuLink className="">
                  <Button className="text-white px-8 font-medium hover:opacity-85 bg-gradient-to-r from-[#FFD700] to-[#DD3B3C]">
                    Enter App
                  </Button>
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem className=" md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
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
