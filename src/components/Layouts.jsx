import React from 'react'

export function CyberGridBackground({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-gray-100">
      {/* radial depth lights */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      {/* grid lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
