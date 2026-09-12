"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Calendar, Download } from "lucide-react";

export default function NoticeBoard({ initialNotices, availableTypes = ["Academics", "Admissions", "General", "Merit List"] }) {
  const [filter, setFilter] = useState("All");

  const filteredNotices = filter === "All" 
    ? initialNotices 
    : initialNotices.filter(n => n.type.replace('_', ' ').toLowerCase() === filter.toLowerCase());

  // Make sure "All" is always first
  const filterTabs = ["All", ...availableTypes.filter(t => t !== "All")];

  return (
    <section style={{ padding: '80px 20px', background: '#fff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginBottom: '60px' }}>
          {filterTabs.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              style={{ 
                background: filter === cat ? 'var(--b)' : 'var(--bg)', 
                color: filter === cat ? '#fff' : 'var(--b)', 
                border: 'none', 
                padding: '12px 30px', 
                borderRadius: '50px', 
                fontSize: '16px', 
                fontWeight: 'bold', 
                cursor: 'pointer', 
                transition: 'all 0.3s ease',
                boxShadow: filter === cat ? '0 10px 20px rgba(65, 68, 127, 0.2)' : 'none',
                textTransform: 'capitalize'
              }}
            >
              {cat.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Notice List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <AnimatePresence>
            {filteredNotices.map((notice) => {
              const d = new Date(notice.createdAt);
              const month = d.toLocaleString('default', { month: 'short' });
              const day = d.getDate();

              return (
                <motion.div 
                  key={notice.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    background: 'var(--bg)', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'stretch',
                    overflow: 'hidden',
                    border: '1px solid var(--line)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ background: 'var(--b)', color: '#fff', padding: '30px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '120px' }}>
                    <Calendar size={28} style={{ marginBottom: '10px', opacity: 0.8 }} />
                    <span style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: '1' }}>{day}</span>
                    <span style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8 }}>{month}</span>
                  </div>

                  <div style={{ padding: '30px', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                      <span style={{ background: '#fff', color: 'var(--muted)', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        {notice.type.replace('_', ' ')}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--b)', marginBottom: '10px' }}>{notice.title}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>{notice.content}</p>
                  </div>

                  {notice.fileUrl && (
                    <div style={{ padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px dashed rgba(0,0,0,0.1)' }}>
                      <a href={notice.fileUrl} target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: 'var(--r)', border: '1px solid var(--r)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--r)'; e.currentTarget.style.color = '#fff'; }} onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--r)'; }}>
                        <Download size={24} />
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredNotices.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--muted)' }}>
              <Bell size={48} style={{ opacity: 0.2, marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', color: 'var(--b)' }}>No notices found</h3>
              <p>There are currently no active notices in this category.</p>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
