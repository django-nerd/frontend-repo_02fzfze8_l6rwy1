import React from 'react'

export function TextField({ label, type = 'text', accent = 'cyan', ...props }) {
  const accentClasses = accent === 'purple'
    ? 'focus:ring-2 focus:ring-purple-500/60 border-purple-400/30 focus:border-purple-400/60'
    : 'focus:ring-2 focus:ring-cyan-500/60 border-cyan-400/30 focus:border-cyan-400/60'

  return (
    <label className="block text-sm w-full">
      <span className="mb-2 block text-gray-200/90 tracking-wide">{label}</span>
      <input
        type={type}
        className={`w-full rounded-xl bg-black/40 border ${accentClasses} text-gray-100 placeholder-gray-400/70 px-4 py-3 outline-none transition-colors backdrop-blur-md`}
        {...props}
      />
    </label>
  )
}

export function TextArea({ label, accent = 'purple', rows = 6, className = '', ...props }) {
  const accentClasses = accent === 'purple'
    ? 'focus:ring-2 focus:ring-purple-500/60 border-purple-400/30 focus:border-purple-400/60'
    : 'focus:ring-2 focus:ring-cyan-500/60 border-cyan-400/30 focus:border-cyan-400/60'

  return (
    <label className="block text-sm w-full">
      {label && <span className="mb-2 block text-gray-200/90 tracking-wide">{label}</span>}
      <textarea
        rows={rows}
        className={`w-full rounded-xl bg-black/40 border ${accentClasses} text-gray-100 placeholder-gray-400/70 px-4 py-3 outline-none transition-colors backdrop-blur-md ${className}`}
        {...props}
      />
    </label>
  )
}
