import {useEffect,useState} from 'react';import {AnimatePresence,motion} from 'framer-motion';import {Github,Linkedin,Menu,X} from 'lucide-react'
import {nav,profile} from '../data/portfolio.js'
export default function Navbar(){const [s,setS]=useState(false),[o,setO]=useState(false)
useEffect(()=>{const f=()=>setS(window.scrollY>20);f();window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f)},[])
return <header className={'fixed top-0 inset-x-0 z-50 transition '+(s||o?'bg-ink/75 backdrop-blur-lg border-b border-white/10':'')}>
<div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
<a href="#home" className="flex items-center gap-3"><span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-ink font-extrabold text-sm">VK</span><span className="hidden sm:block font-semibold text-white text-sm">{profile.name}</span></a>
<nav aria-label="Primary" className="hidden lg:flex gap-6 text-sm text-slate-400">{nav.map(n=><a key={n} href={'#'+n.toLowerCase()} className="hover:text-white transition">{n}</a>)}</nav>
<div className="flex items-center gap-3 text-slate-300">
<a aria-label="GitHub" href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Github size={20}/></a>
<a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Linkedin size={20}/></a>
<button aria-label="Toggle menu" aria-expanded={o} onClick={()=>setO(!o)} className="lg:hidden ml-1">{o?<X/>:<Menu/>}</button></div></div>
<AnimatePresence>{o&&<motion.nav aria-label="Mobile" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="lg:hidden overflow-hidden"><div className="px-5 pb-4 grid gap-1">{nav.map(n=><a key={n} onClick={()=>setO(false)} href={'#'+n.toLowerCase()} className="py-2 text-slate-300">{n}</a>)}</div></motion.nav>}</AnimatePresence></header>}
