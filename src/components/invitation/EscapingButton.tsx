import {
  useEffect,
  useCallback,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type RefObject,
} from 'react'

interface EscapingButtonProps {
  areaRef: RefObject<HTMLDivElement | null>
  yesButtonRef: RefObject<HTMLButtonElement | null>
  stopEscaping: boolean
  onSelect: () => void
}

interface Position {
  x: number
  y: number
}

const CLEARANCE = 12

function EscapingButton({ areaRef, yesButtonRef, stopEscaping, onSelect }: EscapingButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const lastAreaSizeRef = useRef<{ width: number; height: number } | null>(null)
  const [escapeCount, setEscapeCount] = useState(0)
  const [position, setPosition] = useState<Position | null>(null)

  const findSafePosition = useCallback((pointer?: Position): Position | null => {
    const area = areaRef.current
    const button = buttonRef.current

    if (!area || !button) return null

    const areaRect = area.getBoundingClientRect()
    const buttonRect = button.getBoundingClientRect()
    const yesRect = yesButtonRef.current?.getBoundingClientRect()
    const yesPosition = yesRect
      ? { x: yesRect.left - areaRect.left, y: yesRect.top - areaRect.top }
      : null
    const maxX = Math.max(0, areaRect.width - buttonRect.width)
    const maxY = Math.max(0, areaRect.height - buttonRect.height)
    const minTravel = Math.min(88, Math.max(48, Math.min(areaRect.width, areaRect.height) * 0.58))
    const currentPosition = {
      x: buttonRect.left - areaRect.left,
      y: buttonRect.top - areaRect.top,
    }

    function isSafe(candidate: Position) {
      if (Math.hypot(candidate.x - currentPosition.x, candidate.y - currentPosition.y) < minTravel) {
        return false
      }

      if (pointer) {
        const pointerX = pointer.x - areaRect.left
        const pointerY = pointer.y - areaRect.top
        const pointerOverlap =
          candidate.x < pointerX + CLEARANCE &&
          candidate.x + buttonRect.width > pointerX - CLEARANCE &&
          candidate.y < pointerY + CLEARANCE &&
          candidate.y + buttonRect.height > pointerY - CLEARANCE

        if (pointerOverlap) return false
      }

      if (!yesRect || !yesPosition) return true

      return !(
        candidate.x < yesPosition.x + yesRect.width + CLEARANCE &&
        candidate.x + buttonRect.width + CLEARANCE > yesPosition.x &&
        candidate.y < yesPosition.y + yesRect.height + CLEARANCE &&
        candidate.y + buttonRect.height + CLEARANCE > yesPosition.y
      )
    }

    for (let attempt = 0; attempt < 32; attempt += 1) {
      const candidate = {
        x: Math.round(Math.random() * maxX),
        y: Math.round(Math.random() * maxY),
      }

      if (isSafe(candidate)) return candidate
    }

    const fallbackPositions = [
      { x: 0, y: maxY },
      { x: maxX, y: maxY },
      { x: maxX, y: 0 },
      { x: 0, y: 0 },
    ]

    return fallbackPositions.find(isSafe) ?? null
  }, [areaRef, yesButtonRef])

  useEffect(() => {
    const area = areaRef.current
    if (!area || !position || typeof ResizeObserver === 'undefined') return

    const initialRect = area.getBoundingClientRect()
    lastAreaSizeRef.current = { width: initialRect.width, height: initialRect.height }

    const observer = new ResizeObserver(() => {
      const rect = area.getBoundingClientRect()
      const previousSize = lastAreaSizeRef.current
      if (previousSize && previousSize.width === rect.width && previousSize.height === rect.height) return

      lastAreaSizeRef.current = { width: rect.width, height: rect.height }
      const safePosition = findSafePosition()
      if (safePosition) {
        setPosition((current) =>
          current?.x === safePosition.x && current.y === safePosition.y ? current : safePosition,
        )
      }
    })

    observer.observe(area)
    return () => observer.disconnect()
  }, [areaRef, findSafePosition, position])

  function escape(event: PointerEvent<HTMLButtonElement>) {
    if (stopEscaping) return

    const nextPosition = findSafePosition({ x: event.clientX, y: event.clientY })
    if (!nextPosition) return

    setPosition(nextPosition)
    setEscapeCount((count) => count + 1)
  }

  function handlePointerEnter(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType === 'mouse' || event.pointerType === 'pen') escape(event)
  }

  function handlePointerDown(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType !== 'touch' || stopEscaping) return

    event.preventDefault()
    escape(event)
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    const isKeyboardActivation = event.detail === 0

    if (isKeyboardActivation || stopEscaping) {
      onSelect()
      return
    }

    event.preventDefault()
  }

  return (
    <button
      aria-label="No, gracias"
      className={`answer-button answer-button--no escaping-button${position ? ' escaping-button--moved' : ''}`}
      data-escape-count={escapeCount}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      ref={buttonRef}
      style={position ? { left: `${position.x}px`, top: `${position.y}px` } : undefined}
      type="button"
    >
      No, gracias <span aria-hidden="true">🙈</span>
    </button>
  )
}

export default EscapingButton
