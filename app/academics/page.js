"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { GraduationCap, BookOpen, Users, Brain, Microscope, Monitor, Compass, PenTool, CheckCircle, Target, Book, Award, Quote, ArrowRight, TrendingUp, Clock, UserCheck } from "lucide-react";
import Hero from "@/components/Hero";

function AnimatedCounter({ from, to, duration = 2, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function FacilitiesPage() {
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <Hero 
        bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1600&q=80"
        tagline="Academics"
        title="Nurturing Leaders of Tomorrow"
        subtitle="From foundational early years to rigorous college preparation, we guide students through a comprehensive and enriching educational journey."
        ctaText="Explore Programs ↓"
        ctaLink="#programs"
      />

      {/* 2. The Academic Journey (3 Tiers) */}
      <section id="programs" style={{ padding: '100px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', color: 'var(--b)', marginBottom: '15px', fontFamily: 'serif' }}>The Academic Journey</h2>
            <p style={{ color: 'var(--muted)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>A structured, three-tier educational pathway designed to build strong foundations, develop analytical thinking, and achieve academic excellence.</p>
          </div>

          {/* Tier 1: Junior Section */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center', marginBottom: '100px' }}
          >
            <motion.div variants={slideInLeft} style={{ flex: '1 1 400px' }}>
              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" alt="Junior Section" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <PenTool size={20} color="var(--r)" />
                  <span style={{ fontWeight: 'bold', color: 'var(--b)' }}>Prep to Class 5</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={slideInRight} style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '32px', color: 'var(--b)', marginBottom: '20px', fontFamily: 'serif' }}>Junior Section</h3>
              <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: '1.7', marginBottom: '20px' }}>
                Our Junior Section provides a warm, nurturing, and highly interactive environment for early learners. We focus on building a strong foundation in core subjects while encouraging curiosity and creativity.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {['Activity-based interactive learning', 'Focus on cognitive and social development', 'Dedicated and highly trained early-education teachers', 'Safe, vibrant, and engaging classroom environments'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--b)' }}>
                    <CheckCircle size={24} color="var(--r)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '16px' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Tier 2: Middle Section */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '50px', alignItems: 'center', marginBottom: '100px' }}
          >
            <motion.div variants={slideInLeft} style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '32px', color: 'var(--b)', marginBottom: '20px', fontFamily: 'serif' }}>Middle Section</h3>
              <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: '1.7', marginBottom: '20px' }}>
                Spanning Classes 6 through 8, the Middle Section bridges the gap between foundational learning and serious academic rigor. Students begin exploring diverse subjects in greater depth, developing critical thinking and analytical skills.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {['Introduction to specialized science and computer subjects', 'Development of independent study habits', 'Participation in debates, quizzes, and projects', 'Strong emphasis on character building and ethics'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--b)' }}>
                    <CheckCircle size={24} color="var(--r)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '16px' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={slideInRight} style={{ flex: '1 1 400px' }}>
              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80" alt="Middle Section" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <Compass size={20} color="var(--r)" />
                  <span style={{ fontWeight: 'bold', color: 'var(--b)' }}>Class 6 to Class 8</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tier 3: Senior Section */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            variants={slideUp}
            style={{ background: 'var(--bg)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', border: '1px solid var(--line)' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 400px', padding: '60px' }}>
                <h3 style={{ fontSize: '32px', color: 'var(--b)', marginBottom: '20px', fontFamily: 'serif' }}>Senior Section & College</h3>
                <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: '1.7', marginBottom: '30px' }}>
                  The pinnacle of the IMCB journey. From Class 9 to 12, students engage in highly specialized, rigorous coursework designed to achieve top results in the Federal Board examinations and secure admissions to premier universities.
                </p>
                
                <h4 style={{ fontSize: '20px', color: 'var(--b)', marginBottom: '15px', fontWeight: 'bold' }}>Programs Offered</h4>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  
                  {/* Matriculation */}
                  <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', border: '1px solid var(--line)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                      <Book size={24} color="var(--r)" />
                      <h5 style={{ fontSize: '18px', color: 'var(--b)', fontWeight: 'bold' }}>Matriculation</h5>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--muted)' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--r)' }} /> Biology Group</li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--r)' }} /> Computer Science Group</li>
                    </ul>
                  </div>

                  {/* HSSC / Intermediate */}
                  <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', border: '1px solid var(--line)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                      <GraduationCap size={24} color="var(--r)" />
                      <h5 style={{ fontSize: '18px', color: 'var(--b)', fontWeight: 'bold' }}>HSSC (Intermediate)</h5>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--muted)' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--r)' }} /> Pre-Medical</li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--r)' }} /> Pre-Engineering</li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--r)' }} /> ICS (Computer Science)</li>
                    </ul>
                  </div>

                </div>
              </div>
              <div style={{ flex: '1 1 300px', minHeight: '400px', backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                  <Award size={20} color="var(--r)" />
                  <span style={{ fontWeight: 'bold' }}>Class 9 to Class 12</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Teaching Methodology (Glassmorphism Parallax) */}
      <section style={{ 
        padding: '100px 20px', 
        color: '#fff',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '15px', fontFamily: 'serif', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Our Teaching Methodology</h2>
            <p style={{ color: '#fff', textShadow: '0 1px 5px rgba(0,0,0,0.8)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>We believe in holistic education that goes beyond textbooks, fostering critical thinking, moral values, and real-world skills.</p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}
          >
            {[
              { 
                icon: <Users size={32} />, 
                title: "Experienced Faculty", 
                desc: "Our highly qualified educators bring years of experience and a passion for teaching, ensuring personalized attention and guidance for every student." 
              },
              { 
                icon: <Brain size={32} />, 
                title: "Holistic Development", 
                desc: "We focus equally on academics, sports, character building, and extracurricular activities to nurture well-rounded, confident individuals." 
              },
              { 
                icon: <Target size={32} />, 
                title: "Modern Assessments", 
                desc: "Regular testing, detailed feedback, and close parent-teacher coordination ensure that students stay on track to achieve their highest potential." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={slideUp} 
                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.15)' }} 
                style={{ 
                  flex: '1 1 300px',
                  maxWidth: '360px',
                  background: 'rgba(255,255,255,0.05)', 
                  backdropFilter: 'blur(10px)', 
                  padding: '40px 30px', 
                  borderRadius: '16px', 
                  textAlign: 'center', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}
              >
                <div style={{ color: 'var(--r)' }}>{feature.icon}</div>
                <h4 style={{ fontSize: '22px', fontWeight: 'bold', color: '#fff' }}>{feature.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Animated Academic Statistics */}
      <section style={{ padding: '80px 20px', background: 'var(--b)', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}
          >
            {[
              { icon: <TrendingUp size={40} />, endValue: 98, suffix: "%", label: "FBISE Pass Rate" },
              { icon: <Clock size={40} />, endValue: 40, suffix: "+", label: "Years of Legacy" },
              { icon: <UserCheck size={40} />, endValue: 50, suffix: "+", label: "Expert Faculty" },
              { icon: <GraduationCap size={40} />, endValue: 10, suffix: "k+", label: "Successful Alumni" }
            ].map((stat, i) => (
              <motion.div key={i} variants={slideUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                <div style={{ color: 'var(--r)' }}>{stat.icon}</div>
                <h3 style={{ fontSize: '48px', fontWeight: 'bold', margin: 0, fontFamily: 'serif', color: '#fff' }}>
                  <AnimatedCounter from={0} to={stat.endValue} suffix={stat.suffix} />
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Principal's Message */}
      <section style={{ padding: '100px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={slideUp}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{ 
              width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', 
              border: '4px solid var(--g)', marginBottom: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}>
              <img src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=400&q=80" alt="Principal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <h2 style={{ fontSize: '28px', color: 'var(--muted)', fontFamily: 'serif', margin: 0 }}>Principal's Message</h2>
            <div style={{ width: '40px', height: '2px', background: 'var(--muted)', margin: '15px auto 30px' }} />
            
            <p style={{ fontSize: '16px', color: 'var(--b)', lineHeight: '1.8', marginBottom: '20px' }}>
              Islamabad Model College for Boys (IMCB) is envisioned to be an internationally acclaimed educational institution, destined to produce future leaders of character. Being a bastion of learning, IMCB stands by the motto "Leading to Progress and Excellence".
            </p>
            <p style={{ fontSize: '16px', color: 'var(--b)', lineHeight: '1.8' }}>
              Distinguished features of our college include a technology-driven innovative teaching environment, highly qualified faculty, and a curriculum compatible with the highest standards. We offer academic excellence alongside character building, ensuring our students become positive contributors to society. It is my firm belief that education is a shared commitment between dedicated teachers, motivated students, and enthusiastic parents with high expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. Wall of Fame (Alumni Teaser) */}
      <section style={{ padding: '100px 20px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', color: 'var(--b)', marginBottom: '15px', fontFamily: 'serif' }}>Wall of Fame</h2>
          <p style={{ color: 'var(--muted)', fontSize: '18px', maxWidth: '700px', margin: '0 auto 60px' }}>Our alumni have secured top board positions and gone on to study at Pakistan's most prestigious universities.</p>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginBottom: '60px' }}
          >
            {[
              { name: "Ali Hassan", uni: "NUST, Islamabad", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80", tag: "Pre-Engineering" },
              { name: "Usman Tariq", uni: "King Edward Medical", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", tag: "Pre-Medical" },
              { name: "Bilal Khan", uni: "FAST NUCES", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80", tag: "ICS" }
            ].map((alumni, i) => (
              <motion.div key={i} variants={slideUp} whileHover={{ y: -10 }} style={{ flex: '1 1 300px', maxWidth: '350px', background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'left', border: '1px solid var(--line)' }}>
                <img src={alumni.img} alt={alumni.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ padding: '25px' }}>
                  <div style={{ background: 'var(--line)', color: 'var(--muted)', display: 'inline-block', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '15px' }}>{alumni.tag}</div>
                  <h4 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--b)', margin: '0 0 5px' }}>{alumni.name}</h4>
                  <p style={{ color: 'var(--muted)', margin: 0, display: 'flex', alignItems: 'center', gap: '5px' }}><GraduationCap size={16} color="var(--r)" /> {alumni.uni}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <a href="/alumni" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--b)', color: '#fff', padding: '15px 40px', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', transition: 'background 0.3s' }}>
            Explore Alumni Network <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
}
