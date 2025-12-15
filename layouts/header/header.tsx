"use client"

import Logo from "@/components/buttons/theme-toggle/logo/logo";
import ThemeToggle from "@/components/buttons/theme-toggle/theme-toggle";
import clsx from "clsx";
import { usePathname } from 'next/navigation';
import { navItems } from "../nav-items";
import Hamb from "@/components/buttons/hamb/hamb";
import { useState } from "react";

export default function Header() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center h-20 shadow dark:shadow-black x-spacing">
        <Logo />

        {/* navItems on Desktop */}
        <ul className="gap-5 hidden md:flex">
          {navItems.map(({ label, href }) =>
            <Item key={label} label={label} href={href} />
          )}
        </ul>

        <div className="flex gap-3">
          <ThemeToggle />
          <Hamb setChecked={setChecked} />
        </div>
      </div>

      {/* navItems on Mobile */}
      <ul className={clsx(
        "absolute top-20 left-0 flex flex-col justify-center text-center text-2xl text-white font-bold gap-7 md:hidden w-full h-0 bg-gray ease-out opacity-0 x-spacing",
        checked && "h-[calc(100dvh-80px)] opacity-100"
      )}
      >
        {navItems.map(({ label, href }, i) => {
          const even = i % 2 === 0;
          return (
            <div key={label}
              className={clsx(
                "relative transition-all",
                checked
                  ? "left-0"
                  : even
                    ? "left-full"
                    : "-left-full"
              )}
              style={{ transitionDelay: `${0.3 * i}s` }}
            >
              <ItemOnMobile label={label} href={href} />
            </div>
          )
        })}
      </ul>
    </>
  )
}

const Item = ({ label, href }: { label: string; href: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="relative group cursor-pointer uppercase tracking-widest">
      <a>
        {label.split('')
          .map((char, i) =>
            <span key={char}
              className={clsx(
                isActive
                  ? "text-primary"
                  : "transition-colors duration-300 group-hover:text-primary"
              )}
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              {char}
            </span>
          )}
      </a>
      {isActive && <div className="bg-primary h-1 w-full" />}
    </li>
  )
}

const ItemOnMobile = ({ label, href }: { label: string; href: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="relative group cursor-pointer uppercase tracking-widest">
      <a>
        {label.split('')
          .map((char, i) =>
            <span key={char}
              className={clsx(
                isActive
                  ? "text-white tracking-[0.3em]"
                  : "transition-colors duration-300 group-hover:text-primary"
              )}
              style={isActive ? { textShadow: "0 0 5px #fff", transitionDelay: `${0.1 * i}s` } : { transitionDelay: `${0.1 * i}s` }}
            >
              {char}
            </span>
          )}
      </a>
    </li>
  )
}