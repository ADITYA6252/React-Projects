const pins = [
  { top: "20%", left: "25%" },
  { top: "35%", left: "40%" },
  { top: "50%", left: "60%" },
  { top: "30%", left: "70%" },
  { top: "65%", left: "30%" },
  { top: "70%", left: "55%" },
  { top: "40%", left: "15%" },
  { top: "55%", left: "75%" },
];

const LocationSection = () => {
  return (
    <section id="location" className="bg-black text-white px-6 md:px-20 py-20 md:py-28">
      {/* Heading */}
      <p className="text-gray-600 tracking-widest mb-4">OUR LOCATION</p>

      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-12 md:mb-14 max-w-3xl">
        The Gym Next Door — With Results That Go the Distance
      </h2>

      {/* Map Container */}
      <div className="relative w-full h-[280px] md:h-[420px] rounded-xl overflow-hidden">
        {/* Map Image */}
        <img
          src="/images/image10.jpg"
          className="w-full h-full object-cover opacity-80"
        />

        {/* Pins */}
        {pins.map((pin, index) => (
          <div
            key={index}
            className="absolute animate-bounce text-orange-500 text-xl"
            style={{ top: pin.top, left: pin.left }}
          >
            📍
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;