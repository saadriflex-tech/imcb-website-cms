"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function NewNoticePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    type: "general",
    content: "",
    isPublished: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push("/admin/notices");
        router.refresh();
      } else {
        alert("Failed to create notice.");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving notice");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <Link href="/admin/notices" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#64748b', textDecoration: 'none', marginBottom: '15px', fontWeight: '500' }}>
          <ArrowLeft size={16} /> Back to Notices
        </Link>
        <h1 style={{ fontSize: '32px', color: 'var(--b)', margin: 0, fontFamily: 'var(--font-poppins)' }}>Create New Notice</h1>
      </div>

      <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontWeight: 'bold', color: 'var(--ink)' }}>Notice Title</label>
            <input 
              required
              type="text" 
              placeholder="e.g. Merit List 2026 Announced"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none', fontFamily: 'inherit' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontWeight: 'bold', color: 'var(--ink)' }}>Notice Type</label>
            <select 
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none', fontFamily: 'inherit', background: '#fff' }}
            >
              <option value="general">General Notice</option>
              <option value="news">News Update</option>
              <option value="merit_list">Merit List</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontWeight: 'bold', color: 'var(--ink)' }}>Content</label>
            <textarea 
              required
              rows="6"
              placeholder="Write the full details of the notice here..."
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '16px', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
            <input 
              type="checkbox" 
              id="publish"
              checked={formData.isPublished}
              onChange={(e) => setFormData({...formData, isPublished: e.target.checked})}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <label htmlFor="publish" style={{ cursor: 'pointer', fontWeight: '500', color: 'var(--ink)' }}>Publish immediately</label>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '10px 0' }} />

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
            <Link href="/admin/notices" style={{ padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', color: '#64748b', textDecoration: 'none', border: '1px solid #e2e8f0' }}>
              Cancel
            </Link>
            <button disabled={loading} type="submit" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', color: '#fff', background: 'var(--g)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
              <Save size={18} /> {loading ? "Saving..." : "Save Notice"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
