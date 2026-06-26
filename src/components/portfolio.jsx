import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Achievements", "Contact"];

const SKILLS = {
  Languages: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "C", "HTML5", "CSS3"],
  Frontend: ["React.js", "React TypeScript", "Tailwind CSS", "Material UI", "Responsive Design"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Middleware"],
  Databases: ["MongoDB", "PostgreSQL", "SQL", "PL/SQL", "Redis"],
  "Cloud & Tools": ["AWS Lambda", "Cloudinary", "Vercel", "Git", "GitHub", "Postman"],
};

const EXPERIENCES = [
  {
    role: "Software Developer Intern", company: "Erino.io",
    subtitle: "AI-Powered CRM Platform · Onsite, Bangalore", period: "Nov 2025 – Mar 2026", dot: "bg-violet-500",
    points: [
      "Engineered scalable production features for an AI-based CRM using Node.js, Express.js, PostgreSQL, React.js, and Material UI.",
      "Designed RESTful APIs for customer data management, JWT authentication, and workflow automation.",
      "Optimized backend performance with Redis caching, decreasing API response times for concurrent users.",
      "Architected end-to-end call analysis (frontend → backend → AWS Lambda) enabling AI-driven sales recommendations.",
    ],
  },
  {
    role: "Full Stack Developer Intern", company: "Codeon Technologies",
    subtitle: "Remote", period: "Jun 2025 – Aug 2025", dot: "bg-cyan-500",
    points: [
      "Built responsive cross-browser web components with React.js and Tailwind CSS.",
      "Developed RESTful APIs for property and user management modules using Node.js and Express.js.",
      "Collaborated in a 5-member Agile team using Git and GitHub for version control and code reviews.",
    ],
  },
  {
    role: "Freelance Full Stack Developer", company: "FrameCraft",
    subtitle: "Local Business Website · Remote", period: "Self-Employed", dot: "bg-amber-500",
    points: [
      "Scoped, developed, and deployed a complete production website for a local retail client.",
      "Managed full SDLC from requirement gathering to deployment with remote team collaboration.",
    ],
  },
];

const IcoPulse = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
const IcoDrop = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="M12 2C6 9 4 13 4 16a8 8 0 0 0 16 0c0-3-2-7-8-14z"/></svg>;
const IcoFrame = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>;
const IcoHome = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;

