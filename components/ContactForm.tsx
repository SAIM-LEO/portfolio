'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Using Formspree endpoint or fallback
      const response = await fetch('https://formspree.io/f/mqkenwkk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit form.');
      }
    } catch (err: any) {
      // Even if endpoint limit is hit, offer easy mailto
      setStatus('error');
      setErrorMessage(err.message || 'Transmission failed. Please use direct email or WhatsApp.');
    }
  };

  const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry from Website'
  )}&body=${encodeURIComponent(
    `Hi Saim,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden">
      {/* Top border highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88]/60 to-transparent" />

      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white dark:text-white light:text-slate-900 mb-2">
        Transmit an Inquiry
      </h3>
      <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
        Have a project, security audit, or Amazon marketplace operational role? Drop a message directly below.
      </p>

      {status === 'success' ? (
        <div className="p-6 rounded-xl bg-emerald-950/40 border border-[#00ff88]/40 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#00ff88]/20 border border-[#00ff88] mx-auto flex items-center justify-center text-[#00ff88]">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-heading font-bold text-white">Transmission Successful</h4>
          <p className="text-sm text-slate-300">
            Thank you! Your message has been received. Saim will respond to your provided email shortly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-3 px-4 py-2 rounded-lg text-xs font-mono font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:text-white"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                YOUR NAME *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                YOUR EMAIL *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
              SUBJECT / INQUIRY TYPE
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Web Development / AppSec / Amazon Ops"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
              MESSAGE *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-colors resize-none"
            />
          </div>

          {status === 'error' && (
            <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/40 flex items-center justify-between gap-3 text-xs text-red-300">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
              <a
                href={mailtoLink}
                className="underline font-semibold hover:text-white flex-shrink-0"
              >
                Send via Mail Client
              </a>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:flex-1 py-3 px-6 rounded-xl font-heading font-bold text-sm tracking-wide bg-[#00ff88] text-slate-950 hover:bg-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <a
              href={mailtoLink}
              className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-mono font-medium border border-slate-700 bg-slate-800/80 text-slate-300 hover:text-white hover:border-[#00ff88]/40 transition-all flex items-center justify-center gap-2"
              title="Open local email client fallback"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Mailto Fallback</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
