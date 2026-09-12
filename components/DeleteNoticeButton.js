"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function DeleteNoticeButton({ id }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this notice?")) return;
    
    setDeleting(true);
    try {
      const res = await fetch(`/api/notices/${id}`, { method: "DELETE" });
      if (res.ok) {
        router.refresh();
      } else {
        alert("Failed to delete.");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting notice.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={deleting}
      style={{ 
        color: deleting ? '#94a3b8' : '#ef4444', 
        padding: '6px', 
        background: 'transparent', 
        border: '1px solid #e2e8f0', 
        borderRadius: '6px', 
        cursor: deleting ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s',
        backgroundColor: '#fff'
      }}
      onMouseOver={(e) => { if(!deleting) e.currentTarget.style.backgroundColor = '#fee2e2' }}
      onMouseOut={(e) => { if(!deleting) e.currentTarget.style.backgroundColor = '#fff' }}
    >
      <Trash2 size={16} />
    </button>
  );
}
