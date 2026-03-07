const CLUB = {
  name: "AppLabs",
  abbr: "AL",
  subname: "App Development Club",
  college: "Indian Institute of Information Technology, Kottayam",
  clubLogo: "images/ClubLogo.svg",
  about:
    "AppLabs, the app development club under Beta Labs, is a student-run community of builders, designers, and dreamers passionate about crafting mobile and web applications. We collaborate, ship real products, and grow together — from zero-to-one and beyond.",
  history:
    "Founded in 2019 by a handful of CS students frustrated that theory never met practice, AppLabs has grown from a few members in a dorm room to active builders across departments. We've shipped x apps, held y Hands-On Sessions, and sent alumni to top tech companies.",
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
      name: "CampusConnect",
      desc: "A real-time campus event discovery and RSVP app used by 2,000+ students. Built with React Native, Node.js, and Firebase.",
      screenshot: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80",
      tags: ["React Native", "Firebase", "Node.js"],
      link: "https://github.com/AppLabs-IIITK/",
    },
    completed: [
      { name: "StudyPal",   repo: "nihalnijuv496-wq/3-Body-Problem-Simulation", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&q=80", tags: ["Flutter", "ML"],      link: "https://github.com/AppLabs-IIITK" },
      { name: "GreenTrack", img: "https://images.unsplash.com/photo-1542601906897-ecd5abdd5273?w=300&q=80", tags: ["React", "Charts"],  link: "https://github.com/AppLabs-IIITK" },
      { name: "MealMate",   img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300&q=80", tags: ["iOS", "Swift"],       link: "https://github.com/AppLabs-IIITK" },
      { name: "DevBoard",   img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&q=80", tags: ["Next.js"],            link: "https://github.com/AppLabs-IIITK" },
      { name: "QuizBuzz",   img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=300&q=80", tags: ["React", "Socket.io"], link: "https://github.com/AppLabs-IIITK" },
    ],
    wip: [
      { name: "HealthPulse", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80", tags: ["React Native", "AI"], link: "https://github.com/AppLabs-IIITK" },
      { name: "CodeCollab",  img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=300&q=80", tags: ["Web", "WebRTC"],        link: "https://github.com/AppLabs-IIITK" },
      { name: "JobHunt AI",  img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&q=80", tags: ["Python", "GPT-4"],   link: "https://github.com/AppLabs-IIITK" },
    ],
    events: [
      { name: "Hack Sprint '25", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&q=80", date: "Mar 2025", link: "https://www.instagram.com/betalabs_app.dev/" },
      { name: "UI/UX Workshop",  img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=300&q=80", date: "Jan 2025", link: "https://www.instagram.com/betalabs_app.dev/" },
      { name: "Demo Day Fall",   img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&q=80", date: "Nov 2024", link: "https://www.instagram.com/betalabs_app.dev/" },
      { name: "Git Bootcamp",    img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&q=80", date: "Sep 2024", link: "https://www.instagram.com/betalabs_app.dev/" },
    ],
  },
  team: [
    { name: "Aryan Mehta",  role: "President",     tier: "lead",      quote: "Build things that matter.",        img: "https://i.pravatar.cc/150?img=11", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Priya Nair",   role: "VP Engineering", tier: "lead",      quote: "Ship fast, learn faster.",         img: "https://i.pravatar.cc/150?img=47", github: "#", linkedin: "#" },
    { name: "Rohan Das",    role: "Design Lead",    tier: "sublead",   quote: "Design is how it works.",          img: "https://i.pravatar.cc/150?img=12", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Sneha Iyer",   role: "Mobile Lead",    tier: "sublead",   quote: "Every app starts with an idea.",   img: "https://i.pravatar.cc/150?img=48", github: "#", linkedin: "#" },
    { name: "Karan Patel",  role: "Web Lead",       tier: "sublead",   quote: "The web is our playground.",       img: "https://i.pravatar.cc/150?img=13", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Divya Sharma", role: "Events Head",    tier: "core",      quote: "Community is everything.",         img: "https://i.pravatar.cc/150?img=49", github: "#", linkedin: "#" },
    { name: "Mihir Joshi",  role: "Core Member",    tier: "core",      quote: "Always be building.",              img: "https://i.pravatar.cc/150?img=14", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Tanvi Rao",    role: "Core Member",    tier: "core",      quote: "Code is poetry.",                  img: "https://i.pravatar.cc/150?img=50", github: "#", linkedin: "#" },
    { name: "Aditya Sen",   role: "Volunteer",      tier: "volunteer", quote: "Here to learn and contribute.",    img: "https://i.pravatar.cc/150?img=15", github: "#", linkedin: "#" },
    { name: "Meera Pillai", role: "Volunteer",      tier: "volunteer", quote: "Excited to be part of this.",      img: "https://i.pravatar.cc/150?img=51", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Zaid Khan",    role: "Volunteer",      tier: "volunteer", quote: "Building my first app here.",       img: "https://i.pravatar.cc/150?img=16", github: "#", linkedin: "#" },
    { name: "Nisha Verma",  role: "Volunteer",      tier: "volunteer", quote: "Design thinking advocate.",        img: "https://i.pravatar.cc/150?img=52", github: "#", linkedin: "#" },
    { name: "Ravi Teja",    role: "Volunteer",      tier: "volunteer", quote: "Turning coffee into code.",        img: "https://i.pravatar.cc/150?img=17", github: "#", linkedin: "#", portfolio: "#" },
    { name: "Pooja Menon",  role: "Volunteer",      tier: "volunteer", quote: "Every commit counts.",             img: "https://i.pravatar.cc/150?img=53", github: "#", linkedin: "#" },
  ],
  scriptUrlJoin: "https://script.google.com/macros/s/AKfycbzh3rd1MlFs9LmQ9b1Ny8yleboDsEsGxrjc-Ws_OrOsSzp_05exF5PM2eXXksRpyIWlcQ/exec",
  scriptUrlIdea: "https://script.google.com/macros/s/AKfycbwZAvkHpmBIlItRHdWLlcy1dKiqMBNHLGD6vigTyZebROD9aP_Bx6MCph5PCWVwofsR7w/exec",
  contact: {
    email:     "applabsiiitk@gmail.com",
    instagram: "https://www.instagram.com/betalabs_app.dev/",
    github:    "https://github.com/AppLabs-IIITK",
    discord:   "https://discord.gg/",
    address:   "Indian Institute of Information Technology Kottayam, Valavoor.P.O, Pala, Kottayam - 686635, Kerala, India",
  },
};

export default CLUB;
