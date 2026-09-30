import {motion} from 'framer-motion'
export default function Button({href,children,icon:Icon,variant='ghost',disabled}){
const c='inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition '+(variant==='primary'?'bg-gradient-to-r from-blue-500 to-cyan-400 text-ink':'border border-white/15 text-white hover:bg-white/10')
if(disabled)return <span role="link" aria-disabled="true" className={c+' opacity-50 cursor-not-allowed'}>{Icon&&<Icon size={16}/>}{children}</span>
const ext=/^https?:/.test(href)
return <motion.a whileHover={{y:-2}} href={href} className={c} {...(ext?{target:'_blank',rel:'noopener noreferrer'}:{})}>{Icon&&<Icon size={16}/>}{children}</motion.a>}
