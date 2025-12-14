"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";
import { LogOutIcon } from "lucide-react";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const NavItems = () => {
  const router = useRouter();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Become a host", href: "/become-a-host" },
  ];

  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    await fetch(`${baseUrl}/api/logout`, { method: "POST" });
    logout();
    router.push("/");
  };

  return (
    <nav>
      <ul className="flex items-center space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
        {user?.id && (
          <li className="flex gap-2">
            {user?.email.split("@")[0]}
            <LogOutIcon className="cursor-pointer" onClick={handleLogout} />
          </li>
        )}
      </ul>
    </nav>
  );
};
export default NavItems;
