import React, { useState } from "react";

// ─── PALETTE (mirrors main site) ─────────────────────────────────────────────
const ACCENT = "#008080";

const light = {
  bg:        "#ffffff",
  bg2:       "#f7f7f7",
  text:      "#111111",
  textMuted: "#555555",
  textFaint: "#888888",
  border:    "#e2e2e2", 
  accent:    ACCENT,
  navBg:     "rgba(255,255,255,0.92)",
};
const dark = {
  bg:        "#131313ff",
  bg2:       "#111111ff",
  text:      "#f0f0f0",
  textMuted: "#999999",
  textFaint: "#666666",
  border:    "#2a2a2a",
  accent:    ACCENT,
  navBg:     "rgba(15,15,15,0.92)",
};

// ─── UTILITY ─────────────────────────────────────────────────────────────────
export function getRawUrl(repo, branch = "master", file = "project-config.json") {
  return `https://raw.githubusercontent.com/${repo}/${branch}/${file}`;
}

// ─── ICONS ───────────────────────────────────────────────────────────────────
const ArrowLeft  = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;
const GithubIcon = () => <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>;
const LinkIcon   = () => <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
const SunIcon    = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const MoonIcon   = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;

function Tag({ children, d }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 9px", borderRadius: "4px",
      border: `1px solid ${d.border}`, fontSize: "11px", fontWeight: 500,
      color: d.textMuted,
    }}>{children}</span>
  );
}

function Divider({ d }) {
  return <div style={{ height: "1px", background: d.border }} />;
}

function SectionLabel({ text, d }) {
  return (
    <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: d.accent, marginBottom: "16px" }}>
      {text}
    </div>
  );
}

