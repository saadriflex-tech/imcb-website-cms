export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: '32px', color: 'var(--b)', marginBottom: '10px', fontFamily: 'var(--font-poppins)' }}>Dashboard Overview</h1>
      <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '40px' }}>Welcome back to the IMCB College Portal Admin panel.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '16px', color: '#64748b', margin: '0 0 10px' }}>Total Notices</h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--b)', margin: 0 }}>12</p>
        </div>
        <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '16px', color: '#64748b', margin: '0 0 10px' }}>Active News Tickers</h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--g)', margin: 0 }}>3</p>
        </div>
        <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '16px', color: '#64748b', margin: '0 0 10px' }}>Registered Students</h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--muted)', margin: 0 }}>0</p>
        </div>
      </div>
    </div>
  );
}
