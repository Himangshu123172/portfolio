import { useEffect, useRef } from "react"

// Ambient canvas: a faint grid of drifting nodes with connecting lines,
// evoking a neural network. Kept dim and slow so it never competes with
// content. Respects prefers-reduced-motion by rendering a single static frame.

export default function BackgroundGrid() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width, height, nodes, animationId
    const NODE_COUNT_DIVISOR = 18000

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = Math.max(window.innerHeight, document.body.scrollHeight)
      const count = Math.min(70, Math.floor((width * height) / (NODE_COUNT_DIVISOR * 10)))
      nodes = Array.from({ length: Math.max(24, count) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      const maxDist = 160

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        if (!prefersReduced) {
          a.x += a.vx
          a.y += a.vy
          if (a.x < 0 || a.x > width) a.vx *= -1
          if (a.y < 0 || a.y > height) a.vy *= -1
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.09 * (1 - dist / maxDist)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(96, 165, 250, 0.35)"
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!prefersReduced) {
        animationId = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
      {/* Static grid lines for extra texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Radial vignette so content stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(139,92,246,0.07), transparent 60%)",
        }}
      />
    </div>
  )
}
