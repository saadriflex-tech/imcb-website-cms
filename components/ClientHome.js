"use client";
import Link from "next/link";
import Hero from "@/components/Hero";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { GraduationCap, ClipboardList, Bell, BarChart2, Download, BookOpen, PencilRuler, FlaskConical, ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

function Counter({ from, to, duration = 2 }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Calculate the current value
      const currentVal = Math.floor(progress * (to - from) + from);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [from, to, duration]);

  return <span>{count}</span>;
}

export default function ClientHome({ latestNotices = [] }) {
  const fadeInUp = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const slideUp = {
    hidden: { scale: 0.95, y: 50 },
    visible: { scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const slideInLeft = {
    hidden: { x: -50, scale: 0.95 },
    visible: { x: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  const slideInRight = {
    hidden: { x: 50, scale: 0.95 },
    visible: { x: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  // If no notices are available, fallback to some default ones
  const displayNotices = latestNotices.length > 0 ? latestNotices : [
    { id: 1, title: 'Admissions for 1st Year are open.', type: 'general' },
    { id: 2, title: 'Result of 2nd Year FBISE Annual Exams announced.', type: 'general' }
  ];

  return (
    <div>
      <Hero />
      
      {/* Quick Action Bar */}
      <div 
        className="responsive-quick-actions"
        style={{
          margin: '-30px auto 40px',
          maxWidth: '1000px',
          position: 'relative',
          zIndex: 10,
          padding: '0 20px'
        }}
      >
        {[
          { name: 'Admissions', icon: <GraduationCap key="0" size={18} />, href: '/admissions' },
          { name: 'Merit Lists', icon: <ClipboardList key="1" size={18} />, href: '/notices' },
          { name: 'Notices', icon: <Bell key="2" size={18} />, href: '/notices' },
          { name: 'Results', icon: <BarChart2 key="3" size={18} /> },
          { name: 'Downloads', icon: <Download key="4" size={18} />, href: '/downloads' }
        ].map((item, i) => {
          const btnContent = (
            <motion.div 
              key={i} 
              className={`animate-pop delay-box-${i}`}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(65, 68, 127, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                padding: '15px 10px',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: '700',
                color: 'var(--ink)',
                boxShadow: '0 10px 20px rgba(65, 68, 127, 0.08)',
                cursor: 'pointer',
              }}
            >
              <motion.div 
                whileHover={{ rotate: [0, -20, 20, -15, 15, 0] }}
                transition={{ duration: 0.6 }}
                style={{
                  width: '35px', height: '35px', borderRadius: '50%', background: 'var(--b)', color: '#fff', 
                  margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                {item.icon}
              </motion.div>
              {item.name}
            </motion.div>
          );
          
          return item.href ? (
            <Link href={item.href} key={i} style={{ textDecoration: 'none' }}>
              {btnContent}
            </Link>
          ) : (
            <div key={i}>{btnContent}</div>
          );
        })}
      </div>

      {/* 1. Latest News Ticker */}
      <div style={{ background: 'var(--r-dark)', color: '#fff', padding: '10px 0', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ background: 'var(--r-dark)', padding: '0 20px', fontWeight: 'bold', zIndex: 2, position: 'relative', borderRight: '2px solid rgba(255,255,255,0.2)' }}>
          LATEST NEWS
        </div>
        <div className="ticker-wrap" style={{ flex: 1, overflow: 'hidden', position: 'relative', display: 'flex' }}>
          <div className="ticker-move" style={{ fontSize: '14px' }}>
            {/* Duplicated twice for seamless gapless looping */}
            {[1, 2].map((_, idx) => (
              <div key={idx} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                {displayNotices.map((notice) => (
                  <span key={notice.id} style={{ marginRight: '50px' }}>
                    📢 <Link href="/notices" style={{ textDecoration: 'none', color: '#fff' }}>{notice.title}</Link>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. About & Stats Section */}
      <section id="about" style={{ padding: '80px 20px', background: '#fff' }}>
        <div className="responsive-main-grid" style={{ maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '36px', color: 'var(--b)', marginBottom: '20px', fontFamily: 'serif' }}>A Legacy of Excellence</h2>
            <p style={{ color: 'var(--muted)', lineHeight: '1.8', fontSize: '16px', marginBottom: '30px' }}>
              Islamabad Model College for Boys (IMCB), G-10/4, is a premier educational institution operating under the esteemed Federal Directorate of Education (FDE). Established with the vision of providing accessible, high-quality education to the youth of the capital, the college has grown into a hub of academic excellence and character building.
            </p>
            <Link href="/about">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: 'var(--b)', color: '#fff', padding: '12px 25px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Discover Our History →
              </motion.button>
            </Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ background: 'var(--bg)', padding: '30px 20px', borderRadius: '10px', textAlign: 'center', border: '1px solid var(--line)' }}>
              <div style={{ fontSize: '40px', fontWeight: '900', color: 'var(--r-dark)', marginBottom: '5px' }}><Counter from={1900} to={1987} duration={2.5} /></div>
              <div style={{ fontSize: '14px', color: 'var(--b)', fontWeight: 'bold', textTransform: 'uppercase' }}>Established</div>
            </div>
            <div style={{ background: 'var(--bg)', padding: '30px 20px', borderRadius: '10px', textAlign: 'center', border: '1px solid var(--line)' }}>
              <div style={{ fontSize: '40px', fontWeight: '900', color: 'var(--r-dark)', marginBottom: '5px' }}><Counter from={0} to={11164} duration={3} /></div>
              <div style={{ fontSize: '14px', color: 'var(--b)', fontWeight: 'bold', textTransform: 'uppercase' }}>FBISE Affiliation Code</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Principal's Message Section */}
      <section style={{ padding: '80px 20px', background: 'var(--bg)' }}>
        <motion.div 
          className="responsive-principal-grid" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{ maxWidth: '1200px', margin: '0 auto', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(65, 68, 127, 0.05)', overflow: 'hidden' }}
        >
          {/* Left Side: Image */}
          <motion.div variants={slideInLeft} style={{ position: 'relative', minHeight: '350px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("/principal.jpg")', backgroundSize: 'cover', backgroundPosition: 'top center' }} />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div variants={slideInRight} style={{ padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '36px', color: 'var(--r-dark)', marginBottom: '20px', fontFamily: 'serif', fontWeight: 'bold' }}>
              Principal&apos;s Message
            </h2>
            <p style={{ color: 'var(--ink)', lineHeight: '1.8', fontSize: '15px', marginBottom: '30px', textAlign: 'justify' }}>
              Islamabad Model College for Boys (IMCB) is envisioned to be an internationally acclaimed educational institution, destined to produce future leaders of character. Being a bastion of learning, IMCB stands by the motto <strong style={{color: 'var(--b)'}}>&quot;Leading to Progress and Excellence&quot;</strong>. Distinguished features of our college include a technology-driven innovative teaching environment, highly qualified faculty, and a curriculum compatible with the highest standards. We offer academic excellence alongside character building, ensuring our students become positive contributors to society.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ background: 'var(--r-dark)', color: '#fff', padding: '12px 25px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 5px 15px rgba(183, 88, 88, 0.3)' }}
                >
                  Principal&apos;s Inbox
                </motion.button>
              </Link>
              <span style={{ color: 'var(--ink)', fontSize: '14px', fontWeight: '500' }}>For suggestions & feedback</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Academic Programs Section */}
      <section style={{ padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', color: 'var(--b)', marginBottom: '10px', fontFamily: 'serif' }}>Academic Journey</h2>
            <p style={{ color: 'var(--muted)', fontSize: '16px' }}>Providing comprehensive education and character building from Prep to Higher Secondary level.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {[
              { title: 'Primary Level', desc: 'From Prep to Class V, we focus on foundational learning, creativity, and basic ethics in a nurturing environment.', icon: <BookOpen size={40} color="var(--g)" />, color: 'var(--g)' },
              { title: 'Middle Level', desc: 'Classes VI to VIII build analytical skills and scientific curiosity to prepare students for board examinations.', icon: <PencilRuler size={40} color="var(--ink)" />, color: 'var(--ink)' },
              { title: 'Secondary Level (Matric)', desc: 'Rigorous academic training in Science and Humanities streams under the FBISE curriculum.', icon: <FlaskConical size={40} color="var(--b)" />, color: 'var(--b)' },
              { title: 'Higher Secondary (HSSC)', desc: 'Specialized F.Sc (Pre-Med/Pre-Eng), ICS, I.Com, and FA programs for future career readiness.', icon: <GraduationCap size={40} color="var(--r)" />, color: 'var(--r)' }
            ].map((prog, i) => (
              <Link href="/academics" key={i} style={{ textDecoration: 'none' }}>
                <motion.div 
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                  style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '10px', padding: '40px 30px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', height: '100%' }}
                >
                  <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{prog.icon}</div>
                  <h3 style={{ fontSize: '20px', color: 'var(--b)', marginBottom: '15px' }}>{prog.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>{prog.desc}</p>
                  <div style={{ marginTop: '20px', fontSize: '13px', fontWeight: 'bold', color: prog.color }}>View Details →</div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Campus Life Gallery */}
      <section style={{ padding: '80px 20px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', color: 'var(--b)', marginBottom: '10px', fontFamily: 'serif' }}>Campus Life at IMCB</h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px', marginBottom: '40px' }}>Experience a vibrant environment where academics and extracurriculars thrive together.</p>
          
          <motion.div 
            className="responsive-gallery-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Fake images using unsplash placeholders for the demo to look gorgeous */}
            <motion.div variants={slideUp} whileHover={{ scale: 1.02 }} style={{ height: '250px', backgroundImage: 'url("https://images.unsplash.com/photo-1502143135356-dcdb8a9a3da6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvdGhlcnxlbnwwfHwwfHx8MA%3D%3D")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px' }} />
            <motion.div variants={slideUp} whileHover={{ scale: 1.02 }} style={{ height: '250px', backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px' }} />
            <motion.div variants={slideUp} whileHover={{ scale: 1.02 }} style={{ height: '250px', backgroundImage: 'url("/cricket.png")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px' }} />
          </motion.div>

          <Link href="/gallery">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                marginTop: '40px',
                background: '#fff', color: 'var(--b)', padding: '12px 30px', 
                border: '1px solid var(--b)', borderRadius: '5px', fontWeight: 'bold', 
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' 
              }}
            >
              <ImageIcon size={18} /> View Full Gallery
            </motion.button>
          </Link>
        </div>
      </section>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={staggerContainer}
        style={{ maxWidth: '1200px', margin: '0 auto 50px', padding: '0 20px' }}
      >
        <motion.div variants={fadeInUp} className="responsive-main-grid" style={{ background: 'linear-gradient(100deg, #303264, #414380)', color: '#fff', padding: '40px', borderRadius: '10px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#fff', marginBottom: '10px', fontSize: 'clamp(24px, 4vw, 32px)' }}>Admissions Open</h2>
            <p style={{ color: '#dce9f8', fontSize: '16px', marginBottom: '20px' }}>Academic Session 2025 - 2026. Build your future with IMCB.</p>
            <Link href="/admissions">
              <motion.button 
                animate={{ boxShadow: ['0px 0px 0px rgba(216,72,71,0)', '0px 0px 15px rgba(216,72,71,0.8)', '0px 0px 0px rgba(216,72,71,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: 'var(--r)', color: '#fff', padding: '12px 24px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', width: 'max-content' }}
              >
                Admission Details →
              </motion.button>
            </Link>
          </div>
          <motion.div variants={staggerContainer} style={{ fontSize: '14px', color: '#dce9f8', lineHeight: '2' }}>
            <motion.div variants={slideInRight}>✓ Programs: F.Sc, FA, ICS, I.Com</motion.div>
            <motion.div variants={slideInRight}>✓ Eligibility: As per FBISE Criteria</motion.div>
            <motion.div variants={slideInRight}>✓ Important Dates: 05 Sep - 30 Sep 2025</motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
    </div>
  );
}

