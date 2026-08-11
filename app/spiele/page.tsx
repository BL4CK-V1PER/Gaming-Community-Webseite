import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Unsere Spiele", description: "Counter-Strike 2 und SCUM bei NEXUS Gaming." };

export default function GamesPage() {
  return (
    <div className="site-shell home-theme">
      <SiteHeader active="spiele" />
      <main>
        <section className="inner-hero compact-hero" aria-labelledby="games-page-title">
          <div><p className="eyebrow"><span /> Unsere Spiele</p><h1 id="games-page-title">Wähle deinen<br /><em>Einsatz.</em></h1></div>
          <p>Zwei sehr unterschiedliche Spiele, verbunden durch dieselbe Community. Finde den Bereich, der zu deinem Abend passt.</p>
        </section>
        <section className="games-section games-page-grid" aria-label="Spielbereiche">
          <div className="game-grid">
            <a className="game-card game-card-large cs2-card" href="/cs2/">
              <div className="card-number">01 // TACTICAL</div><div className="card-signal" aria-hidden="true"><span /><span /><span /><span /></div>
              <div className="card-content"><p>COUNTER-STRIKE 2</p><h3>Runde für Runde.<br />Seite an Seite.</h3><span className="card-tagline">Mitspieler, Community-Abende und faire Matches.</span></div><div className="card-link">CS2-Bereich öffnen <span>↗</span></div>
            </a>
            <a className="game-card game-card-large scum-card" href="/scum/">
              <div className="card-number">02 // SURVIVAL</div><div className="terrain-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div>
              <div className="card-content"><p>SCUM SERVER</p><h3>Überleben ist besser.<br />Gemeinsam.</h3><span className="card-tagline">Survival, Basebuilding und eine faire Insel-Community.</span></div><div className="card-link">SCUM-Bereich öffnen <span>↗</span></div>
            </a>
          </div>
        </section>
        <section className="content-section mode-comparison" aria-labelledby="comparison-title">
          <div><p className="eyebrow"><span /> Was passt heute?</p><h2 id="comparison-title">Fünf Runden<br />oder fünf Stunden?</h2></div>
          <div className="comparison-list"><div><span>CS2</span><strong>Taktik · Tempo · Teamplay</strong><p>Für konzentrierte Matches, schnelle Absprachen und den nächsten gemeinsamen Win.</p></div><div><span>SCUM</span><strong>Survival · Aufbau · Geschichten</strong><p>Für lange Sessions, gemeinsame Basen und Pläne, die selten genau so enden wie gedacht.</p></div></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
