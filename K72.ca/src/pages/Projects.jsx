import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProjectCard from '../components/projects/ProjectCard'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const container = useRef()

  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
    }
  ]

  useGSAP(() => {
    gsap.from('.hero', {
      height: '100px',
      stagger: 0.4,
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  }, { scope: container })

  return (
    <div ref={container} className="p-2 lg:p-4 mb-[100vh]">
      <div className="pt-[45vh]">
        <h2 className="font-[font2] text-7xl lg:text-[9.5vw] uppercase">Projets</h2>
      </div>

      <div className="lol lg:-mt-20">
        {projects.map((p, i) => (
          <div
            key={i}
            className="hero w-full h-[60vh] lg:h-[850px] mb-4 flex flex-col lg:flex-row gap-2 lg:gap-4"
          >
            <ProjectCard image1={p.image1} image2={p.image2} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
