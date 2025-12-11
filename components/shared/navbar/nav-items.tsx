"use client";

import Link from "next/link";

const NavItems = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Stays", href: "/stays" },
    { label: "Become a host", href: "/become-a-host" },
  ];

  return (
    <nav>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavItems;
