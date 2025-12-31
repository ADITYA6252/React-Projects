import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = ({ children }) => {
  const stairsRef = useRef()
  const pageRef = useRef()
  const path = useLocation().pathname

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.set(stairsRef.current, { display: 'block' })
      .from('.stair', { height: 0, stagger: -0.2 })
      .to('.stair', { y: '100%', stagger: -0.25 })
      .set(stairsRef.current, { display: 'none' })
      .set('.stair', { y: 0 })

    gsap.from(pageRef.current, { opacity: 0, scale: 1.1, delay: 1 })
  }, [path])

  return (
    <>
      <div ref={stairsRef} className="fixed top-0 z-20 h-screen w-full hidden">
        <div className="flex h-full">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="stair w-1/5 h-full bg-black"></div>
          ))}
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </>
  )
}

export default Stairs
