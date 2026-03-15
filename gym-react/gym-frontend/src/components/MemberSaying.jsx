const testimonials = [
  {
    name: "Amelia",
    role: "Student",
    img: "https://i.pravatar.cc/100?img=5",
    text: "Joining this gym completely changed my fitness journey. The trainers are supportive and the environment keeps me motivated every day.",
    rating: 4
  },

  {
    name: "Waliya",
    role: "Student",
    img: "https://i.pravatar.cc/100?img=8",
    text: "The workouts are amazing and the equipment is top quality. I love the energy here and the trainers push you to do your best.",
    rating: 5
  },

  {
    name: "Ezaz",
    role: "Student",
    img: "https://i.pravatar.cc/100?img=12",
    text: "Great place to train and build confidence. The community is supportive and the trainers help you stay consistent.",
    rating: 5
  }
]

const MemberSaying = () => {
  return (
    <section id="testimonials" className="bg-black text-white px-6 md:px-20 py-20 md:py-28">

      {/* Heading */}
      <p className="text-gray-600 tracking-widest mb-4">
        MEMBER SAYING
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-12 md:mb-16">
        WHAT OUR MEMBERS SAY
      </h2>


      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">

        {testimonials.map((item,index)=>(
          <div
            key={index}
            className="group transition duration-500 hover:-translate-y-2"
          >

            {/* Avatar */}
            <img
              src={item.img}
              className="w-16 h-16 rounded-full mb-6 border-2 border-orange-500"
            />

            {/* Text */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {item.text}
            </p>

            {/* Dots */}
            <div className="flex gap-2 mb-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            </div>

            {/* Name */}
            <h3 className="font-semibold">
              {item.name}
            </h3>

            {/* Role */}
            <p className="text-gray-500 text-sm mb-3">
              {item.role}
            </p>

            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 text-lg">
              {"★".repeat(item.rating)}
              {"☆".repeat(5-item.rating)}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default MemberSaying