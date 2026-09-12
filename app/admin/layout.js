import Link from "next/link";
import { BookOpen, FileText, Settings, LogOut, Grid } from "lucide-react";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', color: '#1e293b', fontFamily: 'var(--font-inter)' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '260px', background: 'var(--b)', color: '#fff', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <img src="/logo.png" alt="IMCB Logo" style={{ width: '40px', height: '40px', background: '#fff', borderRadius: '50%' }} />
          <h2 style={{ fontSize: '18px', fontFamily: 'var(--font-poppins)', margin: 0 }}>IMCB Admin</h2>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 'bold' }}>
            <Grid size={20} /> Dashboard
          </Link>
          <Link href="/admin/notices" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', borderRadius: '8px', color: 'rgba(255,255,255,0.7)', transition: 'background 0.2s', ':hover': { background: 'rgba(255,255,255,0.05)' } }}>
            <FileText size={20} /> Notices & News
          </Link>
          <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', borderRadius: '8px', color: 'rgba(255,255,255,0.4)', pointerEvents: 'none' }}>
            <BookOpen size={20} /> Students (Soon)
          </Link>
          <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', borderRadius: '8px', color: 'rgba(255,255,255,0.4)', pointerEvents: 'none' }}>
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <button style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', borderRadius: '8px', color: 'var(--r)', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px', marginTop: 'auto' }}>
          <LogOut size={20} /> Sign Out
        </button>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {children}
        </div>
      </main>

    </div>
  );
}
