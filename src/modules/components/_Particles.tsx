import React, {useEffect, useRef} from 'react'
import {Particle} from '../../@types/particles'

let WIDTH = parent.innerWidth
let HEIGHT = parent.innerHeight
const N_PARTICLES = 600
const RADIUS = 3
const VELOCITY = 2
let CONNECT_DISTANCE = WIDTH / 30
const PARTICLES = []
const FPS = 75 // DO NOT CHANGE

const generateParticle = (rad: number, maxVel: number): Particle => {
  const x = Math.random() * WIDTH
  const y = Math.random() * HEIGHT
  const vel = (((maxVel - Math.random() * 0.1 * maxVel) / 10) * WIDTH) / 2560
  const phi = Math.random() * 2 * Math.PI
  const sin = Math.sin(phi)
  const cos = Math.cos(phi)

  return {x, y, rad, vel, sin, cos}
}

const drawBackground = (ctx: CanvasRenderingContext2D): void => {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)
}

const drawParticle = (ctx: CanvasRenderingContext2D, p: Particle): void => {
  ctx.fillStyle = '#fff'
  ctx.fillRect(p.x, p.y, p.rad, p.rad)
  ctx.fill()
}

const moveParticle = (p: Particle): void => {
  p.x += p.vel * p.cos
  if (p.x <= 0) p.x = WIDTH
  else if (p.x >= WIDTH) p.x = 0
  p.y += p.vel * p.sin
  if (p.y <= 0) p.y = HEIGHT
  else if (p.y >= HEIGHT) p.y = 0
}

const connectParticles = (
  ctx: CanvasRenderingContext2D,
  p1: Particle,
  particles: Particle[],
  dis: number
): void => {
  for (let i = 1; i < particles.length; i++) {
    const p2 = particles[i]
    const dx = p1.x - p2.x
    const dy = p1.y - p2.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < dis) {
      ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / dis})`
      ctx.beginPath()
      ctx.moveTo(p1.x, p1.y)
      ctx.lineTo(p2.x, p2.y)
      ctx.stroke()
    }
  }
}

const Particles = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

  window.addEventListener('resize', () => {
    WIDTH = parent.innerWidth
    HEIGHT = parent.innerHeight
    CONNECT_DISTANCE = WIDTH / 30
    if (canvasRef.current && ctxRef.current) drawBackground(ctxRef.current)
    for (let i = 0; i < N_PARTICLES; i++) {
      PARTICLES[i] = generateParticle(RADIUS, VELOCITY)
    }
  })

  useEffect(() => {
    for (let i = 0; i < N_PARTICLES; i++) {
      PARTICLES.push(generateParticle(RADIUS, VELOCITY))
    }
    const canvas = canvasRef.current
    if (canvasRef.current) {
      ctxRef.current = canvasRef.current.getContext('2d')
      if (ctxRef.current) {
        const ctx = ctxRef.current
        ctxRef.current.clearRect(0, 0, WIDTH, HEIGHT)
        ctx.fillStyle = '#000'
        ctx.fillRect(0, 0, WIDTH, HEIGHT)
      }
    }

    return () => {
      for (let i = 0; i < N_PARTICLES; i++) {
        PARTICLES.pop()
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      //if (canvasRef.current) canvasRef.current.width = canvasRef.current.width
      if (canvasRef.current && ctxRef.current) {
        const ctx = ctxRef.current
        ctx.clearRect(0, 0, WIDTH, HEIGHT)
        drawBackground(ctx)
        for (const p of PARTICLES) {
          drawParticle(ctx, p)
          connectParticles(ctx, p, PARTICLES, CONNECT_DISTANCE)
          moveParticle(p)
        }
      }
    }, 1000 / FPS)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div id="particles-container">
      <canvas
        id="particles"
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
      ></canvas>
    </div>
  )
}

export default Particles
