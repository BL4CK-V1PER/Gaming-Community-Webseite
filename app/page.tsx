import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "NEXUS Gaming Community",
  description: "Die gemeinsame Heimat für unsere CS2-Community und unseren SCUM-Server.",
};

export default function Home() {
  return (
    <div className="site-shell home-theme">
      <SiteHeader active="home" />
      <main>
        <section className="hero home-hero" aria-labelledby="home-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Eine Community. Zwei Welten.</p>
            <h1 id="home-title">Dein Squad.<br />Dein Server.<br /><em>Deine Community.</em></h1>
            <p className="hero-lead">
              NEXUS verbindet taktische CS2-Runden mit langen Nächten auf der
              SCUM-Insel – und vor allem die Menschen, die immer wieder
              gemeinsam ins Voice kommen.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="./spiele/">Unsere Spiele <span aria-hidden="true">↗</span></a>
              <a className="button button-ghost" href="./ueber-uns/">Das ist NEXUS <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div className="command-panel reveal reveal-delay" aria-label="Community-Übersicht">
            <div className="panel-topline"><span>NEXUS // COMMUNITY HUB</span><span className="live-label"><i /> Bereit</span></div>
            <div className="radar" aria-hidden="true">
              <div className="radar-grid" /><div className="radar-sweep" />
              <span className="radar-dot radar-dot-one" /><span className="radar-dot radar-dot-two" /><strong>N</strong>
            </div>
            <div className="community-stats">
              <div><strong>02</strong><span>Game-Bereiche</span></div>
              <div><strong>01</strong><span>Community</span></div>
              <div><strong>∞</strong><span>Gemeinsame Momente</span></div>
            </div>
          </div>
        </section>

        <div className="signal-ticker" aria-label="NEXUS Schwerpunkte">
          <div><span>Counter-Strike 2</span><i /> <span>SCUM</span><i /> <span>Fair Play</span><i /> <span>DE / EU</span><i /> <span>Community</span><i /></div>
        </div>

        <section className="content-section intro-section" aria-labelledby="intro-title">
          <div>
            <p className="eyebrow"><span /> Die Kurzfassung</p>
            <h2 id="intro-title">Kein anonymer Server.<br /><em>Ein gemeinsamer Ort.</em></h2>
          </div>
          <div className="prose-stack">
            <p>NEXUS entsteht für Menschen, die nicht jedes Match mit Fremden beginnen wollen. Bei uns findest du bekannte Stimmen, klare Regeln und zwei Bereiche mit ganz eigenem Charakter.</p>
            <p>Wir wollen nicht die größte Community sein. Wir wollen eine sein, in der man gern wiederkommt – egal ob für eine Premier-Runde, einen Base-Run oder einfach einen Abend im Voice.</p>
          </div>
          <dl className="fact-grid">
            <div><dt>Fokus</dt><dd>Gemeinschaft</dd></div>
            <div><dt>Spiele</dt><dd>CS2 + SCUM</dd></div>
            <div><dt>Region</dt><dd>DE / EU</dd></div>
            <div><dt>Grundsatz</dt><dd>Fair Play</dd></div>
          </dl>
        </section>

        <section className="content-section journey-section" aria-labelledby="journey-title">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Unser Weg</p><h2 id="journey-title">Von der Idee<br />zum Treffpunkt.</h2></div>
            <p>Die Community wächst Schritt für Schritt – offen, nachvollziehbar und zusammen mit ihren Mitgliedern.</p>
          </div>
          <ol className="journey-line">
            <li><span>01</span><strong>Die Idee</strong><p>CS2 und SCUM bekommen eine gemeinsame Heimat.</p></li>
            <li><span>02</span><strong>Der Aufbau</strong><p>Website, Discord und Serverbereiche werden verbunden.</p></li>
            <li><span>03</span><strong>Die Community</strong><p>Events, Teams und gemeinsame Geschichten folgen.</p></li>
          </ol>
          <a className="text-link" href="./ueber-uns/">Mehr über NEXUS erfahren <span>→</span></a>
        </section>

        <section className="quote-console" aria-labelledby="philosophy-title">
          <p className="console-label">NXS://COMMUNITY_PHILOSOPHY</p>
          <blockquote id="philosophy-title">„Ein guter Server bringt dich ins Spiel. Eine gute Community sorgt dafür, dass du bleibst.“</blockquote>
          <span>NEXUS // GEMEINSAM STATT BELIEBIG</span>
        </section>

        <section className="featured-game" aria-labelledby="featured-title">
          <div className="featured-visual" aria-hidden="true">
            <div className="terrain-orbit"><i /><i /><i /><i /><strong>SCUM</strong></div>
          </div>
          <div className="featured-copy">
            <p className="eyebrow"><span /> Vorgestellter Bereich</p>
            <h2 id="featured-title">Eine Insel.<br /><em>Viele Geschichten.</em></h2>
            <p>Unser SCUM-Bereich verbindet Survival, Basebuilding und eine Community, in der das Drama im Spiel bleibt. Serverdaten und Regeln werden an einem Ort gebündelt.</p>
            <a className="button button-primary" href="./scum/">SCUM entdecken <span>↗</span></a>
          </div>
        </section>

        <section className="games-section" aria-labelledby="games-title">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Was wir spielen</p><h2 id="games-title">Zwei Spiele.<br />Ein Zuhause.</h2></div>
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
              <div className="card-content"><p>SURVIVAL // OPEN WORLD</p><h3>SCUM SERVER</h3><span className="card-tagline">Überleben beginnt mit den richtigen Leuten.</span></div>
              <div className="card-link">Bereich öffnen <span>↗</span></div>
            </a>
          </div>
        </section>

        <section className="manifesto" id="discord" aria-labelledby="manifesto-title">
          <div className="manifesto-index">N//</div>
          <div><p className="eyebrow"><span /> Wo alles zusammenkommt</p><h2 id="manifesto-title">Komm ins<br />Voice.</h2></div>
          <div className="manifesto-copy"><p>Matches, Serverabende, Support und die Leute hinter NEXUS findest du künftig auf unserem Discord.</p><span className="button button-muted">Discord-Link folgt</span></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
