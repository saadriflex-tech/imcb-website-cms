"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ position: 'relative', zIndex: 50 }}>
      {/* Top Bar */}
      <div className="hide-on-mobile" style={{ background: 'var(--b)', color: '#fff', padding: '6px 20px', fontSize: '11px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Phone size={12} color="var(--r)" /> +92 51 1234567</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Mail size={12} color="var(--r)" /> info@imcb.edu.pk</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={12} color="var(--r)" /> G-10/4, Islamabad</span>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span>Facebook</span> | <span>Twitter</span> | <span>Instagram</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', background: '#fff', borderBottom: '1px solid var(--line)' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
            <img src="/logo.png" alt="IMCB Logo" style={{ width: '50px', height: '50px', border: '2px solid var(--g)', borderRadius: '50%' }} />
            <div>
              <b style={{ color: 'var(--b)', fontSize: '16px', display: 'block' }}>IMCB G-10/4</b>
              <small style={{ color: 'var(--muted)', fontSize: '11px' }}>Islamabad</small>
            </div>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <ul className="hide-on-mobile" style={{ display: 'flex', gap: '20px', listStyle: 'none', fontWeight: '600', fontSize: '14px', color: 'var(--ink)', margin: 0 }}>
          <li><Link href="/" style={{ color: 'var(--b)' }}>Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/facilities">Facilities</Link></li>
          <li><Link href="/academics">Academics</Link></li>
          <li><Link href="/admissions">Admissions</Link></li>
          <li><Link href="/notices">Notices</Link></li>
        </ul>

        {/* Desktop Button */}
        <div className="hide-on-mobile">
          <Link href="/admissions">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'var(--r)', color: '#fff', padding: '10px 18px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Admission Open
            </motion.button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="show-on-mobile" style={{ display: 'none' /* handled by CSS */ }}>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--b)' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', borderBottom: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
          >
            <Link href="/" onClick={() => setIsOpen(false)} style={{ color: 'var(--b)', fontWeight: 'bold' }}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} style={{ color: 'var(--ink)', fontWeight: 'bold' }}>About</Link>
            <Link href="/facilities" onClick={() => setIsOpen(false)} style={{ color: 'var(--ink)', fontWeight: 'bold' }}>Facilities</Link>
            <Link href="/academics" onClick={() => setIsOpen(false)} style={{ color: 'var(--ink)', fontWeight: 'bold' }}>Academics</Link>
            <Link href="/admissions" onClick={() => setIsOpen(false)} style={{ color: 'var(--ink)', fontWeight: 'bold' }}>Admissions</Link>
            <Link href="/notices" onClick={() => setIsOpen(false)} style={{ color: 'var(--ink)', fontWeight: 'bold' }}>Notices</Link>
            <Link href="/admissions" onClick={() => setIsOpen(false)} style={{ width: '100%' }}>
              <button style={{ background: 'var(--r)', color: '#fff', padding: '12px', border: 'none', borderRadius: '5px', fontWeight: 'bold', width: '100%', cursor: 'pointer' }}>
                Admission Open
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
