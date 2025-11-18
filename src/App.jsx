import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, KeyRound, Send, ShieldAlert } from 'lucide-react'
import HeroSpline from './components/HeroSpline'
import GlassCard from './components/GlassCard'
import NeonButton from './components/NeonButton'
import { TextField, TextArea } from './components/Inputs'
import { CyberGridBackground } from './components/Layouts'

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
    {children}
  </motion.div>
)

function AuthCard({ variant = 'client' }) {
  const isAdmin = variant === 'admin'
  const accent = isAdmin ? 'purple' : 'cyan'

  return (
    <GlassCard className="max-w-md mx-auto p-8 md:p-10">
      <FadeIn>
        <div className="flex items-center gap-3 mb-6">
          <Shield className={`w-6 h-6 ${isAdmin ? 'text-purple-400' : 'text-cyan-400'}`} />
          <h2 className="text-xl tracking-widest text-gray-200">{isAdmin ? 'AEGIS // MODERATION ACCESS' : 'AEGIS // AUTHENTICATE'}</h2>
        </div>
      </FadeIn>

      <div className="space-y-4">
        <FadeIn delay={0.05}><TextField label="Username" placeholder="enter-id" accent={accent} /></FadeIn>
        <FadeIn delay={0.1}><TextField label="Password" type="password" placeholder="••••••••" accent={accent} /></FadeIn>
        <FadeIn delay={0.15}>
          <NeonButton color={isAdmin ? 'purple' : 'cyan'} className="mt-2">{isAdmin ? 'Enter Moderation' : 'Enter Aegis'}</NeonButton>
        </FadeIn>
      </div>
    </GlassCard>
  )
}

function ChatMessage({ side = 'left', text }) {
  const isRight = side === 'right'
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isRight ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[72%] rounded-2xl border backdrop-blur-xl px-4 py-3 text-sm leading-relaxed bg-white/5 ${
        isRight ? 'border-purple-400/30' : 'border-cyan-400/30'
      }`}>
        <p className={isRight ? 'text-purple-100' : 'text-cyan-100'}>{text}</p>
      </div>
    </motion.div>
  )
}

function ChatWindow() {
  return (
    <div className="flex h-[70vh] md:h-[75vh] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
      {/* Sidebar */}
      <div className="w-20 md:w-72 border-r border-white/10 bg-black/30 p-3 md:p-4">
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-4 h-4 text-cyan-400" />
          <span className="hidden md:inline text-xs text-gray-300 tracking-widest">CHANNELS</span>
        </div>
        <div className="space-y-2">
          {['User_A', 'User_B', 'User_C', 'User_D'].map((u, i) => (
            <button key={u} className={`w-full text-left rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200/90 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:border-cyan-400/40 transition ${i===1 ? 'ring-1 ring-cyan-400/50 bg-cyan-400/5' : ''}`}>{u}</button>
          ))}
        </div>
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-4 py-3">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm md:text-base tracking-widest text-gray-100">Encrypted Channel: User_B</h3>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3">
          <ChatMessage side="left" text="Handshake complete. Rotating keys now." />
          <ChatMessage side="right" text="Received. Initiating zero-knowledge proof sequence." />
          <ChatMessage side="left" text="ZKP validated. Channel integrity nominal." />
          <ChatMessage side="right" text="Dispatching payload: AEGIS/SECTOR-7." />
        </div>

        {/* Input */}
        <div className="border-t border-white/10 bg-black/30 p-3 md:p-4 flex items-center gap-3">
          <input className="flex-1 rounded-xl bg-black/40 border border-cyan-400/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/50 text-gray-100 placeholder-gray-400/70 px-4 py-3 outline-none transition backdrop-blur-md" placeholder="Type encrypted transmission..." />
          <button className="rounded-xl border border-purple-400/40 bg-purple-500/20 text-purple-200 hover:text-white hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] transition p-3">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

function SecretKeyModal() {
  return (
    <GlassCard className="max-w-2xl mx-auto p-0 overflow-hidden">
      <div className="border-b border-white/10 bg-black/50 px-6 py-4 flex items-center gap-3">
        <KeyRound className="w-5 h-5 text-purple-400" />
        <h3 className="tracking-widest text-gray-100">MASTER KEY DECRYPTION REQUIRED</h3>
      </div>
      <div className="p-6 space-y-4">
        <TextArea label="Admin Secret Key" accent="purple" rows={8} className="font-mono" placeholder="-----BEGIN AEGIS KEY-----\n...\n-----END AEGIS KEY-----" />
        <NeonButton color="purple" className="w-full">Decrypt</NeonButton>
      </div>
    </GlassCard>
  )
}

function ModerationTable() {
  const rows = [
    { id: '0x91a7', sender: 'User_A', recipient: 'User_B', ts: '2077-09-17 22:14' },
    { id: '0x91a8', sender: 'User_C', recipient: 'User_A', ts: '2077-09-17 22:19' },
    { id: '0x91a9', sender: 'User_D', recipient: 'User_B', ts: '2077-09-17 22:23' },
  ]

  return (
    <GlassCard className="p-0 overflow-hidden">
      <div className="border-b border-white/10 bg-black/40 px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-cyan-400" />
          <span className="tracking-widest text-gray-100">CONVERSATIONS</span>
        </div>
        <div className="flex gap-2">
          <input placeholder="Search" className="rounded-lg bg-black/40 border border-cyan-400/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/40 text-gray-100 placeholder-gray-400/70 px-3 py-2 outline-none backdrop-blur-md text-sm" />
          <input placeholder="Filter" className="rounded-lg bg-black/40 border border-cyan-400/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/40 text-gray-100 placeholder-gray-400/70 px-3 py-2 outline-none backdrop-blur-md text-sm" />
        </div>
      </div>
      <div className="divide-y divide-white/10">
        <div className="grid grid-cols-4 text-xs uppercase tracking-widest text-gray-400/80 bg-black/30 px-4 md:px-6 py-2">
          <div>Sender</div>
          <div>Recipient</div>
          <div>Timestamp</div>
          <div>Message ID</div>
        </div>
        {rows.map(r => (
          <div key={r.id} className="grid grid-cols-4 items-center px-4 md:px-6 py-3 text-sm text-gray-200 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] cursor-pointer transition">
            <div>{r.sender}</div>
            <div>{r.recipient}</div>
            <div className="text-gray-400">{r.ts}</div>
            <div className="text-cyan-400">{r.id}</div>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}

export default function App() {
  return (
    <CyberGridBackground>
      <HeroSpline />

      <main className="-mt-24 md:-mt-28 lg:-mt-32 relative z-20 px-4 md:px-8 lg:px-12 space-y-10 md:space-y-16">
        {/* Auth Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <FadeIn>
            <AuthCard variant="client" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <AuthCard variant="admin" />
          </FadeIn>
        </section>

        {/* Chat Dashboard Preview */}
        <section className="space-y-4">
          <FadeIn>
            <h2 className="text-sm tracking-widest text-gray-400 pl-2">CLIENT // CHAT DASHBOARD</h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <ChatWindow />
          </FadeIn>
        </section>

        {/* Admin Portal */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="space-y-4">
            <FadeIn>
              <h2 className="text-sm tracking-widest text-gray-400 pl-2">ADMIN // SECRET KEY INJECTION</h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <SecretKeyModal />
            </FadeIn>
          </div>
          <div className="space-y-4">
            <FadeIn>
              <h2 className="text-sm tracking-widest text-gray-400 pl-2">ADMIN // MODERATION DASHBOARD</h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <ModerationTable />
            </FadeIn>
          </div>
        </section>
      </main>
    </CyberGridBackground>
  )
}
