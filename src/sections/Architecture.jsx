import {useState} from 'react';import SectionTitle from '../components/SectionTitle.jsx';import {arch} from '../data/portfolio.js'
export default function Architecture(){const [a,setA]=useState(1);return <section id="architecture" className="py-20"><div className="mx-auto max-w-6xl px-5">
<SectionTitle title="Azure Data Engineering Architecture" sub="The architecture of my End-to-End Azure Data Engineering Pipeline project. Hover, focus or tap a node to see its role."/>
<div className="glass p-6 md:p-8"><div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-y-2">{arch.map(([n],i)=><div key={n} className="flex flex-col md:flex-row items-center">
<button onMouseEnter={()=>setA(i)} onFocus={()=>setA(i)} onClick={()=>setA(i)} aria-pressed={a===i} className={'rounded-xl border px-4 py-3 text-sm font-semibold transition min-w-[150px] '+(a===i?'border-cyan-300 bg-cyan-400/15 text-white':'border-blue-400/30 bg-blue-500/10 text-slate-200 hover:border-cyan-300/60')}>{n}</button>
{i<arch.length-1&&<><div className="flowline h-5 w-0.5 md:hidden"/><div className="flowline-x h-0.5 w-6 hidden md:block"/></>}</div>)}</div>
<div aria-live="polite" className="mt-8 rounded-xl bg-white/5 p-5 text-center"><p className="text-cyan-300 font-semibold">{arch[a][0]}</p><p className="mt-1 text-slate-300">{arch[a][1]}</p></div>
<p className="mt-4 text-center text-xs text-slate-500">Project architecture based on my resume. Not a representation of professional employment.</p></div></div></section>}
