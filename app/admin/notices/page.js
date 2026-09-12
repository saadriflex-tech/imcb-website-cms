import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { PlusCircle, Edit, Trash2 } from "lucide-react";

export const dynamic = "force-dynamic"; // Ensures the page fetches fresh data

export default async function AdminNoticesPage() {
  const notices = await prisma.notice.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '32px', color: 'var(--b)', marginBottom: '5px', fontFamily: 'var(--font-poppins)' }}>Manage Notices</h1>
          <p style={{ color: '#64748b', fontSize: '15px' }}>Create, edit, or delete notices and merit lists.</p>
        </div>
        <Link href="/admin/notices/new" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--g)', color: '#fff', padding: '12px 20px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
          <PlusCircle size={20} /> Create Notice
        </Link>
      </div>

      <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
            <tr>
              <th style={{ padding: '15px 20px', color: '#64748b', fontSize: '13px', textTransform: 'uppercase', fontWeight: 'bold' }}>Title</th>
              <th style={{ padding: '15px 20px', color: '#64748b', fontSize: '13px', textTransform: 'uppercase', fontWeight: 'bold' }}>Type</th>
              <th style={{ padding: '15px 20px', color: '#64748b', fontSize: '13px', textTransform: 'uppercase', fontWeight: 'bold' }}>Status</th>
              <th style={{ padding: '15px 20px', color: '#64748b', fontSize: '13px', textTransform: 'uppercase', fontWeight: 'bold' }}>Date</th>
              <th style={{ padding: '15px 20px', textAlign: 'right' }}></th>
            </tr>
          </thead>
          <tbody>
            {notices.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No notices found. Create one to get started!</td>
              </tr>
            ) : (
              notices.map(notice => (
                <tr key={notice.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '15px 20px', fontWeight: '600', color: 'var(--ink)' }}>{notice.title}</td>
                  <td style={{ padding: '15px 20px' }}>
                    <span style={{ padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'capitalize', background: notice.type === 'merit_list' ? '#fee2e2' : '#e0f2fe', color: notice.type === 'merit_list' ? '#991b1b' : '#075985' }}>
                      {notice.type.replace('_', ' ')}
                    </span>
                  </td>
                  <td style={{ padding: '15px 20px' }}>
                    <span style={{ padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', background: notice.isPublished ? '#dcfce7' : '#f1f5f9', color: notice.isPublished ? '#166534' : '#475569' }}>
                      {notice.isPublished ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td style={{ padding: '15px 20px', color: '#64748b', fontSize: '14px' }}>
                    {new Date(notice.createdAt).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '15px 20px', textAlign: 'right', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <Link href={`/admin/notices/${notice.id}/edit`} style={{ color: 'var(--b)', padding: '5px' }}><Edit size={18} /></Link>
                    <button style={{ color: 'var(--r)', padding: '5px', background: 'transparent', border: 'none', cursor: 'pointer' }}><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
