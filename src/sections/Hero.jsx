import {motion} from 'framer-motion';import {Github,Linkedin,FolderOpen,Database} from 'lucide-react'
import Button from '../components/Button.jsx';import {profile} from '../data/portfolio.js'
const steps=['Data Sources','Azure Data Factory','ADLS Gen2','Databricks','PySpark','Power BI']
export default function Hero(){return <section id="home" className="pt-32 pb-20"><div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-14 items-center">
<motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
<p className="text-xs font-semibold tracking-widest text-cyan-300">ASPIRING DATA ENGINEER • DATA ANALYST</p>
<h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">Building Data Solutions with Azure, Python &amp; SQL</h1>
<p className="mt-4 text-xl text-blue-300 font-semibold">{profile.name}</p>
<p className="mt-4 text-slate-300 max-w-xl">Aspiring Azure Data Engineer and Data Analyst with hands-on experience in building ETL pipelines and processing large-scale datasets using Azure cloud technologies.</p>
<p className="mt-2 text-slate-400 max-w-xl">Focused on scalable data solutions, cloud data platforms, data transformation, and analytics.</p>
<div className="mt-8 flex flex-wrap gap-3"><Button variant="primary" href="#projects" icon={FolderOpen}>Explore Projects</Button><Button href={profile.github} icon={Github}>View GitHub</Button><Button href={profile.linkedin} icon={Linkedin}>Connect on LinkedIn</Button></div></motion.div>
<div className="relative" aria-label="Visual representation of my technical interests and project work">
<div className="glass p-6 max-w-sm mx-auto">{steps.map((s,i)=><div key={s} className="flex flex-col items-center"><motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{delay:.3+i*.12}} className="w-full text-center rounded-xl border border-blue-400/30 bg-blue-500/10 py-2.5 text-sm font-medium text-white">{s}</motion.div>{i<steps.length-1&&<div className="flowline h-5 w-0.5"/>}</div>)}
<p className="mt-4 text-center text-xs text-slate-500">A visual of my technical interests and project work</p></div>
<motion.div animate={{y:[0,-6,0]}} transition={{repeat:Infinity,duration:5}} className="glass absolute -bottom-6 -left-2 md:left-0 px-4 py-3"><p className="flex items-center gap-2 text-sm font-semibold text-white"><Database size={16} className="text-cyan-300"/>Data Engineering</p><p className="text-xs text-slate-400">Python • SQL • PySpark • Azure</p></motion.div></div></div></section>}
