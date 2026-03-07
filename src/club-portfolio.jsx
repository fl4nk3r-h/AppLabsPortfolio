import React,{ useState, useEffect, useRef } from "react";
import ProjectSite, { getRawUrl } from "./projectSite/project-site";
import { light, dark } from "./constants/theme";
import { Divider } from "./components/UI";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import TeamSection from "./sections/TeamSection";
import JoinSection from "./sections/JoinSection";

// ─── Global styles ────────────────────────────────────────────────────────────
const GlobalStyles = () => (
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
      .team-card-quote { display: none !important; }
      .join-form { padding: 36px 25px !important; }
    }
  `}</style>
);

// ─── Root Router ──────────────────────────────────────────────────────────────
export default function ClubPortfolio() {
  const [isDark, setIsDark] = useState(false);
  const [route,       setRoute]       = useState(null);
  const [loadingItem, setLoadingItem] = useState(null);
  const [loadError,   setLoadError]   = useState(null);
  const [mobileMenu,  setMobileMenu]  = useState(false);

  const refs = {
    home:     useRef(null),
    projects: useRef(null),
    team:     useRef(null),
    join:     useRef(null),
  };

  const scrollTo = key => {
    refs[key]?.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

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

  const d = isDark ? dark : light;

  if (route) {
    return <ProjectSite config={route.config} isDark={isDark} setIsDark={setIsDark} onBack={navigateBack} />;
  }

  return (
    <>
      <GlobalStyles />
      <div style={{ background: d.bg, color: d.text, minHeight: "100vh", transition: "background 0.2s, color 0.2s" }}>

        <Navbar d={d} isDark={isDark} setIsDark={setIsDark} mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} scrollTo={scrollTo} />

        <HomeSection     d={d} isDark={isDark} scrollTo={scrollTo} sectionRef={refs.home} />
        <ProjectsSection d={d} sectionRef={refs.projects} onNavigateProject={navigateToProject} loadingItem={loadingItem} loadError={loadError} />
        <TeamSection     d={d} sectionRef={refs.team} />
        <Divider d={d} />
        <JoinSection     d={d} sectionRef={refs.join} />
        <Divider d={d} />
        <Footer d={d} />

      </div>
    </>
  );
}
