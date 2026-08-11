type ActivePage = "home" | "cs2" | "scum";

const links = [
  { id: "home", label: "Start", href: "/" },
  { id: "cs2", label: "CS2", href: "/cs2/" },
  { id: "scum", label: "SCUM", href: "/scum/" },
] as const;

export function SiteHeader({ active }: { active: ActivePage }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="NEXUS Startseite">
        <span className="brand-mark" aria-hidden="true"><i /><i /></span>
        <span><strong>NEXUS</strong><small>Gaming Community</small></span>
      </a>

      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {links.map((link) => (
          <a key={link.id} className={active === link.id ? "active" : ""} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="/#discord">Discord <span aria-hidden="true">↗</span></a>

      <details className="mobile-menu">
        <summary aria-label="Menü öffnen"><span /><span /></summary>
        <nav aria-label="Mobile Navigation">
          {links.map((link) => (
            <a key={link.id} className={active === link.id ? "active" : ""} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="/#discord">Discord</a>
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="brand footer-brand">
        <span className="brand-mark" aria-hidden="true"><i /><i /></span>
        <span><strong>NEXUS</strong><small>Gaming Community</small></span>
      </div>
      <p>Gemeinsam spielen. Gemeinsam bleiben.</p>
      <div className="footer-links">
        <a href="/">Start</a>
        <a href="/cs2/">CS2</a>
        <a href="/scum/">SCUM</a>
      </div>
    </footer>
  );
}
