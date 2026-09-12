"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', width: '100%', maxWidth: '400px', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src="/logo.png" alt="IMCB Logo" style={{ width: '60px', height: '60px', marginBottom: '15px' }} />
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', margin: 0, fontFamily: 'var(--font-poppins)' }}>Admin Login</h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginTop: '8px' }}>Sign in to manage IMCB Portal</p>
        </div>

        {error && (
          <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '12px', borderRadius: '8px', fontSize: '14px', marginBottom: '20px', textAlign: 'center', fontWeight: '500' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#334155', marginBottom: '8px', fontSize: '14px' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }}>
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                required
                placeholder="admin@imcb.edu.pk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#334155', marginBottom: '8px', fontSize: '14px' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }}>
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', padding: '14px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '16px', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '10px', opacity: loading ? 0.7 : 1, transition: 'background 0.2s' }}
          >
            {loading ? "Signing in..." : "Sign In"} <ArrowRight size={18} />
          </button>
        </form>

      </div>
    </div>
  );
}
