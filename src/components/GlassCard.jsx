import React from 'react'
import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-10" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)] bg-[radial-gradient(1000px_400px_at_50%_-20%,rgba(6,182,212,0.15),transparent)]" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
