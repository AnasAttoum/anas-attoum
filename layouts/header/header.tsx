"use client"

import Logo from "@/components/logo/logo";
import clsx from "clsx";
import { usePathname } from 'next/navigation';
import { navItems } from "../nav-items";
import Hamb from "@/components/buttons/hamb/hamb";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import dynamic from 'next/dynamic';
import LocaleSwitcher from "@/components/buttons/locale-switcher/locale-switcher";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/lib/localization/navigation";

// Disable SSR for this component
const ThemeToggle = dynamic(() => import('@/components/buttons/theme-toggle/theme-toggle'), {
  ssr: false,
  loading: () => <button className="simpleBtn invisible">🔆</button>
});

export default function Header() {
  const t = useTranslations();

  const [checked, setChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      // 1. Always show at the very top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // 2. Hide if scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      // 3. Show if scrolling up
      else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && checked) { // md breakpoint or lg, depending on your Tailwind config
        setChecked(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [checked]);
  useEffect(() => {
    if (checked) {
      document.body.style.overflow = "hidden";   // disable scroll
    } else {
      document.body.style.overflow = "";         // enable scroll
    }

    return () => {
      document.body.style.overflow = "";         // cleanup
    };
  }, [checked]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >

      {/* navItems on Mobile */}
      <ul className={clsx(
        "absolute top-20 left-0 flex flex-col justify-center text-center text-2xl text-white font-bold gap-7 md:hidden w-full h-0 bg-gray/70 backdrop-blur-sm ease-out opacity-0 x-spacing overflow-hidden",
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
              <ItemOnMobile label={t(label)} href={href} setChecked={setChecked} />
            </div>
          )
        })}
      </ul>

      <div className="flex justify-between items-center h-20 shadow dark:shadow-black x-spacing backdrop-blur-sm overflow-visible!">
        <Logo />

        {/* navItems on Desktop */}
        <ul className="gap-5 hidden md:flex">
          {navItems.map(({ label, href }) =>
            <Item key={label} label={t(label)} href={href} />
          )}
        </ul>


        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LocaleSwitcher />
          <Hamb checked={checked} setChecked={setChecked} />
        </div>
      </div>

    </header>
  )
}

const Item = ({ label, href }: { label: string; href: string }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const isActive = (pathname.split(`/${locale}`)[1] || '/') === href;

  return (
    <li className="relative group cursor-pointer uppercase tracking-widest">
      <Link href={href}>
        {label.split('')
          .map((char, i) =>
            <span key={i}
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
      </Link>
      {isActive && <div className="bg-primary h-1 w-full" />}
    </li>
  )
}

const ItemOnMobile = ({ label, href, setChecked }: { label: string; href: string; setChecked: Dispatch<SetStateAction<boolean>> }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const isActive = (pathname.split(`/${locale}`)[1] || '/') === href;

  return (
    <li className="relative group cursor-pointer uppercase tracking-widest">
      <Link href={href} onClick={() => setChecked(false)}>
        {label.split('')
          .map((char, i) =>
            <span key={i}
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
      </Link>
    </li>
  )
}