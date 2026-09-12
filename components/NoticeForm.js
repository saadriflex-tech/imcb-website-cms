"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function NoticeForm({ initialData = null, existingTypes = [] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    type: initialData?.type || "general",
    content: initialData?.content || "",
    isPublished: initialData !== null ? initialData.isPublished : true,
    publishDate: initialData?.publishDate ? new Date(initialData.publishDate).toISOString().slice(0, 16) : "",
  });

  const isEditing = !!initialData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEditing ? `/api/notices/${initialData.id}` : "/api/notices";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          publishDate: formData.publishDate ? new Date(formData.publishDate).toISOString() : null,
        }),
      });

      if (res.ok) {
        router.push("/admin/notices");
        router.refresh();
      } else {
        alert("Failed to save notice.");
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
        <h1 style={{ fontSize: '32px', color: '#1e293b', margin: 0, fontFamily: 'var(--font-poppins)' }}>
          {isEditing ? "Edit Notice" : "Create New Notice"}
        </h1>
      </div>

      <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontWeight: '600', color: '#334155' }}>Notice Title</label>
            <input 
              required
              type="text" 
              placeholder="e.g. Merit List 2026 Announced"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: '600', color: '#334155' }}>Notice Type / Category</label>
              <input 
                required
                list="notice-types"
                placeholder="Select or type a new one..."
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value.toLowerCase()})}
                style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', fontFamily: 'inherit', background: '#fff' }}
              />
              <datalist id="notice-types">
                <option value="general">General Notice</option>
                <option value="news">News Update</option>
                <option value="merit_list">Merit List</option>
                {existingTypes.filter(t => !['general', 'news', 'merit_list'].includes(t)).map(t => (
                  <option key={t} value={t}>{t.replace('_', ' ')}</option>
                ))}
              </datalist>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: '600', color: '#334155' }}>Schedule Publish Date (Optional)</label>
              <input 
                type="datetime-local" 
                value={formData.publishDate}
                onChange={(e) => setFormData({...formData, publishDate: e.target.value})}
                style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', fontFamily: 'inherit', background: '#fff' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontWeight: '600', color: '#334155' }}>Content</label>
            <textarea 
              required
              rows="8"
              placeholder="Write the full details of the notice here..."
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              style={{ padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px', background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <input 
              type="checkbox" 
              id="publish"
              checked={formData.isPublished}
              onChange={(e) => setFormData({...formData, isPublished: e.target.checked})}
              style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#4f46e5' }}
            />
            <div>
              <label htmlFor="publish" style={{ cursor: 'pointer', fontWeight: '600', color: '#1e293b', display: 'block' }}>Visible to Public</label>
              <span style={{ fontSize: '13px', color: '#64748b' }}>If unchecked, this notice will be hidden (Draft) regardless of the scheduled date.</span>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '10px 0' }} />

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
            <Link href="/admin/notices" style={{ padding: '12px 24px', borderRadius: '8px', fontWeight: '600', color: '#64748b', textDecoration: 'none', border: '1px solid #e2e8f0', transition: 'background 0.2s' }}>
              Cancel
            </Link>
            <button disabled={loading} type="submit" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', color: '#fff', background: '#4f46e5', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, transition: 'background 0.2s' }}>
              <Save size={18} /> {loading ? "Saving..." : (isEditing ? "Save Changes" : "Create Notice")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
