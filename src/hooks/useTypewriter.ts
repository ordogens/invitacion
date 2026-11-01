import { useEffect, useState } from 'react'

interface TypewriterState {
  displayedText: string
  isComplete: boolean
}

interface TypingProgress {
  text: string
  characterCount: number
}

const TYPEWRITER_SPEED_MS = 28

function useTypewriter(text: string): TypewriterState {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [progress, setProgress] = useState<TypingProgress>({ text: '', characterCount: 0 })

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)

    updatePreference()
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (reducedMotion || text.length === 0) return

    let characterCount = 0

    const intervalId = window.setInterval(() => {
      characterCount = Math.min(characterCount + 1, text.length)
      const isComplete = characterCount >= text.length
      setProgress({ text, characterCount })

      if (isComplete) window.clearInterval(intervalId)
    }, TYPEWRITER_SPEED_MS)

    return () => window.clearInterval(intervalId)
  }, [text, reducedMotion])

  const characterCount = reducedMotion
    ? text.length
    : progress.text === text
      ? progress.characterCount
      : 0

  const state: TypewriterState = {
    displayedText: text.slice(0, characterCount),
    isComplete: characterCount >= text.length,
  }

  return state
}

export default useTypewriter
