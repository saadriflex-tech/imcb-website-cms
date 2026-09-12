"use client";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";

export default function AdminHeader() {
  const { data: session } = useSession();

  return (
    <header style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', background: '#fff', borderBottom: '1px solid #e2e8f0', zIndex: 10 }}>
      {/* Search Bar */}
      <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', padding: '10px 16px', borderRadius: '8px', width: '400px', border: '1px solid #e2e8f0' }}>
        <Search size={18} color="#94a3b8" />
        <input 
          type="text" 
          placeholder="Search for anything..." 
          style={{ border: 'none', background: 'transparent', outline: 'none', marginLeft: '10px', fontSize: '14px', width: '100%', color: '#334155', fontFamily: 'var(--font-inter)' }}
        />
      </div>

      {/* User Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
            {session?.user?.email ? session.user.email.split('@')[0] : 'Admin User'}
          </div>
          <div style={{ fontSize: '12px', color: '#64748b' }}>College Administrator</div>
        </div>
        <img 
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${session?.user?.email || 'Admin'}&backgroundColor=4f46e5`}
          alt="Profile" 
          style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #e2e8f0' }}
        />
      </div>
    </header>
  );
}
