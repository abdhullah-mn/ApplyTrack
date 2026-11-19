import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import apiClient from './api/client'

function HomePage() {
  const [connection, setConnection] = useState({ state: 'checking', message: 'Checking backend…' })

  useEffect(() => {
    let active = true

    apiClient.get('/api/health')
      .then(({ data }) => {
        if (active) setConnection({ state: 'online', message: `Backend connected · ${data.status}` })
      })
      .catch(() => {
        if (active) setConnection({ state: 'offline', message: 'Backend unavailable · start Spring Boot to connect' })
      })

    return () => { active = false }
  }, [])

  return (
    <main className="min-h-screen bg-slate-50 text-ink">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-xl font-bold tracking-tight">ApplyTrack<span className="text-accent">.</span></Link>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">FOUNDATION</span>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-accent">Your next opportunity, organized</p>
        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">A clearer path from application to offer.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Keep every opportunity in one place. ApplyTrack is getting ready to help you stay focused on what comes next.</p>
        <div className="mt-10 inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm" role="status" aria-live="polite">
          <span className={`h-2.5 w-2.5 rounded-full ${connection.state === 'online' ? 'bg-emerald-500' : connection.state === 'offline' ? 'bg-rose-500' : 'animate-pulse bg-amber-400'}`} />
          <span className="text-sm font-medium text-slate-700">{connection.message}</span>
        </div>
      </section>
      <footer className="mx-auto max-w-6xl border-t border-slate-200 px-6 py-6 text-sm text-slate-500">ApplyTrack · Job search, with a little more direction.</footer>
    </main>
  )
}

export default function App() {
  return <Routes><Route path="*" element={<HomePage />} /></Routes>
}
