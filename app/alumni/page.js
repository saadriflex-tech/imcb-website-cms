"use client";
import { motion } from "framer-motion";
import { Users, Mail, ArrowRight, Star } from "lucide-react";
import Hero from "@/components/Hero";

export default function AlumniPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <Hero 
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80"
        tagline="Alumni Network"
        title="Welcome Back"
        subtitle="Our alumni are our greatest pride. We are currently building a dedicated digital platform to reconnect old friends and celebrate success stories."
      />

      {/* 2. Coming Soon / Registration */}
      <section style={{ padding: '100px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ background: 'var(--b)', color: '#fff', padding: '60px 40px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(65, 68, 127, 0.15)' }}
          >
            <Users size={64} color="var(--r)" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: '36px', fontFamily: 'serif', marginBottom: '20px' }}>Alumni Portal Coming Soon</h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '40px' }}>
              We are working hard to launch the official IMCB G-10/4 Alumni Portal. Soon, you will be able to browse the alumni directory, register for reunions, and mentor current students.
            </p>

            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Pre-Register Now</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>Leave your email and we'll notify you the moment the portal goes live.</p>
              
              <div style={{ display: 'flex', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  style={{ flexGrow: 1, padding: '12px 20px', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '16px' }} 
                />
                <button style={{ background: 'var(--r)', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Notify Me <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Wall of Fame Teaser */}
      <section style={{ padding: '80px 20px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <Star size={40} color="var(--b)" style={{ opacity: 0.2, marginBottom: '20px' }} />
          <h2 style={{ fontSize: '28px', color: 'var(--b)', fontFamily: 'serif', marginBottom: '15px' }}>Are you an IMCB G-10/4 Alumnus?</h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 30px' }}>
            We are actively looking for success stories to feature on our upcoming Wall of Fame. If you or your classmates have achieved something remarkable, we want to hear from you!
          </p>
          <a href="mailto:alumni@imcb.edu.pk" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--r)', fontWeight: 'bold', textDecoration: 'none', fontSize: '18px' }}>
            <Mail size={20} /> Contact the Alumni Office
          </a>
        </div>
      </section>

    </div>
  );
}
