import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Unsere Spiele", description: "Counter-Strike 2, SCUM und Emergency 20 bei Pixel-Rentner." };

export default function GamesPage() {
  return (
    <div className="site-shell home-theme">
      <SiteHeader active="spiele" />
      <main>
        <section className="inner-hero compact-hero" aria-labelledby="games-page-title">
          <div><p className="eyebrow"><span /> Unsere Spiele</p><h1 id="games-page-title">Wähle deinen<br /><em>Einsatz.</em></h1></div>
          <p>Drei unterschiedliche Bereiche, verbunden durch dieselbe Community. Finde das Spiel oder Projekt, das zu deinem Abend passt.</p>
        </section>
        <section className="games-section games-page-grid" aria-label="Spielbereiche">
          <div className="game-grid">
            <a className="game-card game-card-large cs2-card" href="/cs2/">
              <div className="card-number">01 // TACTICAL</div><div className="card-signal" aria-hidden="true"><span /><span /><span /><span /></div>
              <div className="card-content"><p>COUNTER-STRIKE 2</p><h3>Runde für Runde.<br />Seite an Seite.</h3><span className="card-tagline">Mitspieler, Community-Abende und faire Matches.</span></div><div className="card-link">CS2-Bereich öffnen <span>↗</span></div>
            </a>
            <a className="game-card game-card-large scum-card" href="/scum/">
              <div className="card-number">02 // SURVIVAL</div><div className="terrain-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div>
              <div className="card-content"><p>SCUM // DAS EXPERIMENT #993</p><h3>Gemeinsam überleben.<br />Risiko selbst wählen.</h3><span className="card-tagline">PVE-Survival, PvP-Zonen und leichtes RP.</span></div><div className="card-link">SCUM-Bereich öffnen <span>↗</span></div>
            </a>
            <a className="game-card game-card-large emergency-card" href="/emergency20/">
              <div className="card-number">03 // SIMULATION</div><div className="emergency-signal" aria-hidden="true"><span /><span /><span /></div>
              <div className="card-content"><p>EMERGENCY 20</p><h3>Lüdenscheid.<br />Im Einsatz.</h3><span className="card-tagline">Die Lüdenscheid-Modifikation bekommt ihren eigenen Projektbereich.</span></div><div className="card-link">Emergency-Bereich öffnen <span>↗</span></div>
            </a>
          </div>
        </section>
        <section className="content-section mode-comparison" aria-labelledby="comparison-title">
          <div><p className="eyebrow"><span /> Was passt heute?</p><h2 id="comparison-title">Fünf Runden<br />oder fünf Stunden?</h2></div>
          <div className="comparison-list"><div><span>CS2</span><strong>Taktik · Tempo · Teamplay</strong><p>Für konzentrierte Matches, schnelle Absprachen und den nächsten gemeinsamen Win.</p></div><div><span>SCUM</span><strong>PVE · PvP-Zonen · leichtes RP</strong><p>Für lange Sessions, gemeinsame Basen und Pläne, die selten genau so enden wie gedacht.</p></div><div><span>EM20</span><strong>Simulation · Modifikation · Lüdenscheid</strong><p>Für koordinierte Einsätze und alle Informationen rund um die Lüdenscheid-Modifikation.</p></div></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
