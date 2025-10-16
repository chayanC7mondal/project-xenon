"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import universityLogo from "@/assests/university-logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Publications", path: "/publications" },
    { name: "Projects", path: "/projects" },
    { name: "Teaching", path: "/teaching" },
    { name: "Research Group", path: "/research-group" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src={universityLogo}
              alt="University Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-semibold text-heading tracking-wide uppercase">
              Dr. [Professor Name]
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? "text-primary bg-secondary"
                    : "text-text-muted hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
