"use client";
import { motion } from "framer-motion";
import { FileText, UploadCloud, ClipboardList, CheckCircle, CalendarDays, Download, GraduationCap, Award, BookOpen, ChevronRight, FileArchive, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";

export default function AdmissionsPage() {
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

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <Hero 
        bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80"
        tagline="Admissions"
        title="Join IMCB G-10/4"
        subtitle="Your journey to excellence starts here. We are now accepting online applications for the upcoming academic session."
        ctaText="Apply Online Now"
        ctaLink="#apply"
      />

      {/* 2. Admission Process (4 Steps) */}
      <section id="apply" style={{ padding: '100px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', color: 'var(--b)', marginBottom: '15px', fontFamily: 'serif' }}>Admission Process</h2>
            <p style={{ color: 'var(--muted)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>Applying to IMCB is simple and entirely online. Follow these four steps to complete your application.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', position: 'relative' }}
          >
            {[
              { icon: <FileText size={32} />, title: "1. Read Prospectus", desc: "Download and read the official college prospectus to understand the programs and rules." },
              { icon: <UploadCloud size={32} />, title: "2. Apply Online", desc: "Fill out the online application form and upload scanned copies of your academic documents." },
              { icon: <ClipboardList size={32} />, title: "3. Merit List", desc: "Wait for the official merit list to be displayed on our website and notice board." },
              { icon: <CheckCircle size={32} />, title: "4. Interview & Fee", desc: "Clear the final interview and submit your fees to secure your admission." }
            ].map((step, i) => (
              <motion.div 
                key={i} variants={slideUp} whileHover={{ y: -10 }}
                style={{ background: 'var(--bg)', padding: '40px 30px', borderRadius: '16px', border: '1px solid var(--line)', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', position: 'relative' }}
              >
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#fff', color: 'var(--r)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--b)', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '15px' }}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <a href="https://portal.imcb.edu.pk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', background: 'var(--r)', color: '#fff', border: 'none', padding: '15px 40px', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 5px 20px rgba(218, 73, 72, 0.4)', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Open Application Portal <ArrowRight size={20} />
            </a>
          </div>

        </div>
      </section>

      {/* 3. Eligibility Criteria */}
      <section style={{ 
        padding: '120px 20px', 
        color: '#fff',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', color: '#fff', marginBottom: '15px', fontFamily: 'serif' }}>Eligibility Criteria</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>Ensure you meet the academic requirements before applying.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
          >
            {[
              { icon: <BookOpen size={36} />, title: "Middle Section (6-8)", reqs: ["Passed Class 5 / Previous Grade", "School Leaving Certificate", "Pass College Entry Test (50%+)"] },
              { icon: <Award size={36} />, title: "Matriculation (9-10)", reqs: ["Passed Class 8 Annual Exam", "Minimum 60% Marks for Science", "Character Certificate from previous school"] },
              { icon: <GraduationCap size={36} />, title: "HSSC (11-12)", reqs: ["Passed SSC (Matric)", "Strictly on Merit (80%+ for Pre-Med/Eng)", "Subject to FBISE rules"] }
            ].map((crit, i) => (
              <motion.div key={i} variants={slideUp} style={{ background: 'rgba(30, 30, 30, 0.85)', backdropFilter: 'blur(12px)', padding: '40px 30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <div style={{ color: 'var(--r)', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{crit.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--b)', marginBottom: '20px' }}>{crit.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {crit.reqs.map((req, j) => (
                    <li key={j} style={{ color: '#fff', fontSize: '15px', lineHeight: '1.5' }}>
                      {req}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Important Dates & Downloads */}
      <section style={{ padding: '100px 20px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          
          {/* Important Dates */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={slideUp}
            style={{ flex: '2 1 500px', background: '#fff', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid var(--line)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <CalendarDays size={36} color="var(--r)" />
              <h2 style={{ fontSize: '32px', color: 'var(--b)', fontFamily: 'serif', margin: 0 }}>Important Dates</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: "Online Applications Open", date: "July 15, 2026" },
                { label: "Last Date to Apply", date: "August 10, 2026", highlight: true },
                { label: "Entry Tests (If applicable)", date: "August 15, 2026" },
                { label: "Display of 1st Merit List", date: "August 20, 2026" },
                { label: "Commencement of Classes", date: "September 1, 2026" }
              ].map((event, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '15px', borderBottom: i !== 4 ? '1px dashed var(--line)' : 'none' }}>
                  <span style={{ fontSize: '18px', color: 'var(--b)', fontWeight: event.highlight ? 'bold' : 'normal' }}>{event.label}</span>
                  <span style={{ background: event.highlight ? 'var(--r)' : 'var(--bg)', color: event.highlight ? '#fff' : 'var(--muted)', padding: '5px 15px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
                    {event.date}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Downloads */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={slideUp}
            style={{ flex: '1 1 350px', background: 'var(--r)', borderRadius: '20px', padding: '40px', color: '#fff', boxShadow: '0 10px 40px rgba(218, 73, 72, 0.2)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <FileArchive size={36} color="#fff" />
              <h2 style={{ fontSize: '32px', fontFamily: 'serif', margin: 0 }}>Downloads</h2>
            </div>
            
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px', opacity: 0.9 }}>
              Get access to the official college prospectus, fee structure, and sample test papers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { name: "College Prospectus 2026-27" },
                { name: "Official Fee Structure" },
                { name: "Sample Entry Test Papers" }
              ].map((doc, i) => (
                <a href="/placeholder.pdf" target="_blank" rel="noopener noreferrer" key={i} style={{ textDecoration: 'none', width: '100%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '15px 20px', borderRadius: '10px', color: '#fff', fontSize: '16px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'background 0.3s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                  {doc.name}
                  <Download size={20} />
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
