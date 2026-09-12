"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, FileText, Settings, LogOut, Grid } from "lucide-react";
import { signOut } from "next-auth/react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: <Grid size={18} />, path: "/admin", exact: true },
    { name: "Notices & News", icon: <FileText size={18} />, path: "/admin/notices" },
    { name: "Students (Soon)", icon: <BookOpen size={18} />, path: "#", disabled: true },
    { name: "Settings", icon: <Settings size={18} />, path: "#", disabled: true },
  ];

  return (
    <aside style={{ width: '260px', background: '#4f46e5', color: '#fff', padding: '24px 0', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', padding: '0 24px' }}>
        <img src="/logo.png" alt="IMCB Logo" style={{ width: '32px', height: '32px', background: '#fff', borderRadius: '50%' }} />
        <h2 style={{ fontSize: '20px', fontFamily: 'var(--font-poppins)', margin: 0, fontWeight: '700', letterSpacing: '0.5px' }}>IMCB Admin</h2>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, padding: '0 12px' }}>
        {menuItems.map((item, idx) => {
          const isActive = item.exact ? pathname === item.path : pathname?.startsWith(item.path);

          return (
            <Link
              key={idx}
              href={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '8px',
                color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
                background: isActive ? 'rgba(0,0,0,0.15)' : 'transparent',
                fontWeight: isActive ? '600' : '400',
                pointerEvents: item.disabled ? 'none' : 'auto',
                textDecoration: 'none',
                position: 'relative',
                transition: 'all 0.2s ease',
              }}
            >
              {isActive && (
                <div style={{ position: 'absolute', left: 0, top: '15%', height: '70%', width: '4px', background: '#fff', borderRadius: '0 4px 4px 0' }} />
              )}
              {item.icon} {item.name}
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: '0 24px', marginTop: 'auto' }}>
        <button 
          onClick={() => signOut({ callbackUrl: '/' })}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', color: 'rgba(255,255,255,0.7)', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: '500', fontSize: '15px', transition: 'color 0.2s', width: '100%' }}
        >
          <LogOut size={18} /> Sign Out
        </button>
      </div>
    </aside>
  );
}
