import React from "react";
import CLUB from "../data/club";

export default function Footer({ d }) {
  return (
    <footer style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 48px 36px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "36px", marginBottom: "36px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
            <img src={CLUB.clubLogo} alt="AppLabs" style={{ width: "30px", height: "30px", borderRadius:"6px"}} />
            <span style={{ fontWeight: 700, fontSize: "14px" }}>{CLUB.name}</span>
          </div>
          <div style={{ fontSize: "12px", color: d.textMuted, lineHeight: 1.6 }}>{CLUB.subname}<br />{CLUB.college}</div>
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: d.textFaint, marginBottom: "12px" }}>Contact</div>
          <div style={{ fontSize: "13px", color: d.textMuted }}>{CLUB.contact.email}</div>
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: d.textFaint, marginBottom: "12px" }}>Links</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            {[{ label: "GitHub", href: CLUB.contact.github }, { label: "Instagram", href: CLUB.contact.instagram }, { label: "Discord", href: CLUB.contact.discord }].map(l => (
              <a key={l.label} href={l.href} style={{ fontSize: "13px", color: d.textMuted, textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color = d.accent}
                onMouseLeave={e => e.currentTarget.style.color = d.textMuted}
              >{l.label}</a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: d.textFaint, marginBottom: "12px" }}>Address</div>
          <div style={{ fontSize: "13px", color: d.textMuted, lineHeight: 1.7 }}>{CLUB.contact.address}</div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${d.border}`, paddingTop: "18px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
        <span style={{ fontSize: "12px", color: d.textFaint }}>© 2025 {CLUB.name}. All rights reserved.</span>
        <span style={{ fontSize: "12px", color: d.textFaint }}>Built by the AppLabs team</span>
      </div>
    </footer>
  );
}
