import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Plus, Edit2 } from "lucide-react";
import DeleteNoticeButton from "@/components/DeleteNoticeButton";

export const dynamic = "force-dynamic";

export default async function AdminNoticesPage() {
  const notices = await prisma.notice.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const now = new Date();

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', color: '#1e293b', margin: 0, fontFamily: 'var(--font-poppins)', fontWeight: '700' }}>Notices</h1>
        
        <Link href="/admin/notices/new" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#4f46e5', color: '#fff', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', fontSize: '14px', transition: 'background 0.2s', boxShadow: '0 4px 10px rgba(79, 70, 229, 0.2)' }}>
          <Plus size={18} /> Add Notice
        </Link>
      </div>

      <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.01)', overflow: 'hidden' }}>
        
        {/* Table Header Tabs Area (Mockup Style) */}
        <div style={{ display: 'flex', gap: '30px', padding: '20px 30px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: '600', color: '#4f46e5', borderBottom: '2px solid #4f46e5', paddingBottom: '20px', marginBottom: '-21px' }}>All Notices</div>
          <div style={{ fontWeight: '500', color: '#94a3b8', cursor: 'pointer' }}>Published</div>
          <div style={{ fontWeight: '500', color: '#94a3b8', cursor: 'pointer' }}>Scheduled</div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: '#fff' }}>
            <tr>
              <th style={{ padding: '16px 30px', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600', borderBottom: '1px solid #e2e8f0' }}>Title & ID</th>
              <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600', borderBottom: '1px solid #e2e8f0' }}>Date</th>
              <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600', borderBottom: '1px solid #e2e8f0' }}>Category</th>
              <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600', borderBottom: '1px solid #e2e8f0' }}>Status</th>
              <th style={{ padding: '16px 30px', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', fontWeight: '600', borderBottom: '1px solid #e2e8f0', textAlign: 'right' }}>Options</th>
            </tr>
          </thead>
          <tbody>
            {notices.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ padding: '60px 30px', textAlign: 'center', color: '#94a3b8' }}>No notices found. Add one to get started!</td>
              </tr>
            ) : (
              notices.map(notice => {
                let statusLabel = "Draft";
                let statusColor = "#94a3b8"; // Gray
                let statusBg = "#f1f5f9";

                if (notice.isPublished) {
                  if (notice.publishDate && new Date(notice.publishDate) > now) {
                    statusLabel = "Scheduled";
                    statusColor = "#b45309"; // Amber/Orange
                    statusBg = "#fef3c7";
                  } else {
                    statusLabel = "Published";
                    statusColor = "#15803d"; // Green
                    statusBg = "#dcfce7";
                  }
                } else {
                  statusLabel = "Hidden";
                  statusColor = "#b91c1c"; // Red
                  statusBg = "#fee2e2";
                }

                return (
                  <tr key={notice.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' }}>
                    <td style={{ padding: '20px 30px' }}>
                      <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '14px', marginBottom: '4px' }}>{notice.title}</div>
                      <div style={{ fontSize: '12px', color: '#94a3b8', fontFamily: 'monospace' }}>ID - {notice.id.slice(-10).toUpperCase()}</div>
                    </td>
                    <td style={{ padding: '20px 20px', color: '#475569', fontSize: '14px' }}>
                      {notice.publishDate ? new Date(notice.publishDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : new Date(notice.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '20px 20px' }}>
                      <div style={{ fontWeight: '500', color: '#334155', fontSize: '14px', textTransform: 'capitalize' }}>{notice.type.replace('_', ' ')}</div>
                    </td>
                    <td style={{ padding: '20px 20px' }}>
                      <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', background: statusBg, color: statusColor }}>
                        {statusLabel}
                      </span>
                    </td>
                    <td style={{ padding: '20px 30px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <Link 
                          href={`/admin/notices/${notice.id}/edit`} 
                          style={{ color: '#475569', padding: '6px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', transition: 'background 0.2s', backgroundColor: '#fff' }}
                        >
                          Edit
                        </Link>
                        <DeleteNoticeButton id={notice.id} />
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