const PROJECTS = [
  { title: "Doctor-Patient Connect", tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"], description: "Full stack web app enabling patients to find doctors based on symptoms using a symptom-matching algorithm. Includes secure JWT auth and role-based access control.", type: "Team Project", gradient: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30", github: null, live: null, Icon: IcoPulse },
  { title: "Blood Donation Management", tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"], description: "3-role application (Donor, Organizer, Admin) to manage campus blood donation events. Features Cloudinary image uploads and production deployment.", type: "Live Project", gradient: "from-red-500/20 to-pink-500/20", border: "border-red-500/30", github: "https://github.com/udaykiran1150/BloodDonationWebapp", live: "https://blood-donation-webapp.vercel.app/", Icon: IcoDrop },
  { title: "FrameCraft", tech: ["React.js", "Node.js", "Express.js", "MongoDB"], description: "Full production website built for a local retail client. Managed the complete SDLC from requirements to deployment with a fully responsive frontend and backend.", type: "Freelance", gradient: "from-amber-500/20 to-orange-500/20", border: "border-amber-500/30", github: "https://github.com/udaykiran1150/FrameCraft", live: "https://frame-craft-9x7n.vercel.app/", Icon: IcoFrame },
  { title: "Real Estate Platform", tech: ["React.js", "Node.js", "Express.js", "MongoDB"], description: "A modern and responsive real estate web application designed to showcase property listings, ongoing projects, and developer portfolios. The platform provides detailed property information, project highlights, and seamless access to contact details, enabling potential buyers and investors to explore opportunities and connect with real estate professionals efficiently.", type: "1st Place", gradient: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/30", github: "https://github.com/udaykiran1150/Estate", live: "https://estate-mu-hazel.vercel.app/", Icon: IcoHome },
];

const ACHIEVEMENTS = [
  { title: "Hackathon Winner", desc: "1st Place at Sree Venkateswara University, Tirupati — Doctor Patient Management prototype using MERN stack (Apr 2025)", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg> },
  { title: "LeetCode 300+", desc: "Solved 300+ problems: Arrays, Trees, Graphs, Dynamic Programming in Java", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { title: "Postman Student Expert", desc: "Certified by Let's Upgrade (2024)", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
  { title: "Git & GitHub Essentials", desc: "Certified by Let's Upgrade (2024)", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
  { title: "Java Fundamentals", desc: "Certified by Udemy (2024)", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg> },
  { title: "CGPA 8.6 / 10", desc: "B.Tech in Computer Science Engineering, RGUKT Andhra Pradesh (2022–2026)", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

function TypewriterText({ texts }) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = texts[idx];
    const speed = deleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!deleting && charIdx < current.length) { setDisplay(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }
      else if (!deleting && charIdx === current.length) { setTimeout(() => setDeleting(true), 1500); }
      else if (deleting && charIdx > 0) { setDisplay(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }
      else { setDeleting(false); setIdx(i => (i + 1) % texts.length); }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts]);
  return <span className="text-violet-400">{display}<span className="animate-pulse">|</span></span>;
}

const IcoLocation = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const IcoEdu = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
const IcoDownload = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const IcoGH = ({ size = 13 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
const IcoLink = () => <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
const IcoMail = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const IcoLinkedIn = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const IcoPhone = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;

const STATS = [
  { val: "1+", label: "Years Experience", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { val: "300+", label: "DSA Problems", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { val: "1st", label: "Hackathon Place", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg> },
  { val: "8.6", label: "CGPA / 10", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
];

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id); setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-sans overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-purple-500/8 rounded-full blur-[80px]" />
      </div>

      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-white"><span className="text-violet-400">S</span>UK</span>
          <div className="hidden md:flex gap-1">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${active === l ? "bg-violet-500/20 text-violet-300" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>{l}</button>
            ))}
          </div>
          <button className="md:hidden text-gray-300 p-2" onClick={() => setMenuOpen(m => !m)}>
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0d0d14]/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map(l => <button key={l} onClick={() => scrollTo(l)} className="text-left py-2 text-gray-300 hover:text-violet-400 transition-colors">{l}</button>)}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="about" className="relative min-h-screen flex items-center pt-20 z-10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-violet-400 text-sm mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Open to opportunities
                </div>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Sai Uday Kiran</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10">
                  <TypewriterText texts={["Full Stack Developer", "MERN Stack Engineer", "Problem Solver", "API Architect"]} />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">Results-driven Full Stack Developer with hands-on experience designing and deploying scalable MERN stack applications. Solved 300+ DSA problems and won hackathons.</p>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => scrollTo("Projects")} className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25">View Projects →</button>
                  <button onClick={() => scrollTo("Contact")} className="px-6 py-3 border border-white/10 hover:border-violet-500/50 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-200 hover:bg-white/5">Get in Touch</button>
                  <a href="/saiudaykiran_resume.pdf" download="SaiUdayKiran_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 border border-violet-500/40 hover:border-violet-400 text-violet-400 hover:text-violet-300 rounded-xl font-medium transition-all duration-200 hover:bg-violet-500/10 hover:scale-105">
                    <IcoDownload /> Download CV
                  </a>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={300}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-2xl blur-xl" />
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-6">
                    {STATS.map(s => (
                      <div key={s.label} className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/8 transition-colors">
                        <div className="flex justify-center mb-2">{s.icon}</div>
                        <div className="text-3xl font-bold text-white mb-1">{s.val}</div>
                        <div className="text-xs text-gray-500">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-400"><IcoLocation /><span>Hyderabad, Telangana, India</span></div>
                    <div className="flex items-center gap-3 text-sm text-gray-400"><IcoEdu /><span>B.Tech CSE · Rajiv Gandhi University · 2026</span></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Technical Arsenal</span>
              <h2 className="text-4xl font-bold mt-2 text-white">Skills & Technologies</h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <AnimatedSection key={cat} delay={i * 80}>
                <div className="group bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300">
                  <h3 className="text-sm font-semibold text-violet-400 tracking-wider uppercase mb-4">{cat}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/8 rounded-lg text-sm text-gray-300 hover:border-violet-500/40 hover:text-violet-300 transition-all duration-200 cursor-default">{skill}</span>)}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Work History</span>
              <h2 className="text-4xl font-bold mt-2 text-white">Experience</h2>
            </div>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent" />
            <div className="space-y-10">
              {EXPERIENCES.map((exp, i) => (
                <AnimatedSection key={i} delay={i * 120}>
                  <div className="relative flex gap-8 pl-16">
                    <div className={`absolute left-4 top-2 w-4 h-4 rounded-full ${exp.dot} ring-4 ring-[#0a0a0f] -translate-x-1/2`} />
                    <div className="flex-1 bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          <p className="text-violet-400 font-medium">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.subtitle}</p>
                        </div>
                        <span className="text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-gray-400 whitespace-nowrap">{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((pt, j) => (
                          <li key={j} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                            <span className="text-violet-500 mt-0.5 shrink-0">▸</span><span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Built Things</span>
              <h2 className="text-4xl font-bold mt-2 text-white">Projects</h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((proj, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={`group relative h-full flex flex-col bg-gradient-to-br ${proj.gradient} border ${proj.border} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300`}>
                  <div className="mb-4"><proj.Icon /></div>
                  <div className="inline-block text-xs font-medium px-2.5 py-1 bg-white/10 rounded-full text-gray-300 mb-3 self-start">{proj.type}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{proj.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-black/30 border border-white/10 rounded-md text-gray-400">{t}</span>)}
                  </div>
                  {(proj.github || proj.live) && (
                    <div className="flex gap-2 pt-3 border-t border-white/10">
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-xs text-gray-300 hover:text-white transition-all duration-200">
                          <IcoGH /> GitHub
                        </a>
                      )}
                      {proj.live && (
                        <a href={proj.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-violet-500/15 hover:bg-violet-500/25 border border-violet-500/30 hover:border-violet-400/50 rounded-lg text-xs text-violet-300 hover:text-violet-200 transition-all duration-200">
                          <IcoLink /> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Recognition</span>
              <h2 className="text-4xl font-bold mt-2 text-white">Achievements & Certifications</h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((a, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="flex gap-4 p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300">
                  <div className="shrink-0 mt-0.5">{a.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{a.title}</h4>
                    <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Let's Talk</span>
            <h2 className="text-4xl font-bold mt-2 text-white mb-6">Get in Touch</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto">I'm actively looking for new opportunities. Whether you have a role in mind or just want to connect — my inbox is open.</p>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: <IcoMail />, label: "Email", val: "udaykiranponnaganti6@gmail.com", href: "mailto:udaykiranponnaganti6@gmail.com" },
                { icon: <IcoLinkedIn />, label: "LinkedIn", val: "linkedin.com/in/udaykiran", href: "https://www.linkedin.com/in/p-sai-uday-kiran-b5a243257/" },
                { icon: <IcoGH size={20} />, label: "GitHub", val: "github.com/udaykiran1150", href: "https://github.com/udaykiran1150" },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300 group">
                  <div className="text-gray-400 group-hover:text-violet-400 transition-colors">{c.icon}</div>
                  <span className="text-xs text-violet-400 font-medium tracking-wider uppercase">{c.label}</span>
                  <span className="text-gray-400 text-xs text-center break-all group-hover:text-white transition-colors">{c.val}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <a href="mailto:udaykiranponnaganti6@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30">
              <IcoMail size={16} /> Say Hello
            </a>
          </AnimatedSection>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5 py-8 text-center">
        <p className="text-gray-600 text-sm">Designed & built by <span className="text-violet-400">P. Sai Uday Kiran</span> · 2025</p>
      </footer>
    </div>
  );
}
