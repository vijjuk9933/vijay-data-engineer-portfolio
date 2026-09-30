import {MotionConfig} from 'framer-motion'
import Navbar from './components/Navbar.jsx';import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx';import About from './sections/About.jsx';import Skills from './sections/Skills.jsx';import Workflow from './sections/Workflow.jsx';import Projects from './sections/Projects.jsx';import Architecture from './sections/Architecture.jsx';import Education from './sections/Education.jsx';import Achievements from './sections/Achievements.jsx';import Contact from './sections/Contact.jsx'
export default function App(){return <MotionConfig reducedMotion="user"><Navbar/><main><Hero/><About/><Skills/><Workflow/><Projects/><Architecture/><Education/><Achievements/><Contact/></main><Footer/></MotionConfig>}
