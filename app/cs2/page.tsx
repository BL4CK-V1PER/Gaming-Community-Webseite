import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Counter-Strike 2 Community",
  description: "Mitspieler, Community-Abende und faire Matches für Counter-Strike 2.",
};

export default function Cs2Page() {
  return (
    <div className="site-shell cs2-theme">
      <SiteHeader active="spiele" />
      <main>
        <section className="sub-hero cs2-hero" aria-labelledby="cs2-title">
          <div className="sub-hero-copy reveal">
            <a className="back-link" href="/">← Zur Community</a>
            <p className="eyebrow"><span /> Counter-Strike 2</p>
            <h1 id="cs2-title">Runde für Runde.<br /><em>Seite an Seite.</em></h1>
            <p>
              Finde Mitspieler, stell dein Team zusammen und verbringe deine
              Abende mit Leuten, bei denen Kommunikation genauso zählt wie Aim.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#join">Community beitreten <span aria-hidden="true">↗</span></a>
              <a className="button button-ghost" href="#features">Was dich erwartet</a>
            </div>
          </div>

          <div className="match-board reveal reveal-delay" aria-label="CS2 Community-Eigenschaften">
            <div className="match-header"><span>NXS // LOBBY</span><span>CS2</span></div>
            <div className="team-row"><span>01</span><strong>TEAMPLAY</strong><i>READY</i></div>
            <div className="team-row"><span>02</span><strong>FAIR PLAY</strong><i>READY</i></div>
            <div className="team-row"><span>03</span><strong>COMMUNITY</strong><i>READY</i></div>
            <div className="match-footer"><span>REGION</span><strong>DE / EU</strong><span>STATUS</span><strong>OFFEN</strong></div>
          </div>
        </section>

        <section className="feature-section" id="features" aria-labelledby="cs2-features-title">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Dein nächstes Match</p><h2 id="cs2-features-title">Hier zählt das Team.</h2></div>
            <p>Vom entspannten Abend bis zur konzentrierten Premier-Runde.</p>
          </div>
          <div className="feature-grid">
            <article><span className="feature-index">01</span><h3>Mitspieler finden</h3><p>Keine Solo-Queue ins Ungewisse. Finde Leute, die zu deinem Spielstil und Niveau passen.</p></article>
            <article><span className="feature-index">02</span><h3>Community-Abende</h3><p>Gemeinsame Matches, interne Runden und Events, bei denen der Spaß im Mittelpunkt steht.</p></article>
            <article><span className="feature-index">03</span><h3>Fair & respektvoll</h3><p>Klare Regeln und ein Umgangston, bei dem neue wie erfahrene Spieler willkommen sind.</p></article>
          </div>
        </section>

        <section className="join-banner" id="join">
          <div><p className="eyebrow"><span /> Bereit für die nächste Runde?</p><h2>Dein Platz im Team ist frei.</h2></div>
          <div><p>Der endgültige Discord-Einladungslink wird hier eingetragen.</p><span className="button button-muted">Discord-Link folgt</span></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
