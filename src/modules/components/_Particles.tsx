import React, { useEffect, useRef, useState } from 'react'
import { Particle } from '../../@types/particles'

const N_PARTICLES = 750 //600
const RADIUS = 3
const VELOCITY = 3
const PARTICLES = []
const FPS = 30 //75 // DO NOT CHANGE

const generateParticle = (
  width: number,
  height: number,
  rad: number,
  maxVel: number
): Particle => {
  const x = Math.random() * width
  const y = Math.random() * height
  const vel = (((maxVel - Math.random() * 0.1 * maxVel) / 10) * width) / 2560
  const phi = Math.random() * 2 * Math.PI
  const sin = Math.sin(phi)
  const cos = Math.cos(phi)

  return { x, y, rad, vel, sin, cos }
}

const drawBackground = (
  width: number,
  height: number,
  ctx: CanvasRenderingContext2D
): void => {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, width, height)
}

const drawParticle = (ctx: CanvasRenderingContext2D, p: Particle): void => {
  ctx.fillStyle = '#fff'
  ctx.fillRect(p.x, p.y, p.rad, p.rad)
  ctx.fill()
}

const moveParticle = (width: number, height: number, p: Particle): void => {
  p.x += p.vel * p.cos
  if (p.x <= 0) p.x = width
  else if (p.x >= width) p.x = 0
  p.y += p.vel * p.sin
  if (p.y <= 0) p.y = height
  else if (p.y >= height) p.y = 0
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
      ctx.moveTo(p1.x + RADIUS / 2, p1.y + RADIUS / 2)
      ctx.lineTo(p2.x + RADIUS / 2, p2.y + RADIUS / 2)
      ctx.stroke()
    }
  }
}

const Particles = (props: { width: number; height: number }): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const [width, setWidth] = useState((props.width * window.innerWidth) / 2560)
  const [height, setHeight] = useState(
    (props.height * window.innerHeight) / 1337
  )
  const [nParticles, setNParticles] = useState(
    N_PARTICLES * ((width / 2560) * (height / 1337))
  )
  const [conDis, setConDis] = useState(width / 30)

  window.addEventListener('resize', () => {
    setWidth((props.width * window.innerWidth) / 2560)
    setHeight((props.height * window.innerHeight) / 1337)
    setConDis(width / 30)
    setNParticles(N_PARTICLES * ((width / 2560) * (height / 1337)))
    if (canvasRef.current && ctxRef.current)
      drawBackground(width, height, ctxRef.current)
    for (let i = 0; i < N_PARTICLES; i++) {
      PARTICLES[i] = generateParticle(width, height, RADIUS, VELOCITY)
    }
  })

  useEffect(() => {
    setWidth((props.width * window.innerWidth) / 2560)
    setHeight((props.height * window.innerHeight) / 1337)
    for (let i = 0; i < Math.ceil(nParticles); i++) {
      PARTICLES.push(generateParticle(width, height, RADIUS, VELOCITY))
    }
    if (canvasRef.current) {
      ctxRef.current = canvasRef.current.getContext('2d')
      if (ctxRef.current) {
        const ctx = ctxRef.current
        ctxRef.current.clearRect(0, 0, width, height)
        ctx.fillStyle = '#000'
        ctx.fillRect(0, 0, width, height)
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
      if (canvasRef.current && ctxRef.current) {
        const ctx = ctxRef.current
        ctx.clearRect(0, 0, width, height)
        drawBackground(width, height, ctx)
        for (const p of PARTICLES) {
          drawParticle(ctx, p)
          connectParticles(ctx, p, PARTICLES, conDis)
          moveParticle(width, height, p)
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
        width={width}
        height={height}
      ></canvas>
    </div>
  )
}

export default Particles
