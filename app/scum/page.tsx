import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Das Experiment #993 | SCUM Server",
  description: "PVE-Survival mit PvP-Zonen, leichtem RP und einer fairen Community.",
};

export default function ScumPage() {
  return (
    <div className="site-shell scum-theme">
      <SiteHeader active="spiele" />
      <main>
        <section className="sub-hero scum-hero" aria-labelledby="scum-title">
          <div className="sub-hero-copy reveal">
            <a className="back-link" href="/">← Zur Community</a>
            <p className="eyebrow"><span /> SCUM Server // Das Experiment #993</p>
            <h1 id="scum-title">Das Experiment<br /><em>#993.</em></h1>
            <p>
              PVE-Survival bildet das Fundament. Abgesteckte PvP-Zonen sorgen
              für Nervenkitzel und leichtes RP gibt der Insel ihren Charakter.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#server">Server ansehen <span aria-hidden="true">↓</span></a>
              <a className="button button-ghost" href="#rules">Unsere Grundsätze</a>
            </div>
          </div>

          <div className="map-board reveal reveal-delay" aria-label="Stilisierte SCUM-Karte">
            <div className="map-coordinates"><span>SECTOR PR</span><span>51° N // 10° E</span></div>
            <div className="map-contours" aria-hidden="true"><i /><i /><i /><i /><i /><b>BASE</b><b>DROP</b></div>
            <div className="map-status"><span><i /> PVE-WELT</span><strong>PVP-ZONEN // LEICHTES RP</strong></div>
          </div>
        </section>

        <section className="server-section" id="server" aria-labelledby="server-title">
          <div className="server-copy">
            <p className="eyebrow"><span /> Serverdaten</p>
            <h2 id="server-title">Bereit für das Experiment.</h2>
            <p>Das Experiment #993 verbindet gemeinsames Überleben mit freiwilligem Risiko und einer Prise Rollenspiel.</p>
          </div>
          <div className="server-terminal">
            <div><span>SERVERNAME</span><strong>DAS EXPERIMENT #993</strong></div>
            <div><span>SPIELSTIL</span><strong>PVE SURVIVAL</strong></div>
            <div><span>PVP</span><strong>ABGEGRENZTE PVP-ZONEN</strong></div>
            <div><span>ROLLENSPIEL</span><strong>LEICHTES RP</strong></div>
            <div><span>REGION</span><strong>DE / EU</strong></div>
          </div>
        </section>

        <section className="feature-section" id="rules" aria-labelledby="rules-title">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Unser Spielstil</p><h2 id="rules-title">PVE als Basis.<br />Risiko nach Wahl.</h2></div>
            <p>Gemeinsam überleben, PvP bewusst betreten und Geschichten ohne Rollenspielzwang entstehen lassen.</p>
          </div>
          <div className="feature-grid">
            <article><span className="feature-index">01</span><h3>PVE Survival</h3><p>Erkunde die Insel, baue deine Basis und stelle dich gemeinsam mit anderen den Gefahren der Welt.</p></article>
            <article><span className="feature-index">02</span><h3>PvP-Zonen</h3><p>Wer das Risiko sucht, findet klar abgegrenzte Gebiete für faire und spannende Kämpfe.</p></article>
            <article><span className="feature-index">03</span><h3>Leichtes RP</h3><p>Charaktere, Handel und kleine Geschichten bereichern den Alltag – locker und ohne Rollenspielzwang.</p></article>
          </div>
        </section>

        <section className="join-banner" id="join">
          <div><p className="eyebrow"><span /> Die Insel wartet</p><h2>Dein nächstes Kapitel beginnt hier.</h2></div>
          <div><p>Komm auf den Discord von Das Experiment #993 und beginne deine Geschichte auf der Insel.</p><a className="button button-primary" href="https://discord.gg/Z8qknyt5WW" target="_blank" rel="noreferrer">SCUM Discord beitreten <span>↗</span></a></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
