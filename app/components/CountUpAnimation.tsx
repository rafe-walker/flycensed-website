'use client'

import { useState, useEffect } from 'react'

interface CountUpAnimationProps {
  target: number
  duration: number
}

export function CountUpAnimation({ target, duration = 2 }: CountUpAnimationProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration * 60) // Assuming 60fps
    const interval = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(interval)
  }, [target, duration])

  return (
    <div className="text-4xl md:text-5xl font-black text-brand-teal">
      {count.toLocaleString()}%
    </div>
  )
}
