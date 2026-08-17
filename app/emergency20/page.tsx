import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Emergency 20 | Lüdenscheid Modifikation",
  description: "Der Pixel-Rentner-Bereich für die Emergency-20-Lüdenscheid-Modifikation.",
  openGraph: {
    title: "Emergency 20 | Lüdenscheid Modifikation",
    description: "Projektinformationen zur Emergency-20-Lüdenscheid-Modifikation bei Pixel-Rentner.",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Emergency 20 | Lüdenscheid Modifikation",
    description: "Projektinformationen zur Emergency-20-Lüdenscheid-Modifikation bei Pixel-Rentner.",
    images: [],
  },
};

export default function Emergency20Page() {
  return (
    <div className="site-shell emergency-theme">
      <SiteHeader active="spiele" />
      <main>
        <section className="sub-hero emergency-hero" aria-labelledby="emergency-title">
          <div className="sub-hero-copy reveal">
            <a className="back-link" href="/spiele/">← Zu den Spielen</a>
            <p className="eyebrow"><span /> Emergency 20 // Lüdenscheid</p>
            <h1 id="emergency-title">Einsatzbereit.<br /><em>Für Lüdenscheid.</em></h1>
            <p>
              Die Emergency-20-Lüdenscheid-Modifikation hat jetzt ihren eigenen
              Bereich bei Pixel-Rentner. Hier bündeln wir künftig Neuigkeiten,
              Projektinformationen sowie Hinweise zu Version und Installation.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#project">Projekt ansehen <span aria-hidden="true">↓</span></a>
              <a className="button button-ghost" href="https://discord.gg/BGXaUVrVUJ" target="_blank" rel="noreferrer">Community-Discord <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="dispatch-board reveal reveal-delay" aria-label="Projektübersicht">
            <div className="dispatch-header"><span>PR // LEITSTELLE</span><strong>STATUS 20</strong></div>
            <div className="dispatch-pulse" aria-hidden="true"><i /><i /><i /><i /><strong>20</strong></div>
            <div className="dispatch-data">
              <div><span>PROJEKT</span><strong>LÜDENSCHEID MOD</strong></div>
              <div><span>PLATTFORM</span><strong>EMERGENCY 20</strong></div>
              <div><span>BEREICH</span><strong>PIXEL-RENTNER</strong></div>
            </div>
          </div>
        </section>

        <section className="feature-section" id="project" aria-labelledby="project-title">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Der neue Spielbereich</p><h2 id="project-title">Eine Modifikation.<br />Ein eigener Platz.</h2></div>
            <p>Der Bereich ist vorbereitet und kann mit allen weiteren Angaben zur Modifikation Schritt für Schritt ergänzt werden.</p>
          </div>
          <div className="feature-grid">
            <article><span className="feature-index">01</span><h3>Lüdenscheid</h3><p>Ein eigener Bereich für die Emergency-20-Modifikation mit Bezug zu Lüdenscheid.</p></article>
            <article><span className="feature-index">02</span><h3>Projektinfos</h3><p>Neuigkeiten, Versionshinweise und Informationen zur Installation finden hier ihren festen Platz.</p></article>
            <article><span className="feature-index">03</span><h3>Community</h3><p>Fragen, Rückmeldungen und gemeinsame Spielabende können über Pixel-Rentner zusammenkommen.</p></article>
          </div>
        </section>

        <section className="server-section emergency-project-section" aria-labelledby="details-title">
          <div className="server-copy">
            <p className="eyebrow"><span /> Projektstand</p>
            <h2 id="details-title">Bereit für weitere Details.</h2>
            <p>Sobald Informationen zu Version, Download, Installation oder Projektteam feststehen, können sie hier direkt eingetragen werden.</p>
          </div>
          <div className="server-terminal">
            <div><span>SPIEL</span><strong>EMERGENCY 20</strong></div>
            <div><span>MODIFIKATION</span><strong>LÜDENSCHEID</strong></div>
            <div><span>VERSION</span><strong>WIRD ERGÄNZT</strong></div>
            <div><span>DOWNLOAD</span><strong>WIRD ERGÄNZT</strong></div>
          </div>
        </section>

        <section className="join-banner">
          <div><p className="eyebrow"><span /> Fragen zum Projekt?</p><h2>Komm zu Pixel-Rentner.</h2></div>
          <div><p>Im Community-Discord findest du die Leute hinter den Spielbereichen und kannst dich austauschen.</p><a className="button button-primary" href="https://discord.gg/BGXaUVrVUJ" target="_blank" rel="noreferrer">Discord öffnen <span>↗</span></a></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
