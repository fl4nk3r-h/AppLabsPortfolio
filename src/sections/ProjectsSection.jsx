import React from "react";
import CLUB from "../data/club";
import { Divider, SectionTitle, ScrollRow } from "../components/UI";
import { Tag } from "../components/UI";
import { ArrowIcon } from "../components/Icons";
export default function ProjectsSection({ d, sectionRef, onNavigateProject, loadingItem, loadError }) {
  return (
    <div style={{ background: d.bg2 }} id="projects-section">
      <Divider d={d} />
      <section ref={sectionRef}>
        <div className="pad-sec" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 48px" }}>
          <SectionTitle label="Our Work" title="Projects" d={d} />

          {/* ── Featured ── */}
          <div className="two-col" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            borderRadius: "8px", overflow: "hidden",
            border: `1px solid ${d.border}`, marginBottom: "64px", background: d.card,
          }}>
            <img src={CLUB.projects.featured.screenshot} alt="Featured" style={{ width: "100%", height: "100%", minHeight: "260px", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: d.accent, marginBottom: "12px" }}>Featured Project</div>
              <h3 style={{ fontWeight: 700, fontSize: "1.75rem", letterSpacing: "-0.02em", marginBottom: "13px", color: d.text }}>{CLUB.projects.featured.name}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.75, color: d.textMuted, marginBottom: "20px" }}>{CLUB.projects.featured.desc}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "26px" }}>
                {CLUB.projects.featured.tags.map(t => <Tag key={t} d={d}>{t}</Tag>)}
              </div>
              <a href={CLUB.projects.featured.link} style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                padding: "9px 18px", borderRadius: "6px", border: `1px solid ${d.accent}`,
                color: d.accent, fontSize: "13px", fontWeight: 600, textDecoration: "none",
                width: "fit-content", transition: "background 0.15s, color 0.15s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = d.accent; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = d.accent; }}
              >View Project <ArrowIcon /></a>
            </div>
          </div>

          {/* ── Loading / Error ── */}
          {loadingItem && (
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "12px 18px", marginBottom: "20px",
              border: `1px solid ${d.border}`, borderRadius: "6px",
              background: d.bg, fontSize: "13px", color: d.textMuted,
            }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", border: `2px solid ${d.accent}`, borderTopColor: "transparent", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
              Loading {loadingItem}…
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          )}
          {loadError && (
            <div style={{ padding: "10px 16px", marginBottom: "20px", border: `1px solid #fca5a5`, borderRadius: "6px", background: "#fef2f2", color: "#c00", fontSize: "13px" }}>
              ⚠ {loadError}
            </div>
          )}

          {/* ── Scroll Rows ── */}
          {[
            { label: "Completed",        items: CLUB.projects.completed, enableFetch: true },
            { label: "Work in Progress", items: CLUB.projects.wip,       enableFetch: true },
            { label: "Events",           items: CLUB.projects.events },
          ].map(row => (
            <div key={row.label} style={{ marginBottom: "48px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                <h3 style={{ fontWeight: 600, fontSize: "15px", color: d.text }}>{row.label}</h3>
                <span style={{ fontSize: "11px", color: d.textFaint, letterSpacing: "0.05em" }}>scroll →</span>
              </div>
              <ScrollRow items={row.items} d={d} enableFetch={row.enableFetch} onNavigate={onNavigateProject} />
            </div>
          ))}
        </div>
      </section>
      <Divider d={d} />
    </div>
  );
}