function Gallery({ screenshots, d }) {
  const [active, setActive] = useState(0);
  if (!screenshots?.length) return null;
  return (
    <div>
      <img src={screenshots[active]} alt="screenshot" style={{ width: "100%", height: "340px", objectFit: "cover", borderRadius: "8px", border: `1px solid ${d.border}`, display: "block", marginBottom: "10px" }} />
      {screenshots.length > 1 && (
        <div style={{ display: "flex", gap: "8px" }}>
          {screenshots.map((src, i) => (
            <img key={i} src={src} alt="" onClick={() => setActive(i)} style={{
              width: "70px", height: "50px", objectFit: "cover", borderRadius: "5px", cursor: "pointer",
              border: `2px solid ${i === active ? d.accent : d.border}`,
              opacity: i === active ? 1 : 0.55, transition: "opacity 0.15s, border-color 0.15s",
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, d }) {
  return (
    <div style={{ background: d.bg2, border: `1px solid ${d.border}`, borderRadius: "8px", padding: "20px 24px" }}>
      <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: d.textFaint, marginBottom: "6px" }}>{label}</div>
      <div style={{ fontSize: "15px", fontWeight: 600, color: d.text }}>{value}</div>
    </div>
  );
}


export default function ProjectSite({ config, onBack, isDark: isDarkProp, setIsDark: setIsDarkProp }) {
  const [isDarkLocal, setIsDarkLocal] = useState(false);
  const isDark    = isDarkProp    !== undefined ? isDarkProp    : isDarkLocal;
  const setIsDark = setIsDarkProp !== undefined ? setIsDarkProp : setIsDarkLocal;

  const d = isDark ? dark : light;
  const c = config;
  const statusColor = { completed: "#16a34a", wip: "#d97706", planned: "#6366f1" };
  const sColor = statusColor[c.status] ?? d.accent;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        .ps-anim { animation: fadeUp 0.45s ease forwards; opacity: 0; }
        .ps-d1 { animation-delay: 0.04s; } .ps-d2 { animation-delay: 0.10s; }
        .ps-d3 { animation-delay: 0.16s; } .ps-d4 { animation-delay: 0.22s; }
        @media (max-width: 720px) {
          .ps-two-col { grid-template-columns: 1fr !important; }
          .ps-pad { padding: 32px 20px !important; }
          .ps-hero-pad { padding: 40px 20px 48px !important; }
        }
      `}</style>

      <div style={{ background: d.bg, color: d.text, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s, color 0.2s" }}>

        {/* NAV */}
        <nav style={{
          position: "sticky", top: 0, zIndex: 50,
          background: d.navBg, backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${d.border}`,
          height: "54px", display: "flex", alignItems: "center",
          padding: "0 40px", justifyContent: "space-between",
        }}>
          <button onClick={onBack} style={{
            display: "flex", alignItems: "center", gap: "7px",
            background: "none", border: "none", cursor: "pointer",
            fontSize: "13px", fontWeight: 500, color: d.textMuted,
            transition: "color 0.15s", padding: 0,
          }}
            onMouseEnter={e => e.currentTarget.style.color = d.text}
            onMouseLeave={e => e.currentTarget.style.color = d.textMuted}
          >
            <ArrowLeft /> Back to Projects
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: d.text }}>{c.name}</span>
            <button onClick={() => setIsDark(!isDark)} style={{
              background: "none", border: `1px solid ${d.border}`, cursor: "pointer",
              padding: "5px 8px", borderRadius: "6px", color: d.textMuted,
              display: "flex", alignItems: "center", transition: "border-color 0.15s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = d.accent}
              onMouseLeave={e => e.currentTarget.style.borderColor = d.border}
            >{isDark ? <SunIcon /> : <MoonIcon />}</button>
          </div>
        </nav>

        {/* HERO */}
        <div className="ps-hero-pad ps-anim ps-d1" style={{ maxWidth: "1000px", margin: "0 auto", padding: "56px 40px 64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
            <span style={{
              fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "4px",
              background: `${sColor}18`, color: sColor, border: `1px solid ${sColor}44`,
              textTransform: "capitalize", letterSpacing: "0.05em",
            }}>{c.status ?? "project"}</span>
            {c.version && <span style={{ fontSize: "12px", color: d.textFaint }}>v{c.version}</span>}
          </div>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: "18px", color: d.text }}>{c.name}</h1>
          {c.description && <p style={{ fontSize: "16px", lineHeight: 1.8, color: d.textMuted, maxWidth: "620px", marginBottom: "28px" }}>{c.description}</p>}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {c.tags?.map(t => <Tag key={t} d={d}>{t}</Tag>)}
          </div>
        </div>

        <Divider d={d} />

        {/* STATS */}
        {(c.author || c.license || c.language || c.timeline?.launched) && (
          <>
            <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 40px" }} className="ps-pad">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
                {c.author             && <StatCard label="Author"   value={c.author}            d={d} />}
                {c.license            && <StatCard label="License"  value={c.license}           d={d} />}
                {c.language           && <StatCard label="Language" value={c.language}          d={d} />}
                {c.timeline?.launched && <StatCard label="Launched" value={c.timeline.launched} d={d} />}
              </div>
            </div>
            <Divider d={d} />
          </>
        )}

        {/* MAIN CONTENT */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "56px 40px" }} className="ps-pad">
          <div className="ps-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

            <div>
              {c.screenshots?.length > 0 && (
                <div className="ps-anim ps-d2" style={{ marginBottom: "48px" }}>
                  <SectionLabel text="Screenshots" d={d} />
                  <Gallery screenshots={c.screenshots} d={d} />
                </div>
              )}
              {c.highlights?.length > 0 && (
                <div className="ps-anim ps-d3" style={{ marginBottom: "48px" }}>
                  <SectionLabel text="Highlights" d={d} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {c.highlights.map((h, i) => (
                      <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ color: d.accent, fontWeight: 700, fontSize: "13px", paddingTop: "1px", flexShrink: 0 }}>0{i + 1}</span>
                        <span style={{ fontSize: "14px", color: d.textMuted, lineHeight: 1.6 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {c.timeline && (
                <div className="ps-anim ps-d4" style={{ marginBottom: "48px" }}>
                  <SectionLabel text="Timeline" d={d} />
                  <div style={{ borderLeft: `2px solid ${d.border}`, paddingLeft: "18px" }}>
                    {[
                      { label: "Started",      val: c.timeline.started },
                      { label: "Launched",     val: c.timeline.launched },
                      { label: "Last Updated", val: c.timeline.lastUpdated },
                    ].filter(t => t.val).map((t, i) => (
                      <div key={i} style={{ position: "relative", paddingBottom: "18px" }}>
                        <div style={{ position: "absolute", left: "-23px", top: "4px", width: "8px", height: "8px", borderRadius: "50%", background: d.accent }} />
                        <div style={{ fontSize: "11px", fontWeight: 600, color: d.textFaint, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>{t.label}</div>
                        <div style={{ fontSize: "14px", color: d.text, fontWeight: 500 }}>{t.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              {c.links && Object.keys(c.links).length > 0 && (
                <div className="ps-anim ps-d2" style={{ marginBottom: "40px" }}>
                  <SectionLabel text="Links" d={d} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {Object.entries(c.links).map(([label, url]) => (
                      <a key={label} href={url} target="_blank" rel="noreferrer" style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "11px 16px", borderRadius: "7px",
                        border: `1px solid ${d.border}`, background: d.bg,
                        color: d.text, textDecoration: "none", fontSize: "13px", fontWeight: 500,
                        transition: "border-color 0.15s, background 0.15s",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = d.accent; e.currentTarget.style.background = d.bg2; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = d.border; e.currentTarget.style.background = d.bg; }}
                      >{label}<span style={{ color: d.textFaint }}><LinkIcon /></span></a>
                    ))}
                  </div>
                </div>
              )}
              {c.techStack && (
                <div className="ps-anim ps-d3" style={{ marginBottom: "40px" }}>
                  <SectionLabel text="Tech Stack" d={d} />
                  <div style={{ border: `1px solid ${d.border}`, borderRadius: "8px", overflow: "hidden" }}>
                    {Object.entries(c.techStack).map(([layer, val], i, arr) => (
                      <div key={layer} style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "11px 16px",
                        borderBottom: i < arr.length - 1 ? `1px solid ${d.border}` : "none",
                        background: i % 2 === 0 ? d.bg : d.bg2,
                      }}>
                        <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "capitalize", color: d.textFaint, letterSpacing: "0.06em" }}>{layer}</span>
                        <span style={{ fontSize: "13px", color: d.text, fontWeight: 500 }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {c.team?.length > 0 && (
                <div className="ps-anim ps-d4">
                  <SectionLabel text="Team" d={d} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {c.team.map((member, i) => (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "12px 16px", borderRadius: "7px",
                        border: `1px solid ${d.border}`, background: d.bg,
                      }}>
                        <div>
                          <div style={{ fontSize: "14px", fontWeight: 600, color: d.text, marginBottom: "2px" }}>{member.name}</div>
                          <div style={{ fontSize: "12px", color: d.accent, fontWeight: 500 }}>{member.role}</div>
                        </div>
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noreferrer" style={{ color: d.textFaint, transition: "color 0.15s", display: "flex" }}
                            onMouseEnter={e => e.currentTarget.style.color = d.text}
                            onMouseLeave={e => e.currentTarget.style.color = d.textFaint}
                          ><GithubIcon /></a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <Divider d={d} />
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }} className="ps-pad">
          <span style={{ fontSize: "12px", color: d.textFaint }}>{c.name} · {c.author}</span>
          <button onClick={onBack} style={{
            display: "flex", alignItems: "center", gap: "6px",
            background: "none", border: `1px solid ${d.border}`, cursor: "pointer",
            padding: "6px 13px", borderRadius: "6px", fontSize: "12px",
            fontWeight: 500, color: d.textMuted, transition: "border-color 0.15s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = d.accent}
            onMouseLeave={e => e.currentTarget.style.borderColor = d.border}
          ><ArrowLeft /> Back</button>
        </div>

      </div>
    </>
  );
}