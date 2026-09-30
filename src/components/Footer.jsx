import {profile} from '../data/portfolio.js'
export default function Footer(){return <footer className="border-t border-white/10 py-10"><div className="mx-auto max-w-6xl px-5 flex flex-col md:flex-row gap-6 md:items-center justify-between">
<div className="flex items-center gap-3"><span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-ink font-extrabold text-sm">VK</span><div><p className="text-white font-semibold">{profile.name}</p><p className="text-sm text-slate-400">{profile.title}</p></div></div>
<div className="flex gap-5 text-sm text-slate-300"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={'mailto:'+profile.email}>Email</a></div>
<p className="text-sm text-slate-500">© 2026 {profile.name}</p></div></footer>}
