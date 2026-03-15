import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "What membership plans do you offer?",
    answer:
      "We offer monthly, annual, student and family plans. Members can also purchase day or weekly passes."
  },
  {
    question: "Is there a contract or cancellation fee?",
    answer:
      "Our monthly memberships have no long-term contract. You can cancel anytime without hidden fees."
  },
  {
    question: "Can I freeze or pause my membership?",
    answer:
      "Yes. Members can freeze their membership temporarily for travel or personal reasons."
  },
  {
    question: "Do you offer a free trial or guest pass?",
    answer:
      "Yes, we offer a free one-day trial so you can explore our gym before joining."
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Our certified trainers create customized workout plans tailored to your goals."
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
}

const FAQSection = () => {

  const [active, setActive] = useState(null)

  const toggle = (index) => {
    setActive(active === index ? null : index)
  }

  return (

    <section id="faq" className="bg-black text-white px-6 md:px-20 py-20 md:py-28">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 tracking-widest font-semibold mb-4">
          FAQ
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10 md:mb-14">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </motion.div>


      {/* FAQ List */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl space-y-6"
      >

        {faqs.map((faq, index) => (

          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -4 }}
            className="border border-gray-800 rounded-lg p-5 md:p-6 
            hover:border-orange-500 transition cursor-pointer"
            onClick={() => toggle(index)}
          >

            {/* Question */}
            <div className="flex justify-between items-center gap-4">

              <h3 className="text-base md:text-lg font-semibold">
                {String(index + 1).padStart(2, "0")}. {faq.question}
              </h3>

              <motion.span
                animate={{ rotate: active === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl text-orange-500"
              >
                +
              </motion.span>

            </div>


            {/* Answer */}
            <AnimatePresence>

              {active === index && (

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </motion.div>

    </section>
  )
}

export default FAQSection