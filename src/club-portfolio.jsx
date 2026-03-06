import React, { useState, useEffect, useRef } from "react";
import ProjectSite, { getRawUrl } from "./projectSite/project-site";

// ─── PALETTE ─────────────────────────────────────────────────────────────────
const ACCENT = "#008080";
const ACCENT_HOVER = "#006363ff";

const light = {
  bg:        "#ffffff",
  bg2:       "#f7f7f7",
  bg3:       "#f0f0f0",
  text:      "#111111",
  textMuted: "#555555",
  textFaint: "#888888",
  border:    "#e2e2e2",
  card:      "#ffffff",
  accent:    ACCENT,
  accentBg:  "#f5e6ef",
  navBg:     "rgba(255,255,255,0.92)",
};
const dark = {
  bg:        "#131313ff",
  bg2:       "#111111ff",
  bg3:       "#1e1e1e",
  text:      "#f0f0f0",
  textMuted: "#999999",
  textFaint: "#666666",
  border:    "#2a2a2a",
  card:      "#161616",
  accent:    ACCENT,
  accentBg:  "#1f0014",
  navBg:     "rgba(15,15,15,0.92)",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const CLUB = {
  name: "AppLabs",
  abbr: "AL",
  subname: "App Development Club",
  college: "Indian Institute of Information Technology, Kottayam",
  about:
    "AppLabs, the app development club under Beta Labs, is a student-run community of builders, designers, and dreamers passionate about crafting mobile and web applications. We collaborate, ship real products, and grow together — from zero-to-one and beyond.",
  history:
    "Founded in 2019 by a handful of CS students frustrated that theory never met practice, AppLabs has grown from a few members in a dorm room to active builders across departments. We've shipped x apps, won y hackathons, and sent alumni to top tech companies.",
  historyImages: [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
  ],
  whatWeDo: [
    { icon: "📱", title: "Mobile Apps", desc: "iOS & Android with React Native and Flutter" },
    { icon: "🌐", title: "Web Apps", desc: "Full-stack web applications and SaaS products" },
    { icon: "🏆", title: "Hackathons", desc: "Compete and win at regional & national events" },
    { icon: "🎓", title: "Workshops", desc: "Weekly sessions on cutting-edge tech stacks" },
  ],
  projects: {
    featured: {
      name: "CampusConnect",
      desc: "A real-time campus event discovery and RSVP app used by 2,000+ students. Built with React Native, Node.js, and Firebase.",
      screenshot: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80",
      tags: ["React Native", "Firebase", "Node.js"],
      link: "https://github.com/AppLabs-IIITK/",
    },
    completed: [
      { name: "StudyPal", repo: "nihalnijuv496-wq/3-Body-Problem-Simulation", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&q=80", tags: ["Flutter", "ML"],      link: "https://github.com/AppLabs-IIITK"},
      { name: "GreenTrack", img: "https://images.unsplash.com/photo-1542601906897-ecd5abdd5273?w=300&q=80", tags: ["React", "Charts"],  link: "https://github.com/AppLabs-IIITK" },
      { name: "MealMate", img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300&q=80", tags: ["iOS", "Swift"],       link: "https://github.com/AppLabs-IIITK"},
      { name: "DevBoard", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&q=80", tags: ["Next.js"],            link: "https://github.com/AppLabs-IIITK" },
      { name: "QuizBuzz", img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=300&q=80", tags: ["React", "Socket.io"], link: "https://github.com/AppLabs-IIITK" },
    ],
    wip: [
      { name: "HealthPulse", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80", tags: ["React Native", "AI"], link: "https://github.com/AppLabs-IIITK" },
      { name: "CodeCollab", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=300&q=80", tags: ["Web", "WebRTC"], link: "https://github.com/AppLabs-IIITK" },
      { name: "JobHunt AI", img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&q=80", tags: ["Python", "GPT-4"], link: "https://github.com/AppLabs-IIITK" },
    ],
    events: [
      { name: "Hack Sprint '25", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&q=80", date: "Mar 2025", link: "https://www.instagram.com/betalabs_app.dev/" },
      { name: "UI/UX Workshop", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=300&q=80", date: "Jan 2025", link: "https://www.instagram.com/betalabs_app.dev/"  },
      { name: "Demo Day Fall", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&q=80", date: "Nov 2024", link: "https://www.instagram.com/betalabs_app.dev/"  },
      { name: "Git Bootcamp", img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&q=80", date: "Sep 2024", link: "https://www.instagram.com/betalabs_app.dev/"  },
    ],
  },
  team: [
  { name: "Aryan Mehta",  role: "President",     tier: "lead",    quote: "Build things that matter.", img: "https://i.pravatar.cc/150?img=11", github: "#", linkedin: "#", twitter: "#" },
  { name: "Priya Nair",   role: "VP Engineering", tier: "lead",    quote: "Ship fast, learn faster.", img: "https://i.pravatar.cc/150?img=47", github: "#", linkedin: "#", twitter: "#" },
  { name: "Rohan Das",    role: "Design Lead",    tier: "sublead", quote: "Design is how it works.", img: "https://i.pravatar.cc/150?img=12", github: "#", linkedin: "#", twitter: "#" },
  { name: "Sneha Iyer",   role: "Mobile Lead",    tier: "sublead", quote: "Every app starts with an idea.", img: "https://i.pravatar.cc/150?img=48", github: "#", linkedin: "#", twitter: "#" },
  { name: "Karan Patel",  role: "Web Lead",       tier: "sublead", quote: "The web is our playground.", img: "https://i.pravatar.cc/150?img=13", github: "#", linkedin: "#", twitter: "#" },
  { name: "Divya Sharma", role: "Events Head",    tier: "core",    quote: "Community is everything.", img: "https://i.pravatar.cc/150?img=49", github: "#", linkedin: "#", twitter: "#" },
  { name: "Mihir Joshi",  role: "Core Member",    tier: "core",    quote: "Always be building.", img: "https://i.pravatar.cc/150?img=14", github: "#", linkedin: "#", twitter: "#" },
  { name: "Tanvi Rao",    role: "Core Member",    tier: "core",    quote: "Code is poetry.", img: "https://i.pravatar.cc/150?img=50", github: "#", linkedin: "#", twitter: "#" },
  { name: "Aditya Sen",   role: "Volunteer",      tier: "volunteer", quote: "Here to learn and contribute.", img: "https://i.pravatar.cc/150?img=15", github: "#", linkedin: "#", twitter: "#" },
  { name: "Meera Pillai", role: "Volunteer",      tier: "volunteer", quote: "Excited to be part of this.", img: "https://i.pravatar.cc/150?img=51", github: "#", linkedin: "#", twitter: "#" },
  { name: "Zaid Khan",    role: "Volunteer",      tier: "volunteer", quote: "Building my first app here.", img: "https://i.pravatar.cc/150?img=16", github: "#", linkedin: "#", twitter: "#" },
  { name: "Nisha Verma",  role: "Volunteer",      tier: "volunteer", quote: "Design thinking advocate.", img: "https://i.pravatar.cc/150?img=52", github: "#", linkedin: "#", twitter: "#" },
  { name: "Ravi Teja",    role: "Volunteer",      tier: "volunteer", quote: "Turning coffee into code.", img: "https://i.pravatar.cc/150?img=17", github: "#", linkedin: "#", twitter: "#" },
  { name: "Pooja Menon",  role: "Volunteer",      tier: "volunteer", quote: "Every commit counts.", img: "https://i.pravatar.cc/150?img=53", github: "#", linkedin: "#", twitter: "#" },
],
  scriptUrl: "https://script.google.com/macros/s/AKfycbzh3rd1MlFs9LmQ9b1Ny8yleboDsEsGxrjc-Ws_OrOsSzp_05exF5PM2eXXksRpyIWlcQ/exec",
  contact: {
    email: "applabsiiitk@gmail.com",
    instagram: "https://www.instagram.com/betalabs_app.dev/",
    github: "https://github.com/AppLabs-IIITK",
    address: "Room 204, CS Block, IIIT, Pala, Kottayam, Kerala, India",
  },
};

// ─── ICONS ────────────────────────────────────────────────────────────────────
const GithubIcon   = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const TwitterIcon  = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const SunIcon  = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const MoonIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
const MenuIcon = () => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const CloseIcon = () => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const ArrowIcon = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;

// ─── SMALL COMPONENTS ─────────────────────────────────────────────────────────
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

function SectionTitle({ label, title, d }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: d.accent, marginBottom: "10px" }}>{label}</div>
      {title && <h2 style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.1rem)", color: d.text, lineHeight: 1.15, letterSpacing: "-0.02em" }}>{title}</h2>}
    </div>
  );
}

function ProjectCard({ item, d }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      width: "230px", flexShrink: 0, borderRadius: "8px", overflow: "hidden",
      transform: hovered ? "scale(1.07)" : "scale(1)",
      border: `1px solid ${hovered ? d.accent : d.border}`,
      background: d.card, cursor: "pointer",
      transition: "border-color 0.15s, box-shadow 0.15s, transform 0.2s ease",
      boxShadow: hovered ? `0 4px 20px rgba(255, 255, 255, 0.08)` : "none",
    }}>
      <img src={item.img} alt={item.name} style={{ width: "100%", height: "138px", objectFit: "cover", display: "block" }} />
      <div style={{ padding: "16px" }}>
        <div style={{ fontWeight: 600, fontSize: "14px", marginBottom: "10px", color: d.text }}>{item.name}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {item.tags?.map(t => <Tag key={t} d={d}>{t}</Tag>)}
          {item.date && <span style={{ fontSize: "11px", color: d.textFaint, alignSelf: "center" }}>{item.date}</span>}
        </div>
      </div>
    </div>
  );
}

// ─── SCROLL ROW — navigates via hash when repo is present ────────────────────
function ScrollRow({ items, d, enableFetch = false, onNavigate }) {
  const rowRef = useRef(null);

  const handleWheel = (e) => {
    if (!rowRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    const atLeft  = scrollLeft === 0 && e.deltaY < 0;
    const atRight = scrollLeft + clientWidth >= scrollWidth - 1 && e.deltaY > 0;
    if (atLeft || atRight) return;
    e.preventDefault();
    rowRef.current.scrollLeft += e.deltaY;
  };

  return (
    <div>
      <div
        ref={rowRef}
        onWheel={handleWheel}
        style={{ display: "flex", gap: "14px", overflowX: "auto", padding: "12px", margin: "-12px", scrollbarWidth: "none" }}
      >
        {items.map((item, i) => {
          const canNavigate = enableFetch && item.repo;
          return (
            <a
              key={i}
              href={canNavigate ? `#project/${encodeURIComponent(item.repo)}` : item.link}
              target={canNavigate ? undefined : "_blank"}
              rel={canNavigate ? undefined : "noopener noreferrer"}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={canNavigate ? (e) => {
                e.preventDefault();
                onNavigate(item);
              } : undefined}
            >
              <ProjectCard item={item} d={d} />
            </a>
          );
        })}
      </div>
    </div>
  );
}


// ─── ROOT ROUTER ─────────────────────────────────────────────────────────────
export default function App() {
  const [isDark, setIsDark] = useState(false);
  // route: null = main site, { item, config } = project page
  const [route, setRoute] = useState(null);
  const [loadingItem, setLoadingItem] = useState(null);
  const [loadError, setLoadError] = useState(null);

  // Handle browser back button
  useEffect(() => {
    const onHashChange = () => {
      if (!window.location.hash || window.location.hash === "#") {
        setRoute(null);
        setLoadError(null);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigateToProject = async (item) => {
    setLoadingItem(item.name);
    setLoadError(null);
    try {
      const res = await fetch(getRawUrl(item.repo, item.branch, item.file));
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const config = await res.json();
      window.history.pushState({}, "", `#project/${encodeURIComponent(item.repo)}`);
      window.scrollTo(0, 0);
      setRoute({ item, config });
    } catch (err) {
      setLoadError(`Could not load ${item.name}: ${err.message}`);
    } finally {
      setLoadingItem(null);
    }
  };

  const navigateBack = () => {
    window.history.back();
    setRoute(null);
    setLoadError(null);
    setTimeout(() => {
      document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  if (route) {
    return (
      <ProjectSite
        config={route.config}
        isDark={isDark}
        setIsDark={setIsDark}
        onBack={navigateBack}
      />
    );
  }

  return (
    <MainSite
      isDark={isDark}
      setIsDark={setIsDark}
      onNavigateProject={navigateToProject}
      loadingItem={loadingItem}
      loadError={loadError}
    />
  );
}

// ─── MAIN SITE ────────────────────────────────────────────────────────────────
function MainSite({ isDark, setIsDark, onNavigateProject, loadingItem, loadError }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", branch: "", year: "", why: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const d = isDark ? dark : light;

  const refs = { home: useRef(null), projects: useRef(null), team: useRef(null), join: useRef(null) };
  const scrollTo = key => { refs[key]?.current?.scrollIntoView({ behavior: "smooth" }); setMobileMenu(false); };

  const NAV = [{ label: "Home", key: "home" }, { label: "Projects", key: "projects" }, { label: "Team", key: "team" }, { label: "Join Us", key: "join" }];

  const inputStyle = {
    width: "100%", padding: "10px 13px", borderRadius: "6px",
    border: `1px solid ${d.border}`, background: d.bg, color: d.text,
    fontSize: "14px", fontFamily: "inherit", outline: "none", transition: "border-color 0.15s",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-thumb { background: #d0d0d0; border-radius: 3px; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        .anim  { animation: fadeUp 0.55s ease forwards; opacity:0; }
        .d1 { animation-delay: 0.05s; } .d2 { animation-delay: 0.13s; }
        .d3 { animation-delay: 0.21s; } .d4 { animation-delay: 0.30s; }
        @media (max-width: 760px) {
          .hide-mob  { display: none !important; }
          .show-mob  { display: flex !important; }
          .two-col   { grid-template-columns: 1fr !important; }
          .four-col  { grid-template-columns: 1fr 1fr !important; }
          .pad-sec   { padding: 64px 24px !important; }
          .pad-hero  { padding: 50px 24px 70px !important; }
          .team-card-name { font-size: 11px !important; }
          .team-card-role { font-size: 10px !important; }
          .team-card-quote { display: none !important; }
          .team-grid { grid-template-columns: repeat(auto-fit, min(160px, 40vw)) !important; }
          .join-form { padding: 36px 25px !important; }
        }
      `}</style>

      <div style={{ background: d.bg, color: d.text, minHeight: "100vh", transition: "background 0.2s, color 0.2s" }}>

        {/* NAV */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: d.navBg, backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${d.border}`,
          height: "58px", display: "flex", alignItems: "center",
          padding: "0 48px", justifyContent: "space-between",
        }}>
          <button onClick={() => scrollTo("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "9px", padding: 0 }}>
            <div style={{ width: "30px", height: "30px", borderRadius: "6px", background: d.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "#fff" }}>{CLUB.abbr}</div>
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

        {/* ══════════════ HOME ══════════════ */}
        <section ref={refs.home} style={{ paddingTop: "58px" }}>

          {/* Hero */}
          <div className="pad-hero" style={{ maxWidth: "1100px", margin: "0 auto", padding: "70px 48px 96px" }}>
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
                  onMouseEnter={e => e.currentTarget.style.background = ACCENT_HOVER}
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
          </div>

          <Divider d={d} />

          {/* Stats */}
          <div style={{ borderTop: `1px solid ${d.border}`, borderLeft: `1px solid ${d.border}` }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="four-col">
              {[
                { num: "n+", label: "Active Members" },
                { num: "x",  label: "Apps Shipped" },
                { num: "y",  label: "Hackathon Wins" },
                { num: "z",  label: "Years Running" },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "36px 32px",
                  borderRight: `1px solid ${d.border}`,
                  borderBottom: `1px solid ${d.border}`,
                }}>
                  <div style={{ fontWeight: 700, fontSize: "2rem", color: d.accent, letterSpacing: "-0.02em", marginBottom: "4px" }}>{s.num}</div>
                  <div style={{ fontSize: "13px", color: d.textMuted }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Divider d={d} />

          {/* About / History */}
          <div className="pad-sec" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 48px" }}>
            <SectionTitle label="About Us" title="A Brief History" d={d} />
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
              <p style={{ fontSize: "15px", lineHeight: 1.85, color: d.textMuted }}>{CLUB.history}</p>
              <div style={{ position: "relative", height: "240px" }}>
                {CLUB.historyImages.map((src, i) => (
                  <img key={i} src={src} alt="" style={{
                    position: "absolute", width: "165px", height: "148px", objectFit: "cover",
                    borderRadius: "7px", border: `2px solid ${d.bg}`,
                    boxShadow: `0 4px 18px rgba(0,0,0,${isDark ? "0.4" : "0.08"})`,
                    left: `${i * 62}px`, top: `${i * 30}px`, zIndex: i,
                  }} />
                ))}
              </div>
            </div>
          </div>

          <Divider d={d} />

          {/* What We Do */}
          <div className="pad-sec" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 48px" }}>
            <SectionTitle label="Focus Areas" title="What We Do" d={d} />
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0px", background: d.border, borderRadius: "8px",
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

        {/* ══════════════ PROJECTS ══════════════ */}
        <div style={{ background: d.bg2 }} id="projects-section">
          <Divider d={d} />
          <section ref={refs.projects}>
            <div className="pad-sec" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 48px" }}>
              <SectionTitle label="Our Work" title="Projects" d={d} />

              {/* Featured */}
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

              {/* Loading overlay */}
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

              {/* Scrollable rows */}
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
                  <ScrollRow
                    items={row.items}
                    d={d}
                    enableFetch={row.enableFetch}
                    onNavigate={onNavigateProject}
                  />
                </div>
              ))}
            </div>
          </section>
          <Divider d={d} />
        </div>

        {/* ══════════════ TEAM ══════════════ */}
        <section ref={refs.team}>
          <div className="pad-sec" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 48px" }}>
            <SectionTitle label="The People" title="Our Team" d={d} />

            {/* 2×2 macro grid: [Leads | Sub-Leads] / [Core | Volunteers] */}
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0px", border: `1px solid ${d.border}` }}>

              {[
                { tier: "lead",      label: "Leads",        imgSize: "min(52px, 9vw)", fontSize: "13px", padding: "24px", showQuote: true  },
                { tier: "sublead",   label: "Sub-Leads",    imgSize: "min(52px, 9vw)", fontSize: "13px", padding: "20px", showQuote: true  },
                { tier: "core",      label: "Core Members", imgSize: "min(52px, 9vw)",  fontSize: "13px", padding: "18px", showQuote: true },
                { tier: "volunteer", label: "Volunteers",   imgSize: "min(52px, 9vw)",  fontSize: "13px", padding: "14px", showQuote: true },
              ].map(({ tier, label, imgSize, fontSize, padding, showQuote }, quadrantIdx) => {
                const members = CLUB.team.filter(m => m.tier === tier);
                const isLeftCol = quadrantIdx % 2 === 0;
                const isTopRow  = quadrantIdx < 2;

                return (
                  <div key={tier} style={{
                    borderRight:  isLeftCol ? `1px solid ${d.border}` : "none",
                    borderBottom: isTopRow  ? `1px solid ${d.border}` : "none",
                  }}>
                    {/* Quadrant header */}
                    <div style={{
                      padding: "14px 20px",
                      borderBottom: `1px solid ${d.border}`,
                      fontSize: "11px", fontWeight: 600,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: d.textFaint, background: d.bg2,
                    }}>{label}</div>

                    {/* Member grid inside each quadrant */}
                    <div style={{
                      display: "grid",
                    gridTemplateColumns: `repeat(auto-fill, minmax(130px, 1fr))`,
                      gap: "0px",
                      alignItems: "start",
                    }}>
                      {members.map((member, i) => (
                        <div key={i}
                           style={{
                              background: d.bg,
                              borderRight: `1px solid ${d.border}`,
                              borderBottom: `1px solid ${d.border}`,
                              padding,
                              transition: "background 0.15s",
                              display: "flex", flexDirection: "column",
                              alignItems: "center", textAlign: "center", justifyContent: "center",
                              height: "200px",  // replaces aspectRatio: "1"
                            }}
                          onMouseEnter={e => e.currentTarget.style.background = d.bg2}
                          onMouseLeave={e => e.currentTarget.style.background = d.bg}
                        >
                          <img src={member.img} alt={member.name} style={{
                            width: imgSize, height: imgSize,
                            borderRadius: "50%", objectFit: "cover",
                            border: `2px solid ${d.border}`,
                            marginBottom: "10px", display: "block", flexShrink: 0,
                          }} />
                          <div style={{ fontWeight: 600, fontSize, marginBottom: "3px", color: d.text, lineHeight: 1.3 }}>{member.name}</div>
                          <div style={{ fontSize: "11px", color: d.accent, fontWeight: 500, marginBottom: showQuote ? "8px" : "10px" }}>{member.role}</div>
                          {showQuote && member.quote && (
                            <div className="team-card-quote" style={{ fontSize: "11px", color: d.textFaint, fontStyle: "italic", lineHeight: 1.5, marginBottom: "10px" }}>"{member.quote}"</div>
                          )}
                          <div style={{ display: "flex", gap: "8px" }}>
                            {[
                              { icon: <GithubIcon />,   href: member.github },
                              { icon: <LinkedinIcon />, href: member.linkedin },
                              { icon: <TwitterIcon />,  href: member.twitter },
                            ].map((s, j) => (
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
<Divider d={d} />

        {/* ══════════════ JOIN US ══════════════ */}
        <section ref={refs.join}>
          <div className="pad-sec" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 48px" }}>
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
                    setFormLoading(true);
                    setFormError("");
                    try {
                      await fetch(CLUB.scriptUrl, {
                        method: "POST", mode: "no-cors",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
                      });
                      setFormSubmitted(true);
                    } catch (err) {
                      setFormError("Something went wrong. Please try again.");
                    } finally {
                      setFormLoading(false);
                    }
                  }}
                    style={{ border: `1px solid ${d.border}`, borderRadius: "8px", padding: "36px", background: d.card }}
                  >
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                      {[{ label: "Full Name", key: "name", placeholder: "Aryan Mehta" }, { label: "Email", key: "email", placeholder: "aryanmehta2025BCS0001@iiitkottayam.ac.in" }].map(f => (
                        <div key={f.key}>
                          <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: d.textMuted, marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{f.label}</label>
                          <input type="text" placeholder={f.placeholder} required value={formData[f.key]}
                            onChange={e => setFormData({ ...formData, [f.key]: e.target.value })}
                            style={inputStyle}
                            onFocus={e => e.target.style.borderColor = d.accent}
                            onBlur={e => e.target.style.borderColor = d.border}
                          />
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                      {[{ label: "Branch", key: "branch", placeholder: "Computer Science" }, { label: "Year", key: "year", placeholder: "1st Year" }].map(f => (
                        <div key={f.key}>
                          <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: d.textMuted, marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{f.label}</label>
                          <input type="text" placeholder={f.placeholder} required value={formData[f.key]}
                            onChange={e => setFormData({ ...formData, [f.key]: e.target.value })}
                            style={inputStyle}
                            onFocus={e => e.target.style.borderColor = d.accent}
                            onBlur={e => e.target.style.borderColor = d.border}
                          />
                        </div>
                      ))}
                    </div>
                    <div style={{ marginBottom: "22px" }}>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: d.textMuted, marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Why do you want to join?</label>
                      <textarea placeholder="Tell us about yourself and what you'd like to build..." rows={4} required
                        value={formData.why} onChange={e => setFormData({ ...formData, why: e.target.value })}
                        style={{ ...inputStyle, resize: "vertical" }}
                        onFocus={e => e.target.style.borderColor = d.accent}
                        onBlur={e => e.target.style.borderColor = d.border}
                      />
                    </div>
                    <button type="submit" style={{
                      width: "100%", padding: "12px", borderRadius: "6px", border: "none",
                      background: d.accent, color: "#fff", fontSize: "14px", fontWeight: 600,
                      cursor: "pointer", transition: "background 0.15s",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = ACCENT_HOVER}
                      onMouseLeave={e => e.currentTarget.style.background = d.accent}
                    >{formLoading ? "Submitting..." : <>Submit Application <ArrowIcon /></>}</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <Divider d={d} />

        {/* FOOTER */}
        <footer style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 48px 36px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "36px", marginBottom: "36px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <div style={{ width: "26px", height: "26px", borderRadius: "5px", background: d.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, color: "#fff" }}>{CLUB.abbr}</div>
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
                {[{ label: "GitHub", href: CLUB.contact.github }, { label: "Instagram", href: CLUB.contact.instagram }].map(l => (
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

      </div>
    </>
  );
}