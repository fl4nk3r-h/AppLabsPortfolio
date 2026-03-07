import React, { useState, useRef } from "react";
import CLUB from "../data/club";
import { SectionTitle } from "../components/UI";
import { ArrowIcon } from "../components/Icons";

export default function JoinSection({ d, sectionRef }) {
  const [activeTab,     setActiveTab]     = useState("apply");
  const [formData,      setFormData]      = useState({ name: "", email: "", branch: "", year: "", why: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading,   setFormLoading]   = useState(false);
  const [formError,     setFormError]     = useState("");
  const [ideaData,      setIdeaData]      = useState({ name: "", email: "", title: "", description: "", tech: "" });
  const [ideaSubmitted, setIdeaSubmitted] = useState(false);
  const [ideaLoading,   setIdeaLoading]   = useState(false);
  const [ideaError,     setIdeaError]     = useState("");

  const joinScrollRef = useRef(null);

  const inputStyle = {
    width: "100%", padding: "10px 13px", borderRadius: "6px",
    border: `1px solid ${d.border}`, background: d.bg, color: d.text,
    fontSize: "14px", fontFamily: "inherit", outline: "none", transition: "border-color 0.15s",
  };

  return (
    <section ref={sectionRef}>
      <div className="pad-sec" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 48px" }}>

        {/* Tab switcher */}
        <div style={{ display: "flex", marginBottom: "56px", border: `1px solid ${d.border}`, borderRadius: "8px", overflow: "hidden", width: "fit-content" }}>
          {[{ key: "apply", label: "Join the Club" }, { key: "idea", label: "Submit an Idea" }].map((tab, i) => (
            <button key={tab.key} onClick={() => {
              setActiveTab(tab.key);
              joinScrollRef.current?.scrollTo({ left: i * joinScrollRef.current.offsetWidth, behavior: "smooth" });
            }} style={{
              padding: "10px 24px", border: "none", cursor: "pointer",
              fontSize: "13px", fontWeight: 600,
              background: activeTab === tab.key ? d.accent : d.bg,
              color:      activeTab === tab.key ? "#fff"    : d.textMuted,
              transition: "background 0.15s, color 0.15s",
            }}>{tab.label}</button>
          ))}
        </div>

        {/* Scroll container */}
        <div ref={joinScrollRef}
          onScroll={() => {
            if (!joinScrollRef.current) return;
            const { scrollLeft, offsetWidth } = joinScrollRef.current;
            setActiveTab(scrollLeft < offsetWidth / 2 ? "apply" : "idea");
          }}
          style={{ display: "flex", overflowX: "scroll", scrollSnapType: "x mandatory", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          <style>{`.join-scroll::-webkit-scrollbar { display: none; }`}</style>

          {/* ── Panel 1: Application ── */}
          <div className="join-scroll" style={{ minWidth: "100%", scrollSnapAlign: "start" }}>
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "80px", alignItems: "start" }}>
              <div>
                <SectionTitle label="Applications" title="Join AppLabs" d={d} />
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: d.textMuted, marginBottom: "36px" }}>
                  We recruit every semester. Whether you're a developer, designer, or someone who just wants to build — there's a place for you here.
                </p>
                {[
                  { step: "01", text: "Fill out the application" },
                  { step: "02", text: "We review within one week" },
                  { step: "03", text: "Short intro call with the team" },
                  { step: "04", text: "Welcome to AppLabs" },
                ].map(s => (
                  <div key={s.step} style={{ display: "flex", gap: "16px", marginBottom: "18px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: d.accent, minWidth: "22px", paddingTop: "2px", letterSpacing: "0.05em" }}>{s.step}</span>
                    <span style={{ fontSize: "14px", color: d.textMuted, lineHeight: 1.6 }}>{s.text}</span>
                  </div>
                ))}
              </div>
              <div>
                {formSubmitted ? (
                  <div style={{ padding: "52px 36px", textAlign: "center", border: `1px solid ${d.border}`, borderRadius: "8px" }}>
                    <div style={{ fontSize: "36px", marginBottom: "14px" }}>🎉</div>
                    <div style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "8px", color: d.text }}>Application Sent!</div>
                    <div style={{ fontSize: "14px", color: d.textMuted }}>We'll review your application and get back to you shortly.</div>
                  </div>
                ) : (
                  <form className="join-form" onSubmit={async e => {
                    e.preventDefault();
                    if (formLoading) return;
                    setFormLoading(true); setFormError("");
                    try {
                      await fetch(CLUB.scriptUrlJoin, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ formType: "application", ...formData, timestamp: new Date().toISOString() }) });
                      setFormSubmitted(true);
                    } catch { setFormError("Something went wrong. Please try again."); }
                    finally { setFormLoading(false); }
                  }} style={{ border: `1px solid ${d.border}`, borderRadius: "8px", padding: "36px", background: d.card }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                      {[{ label: "Full Name", key: "name", placeholder: "Aryan Mehta" }, { label: "Email", key: "email", placeholder: "aryan2025BCS001@iiitkottayam.ac.in" }].map(f => (
                        <div key={f.key}>
                          <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: d.textMuted, marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{f.label}</label>
                          <input type="text" placeholder={f.placeholder} required value={formData[f.key]} onChange={e => setFormData({ ...formData, [f.key]: e.target.value })} style={inputStyle} onFocus={e => e.target.style.borderColor = d.accent} onBlur={e => e.target.style.borderColor = d.border} />
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                      {[{ label: "Branch", key: "branch", placeholder: "Computer Science" }, { label: "Year", key: "year", placeholder: "1st Year" }].map(f => (
                        <div key={f.key}>
                          <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: d.textMuted, marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{f.label}</label>
                          <input type="text" placeholder={f.placeholder} required value={formData[f.key]} onChange={e => setFormData({ ...formData, [f.key]: e.target.value })} style={inputStyle} onFocus={e => e.target.style.borderColor = d.accent} onBlur={e => e.target.style.borderColor = d.border} />
                        </div>
                      ))}
                    </div>
                    <div style={{ marginBottom: "22px" }}>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: d.textMuted, marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Why do you want to join?</label>
                      <textarea placeholder="Tell us about yourself and what you'd like to build..." rows={4} required value={formData.why} onChange={e => setFormData({ ...formData, why: e.target.value })} style={{ ...inputStyle, resize: "vertical" }} onFocus={e => e.target.style.borderColor = d.accent} onBlur={e => e.target.style.borderColor = d.border} />
                    </div>
                    {formError && <div style={{ fontSize: "13px", color: "#c00", marginBottom: "14px" }}>{formError}</div>}
                    <button type="submit" style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "none", background: d.accent, color: "#fff", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "background 0.15s", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#006363ff"}
                      onMouseLeave={e => e.currentTarget.style.background = d.accent}
                    >{formLoading ? "Submitting..." : <>Submit Application <ArrowIcon /></>}</button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ── Panel 2: Idea ── */}
          <div style={{ minWidth: "100%", scrollSnapAlign: "start" }}>
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "80px", alignItems: "start" }}>
              <div>
                <SectionTitle label="Ideas" title="Got an Idea?" d={d} />
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: d.textMuted, marginBottom: "36px" }}>
                  Have an app idea you'd love to see built? Submit it — our team reviews every suggestion and the best ones get picked up as club projects.
                </p>
                {[
                  { step: "01", text: "Describe your idea" },
                  { step: "02", text: "We review all submissions" },
                  { step: "03", text: "Top ideas get pitched to the club" },
                  { step: "04", text: "A team forms and starts building" },
                ].map(s => (
                  <div key={s.step} style={{ display: "flex", gap: "16px", marginBottom: "18px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: d.accent, minWidth: "22px", paddingTop: "2px", letterSpacing: "0.05em" }}>{s.step}</span>
                    <span style={{ fontSize: "14px", color: d.textMuted, lineHeight: 1.6 }}>{s.text}</span>
                  </div>
                ))}
              </div>
              <div>
                {ideaSubmitted ? (
                  <div style={{ padding: "52px 36px", textAlign: "center", border: `1px solid ${d.border}`, borderRadius: "8px" }}>
                    <div style={{ fontSize: "36px", marginBottom: "14px" }}>💡</div>
                    <div style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "8px", color: d.text }}>Idea Received!</div>
                    <div style={{ fontSize: "14px", color: d.textMuted }}>Thanks for sharing. We'll look it over and reach out if we take it forward.</div>
                  </div>
                ) : (
                  <form className="join-form" onSubmit={async e => {
                    e.preventDefault();
                    if (ideaLoading) return;
                    setIdeaLoading(true); setIdeaError("");
                    try {
                      await fetch(CLUB.scriptUrlIdea, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ formType: "idea", ...ideaData, timestamp: new Date().toISOString() }) });
                      setIdeaSubmitted(true);
                    } catch { setIdeaError("Something went wrong. Please try again."); }
                    finally { setIdeaLoading(false); }
                  }} style={{ border: `1px solid ${d.border}`, borderRadius: "8px", padding: "36px", background: d.card }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                      {[{ label: "Your Name", key: "name", placeholder: "Aryan Mehta" }, { label: "Email", key: "email", placeholder: "aryan2025BCS001@iiitkottayam.ac.in" }].map(f => (
                        <div key={f.key}>
                          <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: d.textMuted, marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{f.label}</label>
                          <input type="text" placeholder={f.placeholder} required value={ideaData[f.key]} onChange={e => setIdeaData({ ...ideaData, [f.key]: e.target.value })} style={inputStyle} onFocus={e => e.target.style.borderColor = d.accent} onBlur={e => e.target.style.borderColor = d.border} />
                        </div>
                      ))}
                    </div>
                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: d.textMuted, marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Idea Title</label>
                      <input type="text" placeholder="e.g. Campus Lost & Found App" required value={ideaData.title} onChange={e => setIdeaData({ ...ideaData, title: e.target.value })} style={inputStyle} onFocus={e => e.target.style.borderColor = d.accent} onBlur={e => e.target.style.borderColor = d.border} />
                    </div>
                    <div style={{ marginBottom: "14px" }}>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: d.textMuted, marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Description</label>
                      <textarea placeholder="What problem does it solve? Who would use it?" rows={3} required value={ideaData.description} onChange={e => setIdeaData({ ...ideaData, description: e.target.value })} style={{ ...inputStyle, resize: "vertical" }} onFocus={e => e.target.style.borderColor = d.accent} onBlur={e => e.target.style.borderColor = d.border} />
                    </div>
                    <div style={{ marginBottom: "22px" }}>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: d.textMuted, marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Tech / Platform (optional)</label>
                      <input type="text" placeholder="e.g. Mobile app, React Native, AI-powered..." value={ideaData.tech} onChange={e => setIdeaData({ ...ideaData, tech: e.target.value })} style={inputStyle} onFocus={e => e.target.style.borderColor = d.accent} onBlur={e => e.target.style.borderColor = d.border} />
                    </div>
                    {ideaError && <div style={{ fontSize: "13px", color: "#c00", marginBottom: "14px" }}>{ideaError}</div>}
                    <button type="submit" style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "none", background: d.accent, color: "#fff", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "background 0.15s", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#006363ff"}
                      onMouseLeave={e => e.currentTarget.style.background = d.accent}
                    >{ideaLoading ? "Submitting..." : <>Submit Idea <ArrowIcon /></>}</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
