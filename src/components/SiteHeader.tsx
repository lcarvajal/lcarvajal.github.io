import { useEffect, useId, useRef, useState } from "react";
import "./SiteHeader.css";

export default function SiteHeader() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuId = useId();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--height-header-current",
      `var(--height-header-${compact ? "compact" : "expanded"})`,
    );

    return () => {
      document.documentElement.style.removeProperty("--height-header-current");
    };
  }, [compact]);

  useEffect(() => {
    const collapseSpeed = 0.08;
    let previousY = window.scrollY;
    let previousTime = performance.now();

    const updateHeader = () => {
      const mobile = window.matchMedia("(max-width: 48rem)").matches;
      const currentY = window.scrollY;
      const currentTime = performance.now();
      const distance = currentY - previousY;
      const elapsed = Math.max(currentTime - previousTime, 1);
      const downwardSpeed = distance / elapsed;

      if (mobile) {
        setCompact(true);
      } else if (currentY <= 0 || distance < -1) {
        setCompact(false);
        setMenuOpen(false);
      } else if (downwardSpeed >= collapseSpeed) {
        setCompact(true);
      }

      if (!mobile) {
        setMenuOpen(false);
      }

      previousY = currentY;
      previousTime = currentTime;
    };

    setCompact(window.matchMedia("(max-width: 48rem)").matches || window.scrollY > 0);
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [menuOpen]);

  return (
    <header ref={headerRef} className={`site-header${compact ? " is-compact" : ""}`}>
      <div className="site-header__inner">
        <a className="site-header__name" href="/">Lukas Carvajal</a>

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

        <nav className="site-header__primary-nav" aria-label="Main navigation">
          <a href="/bio">Bio</a>
          <a href="/components">Components</a>
        </nav>

        <nav
          id={menuId}
          className={`site-header__menu${menuOpen ? " is-open" : ""}`}
          aria-label="Menu navigation"
        >
          <a href="/bio" onClick={() => setMenuOpen(false)}>Bio</a>
          <a href="/components" onClick={() => setMenuOpen(false)}>Components</a>
        </nav>
      </div>
    </header>
  );
}
