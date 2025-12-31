const ProjectCard = ({ image1, image2 }) => {
  return (
    <>
      <div className="lg:w-1/2 w-full group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
        <img
          className="h-full w-full object-cover"
          src={image1}
          alt="project"
        />

        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/15">
          <h2 className="uppercase text-3xl sm:text-4xl lg:text-6xl font-[font1] border-4 pt-3 px-6 lg:pt-4 lg:px-8 text-white border-white rounded-full">
            Voir le projet
          </h2>
        </div>
      </div>

      <div className="lg:w-1/2 w-full group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
        <img
          className="h-full w-full object-cover"
          src={image2}
          alt="project"
        />

        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/15">
          <h2 className="uppercase text-3xl sm:text-4xl lg:text-6xl font-[font1] border-4 pt-3 px-6 lg:pt-4 lg:px-8 text-white border-white rounded-full">
            Voir le projet
          </h2>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
