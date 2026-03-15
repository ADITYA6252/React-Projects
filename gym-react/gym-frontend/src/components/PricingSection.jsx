import { useState } from "react"

const PricingSection = () => {

  const [yearly,setYearly] = useState(false)

  const plans = [
    {
      name:"Basic Plan",
      monthly:50,
      yearly:480,
      desc:"Perfect for beginners & casual gym-goers",
      features:[
        "Full gym access (off-peak hours)",
        "Access to cardio & weight areas",
        "Locker room & shower use",
        "Cancel anytime"
      ],
      highlight:false
    },

    {
      name:"Standard Plan",
      monthly:60,
      yearly:600,
      desc:"Our most popular plan – great value!",
      features:[
        "24/7 gym access",
        "Unlimited group classes",
        "Access to all equipment",
        "1 PT session/month",
        "Member mobile app"
      ],
      highlight:true
    },

    {
      name:"Premium Plan",
      monthly:70,
      yearly:720,
      desc:"For serious athletes wanting more",
      features:[
        "All Standard features",
        "Unlimited personal training",
        "Nutrition coaching",
        "Recovery & sauna access",
        "Priority booking"
      ],
      highlight:false
    }
  ]

  return (

    <section id="pricing" className="bg-black text-white px-6 md:px-20 py-20 md:py-28">

      <p className="text-gray-500 tracking-widest mb-3">
        PRICING
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10">
        FLEXIBLE PLANS FOR EVERY GOAL
      </h2>


      {/* Toggle */}
      <div className="flex items-center justify-center md:justify-start gap-4 mb-16">

        <span className={!yearly ? "text-orange-500" : "text-gray-400"}>
          Monthly
        </span>

        <div
          onClick={()=>setYearly(!yearly)}
          className="w-14 h-7 bg-gray-700 rounded-full flex items-center cursor-pointer p-1"
        >
          <div className={`w-5 h-5 bg-orange-500 rounded-full transition
          ${yearly ? "translate-x-7" : ""}`}></div>
        </div>

        <span className={yearly ? "text-orange-500" : "text-gray-400"}>
          Yearly
        </span>

      </div>


      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

        {plans.map((plan,index)=>{

          const price = yearly ? plan.yearly : plan.monthly

          return(

            <div
              key={index}
              className={`relative p-6 md:p-8 rounded-xl transition duration-500
              hover:-translate-y-3 hover:shadow-2xl
              ${
                plan.highlight
                ? "bg-orange-500 text-white scale-105 shadow-xl"
                : "bg-[#1a1a1a]"
              }`}
            >

              {/* Ribbon */}
              {plan.highlight && (
                <div className="absolute -top-3 right-5 bg-white text-orange-500 text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold mb-3">
                {plan.name}
              </h3>

              <p className="text-3xl font-bold mb-3">
                ${price}
                <span className="text-sm ml-1">
                  {yearly ? "/year" : "/month"}
                </span>
              </p>

              <p className="text-sm opacity-80 mb-6">
                {plan.desc}
              </p>

              <ul className="space-y-3 text-sm mb-8">

                {plan.features.map((f,i)=>(
                  <li key={i} className="flex gap-2">
                    <span className="text-orange-400">✔</span>
                    {f}
                  </li>
                ))}

              </ul>

              <button
                className={`w-full py-2 rounded-full text-sm font-semibold transition
                ${
                  plan.highlight
                  ? "bg-white text-orange-500 hover:bg-gray-200"
                  : "border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
                }`}
              >
                Buy This Plan
              </button>

            </div>

          )
        })}

      </div>

    </section>
  )
}

export default PricingSection