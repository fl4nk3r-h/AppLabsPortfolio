import React from "react";
import CLUB from "../data/club";
import { SectionTitle } from "../components/UI";
import { GithubIcon, LinkedinIcon, PortfolioIcon } from "../components/Icons";

const TIERS = [
  { tier: "lead",      label: "Leads"        },
  { tier: "sublead",   label: "Sub-Leads"    },
  { tier: "core",      label: "Core Members" },
  { tier: "volunteer", label: "Volunteers"   },
];

export default function TeamSection({ d, sectionRef }) {
  return (
    <section ref={sectionRef}>
      <div className="pad-sec" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 48px" }}>
        <SectionTitle label="The People" title="Our Team" d={d} />

        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0px", border: `1px solid ${d.border}` }}>
          {TIERS.map(({ tier, label }, quadrantIdx) => {
            const members    = CLUB.team.filter(m => m.tier === tier);
            const isLeftCol  = quadrantIdx % 2 === 0;
            const isTopRow   = quadrantIdx < 2;

            return (
              <div key={tier} style={{
                borderRight:  isLeftCol ? `1px solid ${d.border}` : "none",
                borderBottom: isTopRow  ? `1px solid ${d.border}` : "none",
              }}>
                <div style={{
                  padding: "14px 20px", borderBottom: `1px solid ${d.border}`,
                  fontSize: "11px", fontWeight: 600,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: d.textFaint, background: d.bg2,
                }}>{label}</div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "0px", alignItems: "start" }}>
                  {members.map((member, i) => (
                    <div key={i} style={{
                      background: d.bg,
                      borderRight: `1px solid ${d.border}`,
                      borderBottom: `1px solid ${d.border}`,
                      padding: "18px",
                      transition: "background 0.15s",
                      display: "flex", flexDirection: "column",
                      alignItems: "center", textAlign: "center", justifyContent: "center",
                      height: "200px",
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = d.bg2}
                      onMouseLeave={e => e.currentTarget.style.background = d.bg}
                    >
                      <img src={member.img} alt={member.name} style={{
                        width: "min(52px, 9vw)", height: "min(52px, 9vw)",
                        borderRadius: "50%", objectFit: "cover",
                        border: `2px solid ${d.border}`,
                        marginBottom: "10px", display: "block", flexShrink: 0,
                      }} />
                      <div style={{ fontWeight: 600, fontSize: "13px", marginBottom: "3px", color: d.text, lineHeight: 1.3 }}>{member.name}</div>
                      <div style={{ fontSize: "11px", color: d.accent, fontWeight: 500, marginBottom: "8px" }}>{member.role}</div>
                      {member.quote && (
                        <div className="team-card-quote" style={{ fontSize: "11px", color: d.textFaint, fontStyle: "italic", lineHeight: 1.5, marginBottom: "10px" }}>"{member.quote}"</div>
                      )}
                      <div style={{ display: "flex", gap: "8px" }}>
                        {[
                          { icon: <GithubIcon />,    href: member.github },
                          { icon: <LinkedinIcon />,  href: member.linkedin },
                          { icon: <PortfolioIcon />, href: member.portfolio },
                        ].filter(s => s.href).map((s, j) => (
                          <a key={j} href={s.href} style={{ color: d.textFaint, transition: "color 0.15s", display: "flex" }}
                            onMouseEnter={e => e.currentTarget.style.color = d.text}
                            onMouseLeave={e => e.currentTarget.style.color = d.textFaint}
                          >{s.icon}</a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
