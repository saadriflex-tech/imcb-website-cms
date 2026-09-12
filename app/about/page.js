"use client";
import { motion } from "framer-motion";
import { BookOpen, Shield, Lightbulb, Trophy, Microscope, Monitor, TestTube, ArrowRight } from "lucide-react";
import Link from 'next/link';
import Hero from "@/components/Hero";

export default function AboutPage() {
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

  const slideInRight = {
    hidden: { x: 50, scale: 0.95 },
    visible: { x: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      {/* 1. Hero Section */}
      <Hero 
        bgImage="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=1600&q=80"
        tagline="About Us"
        title="Our Heritage & Future"
        subtitle="IMCB G-10/4, Islamabad"
        description="Discover the legacy, values, and vision that drive our institution to mold the leaders of tomorrow."
        buttons={
          <motion.button 
            onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            style={{ background: 'transparent', color: '#fff', padding: '15px 25px', border: '2px solid #fff', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}
          >
            Explore Our History ↓
          </motion.button>
        }
      />

      {/* 2. Our History & Legacy */}
      <section id="journey" style={{ padding: '80px 20px', background: '#fff' }}>
        <motion.div 
          className="responsive-principal-grid" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          {/* Left Side: Image */}
          <motion.div variants={slideInLeft} style={{ position: 'relative', minHeight: '400px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '12px' }} />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div variants={slideInRight} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px' }}>
            <h2 style={{ fontSize: '32px', color: 'var(--b)', marginBottom: '20px', fontFamily: 'serif' }}>Our Journey</h2>
            <p style={{ color: 'var(--ink)', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px', textAlign: 'justify' }}>
              Established in 1987, Islamabad Model College for Boys (IMCB) G-10/4 has grown into a premier educational institution under the Federal Directorate of Education (FDE). We are proud of our rich history of nurturing academic brilliance and moral integrity.
            </p>
            <p style={{ color: 'var(--ink)', lineHeight: '1.8', fontSize: '16px', textAlign: 'justify' }}>
              Affiliated with the Federal Board of Intermediate and Secondary Education (FBISE), we offer comprehensive educational programs spanning from Preparatory (Prep) classes all the way up to Higher Secondary School Certificate (HSSC). Over the decades, our alumni have gone on to serve the nation in prestigious fields including medicine, engineering, civil services, and the armed forces.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Mission & Vision */}
      <section style={{ padding: '80px 20px', background: 'var(--bg)' }}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
        >
          {/* Mission Card */}
          <motion.div variants={slideUp} style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', borderTop: '5px solid var(--r)' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--b)', marginBottom: '15px', fontFamily: 'serif' }}>Our Mission</h3>
            <p style={{ color: 'var(--ink)', lineHeight: '1.7', fontSize: '15px' }}>
              To provide a technology-driven, innovative teaching environment that fosters academic excellence alongside rigorous character building, ensuring our students become positive and productive contributors to society. <strong>&quot;Leading to Progress and Excellence&quot;</strong> is not just our motto, it is our daily practice.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={slideUp} style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', borderTop: '5px solid var(--b)' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--b)', marginBottom: '15px', fontFamily: 'serif' }}>Our Vision</h3>
            <p style={{ color: 'var(--ink)', lineHeight: '1.7', fontSize: '15px' }}>
              IMCB G-10/4 is envisioned to be an internationally acclaimed educational institution, destined to produce future leaders of character. We strive to maintain a curriculum compatible with the highest standards and cultivate an environment where critical thinking and moral values flourish.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Full Principal's Message */}
      <section style={{ padding: '80px 20px', background: '#fff' }}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideUp}
          style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
        >
          <img src="/principal.jpg" alt="Principal" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 20px', border: '3px solid var(--g)' }} />
          <h2 style={{ fontSize: '28px', color: 'var(--r-dark)', marginBottom: '10px', fontFamily: 'serif' }}>Principal&apos;s Message</h2>
          <div style={{ width: '50px', height: '3px', background: 'var(--r)', margin: '0 auto 30px' }}></div>
          <p style={{ color: 'var(--ink)', lineHeight: '1.8', fontSize: '16px', textAlign: 'justify', marginBottom: '20px' }}>
            Islamabad Model College for Boys (IMCB) is envisioned to be an internationally acclaimed educational institution, destined to produce future leaders of character. Being a bastion of learning, IMCB stands by the motto "Leading to Progress and Excellence".
          </p>
          <p style={{ color: 'var(--ink)', lineHeight: '1.8', fontSize: '16px', textAlign: 'justify' }}>
            Distinguished features of our college include a technology-driven innovative teaching environment, highly qualified faculty, and a curriculum compatible with the highest standards. We offer academic excellence alongside character building, ensuring our students become positive contributors to society. It is my firm belief that education is a shared commitment between dedicated teachers, motivated students, and enthusiastic parents with high expectations.
          </p>
        </motion.div>
      </section>

      {/* 5. Core Values */}
      <section style={{ 
        padding: '80px 20px', 
        color: '#fff',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://media.istockphoto.com/id/1193287049/photo/bookshelves-in-modern-public-library.webp?a=1&b=1&s=612x612&w=0&k=20&c=rrtkIh1Y0_1BzU98h2KYk6W4v-LxISUIT0WGI1yezmE=")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '10px', fontFamily: 'serif', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Our Core Values</h2>
            <p style={{ color: '#fff', textShadow: '0 1px 5px rgba(0,0,0,0.8)' }}>The pillars that uphold our institutional integrity.</p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}
          >
            {[
              { icon: <BookOpen size={40} />, title: "Academic Excellence", desc: "Rigorous FDE & FBISE standards." },
              { icon: <Shield size={40} />, title: "Discipline", desc: "Building moral character and integrity." },
              { icon: <Lightbulb size={40} />, title: "Innovation", desc: "Technology-driven learning environment." },
              { icon: <Trophy size={40} />, title: "Sportsmanship", desc: "Physical health and team spirit." }
            ].map((value, i) => (
              <motion.div key={i} variants={slideUp} whileHover={{ y: -10 }} style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', padding: '30px 20px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <div style={{ color: 'var(--r)', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{value.icon}</div>
                <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>{value.title}</h4>
                <p style={{ fontSize: '14px', color: '#dce9f8', lineHeight: '1.5' }}>{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Facilities Preview */}
      <section style={{ padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h2 style={{ fontSize: '32px', color: 'var(--b)', marginBottom: '10px', fontFamily: 'serif' }}>Campus Facilities</h2>
              <p style={{ color: 'var(--muted)', fontSize: '16px' }}>State-of-the-art infrastructure for hands-on learning.</p>
            </div>
            <Link href="/facilities">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: 'var(--r)', color: '#fff', padding: '12px 25px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                View All Facilities <ArrowRight size={16} />
              </motion.button>
            </Link>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
          >
            {[
              { icon: <Microscope size={24} />, title: "STEM Lab", img: "https://media.istockphoto.com/id/2227836068/photo/teacher-showing-science-experiment-to-class-at-high-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=awuwRZgWzOOpXzczvK6oEZXupEoEekTdOlGszxxD3FA=" },
              { icon: <Monitor size={24} />, title: "Computer Labs", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80" },
              { icon: <TestTube size={24} />, title: "Physics & Chemistry Labs", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80" }
            ].map((facility, i) => (
              <motion.div key={i} variants={slideUp} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', background: '#fff' }}>
                <div style={{ height: '200px', backgroundImage: `url(${facility.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ background: 'var(--bg)', padding: '12px', borderRadius: '50%', color: 'var(--b)' }}>
                    {facility.icon}
                  </div>
                  <b style={{ fontSize: '18px', color: 'var(--ink)' }}>{facility.title}</b>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
