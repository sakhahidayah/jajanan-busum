import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const DESKTOP_BREAKPOINT = 768;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Produk", href: "#produk" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-sawo-matang/25 bg-kertas-minyak">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-4 py-2 md:px-6"
      >
        <a
          href="#home"
          className="font-display text-lg font-semibold text-arang focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sawo-matang md:text-xl"
        >
          Aneka Snack Bu Sum
        </a>

        <ul className="hidden items-center md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-3 py-2.5 text-arang transition-colors hover:text-sawo-matang focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sawo-matang"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          className="-mr-2 flex min-h-11 min-w-11 items-center justify-center text-arang transition-colors hover:text-sawo-matang focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sawo-matang md:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="menu-mobile" className="border-t border-sawo-matang/25 md:hidden">
          <ul className="mx-auto w-full max-w-[1120px] px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-2 py-3 text-arang transition-colors hover:text-sawo-matang focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sawo-matang"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
