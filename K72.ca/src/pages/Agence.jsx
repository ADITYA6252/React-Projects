import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Agence = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const images = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg'
  ]

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 30%',
        end: 'top -70%',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const index = Math.min(
            images.length - 1,
            Math.floor(self.progress * images.length)
          )
          imageRef.current.src = images[index]
        }
      }
    })
  })

  return (
    <div className="relative">
      <div
        ref={imageDivRef}
        className="absolute top-10 lg:top-96 left-[30vw] w-[25vw] lg:w-[15vw] h-[30vw] lg:h-[20vw] overflow-hidden rounded-xl lg:rounded-3xl"
      >
        <img
          ref={imageRef}
          className="h-full w-full object-cover"
          src={images[0]}
          alt="team"
        />
      </div>

      <div className="font-[font2] mt-[40vh] lg:mt-[55vh]">
        <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
          Soixan7e <br /> Douze
        </h1>
      </div>
    </div>
  )
}

export default Agence
