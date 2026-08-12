import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Team", description: "Die Ansprechpartner hinter Pixel-Rentner." };

const roles = [
  ["Community-Leitung", "Pixel-Rentner koordinieren, Entscheidungen transparent machen und den Überblick behalten."],
  ["CS2-Organisation", "Mitspieler verbinden, Community-Abende planen und den CS2-Bereich begleiten."],
  ["SCUM-Administration", "Serverbetrieb, Einstellungen, Regeln und Support rund um die Insel."],
  ["Community-Support", "Fragen aufnehmen, Konflikte moderieren und neuen Mitgliedern den Einstieg erleichtern."],
];

export default function TeamPage() {
  return (
    <div className="site-shell home-theme">
      <SiteHeader active="team" />
      <main>
        <section className="inner-hero compact-hero" aria-labelledby="team-title">
          <div><p className="eyebrow"><span /> Hinter den Kulissen</p><h1 id="team-title">Die Leute,<br /><em>die Pixel-Rentner bewegen.</em></h1></div>
          <p>Klare Ansprechpartner statt anonymer Moderation. Die Namen und Profile werden ergänzt, sobald das endgültige Team feststeht.</p>
        </section>
        <section className="content-section team-section" aria-label="Teamrollen">
          <div className="team-grid">{roles.map(([role, description], index) => <article key={role}><div className="team-avatar" aria-hidden="true">PR{index + 1}</div><span>Rolle {String(index + 1).padStart(2, "0")}</span><h2>{role}</h2><strong>Name wird ergänzt</strong><p>{description}</p></article>)}</div>
        </section>
        <section className="quote-console"><p className="console-label">PR://TEAM</p><blockquote>„Verantwortung bedeutet nicht, über der Community zu stehen – sondern für sie ansprechbar zu sein.“</blockquote><span>PIXEL-RENTNER // TRANSPARENT & ERREICHBAR</span></section>
      </main>
      <SiteFooter />
    </div>
  );
}
