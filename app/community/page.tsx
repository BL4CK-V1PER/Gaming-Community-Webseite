import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Community", description: "Werte, Regeln und Einstieg in die NEXUS Gaming Community." };

const rules = [
  ["Respekt", "Behandle andere so, dass der nächste gemeinsame Abend weiterhin Spaß macht."],
  ["Fair Play", "Cheats, Exploits und absichtliches Stören haben bei NEXUS keinen Platz."],
  ["Kommunikation", "Kritik ist willkommen, wenn sie direkt, sachlich und lösungsorientiert bleibt."],
  ["Teamgeist", "Hilf neuen Mitgliedern beim Einstieg und teile Informationen statt Frust."],
  ["Kein Drama", "Konflikte werden ruhig mit den Beteiligten oder dem Team geklärt."],
  ["Gemeinschaft", "Wir spielen miteinander – nicht nur zufällig auf demselben Server."],
];

export default function CommunityPage() {
  return (
    <div className="site-shell home-theme">
      <SiteHeader active="community" />
      <main>
        <section className="inner-hero" aria-labelledby="community-title">
          <div><p className="eyebrow"><span /> NEXUS Community</p><h1 id="community-title">Ein Ort zum Zocken.<br /><em>Kein Ort fürs Drama.</em></h1></div>
          <p>Unser Ziel ist einfach: bekannte Stimmen, faire Regeln und ein Umgang, bei dem man nach einer Niederlage trotzdem gern in der Lobby bleibt.</p>
        </section>

        <section className="content-section" aria-labelledby="rules-title">
          <div className="section-heading"><div><p className="eyebrow"><span /> Community-Regeln</p><h2 id="rules-title">Klar. Fair.<br />Für alle gleich.</h2></div><p>Die ausführliche Fassung folgt mit dem Discord-Start. Diese Grundsätze gelten überall.</p></div>
          <ol className="rules-grid">{rules.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol>
        </section>

        <section className="content-section faq-section" aria-labelledby="faq-title">
          <div><p className="eyebrow"><span /> Häufig gefragt</p><h2 id="faq-title">Kurz erklärt.</h2></div>
          <div className="faq-list">
            <details><summary>Welche Spiele werden unterstützt?<span>+</span></summary><p>Zum Start konzentriert sich NEXUS auf Counter-Strike 2 und einen eigenen SCUM-Bereich.</p></details>
            <details><summary>Muss ich besonders gut sein?<span>+</span></summary><p>Nein. Verlässlichkeit, Kommunikation und ein fairer Umgang sind wichtiger als Rang oder Spielzeit.</p></details>
            <details><summary>Wie kann ich beitreten?<span>+</span></summary><p>Der Discord-Einladungslink wird ergänzt, sobald die Community-Struktur fertig eingerichtet ist.</p></details>
            <details><summary>Wo finde ich Hilfe?<span>+</span></summary><p>Die Ansprechpartner stehen im Team-Bereich. Später kommen feste Supportkanäle im Discord hinzu.</p></details>
          </div>
        </section>

        <section className="join-banner" id="discord"><div><p className="eyebrow"><span /> Bereit mitzumachen?</p><h2>Dein Platz ist nicht hinter einem Bewerbungsformular.</h2></div><div><p>Discord öffnen, vorstellen und gemeinsam loslegen – der Einladungslink folgt.</p><span className="button button-muted">Discord-Link folgt</span></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
