import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "SCUM Survival Server",
  description: "Unser SCUM-Server für Survival, Basebuilding und eine faire Community.",
};

export default function ScumPage() {
  return (
    <div className="site-shell scum-theme">
      <SiteHeader active="spiele" />
      <main>
        <section className="sub-hero scum-hero" aria-labelledby="scum-title">
          <div className="sub-hero-copy reveal">
            <a className="back-link" href="/">← Zur Community</a>
            <p className="eyebrow"><span /> SCUM Survival Server</p>
            <h1 id="scum-title">Überleben ist besser.<br /><em>Gemeinsam.</em></h1>
            <p>
              Baue deine Basis, plane deine nächsten Schritte und überlebe in
              einer Welt, in der eine starke Community den Unterschied macht.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#server">Server ansehen <span aria-hidden="true">↓</span></a>
              <a className="button button-ghost" href="#rules">Unsere Grundsätze</a>
            </div>
          </div>

          <div className="map-board reveal reveal-delay" aria-label="Stilisierte SCUM-Karte">
            <div className="map-coordinates"><span>SECTOR NXS</span><span>51° N // 10° E</span></div>
            <div className="map-contours" aria-hidden="true"><i /><i /><i /><i /><i /><b>BASE</b><b>DROP</b></div>
            <div className="map-status"><span><i /> COMMUNITY-ZONE</span><strong>SICHER. FAIR. AKTIV.</strong></div>
          </div>
        </section>

        <section className="server-section" id="server" aria-labelledby="server-title">
          <div className="server-copy">
            <p className="eyebrow"><span /> Serverdaten</p>
            <h2 id="server-title">Bereit für deine Geschichte.</h2>
            <p>Die konkreten Serverdaten lassen sich hier eintragen, sobald Name, IP und Einstellungen feststehen.</p>
          </div>
          <div className="server-terminal">
            <div><span>SERVERNAME</span><strong>WIRD ERGÄNZT</strong></div>
            <div><span>SERVER-IP</span><strong>WIRD ERGÄNZT</strong></div>
            <div><span>SPIELSTIL</span><strong>COMMUNITY SURVIVAL</strong></div>
            <div><span>REGION</span><strong>DE / EU</strong></div>
          </div>
        </section>

        <section className="feature-section" id="rules" aria-labelledby="rules-title">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Unsere Grundsätze</p><h2 id="rules-title">Hartes Spiel. Faire Regeln.</h2></div>
            <p>Survival darf fordernd sein – die Community bleibt respektvoll.</p>
          </div>
          <div className="feature-grid">
            <article><span className="feature-index">01</span><h3>Fairness zuerst</h3><p>Kein Cheating, kein Exploiting und keine Aktionen, die anderen bewusst den Spielspaß nehmen.</p></article>
            <article><span className="feature-index">02</span><h3>Gemeinsam aufbauen</h3><p>Verbünde dich, handle mit anderen Spielern und erschaffe deine eigene Geschichte auf dem Server.</p></article>
            <article><span className="feature-index">03</span><h3>Aktives Team</h3><p>Regeln, Supportwege und Ansprechpartner werden transparent an einem Ort zusammengeführt.</p></article>
          </div>
        </section>

        <section className="join-banner" id="join">
          <div><p className="eyebrow"><span /> Die Insel wartet</p><h2>Dein nächstes Kapitel beginnt hier.</h2></div>
          <div><p>Discord- und Server-Link werden ergänzt, sobald sie feststehen.</p><span className="button button-muted">Verbindung folgt</span></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
