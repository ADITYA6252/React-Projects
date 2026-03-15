const Card = ({ title, img }) => {
  return (
    <div className="relative rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-orange-500/20">

      {/* Image */}
      <img
        src={img}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>

      {/* Text */}
      <div className="absolute bottom-4 left-4 text-orange-500 font-semibold flex items-center gap-2">
        {title}
        <span className="text-white">↗</span>
      </div>

    </div>
  )
}

const Services = () => {
  return (
    <section id="services" className="bg-black text-white px-6 md:px-20 py-20 md:py-28">

      {/* Heading */}
      <p className="text-gray-500 tracking-widest mb-3">OUR SERVICE</p>

      <h2 className="text-3xl md:text-5xl font-bold text-orange-500 max-w-3xl">
        Unlock Your Best Self with Our Full Range of Fitness Services
      </h2>

      <p className="text-gray-400 mt-4 max-w-xl text-sm md:text-base">
        We provide a complete range of fitness services designed to help you
        build strength, improve endurance and achieve your personal fitness
        goals. From expert training programs to modern gym facilities, our
        services are crafted to support every stage of your fitness journey.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[190px] gap-6 mt-16">

        {/* Row 1 */}
        <Card title="Transform" img="/images/image1.avif" />

        <Card title="Elevate" img="/images/image2.avif" />

        <Card title="Achieve" img="/images/image3.avif" />

        {/* BIG CARD */}
        <div className="sm:row-span-2 md:row-span-2 relative rounded-xl overflow-hidden group cursor-pointer">

          <img
            src="/images/image5.avif"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-6 left-6 text-white text-2xl font-bold">
            Unleash
          </div>

        </div>

        {/* Row 2 */}
        <Card title="Perform" img="/images/image4.avif" />

        <Card title="Push" img="/images/image6.avif" />

        <Card title="Train" img="/images/image7.avif" />

      </div>

    </section>
  )
}

export default Services