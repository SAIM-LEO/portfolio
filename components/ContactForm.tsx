'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
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
      setStatus('error');
      setErrorMessage(err.message || 'Transmission failed. Please use direct email or WhatsApp.');
    }
  };

  return (
    <div className="relative p-[1.5px] rounded-3xl overflow-hidden animated-gradient-border shadow-2xl">
      <div className="relative p-6 sm:p-8 rounded-[22px] bg-[#050814]/95 backdrop-blur-xl">
        {/* Top subtle highlight */}
        <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#00ff88]/50 to-transparent" />

        <div className="flex items-center gap-2 mb-1 text-xs font-mono text-[#00ff88]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ENCRYPTED INQUIRY FORM</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white dark:text-white light:text-slate-900 mb-2">
          Transmit an Inquiry
        </h3>
        <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6 font-sans">
          Have a project, security audit, or Amazon marketplace operational role? Drop a message directly below.
        </p>

        {status === 'success' ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="p-8 rounded-2xl bg-emerald-950/40 border border-[#00ff88]/40 text-center space-y-4 shadow-[0_0_30px_rgba(0,255,136,0.2)]"
          >
            <div className="w-14 h-14 rounded-full bg-[#00ff88]/20 border-2 border-[#00ff88] mx-auto flex items-center justify-center text-[#00ff88] shadow-[0_0_20px_#00ff88]">
              <CheckCircle className="w-8 h-8 animate-pulse" />
            </div>
            <h4 className="text-xl font-heading font-bold text-white">Transmission Successful</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto font-sans leading-relaxed">
              Thank you! Your message has been received. Saim will respond to your provided email address shortly.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 px-5 py-2.5 rounded-xl text-xs font-mono font-medium border border-slate-700 bg-slate-800 text-slate-200 hover:text-white hover:border-[#00ff88] transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/25 focus:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all font-sans"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/25 focus:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all font-sans"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                SUBJECT / TOPIC
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Full-Stack Dev / WebSecureX / Amazon Seller Central"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/25 focus:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all font-sans"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                TRANSMISSION MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your inquiry, project scope, or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/25 focus:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all resize-none font-sans"
              />
            </div>

            {status === 'error' && (
              <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">{errorMessage}</span>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="underline text-red-300 hover:text-white mt-1 inline-block"
                  >
                    Click here to open your email client directly
                  </a>
                </div>
              </div>
            )}

            <MagneticButton className="w-full">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 px-6 rounded-xl font-heading font-bold text-sm tracking-wide bg-[#00ff88] text-slate-950 hover:bg-[#00e5ff] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Data...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </MagneticButton>
          </form>
        )}
      </div>
    </div>
  );
}
