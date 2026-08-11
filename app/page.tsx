import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "NEXUS Gaming Community",
  description:
    "Die gemeinsame Heimat für unsere CS2-Community und unseren SCUM-Server.",
};

export default function Home() {
  return (
    <div className="site-shell home-theme">
      <SiteHeader active="home" />

      <main>
        <section className="hero home-hero" aria-labelledby="home-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Eine Community. Zwei Welten.</p>
            <h1 id="home-title">
              Dein Squad.<br />
              Dein Server.<br />
              <em>Deine Community.</em>
            </h1>
            <p className="hero-lead">
              Willkommen bei NEXUS – dem Treffpunkt für taktische Runden,
              harte Survival-Nächte und die Leute, die aus einem Game eine
              Gemeinschaft machen.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="./cs2/">
                CS2 entdecken <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-ghost" href="./scum/">
                Zum SCUM-Server <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="command-panel reveal reveal-delay" aria-label="Community-Übersicht">
            <div className="panel-topline">
              <span>NEXUS // COMMUNITY HUB</span>
              <span className="live-label"><i /> Bereit</span>
            </div>
            <div className="radar" aria-hidden="true">
              <div className="radar-grid" />
              <div className="radar-sweep" />
              <span className="radar-dot radar-dot-one" />
              <span className="radar-dot radar-dot-two" />
              <strong>N</strong>
            </div>
            <div className="community-stats">
              <div><strong>02</strong><span>Game-Bereiche</span></div>
              <div><strong>01</strong><span>Community</span></div>
              <div><strong>∞</strong><span>Gemeinsame Momente</span></div>
            </div>
          </div>
        </section>

        <section className="games-section" aria-labelledby="games-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> Wähle deinen Einsatz</p>
              <h2 id="games-title">Zwei Spiele. Ein Zuhause.</h2>
            </div>
            <p>
              Jeder Bereich hat seinen eigenen Charakter – und ist nur einen
              Klick entfernt.
            </p>
          </div>

          <div className="game-grid">
            <a className="game-card cs2-card" href="./cs2/">
              <div className="card-number">01</div>
              <div className="card-signal" aria-hidden="true"><span /><span /><span /><span /></div>
              <div className="card-content">
                <p>TACTICAL // COMPETITIVE</p>
                <h3>COUNTER-STRIKE 2</h3>
                <span className="card-tagline">Gemeinsam queue’n. Gemeinsam gewinnen.</span>
              </div>
              <div className="card-link">Bereich öffnen <span aria-hidden="true">↗</span></div>
            </a>

            <a className="game-card scum-card" href="./scum/">
              <div className="card-number">02</div>
              <div className="terrain-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div>
              <div className="card-content">
                <p>SURVIVAL // OPEN WORLD</p>
                <h3>SCUM SERVER</h3>
                <span className="card-tagline">Überleben beginnt mit den richtigen Leuten.</span>
              </div>
              <div className="card-link">Bereich öffnen <span aria-hidden="true">↗</span></div>
            </a>
          </div>
        </section>

        <section className="manifesto" id="discord" aria-labelledby="manifesto-title">
          <div className="manifesto-index">N//</div>
          <div>
            <p className="eyebrow"><span /> Mehr als nur ein Server</p>
            <h2 id="manifesto-title">Gute Games.<br />Bessere Leute.</h2>
          </div>
          <div className="manifesto-copy">
            <p>
              Kein anonymer Server-Browser, kein unnötiges Drama. Wir bauen
              einen Ort für faire Matches, gemeinsame Projekte und entspannte
              Abende im Voice.
            </p>
            <span className="button button-muted">Discord-Link folgt</span>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
