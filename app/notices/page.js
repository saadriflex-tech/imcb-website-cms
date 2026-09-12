"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Calendar, Download, ChevronRight, FileText } from "lucide-react";
import Hero from "@/components/Hero";

const notices = [
  { id: 1, date: "Aug 15", category: "Academics", title: "Date Sheet for FBISE Pre-Board Examinations", desc: "The official date sheet for the upcoming pre-board exams for Class 9 and 10 has been released." },
  { id: 2, date: "Aug 10", category: "Admissions", title: "Last Date for Submission of Admission Forms", desc: "A reminder that all online admission forms must be submitted by August 10th. No extensions will be granted." },
  { id: 3, date: "Aug 02", category: "General", title: "Summer Vacation Announcement 2026", desc: "The college will remain closed for summer vacations from June 1st to August 14th." },
  { id: 4, date: "Jul 25", category: "Sports", title: "Inter-College Sports Tournament Schedule", desc: "Schedule and team selections for the upcoming federal board inter-college sports tournament." },
  { id: 5, date: "Jul 18", category: "Academics", title: "Parent-Teacher Meeting (PTM) for Middle Section", desc: "PTM for classes 6, 7, and 8 will be held on Friday. Attendance of at least one parent is mandatory." },
  { id: 6, date: "Jul 05", category: "Admissions", title: "Display of 1st Merit List (HSSC)", desc: "The first merit list for Pre-Medical, Pre-Engineering, and ICS has been displayed on the notice board." },
];

export default function NoticesPage() {
  const [filter, setFilter] = useState("All");

  const filteredNotices = filter === "All" ? notices : notices.filter(n => n.category === filter);

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <Hero 
        bgImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=80"
        tagline="Notice Board"
        title="Official Announcements"
        subtitle="Stay updated with the latest news, exam schedules, and official notices from the college administration."
      />

      {/* 2. Notice Board Section */}
      <section style={{ padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginBottom: '60px' }}>
            {["All", "Academics", "Admissions", "General", "Sports"].map((cat) => (
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
                  boxShadow: filter === cat ? '0 10px 20px rgba(65, 68, 127, 0.2)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Notice List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <AnimatePresence>
              {filteredNotices.map((notice) => (
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
                  {/* Date Badge (Left Side) */}
                  <div style={{ background: 'var(--b)', color: '#fff', padding: '30px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '120px' }}>
                    <Calendar size={28} style={{ marginBottom: '10px', opacity: 0.8 }} />
                    <span style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: '1' }}>{notice.date.split(' ')[1]}</span>
                    <span style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8 }}>{notice.date.split(' ')[0]}</span>
                  </div>

                  {/* Content (Middle) */}
                  <div style={{ padding: '30px', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                      <span style={{ background: '#fff', color: 'var(--muted)', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        {notice.category}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--b)', marginBottom: '10px' }}>{notice.title}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>{notice.desc}</p>
                  </div>

                  {/* Action (Right Side) */}
                  <div style={{ padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px dashed rgba(0,0,0,0.1)' }}>
                    <button style={{ background: '#fff', color: 'var(--r)', border: '1px solid var(--r)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--r)'; e.currentTarget.style.color = '#fff'; }} onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--r)'; }}>
                      <Download size={24} />
                    </button>
                  </div>
                </motion.div>
              ))}
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

    </div>
  );
}
