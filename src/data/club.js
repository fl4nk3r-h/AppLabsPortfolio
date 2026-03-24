const CLUB = {
  name: "AppLabs",
  abbr: "AL",
  subname: "App Development Club",
  college: "Indian Institute of Information Technology, Kottayam",
  clubLogo: "images/ClubLogo.svg",
  about:
    "AppLabs, the app development club under Beta Labs, is a student-run community of builders, designers, and dreamers passionate about crafting mobile and web applications. We collaborate, ship real products, and grow together — from zero-to-one and beyond.",
  history:
    "Founded by a handful of CS students frustrated that theory never met practice, AppLabs has grown from a few members in a dorm room to active builders across departments. We've shipped 3 apps, held 3 Hands-On Sessions.",
  historyImages: [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
  ],
  whatWeDo: [
    { icon: "📱", title: "Mobile Apps", desc: "iOS & Android with React Native and Flutter" },
    { icon: "🌐", title: "Web Apps", desc: "Full-stack web applications and SaaS products" },
    { icon: "🏆", title: "Hands-On Sessions", desc: "Direct, interactive coding sessions" },
    { icon: "🎓", title: "Workshops", desc: "Weekly sessions on cutting-edge tech stacks" },
  ],
  projects: {
    featured: {
      name: "Apoorv App",
      desc: "A real-time campus event discovery and RSVP app used by 100+ students. Built with Flutter & Firebase.",
      screenshot: "../res/projects/Apoorv.png",
      tags: ["Dart", "Firebase","TypeScript"],
      link: "https://github.com/AppLabs-IIITK/apoorv_app",
    },
    completed: [
      { name: "StudyPal", repo: "nihalnijuv496-wq/3-Body-Problem-Simulation", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&q=80", tags: ["Flutter", "ML"], link: "https://github.com/AppLabs-IIITK" },
      { name: "Geo-Quest", img: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tags: ["React-Native", "Java"], link: "https://github.com/AppLabs-IIITK" },
    ],
    wip: [
      { name: "HealthPulse", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80", tags: ["React Native", "AI" , "Java"], link: "https://github.com/AppLabs-IIITK" },
    ],
    events: [
      { name: "Pentagon - GeoQuest", img: "https://plus.unsplash.com/premium_photo-1661313651013-e1bee6b0e558?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", date: "Mar 2026", link: "https://www.instagram.com/betalabs_app.dev/" },
      { name: "Flutter Session", img: "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", date: "Feb 2026", link: "https://www.instagram.com/betalabs_app.dev/" },
      { name: "Session on API's", img: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", date: "Nov 2025", link: "https://www.instagram.com/betalabs_app.dev/" },
      { name: "Vibe Coding Hackathon", img: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", date: "Oct 2025", link: "https://www.instagram.com/betalabs_app.dev/" },
    ],
  },
  team: [
    { name: "Akhil K.", role: "Lead", tier: "lead", quote: "Build things that matter.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?11", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Jefin Francis", role: "Lead", tier: "lead", quote: "Ship fast, learn faster.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?1", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Sam Joe Chalissery", role: "Sub-Lead", tier: "sublead", quote: "Design is how it works.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?2123456789", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Aritra Chakraborty", role: "Sub-Lead", tier: "sublead", quote: "Every app starts with an idea.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?3123456789", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Nidhishree Renukaprasad", role: "Sub-Lead", tier: "sublead", quote: "The web is our playground.", img: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=John?4123456789", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Muhamed Fadhil", role: "Core Member", tier: "core", quote: "Community is everything.", img: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=John?Code", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Venkata Ganesh Reddy", role: "Core Member", tier: "core", quote: "Always be building.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?1co", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Abhinav Sudhi K", role: "Core Member", tier: "core", quote: "Code is poetry.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?11234567894", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Manav A", role: "Volunteer", tier: "volunteer", quote: "Here to learn and contribute.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?1123", github: "#", linkedin: "#" },
    { name: "Navaneeth Mohan", role: "Volunteer", tier: "volunteer", quote: "Excited to be part of this.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?11dffeer", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Nihal V", role: "Volunteer", tier: "volunteer", quote: "Building my first app here.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?1125abcsd", github: "#", linkedin: "#" },
    { name: "Thiru sakthi vel", role: "Volunteer", tier: "volunteer", quote: "Design thinking advocate.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?1126abc1", github: "#", linkedin: "#" },
    { name: "Mohammed Zahan", role: "Volunteer", tier: "volunteer", quote: "Turning coffee into code.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?112333wewefgdsavbht", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Sammith Krishna Jalluri", role: "Volunteer", tier: "volunteer", quote: "Every commit counts.", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=John?1124554ttmm8", github: "#", linkedin: "#" },
  ],
  scriptUrlJoin: "https://script.google.com/macros/s/AKfycbzh3rd1MlFs9LmQ9b1Ny8yleboDsEsGxrjc-Ws_OrOsSzp_05exF5PM2eXXksRpyIWlcQ/exec",
  scriptUrlIdea: "https://script.google.com/macros/s/AKfycbwZAvkHpmBIlItRHdWLlcy1dKiqMBNHLGD6vigTyZebROD9aP_Bx6MCph5PCWVwofsR7w/exec",
  contact: {
    email: "applabsiiitk@gmail.com",
    instagram: "https://www.instagram.com/betalabs_app.dev/",
    github: "https://github.com/AppLabs-IIITK",
    discord: "https://discord.gg/",
    address: "Indian Institute of Information Technology Kottayam, Valavoor.P.O, Pala, Kottayam - 686635, Kerala, India",
  },
};

export default CLUB;
