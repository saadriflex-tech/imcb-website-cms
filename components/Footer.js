import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--b)', color: '#fff', padding: '40px 20px 20px' }}>
      <div className="responsive-footer-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Brand */}
        <div>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', cursor: 'pointer' }}>
              <img src="/logo.png" alt="IMCB Logo" style={{ width: '40px', height: '40px', background: '#fff', borderRadius: '50%' }} />
              <div>
                <b style={{ fontSize: '16px', display: 'block' }}>Islamabad Model College for Boys</b>
                <small style={{ color: '#dce9f8', fontSize: '11px' }}>G-10/4, Islamabad</small>
              </div>
            </div>
          </Link>
          <p style={{ fontSize: '12px', color: '#dce9f8', lineHeight: '1.6' }}>
            Empowering young minds through quality education, strong character, and a brighter future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <b style={{ display: 'block', fontSize: '14px', marginBottom: '15px' }}>Quick Links</b>
          <ul style={{ listStyle: 'none', fontSize: '12px', color: '#dce9f8', lineHeight: '2' }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/academics">Academics</Link></li>
            <li><Link href="/facilities">Facilities</Link></li>
            <li><Link href="/admissions">Admissions</Link></li>
          </ul>
        </div>

        {/* More Links */}
        <div>
          <b style={{ display: 'block', fontSize: '14px', marginBottom: '15px' }}>Information</b>
          <ul style={{ listStyle: 'none', fontSize: '12px', color: '#dce9f8', lineHeight: '2' }}>
            <li><Link href="/notices">Notices</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/downloads">Downloads</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <b style={{ display: 'block', fontSize: '14px', marginBottom: '15px' }}>Contact Us</b>
          <ul style={{ listStyle: 'none', fontSize: '12px', color: '#dce9f8', lineHeight: '2' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={14} color="var(--r)" /> G-10/4, Islamabad</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14} color="var(--r)" /> +92 51 1234567</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} color="var(--r)" /> info@imcb.edu.pk</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: '11px', color: '#dce9f8', marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
        &copy; {new Date().getFullYear()} IMCB G-10/4. All Rights Reserved.
      </div>
    </footer>
  );
}
