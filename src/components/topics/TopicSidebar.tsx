'use client'

import type { Level } from '@/lib/topics'

interface TopicSidebarProps {
  levels: { level: Level; count: number }[]
  activeLevel: Level | null
  onLevelChange: (level: Level | null) => void
}

const levelLabels: Record<Level, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

const levelColors: Record<Level, string> = {
  beginner: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
  intermediate: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
  advanced: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100',
}

const levelActiveColors: Record<Level, string> = {
  beginner: 'bg-green-600 text-white border-green-600',
  intermediate: 'bg-amber-600 text-white border-amber-600',
  advanced: 'bg-red-600 text-white border-red-600',
}

export function TopicSidebar({ levels, activeLevel, onLevelChange }: TopicSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-28">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
          Filter by Level
        </h3>

        <div className="space-y-2">
          <button
            onClick={() => onLevelChange(null)}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
              activeLevel === null
                ? 'bg-chai text-white border-chai'
                : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100'
            }`}
          >
            All Levels
          </button>

          {levels.map(({ level, count }) => (
            <button
              key={level}
              onClick={() => onLevelChange(level)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium border transition-all flex items-center justify-between ${
                activeLevel === level
                  ? levelActiveColors[level]
                  : levelColors[level]
              }`}
            >
              <span>{levelLabels[level]}</span>
              <span className="text-xs opacity-60">{count}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}