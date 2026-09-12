"use client";
import { motion } from "framer-motion";
import { Microscope, Monitor, TestTube, Globe, Laptop, Beaker, Zap, Trophy, Users, Coffee, Target, Circle, Flag, Medal, Award, Flame, Mic, BookOpen } from "lucide-react";
import Hero from "@/components/Hero";

export default function FacilitiesPage() {
  const staggerContainer = {
    hidden: {},
    visible: {
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

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      
      {/* 1. Hero Section */}
      <Hero 
        bgImage="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
        tagline="Campus Facilities"
        title="State-of-the-Art Infrastructure"
        subtitle="Empowering hands-on learning and physical excellence."
        description="From advanced technology labs to sprawling sports grounds, our facilities are designed to nurture both mind and body."
        buttons={
          <motion.button 
            onClick={() => document.getElementById('labs')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            style={{ background: 'transparent', color: '#fff', padding: '15px 25px', border: '2px solid #fff', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}
          >
            Explore Facilities ↓
          </motion.button>
        }
      />

      {/* 2. Science & Technology Labs */}
      <section id="labs" style={{ padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: 'var(--b)', marginBottom: '10px', fontFamily: 'serif' }}>Academic Labs & Technology</h2>
            <p style={{ color: 'var(--muted)', fontSize: '16px' }}>Modern spaces equipped for exploration, research, and digital learning.</p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}
          >
            {[
              { icon: <Microscope size={24} />, title: "STEM Lab", img: "https://media.istockphoto.com/id/2227836068/photo/teacher-showing-science-experiment-to-class-at-high-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=awuwRZgWzOOpXzczvK6oEZXupEoEekTdOlGszxxD3FA=" },
              { icon: <Zap size={24} />, title: "Physics Lab", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80" },
              { icon: <Monitor size={24} />, title: "Computer Lab", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80" },
              { icon: <Globe size={24} />, title: "Virtual Lab", img: "https://images.unsplash.com/photo-1779358296802-715fc9fbc152?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlydHVhbCUyMGxhYiUyMGluJTIwY29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D" },
              { icon: <Laptop size={24} />, title: "Google Classroom", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" },
              { icon: <TestTube size={24} />, title: "Biology Lab", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80" },
              { icon: <Beaker size={24} />, title: "Chemistry Lab", img: "https://images.unsplash.com/photo-1705727210721-961cc64a6895?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlbWlzdHJ5JTIwbGFiJTIwaW4lMjBjb2xsZWdlfGVufDB8fDB8fHww" },
              { icon: <BookOpen size={24} />, title: "Library & Resource Center", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80" },
              { icon: <Mic size={24} />, title: "Art & Cultural Room", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80" }
            ].map((facility, i) => (
              <motion.div key={i} variants={slideUp} whileHover={{ y: -5 }} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', background: 'var(--bg)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ height: '220px', backgroundImage: `url(${facility.img})`, backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0 }} />
                <div style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
                  <div style={{ background: '#fff', padding: '12px', borderRadius: '50%', color: 'var(--b)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', flexShrink: 0 }}>
                    {facility.icon}
                  </div>
                  <h4 style={{ fontSize: '18px', color: 'var(--b)', fontWeight: 'bold' }}>{facility.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Sports & Recreation (Parallax Overlay style like Core Values) */}
      <section style={{ 
        padding: '100px 20px', 
        color: '#fff',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&q=80")', // stadium background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <Trophy size={48} color="var(--r)" style={{ margin: '0 auto 15px' }} />
            <h2 style={{ fontSize: '32px', marginBottom: '10px', fontFamily: 'serif', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Sports & Recreation</h2>
            <p style={{ color: '#fff', textShadow: '0 1px 5px rgba(0,0,0,0.8)', fontSize: '16px' }}>Extensive grounds for physical development and competitive excellence.</p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
          >
            {[
              { name: "Cricket Ground", icon: <Target size={28} /> },
              { name: "Football Field", icon: <Circle size={28} /> },
              { name: "Hockey Field", icon: <Flag size={28} /> },
              { name: "Volleyball Court", icon: <Flame size={28} /> },
              { name: "Table Tennis", icon: <Medal size={28} /> },
              { name: "Badminton", icon: <Award size={28} /> }
            ].map((sport, i) => (
              <motion.div 
                key={i} 
                variants={slideUp} 
                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.2)' }} 
                style={{ 
                  background: 'rgba(255,255,255,0.1)', 
                  backdropFilter: 'blur(10px)', 
                  padding: '30px 20px', 
                  borderRadius: '12px', 
                  textAlign: 'center', 
                  border: '1px solid rgba(255,255,255,0.3)', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                <div style={{ color: 'var(--r)' }}>{sport.icon}</div>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>{sport.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Amenities */}
      <section style={{ padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', color: 'var(--b)', marginBottom: '10px', fontFamily: 'serif' }}>Campus Amenities</h2>
            <p style={{ color: 'var(--muted)', fontSize: '16px' }}>Spaces designed for community, events, and relaxation.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            {/* Auditorium */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={slideInLeft}
              style={{ display: 'flex', flexDirection: 'column', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--line)' }}
            >
              <div style={{ height: '300px', backgroundImage: 'url("https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ padding: '30px', background: 'var(--bg)', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <Users size={32} color="var(--r)" />
                  <h3 style={{ fontSize: '24px', color: 'var(--b)', fontFamily: 'serif' }}>Main Auditorium</h3>
                </div>
                <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>A grand, fully-equipped hall designed to host massive college events, student assemblies, debates, and annual ceremonies.</p>
              </div>
            </motion.div>

            {/* Cafeteria */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={slideInLeft}
              style={{ display: 'flex', flexDirection: 'column', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--line)' }}
            >
              <div style={{ height: '300px', backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ padding: '30px', background: 'var(--bg)', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <Coffee size={32} color="var(--r)" />
                  <h3 style={{ fontSize: '24px', color: 'var(--b)', fontFamily: 'serif' }}>College Cafeteria</h3>
                </div>
                <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>A hygienic, spacious, and vibrant social hub where students can relax and enjoy a variety of nutritious meals between classes.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
