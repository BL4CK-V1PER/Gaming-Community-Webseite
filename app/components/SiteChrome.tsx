type ActivePage = "home" | "ueber-uns" | "spiele" | "community" | "team";

const links = [
  { id: "home", label: "Start", href: "/" },
  { id: "ueber-uns", label: "Über uns", href: "/ueber-uns/" },
  { id: "spiele", label: "Spiele", href: "/spiele/" },
  { id: "community", label: "Community", href: "/community/" },
  { id: "team", label: "Team", href: "/team/" },
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
    <footer className="site-footer site-footer-expanded">
      <div className="footer-identity">
        <div className="brand footer-brand">
          <span className="brand-mark" aria-hidden="true"><i /><i /></span>
          <span><strong>NEXUS</strong><small>Gaming Community</small></span>
        </div>
        <p>Die Games wechseln. Die Verbindung bleibt.</p>
      </div>
      <nav className="footer-column" aria-label="Community-Bereiche">
        <strong>Entdecken</strong>
        <a href="/ueber-uns/">Über uns</a>
        <a href="/spiele/">Spiele</a>
        <a href="/community/">Community</a>
      </nav>
      <nav className="footer-column" aria-label="Spiele">
        <strong>Spiele</strong>
        <a href="/cs2/">Counter-Strike 2</a>
        <a href="/scum/">SCUM Server</a>
        <a href="/team/">Team</a>
      </nav>
      <div className="footer-status">
        <span><i /> Community im Aufbau</span>
        <small>© 2026 NEXUS Gaming</small>
      </div>
    </footer>
  );
}
