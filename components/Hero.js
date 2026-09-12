"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Hero({ 
  bgImage = "/hero.jpg",
  tagline = "Welcome To",
  title = "Islamabad Model College for Boys",
  subtitle = "G-10/4, Islamabad",
  description = "Empowering young minds through quality education, strong character, and a brighter future.",
  buttons = (
    <>
      <Link href="/admissions">
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(216, 72, 71, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          style={{ background: 'var(--r)', color: '#fff', padding: '15px 25px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}
        >
          Admission Open →
        </motion.button>
      </Link>
      <Link href="/about">
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.95 }}
          style={{ background: 'transparent', color: '#fff', padding: '15px 25px', border: '2px solid #fff', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}
        >
          Explore College
        </motion.button>
      </Link>
    </>
  )
}) {
  const { scrollY } = useScroll();
  // Move the background downwards as the user scrolls down (Parallax effect)
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div style={{ position: 'relative', zIndex: 0, height: '500px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px', alignItems: 'flex-start' }}>
      
      {/* Parallax & Ken Burns Background */}
      <motion.div 
        style={{
          y,
          position: 'absolute',
          top: '-10%', left: '-10%', right: '-10%', bottom: '-10%', // Oversize to allow panning
          backgroundImage: `linear-gradient(90deg, rgba(4, 59, 114, 0.95), rgba(7, 91, 157, 0.6), rgba(127, 178, 139, 0.2)), url("${bgImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />


      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 20px' }}>
        {tagline && (
          <p 
            className="animate-hero delay-1"
            style={{ fontSize: '14px', letterSpacing: '3px', fontWeight: '900', color: '#8ee59d', textTransform: 'uppercase', marginBottom: '10px' }}
          >
            {tagline}
          </p>
        )}
        
        {title && (
          <h1 
            className="animate-hero delay-1"
            style={{ fontSize: 'clamp(32px, 5vw, 50px)', lineHeight: '1.1', maxWidth: '600px', margin: '0 0 10px', textShadow: '0 2px 10px rgba(0,0,0,0.2)', color: '#fff', minHeight: '110px' }}
          >
            {title}
          </h1>
        )}
        
        {subtitle && (
          <h2 
            className="animate-hero delay-3"
            style={{ fontSize: 'clamp(18px, 3vw, 24px)', margin: '0 0 20px', fontWeight: '500', color: '#fff' }}
          >
            {subtitle}
          </h2>
        )}
        
        {description && (
          <p 
            className="animate-hero delay-4"
            style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.6', maxWidth: '500px', marginBottom: '30px', color: '#e4f0fa' }}
          >
            {description}
          </p>
        )}
        
        {buttons && (
          <div 
            className="animate-hero delay-4"
            style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}
          >
            {buttons}
          </div>
        )}
      </div>
    </div>
  );
}

