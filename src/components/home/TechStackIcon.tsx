import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode, FaExchangeAlt, FaRobot } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiFramer, SiRedux, SiNodedotjs, SiOpenai, SiMongodb, SiVite, SiFigma, SiWix, SiSquarespace } from 'react-icons/si'

const iconMap: Record<string, React.ReactNode> = {
  FaReact: <FaReact />,
  SiJavascript: <SiJavascript />,
  SiHtml5: <SiHtml5 />,
  SiCss: <SiCss />,
  SiTailwindcss: <SiTailwindcss />,
  SiFramer: <SiFramer />,
  FaCode: <FaCode />,
  SiRedux: <SiRedux />,
  FaNodeJs: <FaNodeJs />,
  FaExchangeAlt: <FaExchangeAlt />,
  SiOpenai: <SiOpenai />,
  FaRobot: <FaRobot />,
  SiMongodb: <SiMongodb />,
  FaGitAlt: <FaGitAlt />,
  FaGithub: <FaGithub />,
  SiVite: <SiVite />,
  SiFigma: <SiFigma />,
  SiWix: <SiWix />,
  SiSquarespace: <SiSquarespace />,
}

export function TechStackIcon({ name, className }: { name: string; className?: string }) {
  return <span className={className}>{iconMap[name] || <FaCode />}</span>
}