import Reveal from './Reveal.jsx'
export default function SectionTitle({title,sub}){return <Reveal className="mb-10"><h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>{sub&&<p className="mt-3 text-slate-400 max-w-2xl">{sub}</p>}<div className="mt-4 h-1 w-14 rounded bg-gradient-to-r from-blue-500 to-cyan-400"/></Reveal>}
