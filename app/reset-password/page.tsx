'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://joxdlaqotlckqvibpqnl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpveGRsYXFvdGxja3F2aWJwcW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MDMwODUsImV4cCI6MjA4OTQ3OTA4NX0.f117BI4D0UK2WJlJ5bXLGWcvuNSnnmbe3NydhgSHGiQ'
);

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [sessionReady, setSessionReady] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Extract tokens from URL hash fragment
    // Supabase redirects with #access_token=...&refresh_token=...&type=recovery
    const hash = window.location.hash.substring(1);
    if (!hash) {
      setError('Invalid or expired reset link. Please request a new password reset from the app.');
      setInitializing(false);
      return;
    }

    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');

    if (!accessToken || !refreshToken) {
      setError('Invalid or expired reset link. Please request a new password reset from the app.');
      setInitializing(false);
      return;
    }

    // Set the session so we can call updateUser
    supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    }).then(({ error }) => {
      if (error) {
        setError('This reset link has expired. Please request a new password reset from the app.');
      } else {
        setSessionReady(true);
      }
      setInitializing(false);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        setError(error.message);
      } else {
        setMessage('Your password has been updated! You can now sign in with your new password in the Flycensed app.');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-widest">
            <span className="text-[#2DD4BF]">FLY</span>
            <span className="text-slate-200">CENSED</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm">Password Reset</p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
          {initializing ? (
            <div className="text-center py-8">
              <div className="inline-block w-8 h-8 border-2 border-[#2DD4BF] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-slate-400">Verifying your reset link...</p>
            </div>
          ) : message ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-[#2DD4BF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2DD4BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[#2DD4BF] font-medium text-lg mb-2">Password Updated</p>
              <p className="text-slate-400 text-sm">{message}</p>
            </div>
          ) : error && !sessionReady ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-red-400 font-medium text-lg mb-2">Link Expired</p>
              <p className="text-slate-400 text-sm">{error}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-bold text-slate-200 mb-1">Set New Password</h2>
              <p className="text-slate-400 text-sm mb-6">Enter your new password below.</p>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-2">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-colors"
                  placeholder="Enter new password"
                  autoComplete="new-password"
                  minLength={6}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-colors"
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                  minLength={6}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2DD4BF] hover:bg-[#06B6D4] text-slate-900 font-bold py-3 px-4 rounded-xl transition-colors btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-slate-500 text-xs mt-6">
          &copy; 2026 Stormhaven Enterprises LLC
        </p>
      </div>
    </div>
  );
}
