import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "Pixel-Rentner Gaming Community",
  description: "Die entspannte Gaming-Heimat für CS2, SCUM und die Emergency-20-Lüdenscheid-Modifikation.",
};

export default function Home() {
  return (
    <div className="site-shell home-theme">
      <SiteHeader active="home" />
      <main>
        <section className="hero home-hero" aria-labelledby="home-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Erfahrung trifft Spielfreude</p>
            <h1 id="home-title">Zocken kennt<br /><em>kein Alter.</em></h1>
            <p className="hero-lead">
              Pixel-Rentner verbindet taktische CS2-Runden, lange Nächte auf
              der SCUM-Insel und die Emergency-20-Lüdenscheid-Modifikation –
              für alle, die gute Gesellschaft mehr schätzen als unnötiges Drama.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="./spiele/">Unsere Spiele <span aria-hidden="true">↗</span></a>
              <a className="button button-ghost" href="./ueber-uns/">Das sind wir <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div className="brand-showcase reveal reveal-delay" aria-label="Pixel-Rentner Logo">
            <img src="/pixel-rentner-logo.png" alt="Pixel-Rentner – Gamer mit Controller und Headset" />
            <div className="veteran-badge"><span>SEIT</span><strong>LEVEL 50+</strong><small>immer noch nicht durchgespielt</small></div>
          </div>
        </section>

        <div className="signal-ticker" aria-label="Pixel-Rentner Schwerpunkte">
          <div><span>Counter-Strike 2</span><i /> <span>SCUM</span><i /> <span>Emergency 20</span><i /> <span>Kein Drama</span><i /> <span>Gute Gesellschaft</span><i /></div>
        </div>

        <section className="content-section intro-section" aria-labelledby="intro-title">
          <div>
            <p className="eyebrow"><span /> Die Kurzfassung</p>
            <h2 id="intro-title">Kein anonymer Server.<br /><em>Ein gemeinsamer Ort.</em></h2>
          </div>
          <div className="prose-stack">
            <p>Pixel-Rentner ist für Menschen, die nicht jedes Match mit Fremden beginnen wollen. Bei uns findest du bekannte Stimmen, klare Regeln und drei Bereiche mit ganz eigenem Charakter.</p>
            <p>Wir müssen nicht die Schnellsten sein. Wir wollen eine Community sein, in der man gern wiederkommt – für eine Premier-Runde, einen Base-Run oder einfach einen Abend im Voice.</p>
          </div>
          <dl className="fact-grid">
            <div><dt>Fokus</dt><dd>Gemeinschaft</dd></div>
            <div><dt>Bereiche</dt><dd>03</dd></div>
            <div><dt>Region</dt><dd>DE / EU</dd></div>
            <div><dt>Grundsatz</dt><dd>Locker bleiben</dd></div>
          </dl>
        </section>

        <section className="content-section journey-section" aria-labelledby="journey-title">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Unser Weg</p><h2 id="journey-title">Von der Idee<br />zum Treffpunkt.</h2></div>
            <p>Die Community wächst Schritt für Schritt – offen, nachvollziehbar und zusammen mit ihren Mitgliedern.</p>
          </div>
          <ol className="journey-line">
            <li><span>01</span><strong>Die Idee</strong><p>Unsere Spiele und Projekte bekommen eine gemeinsame Heimat.</p></li>
            <li><span>02</span><strong>Der Aufbau</strong><p>Website, Discord und Serverbereiche werden verbunden.</p></li>
            <li><span>03</span><strong>Die Community</strong><p>Events, Teams und gemeinsame Geschichten folgen.</p></li>
          </ol>
          <a className="text-link" href="./ueber-uns/">Mehr über Pixel-Rentner <span>→</span></a>
        </section>

        <section className="quote-console" aria-labelledby="philosophy-title">
          <p className="console-label">PR://SPIELERFAHRUNG</p>
          <blockquote id="philosophy-title">„Vielleicht nicht mehr die schnellste Reaktion. Aber garantiert die besseren Geschichten.“</blockquote>
          <span>PIXEL-RENTNER // ALT GENUG FÜR FAIR PLAY</span>
        </section>

        <section className="featured-game" aria-labelledby="featured-title">
          <div className="featured-visual" aria-hidden="true">
            <div className="terrain-orbit"><i /><i /><i /><i /><strong>SCUM</strong></div>
          </div>
          <div className="featured-copy">
            <p className="eyebrow"><span /> Vorgestellter Bereich</p>
            <h2 id="featured-title">Das Experiment<br /><em>#993.</em></h2>
            <p>Unser SCUM-Server verbindet PVE-Survival mit klaren PvP-Zonen und leichtem RP. Gemeinsam aufbauen, freiwillig riskieren und eigene Geschichten erleben.</p>
            <a className="button button-primary" href="./scum/">SCUM entdecken <span>↗</span></a>
          </div>
        </section>

        <section className="games-section" aria-labelledby="games-title">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Was wir spielen</p><h2 id="games-title">Drei Bereiche.<br />Ein Zuhause.</h2></div>
            <p>Jeder Bereich hat seinen eigenen Charakter – und ist nur einen Klick entfernt.</p>
          </div>
          <div className="game-grid">
            <a className="game-card cs2-card" href="./cs2/">
              <div className="card-number">01</div><div className="card-signal" aria-hidden="true"><span /><span /><span /><span /></div>
              <div className="card-content"><p>TACTICAL // COMPETITIVE</p><h3>COUNTER-STRIKE 2</h3><span className="card-tagline">Gemeinsam queue’n. Gemeinsam gewinnen.</span></div>
              <div className="card-link">Bereich öffnen <span>↗</span></div>
            </a>
            <a className="game-card scum-card" href="./scum/">
              <div className="card-number">02</div><div className="terrain-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div>
              <div className="card-content"><p>PVE // PVP-ZONEN // LEICHTES RP</p><h3>DAS EXPERIMENT #993</h3><span className="card-tagline">Gemeinsam überleben. Risiko selbst wählen.</span></div>
              <div className="card-link">Bereich öffnen <span>↗</span></div>
            </a>
            <a className="game-card emergency-card" href="./emergency20/">
              <div className="card-number">03</div><div className="emergency-signal" aria-hidden="true"><span /><span /><span /></div>
              <div className="card-content"><p>SIMULATION // MODIFIKATION</p><h3>EMERGENCY 20<br />LÜDENSCHEID</h3><span className="card-tagline">Einsätze koordinieren. Lüdenscheid erleben.</span></div>
              <div className="card-link">Bereich öffnen <span>↗</span></div>
            </a>
          </div>
        </section>

        <section className="manifesto" id="discord" aria-labelledby="manifesto-title">
          <div className="manifesto-index">PR//</div>
          <div><p className="eyebrow"><span /> Wo alles zusammenkommt</p><h2 id="manifesto-title">Komm ins<br />Voice.</h2></div>
          <div className="manifesto-copy"><p>Matches, Serverabende, Support und die Leute hinter Pixel-Rentner findest du auf unserem Discord.</p><a className="button button-primary" href="https://discord.gg/BGXaUVrVUJ" target="_blank" rel="noreferrer">Pixel-Rentner Discord <span>↗</span></a></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
