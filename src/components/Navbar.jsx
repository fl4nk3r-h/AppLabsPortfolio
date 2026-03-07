import React from "react";
import CLUB from "../data/club";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./Icons";

const NAV = [
  { label: "Home",     key: "home"     },
  { label: "Projects", key: "projects" },
  { label: "Team",     key: "team"     },
  { label: "Join Us",  key: "join"     },
];

export default function Navbar({ d, isDark, setIsDark, mobileMenu, setMobileMenu, scrollTo }) {
  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: d.navBg, backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${d.border}`,
        height: "58px", display: "flex", alignItems: "center",
        padding: "0 48px", justifyContent: "space-between",
      }}>
        <button onClick={() => scrollTo("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "9px", padding: 0 }}>
          <img src={CLUB.clubLogo} alt="AppLabs" style={{ width: "30px", height: "30px", borderRadius:"6px"}} />
          <span style={{ fontWeight: 700, fontSize: "15px", color: d.text, letterSpacing: "-0.01em" }}>{CLUB.name}</span>
        </button>

        <div className="hide-mob" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {NAV.map(n => (
            <button key={n.key} onClick={() => scrollTo(n.key)} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "6px 13px", borderRadius: "5px", fontSize: "13.5px",
              fontWeight: 500, color: d.textMuted, transition: "color 0.15s, background 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = d.text; e.currentTarget.style.background = d.bg3; }}
              onMouseLeave={e => { e.currentTarget.style.color = d.textMuted; e.currentTarget.style.background = "none"; }}
            >{n.label}</button>
          ))}
          <a href={CLUB.contact.github} style={{ padding: "6px 13px", fontSize: "13.5px", fontWeight: 500, color: d.textMuted, textDecoration: "none" }}>GitHub</a>
          <div style={{ width: "1px", height: "18px", background: d.border, margin: "0 6px" }} />
          <button onClick={() => setIsDark(!isDark)} style={{
            background: "none", border: `1px solid ${d.border}`, cursor: "pointer",
            padding: "6px 9px", borderRadius: "6px", color: d.textMuted,
            display: "flex", alignItems: "center", transition: "border-color 0.15s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = d.accent}
            onMouseLeave={e => e.currentTarget.style.borderColor = d.border}
          >{isDark ? <SunIcon /> : <MoonIcon />}</button>
        </div>

        <button className="show-mob" onClick={() => setMobileMenu(!mobileMenu)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: d.text }}>
          {mobileMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {mobileMenu && (
        <div style={{ position: "fixed", top: "58px", left: 0, right: 0, zIndex: 99, background: d.bg, borderBottom: `1px solid ${d.border}`, padding: "8px 24px 20px" }}>
          {NAV.map(n => (
            <button key={n.key} onClick={() => scrollTo(n.key)} style={{ display: "block", width: "100%", background: "none", border: "none", cursor: "pointer", padding: "13px 0", textAlign: "left", fontSize: "15px", fontWeight: 500, color: d.text, borderBottom: `1px solid ${d.border}` }}>{n.label}</button>
          ))}
          <button onClick={() => { setIsDark(!isDark); setMobileMenu(false); }} style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "14px", background: "none", border: "none", cursor: "pointer", fontSize: "14px", color: d.textMuted }}>
            {isDark ? <SunIcon /> : <MoonIcon />}{isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </>
  );
}
