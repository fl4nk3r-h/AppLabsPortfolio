import React, { useRef } from "react";
import CLUB from "../data/club";
import { ArrowIcon } from "../components/Icons";
import { Divider, SectionTitle } from "../components/UI";

export default function HomeSection({ d, isDark, scrollTo, sectionRef }) {
  return (
    <section ref={sectionRef} style={{ paddingTop: "58px" }}>

      {/* ── Hero ── */}
      <div className="pad-hero" style={{ maxWidth: "1100px", margin: "0 auto", padding: "70px 48px 96px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "48px" }}>
          <div style={{ maxWidth: "640px" }}>
            <div className="anim d1" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "4px 12px", borderRadius: "4px", border: `1px solid ${d.border}`,
              fontSize: "12px", color: d.textMuted, marginBottom: "28px",
            }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: d.accent, display: "inline-block", flexShrink: 0 }} />
              {CLUB.college} · {CLUB.subname}
            </div>

            <h1 className="anim d2" style={{
              fontWeight: 700, fontSize: "clamp(2.8rem, 6vw, 4.4rem)",
              lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: "22px", color: d.text,
            }}>
              Build.<br /><span style={{ color: d.accent }}>Ship.</span><br />Repeat.
            </h1>

            <p className="anim d3" style={{ fontSize: "16px", lineHeight: 1.78, color: d.textMuted, marginBottom: "36px", maxWidth: "500px" }}>
              {CLUB.about}
            </p>

            <div className="anim d4" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("projects")} style={{
                padding: "11px 22px", borderRadius: "6px", border: "none",
                background: d.accent, color: "#fff", fontSize: "14px", fontWeight: 600,
                cursor: "pointer", transition: "background 0.15s",
                display: "flex", alignItems: "center", gap: "7px",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#006363ff"}
                onMouseLeave={e => e.currentTarget.style.background = d.accent}
              >See Our Work <ArrowIcon /></button>

              <button onClick={() => scrollTo("join")} style={{
                padding: "11px 22px", borderRadius: "6px",
                border: `1px solid ${d.border}`, background: "transparent",
                color: d.text, fontSize: "14px", fontWeight: 500, cursor: "pointer",
                transition: "border-color 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = d.accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = d.border}
              >Join the Club</button>
            </div>
          </div>
          <img src={CLUB.clubLogo} alt="AppLabs Logo"
            style={{ width: "300px", height: "300px", flexShrink: 0, opacity: 0.9, borderRadius: "20px" }}
            className="hide-mob"
          />
        </div>  
      </div>

      <Divider d={d} />

      {/* ── Stats ── */}
      <div style={{ borderTop: `1px solid ${d.border}`, borderLeft: `1px solid ${d.border}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="four-col">
          {[
            { num: "10+", label: "Active Members" },
            { num: "3",  label: "Apps Shipped" },
            { num: "3",  label: "Hands-On Sessions" },
            { num: "2",  label: "Years Running" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "36px 32px", borderRight: `1px solid ${d.border}`, borderBottom: `1px solid ${d.border}` }}>
              <div style={{ fontWeight: 700, fontSize: "2rem", color: d.accent, letterSpacing: "-0.02em", marginBottom: "4px" }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: d.textMuted }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Divider d={d} />

      {/* ── About / History ── */}
      <div className="pad-sec" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 48px" }}>
        <SectionTitle label="About Us" title="A Brief History" d={d} />
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "120px", alignItems: "end" }}>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: d.textMuted }}>{CLUB.history}</p>
          <div style={{ position: "relative", height: "240px" }}>
            {CLUB.historyImages.map((src, i) => (
              <img key={i} src={src} alt="" style={{
                position: "absolute", width: "250px", height: "224px", objectFit: "cover",
                marginTop: "-50px",
                borderRadius: "7px", border: `2px solid ${d.bg}`,
                boxShadow: `0 4px 18px rgba(0,0,0,${isDark ? "0.4" : "0.08"})`,
                left: `${i * 62}px`, top: `${i * 30}px`, zIndex: i,
              }} />
            ))}
          </div>
        </div>
      </div>

      <Divider d={d} />

      {/* ── What We Do ── */}
      <div className="pad-sec" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 48px" }}>
        <SectionTitle label="Focus Areas" title="What We Do" d={d} />
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          backgroundColor: d.bg,
        }}>
          {CLUB.whatWeDo.map((item, i) => (
            <div key={i} style={{ background: d.bg, padding: "34px 30px", border: `1px solid ${d.border}`, transition: "background 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.background = d.bg2}
              onMouseLeave={e => e.currentTarget.style.background = d.bg}
            >
              <div style={{ fontSize: "24px", marginBottom: "14px" }}>{item.icon}</div>
              <div style={{ fontWeight: 600, fontSize: "15px", marginBottom: "7px", color: d.text }}>{item.title}</div>
              <div style={{ fontSize: "13px", lineHeight: 1.65, color: d.textMuted }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
