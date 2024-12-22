"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // If using clsx for conditional classNames
import { useMemo } from "react";

const Nav = () => {
  const pathname = usePathname();

  // Define navigation items and memoize it for performance.
  const navItems = useMemo(
    () => [
      { label: "About", val: "/" },
      { label: "Resume", val: "/resume" },
      // { label: "Portfolio", val: "/portfolio" },
      // { label: "Blog", val: "/blog" },
      { label: "Contact", val: "/contact" },
    ],
    []
  );

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <ul className="navbar-list">
        {navItems.map(({ label, val }, index) => {
          const isActive = pathname === val;
          return (
            <li className="navbar-item" key={index}>
              <Link
                href={val}
                className={clsx("navbar-link", {
                  active: isActive,
                })}
                aria-current={isActive ? "page" : undefined} // For accessibility
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
