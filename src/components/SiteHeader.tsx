import { useEffect, useId, useRef, useState } from "react";
import "./SiteHeader.css";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="site-header">
      <div className="site-header__bar">
        <div className="site-header__inner">
          <a className="site-header__name" href="/">
            Lukas Carvajal
          </a>

          <button
            className="site-header__menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className="site-header__primary-nav"
            aria-label="Main navigation"
          >
            <a href="/bio">Bio</a>
          </nav>

          <nav
            id={menuId}
            className={`site-header__menu${menuOpen ? " is-open" : ""}`}
            aria-label="Menu navigation"
          >
            <a href="/bio" onClick={() => setMenuOpen(false)}>
              Bio
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
