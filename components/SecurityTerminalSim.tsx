'use client';

import { useState, useEffect } from 'react';
import { Terminal, Shield, Play, RotateCcw } from 'lucide-react';

const SCAN_LOGS = [
  { time: '00:01', level: 'INIT', msg: 'WebSecureX DAST orchestrator daemon initialized.' },
  { time: '00:03', level: 'RECON', msg: 'Certificate Transparency logs queried: 14 subdomains resolved.' },
  { time: '00:06', level: 'PROBE', msg: 'Live HTTP/2 & HTTPS service probe complete [Status 200 OK].' },
  { time: '00:09', level: 'SQLMAP', msg: 'Testing parameter fuzzing on injection vectors... [PROTECTED]' },
  { time: '00:12', level: 'XSSTRIKE', msg: 'Contextual DOM & reflected XSS payload generator active.' },
  { time: '00:15', level: 'NOSQLI', msg: 'MongoDB $regex / $ne parameter fuzzing evaluation: 0 flaws.' },
  { time: '00:18', level: 'SSL_TLS', msg: 'Cipher suite inspection: TLS 1.3 PFS AES-256-GCM [A+ RATING].' },
  { time: '00:21', level: 'THREAT', msg: 'AbuseIPDB reputation lookup: 0% blacklist score (Verified Clean).' },
  { time: '00:24', level: 'REPORT', msg: 'Executive summary & technical PDF report compiled and dispatched.' },
];

export default function SecurityTerminalSim() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= SCAN_LOGS.length) {
          return 1;
        }
        return prev + 1;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isRunning]);

  const restartScan = () => {
    setVisibleCount(1);
    setIsRunning(true);
  };

  return (
    <div className="rounded-2xl overflow-hidden glass-panel border border-slate-700/80 bg-[#040714] shadow-2xl">
      {/* Terminal Title Bar */}
      <div className="px-4 py-2.5 bg-[#080d22] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-300">
          <Terminal className="w-4 h-4 text-[#00ff88]" />
          <span className="text-white font-semibold">WebSecureX HackerMode Terminal</span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#00ff88]/10 text-[#00ff88] text-[10px] border border-[#00ff88]/30">
            SSE TELEMETRY STREAM
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="p-1 rounded text-slate-400 hover:text-white transition-colors"
            title={isRunning ? 'Pause Stream' : 'Resume Stream'}
            aria-label={isRunning ? 'Pause Stream' : 'Resume Stream'}
          >
            {isRunning ? (
              <span className="w-2 h-2 rounded-full bg-[#00ff88] radar-dot inline-block" />
            ) : (
              <Play className="w-3.5 h-3.5 text-[#00e5ff]" />
            )}
          </button>
          <button
            onClick={restartScan}
            className="p-1 rounded text-slate-400 hover:text-[#00ff88] transition-colors"
            title="Restart Audit"
            aria-label="Restart Audit"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-xs text-slate-300 space-y-2 h-44 overflow-y-auto no-scrollbar">
        {SCAN_LOGS.slice(0, visibleCount).map((log, i) => (
          <div key={i} className="flex items-start gap-2 leading-relaxed animate-fade-in">
            <span className="text-slate-500 flex-shrink-0">[{log.time}]</span>
            <span
              className={`px-1.5 py-0.2 rounded text-[10px] font-bold flex-shrink-0 ${
                log.level === 'REPORT'
                  ? 'bg-[#00ff88]/20 text-[#00ff88]'
                  : log.level === 'INIT'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-[#00e5ff]/20 text-[#00e5ff]'
              }`}
            >
              {log.level}
            </span>
            <span className="text-slate-300 font-sans sm:font-mono">{log.msg}</span>
          </div>
        ))}
        <div className="flex items-center gap-1 text-[#00ff88] pt-1">
          <span className="text-xs">&gt;</span>
          <span className="inline-block w-2 h-3.5 bg-[#00ff88] animate-pulse" />
        </div>
      </div>
    </div>
  );
}
