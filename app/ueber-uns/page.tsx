import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Über uns", description: "Wofür Pixel-Rentner steht und wie unsere Gaming-Community wächst." };

export default function AboutPage() {
  return (
    <div className="site-shell home-theme">
      <SiteHeader active="ueber-uns" />
      <main>
        <section className="inner-hero" aria-labelledby="about-title">
          <div><p className="eyebrow"><span /> Über Pixel-Rentner</p><h1 id="about-title">Was uns verbindet?<br /><em>Die Leute dahinter.</em></h1></div>
          <p>Pixel-Rentner ist keine Frage des Geburtsjahres, sondern der Haltung: entspannt spielen, ehrlich lachen und als Gemeinschaft wachsen.</p>
        </section>

        <section className="content-section split-story" aria-labelledby="story-title">
          <div><p className="eyebrow"><span /> Unsere Geschichte</p><h2 id="story-title">Zwei Spiele.<br />Eine gemeinsame Idee.</h2></div>
          <div className="prose-stack"><p>Aus getrennten Runden und Serverprojekten soll ein fester Treffpunkt werden. Counter-Strike 2 liefert den Wettkampf, SCUM die langen Geschichten – Pixel-Rentner verbindet beides.</p><p>Die Website ist dabei unsere Zentrale: Hier stehen Bereiche, Regeln, Serverinformationen und Ansprechpartner übersichtlich an einem Ort.</p><p>Was daraus wird, entscheidet nicht ein Marketingplan, sondern die Menschen, die mitmachen.</p></div>
        </section>

        <section className="content-section" aria-labelledby="values-title">
          <div className="section-heading"><div><p className="eyebrow"><span /> Wofür wir stehen</p><h2 id="values-title">Einfach gute<br />gemeinsame Abende.</h2></div><p>Keine künstliche Größe, keine leeren Versprechen – dafür klare Werte.</p></div>
          <div className="feature-grid">
            <article><span className="feature-index">01</span><h3>Menschen zuerst</h3><p>Das Spiel bringt uns zusammen. Respekt und Verlässlichkeit sorgen dafür, dass wir bleiben.</p></article>
            <article><span className="feature-index">02</span><h3>Fair statt verbissen</h3><p>Wir wollen gewinnen und überleben – aber nie auf Kosten der Community.</p></article>
            <article><span className="feature-index">03</span><h3>Gemeinsam wachsen</h3><p>Bereiche, Events und Regeln entwickeln sich mit den Leuten, die sie nutzen.</p></article>
          </div>
        </section>

        <section className="timeline-console" aria-label="Pixel-Rentner Entwicklung">
          <div><span>START</span><strong>Die Idee</strong><p>Eine gemeinsame Heimat für CS2 und SCUM.</p></div>
          <div><span>JETZT</span><strong>Der Aufbau</strong><p>Portal, Community und Serverstrukturen entstehen.</p></div>
          <div><span>NÄCHSTES ZIEL</span><strong>Gemeinsame Erlebnisse</strong><p>Events, Teams und regelmäßige Community-Abende.</p></div>
        </section>

        <section className="join-banner"><div><p className="eyebrow"><span /> Deine Geschichte gehört dazu</p><h2>Mach Pixel-Rentner zu deinem Treffpunkt.</h2></div><div><p>Mehr über Regeln, Einstieg und Community findest du im Community-Bereich.</p><a className="button button-primary" href="/community/">Zur Community <span>→</span></a></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
