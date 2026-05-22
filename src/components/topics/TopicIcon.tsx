import { FaAtom, FaArrowsAlt, FaPalette, FaLayerGroup, FaRocket, FaRobot, FaBookOpen, FaCompass } from 'react-icons/fa'

const iconMap: Record<string, React.ReactNode> = {
  FaAtom: <FaAtom />,
  FaArrowsAlt: <FaArrowsAlt />,
  FaPalette: <FaPalette />,
  FaLayerGroup: <FaLayerGroup />,
  FaRocket: <FaRocket />,
  FaRobot: <FaRobot />,
  FaBookOpen: <FaBookOpen />,
  FaCompass: <FaCompass />,
}

export function TopicIcon({ name, className }: { name: string; className?: string }) {
  return <span className={className}>{iconMap[name] || <FaAtom />}</span>
}