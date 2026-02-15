"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Why NewBombayPainting and not any local painter?",
    answer:
      "Choose NewBombayPainting for your house painting needs over local painters for a trustworthy and transparent experience. We adhere to our promises, ensuring precise square footage measurements and the use of guaranteed materials without hidden charges. Unlike local painters, NewBombayPainting delivers on time, thanks to our skilled painters who undergo rigorous training overseen by dedicated project managers. With NewBombayPainting, reliability and expertise take precedence. Our online painter booking system provides convenience in scheduling top-notch painters, making the process effortless for you. Transform your home with NewBombayPainting – a trusted name in home painting services that combines professionalism with perfection. Experience affordable and seamless painting services that turn your space into a masterpiece. Choose NewBombayPainting for a reliable and stress-free home painting journey.",
  },
  {
    question:
      "What is the overall house painting procedure once the quote is requested?",
    answer:
      "Once you request a quote from New Bombay Painting, we follow a systematic 5-step process to ensure a hassle-free experience and a flawless finish:\n\nStep 1: Site Survey & Quotation – Our experts visit your home for a thorough site inspection. We check for dampness, cracks, and wall conditions to provide you with an accurate and honest quotation.\n\nStep 2: Expert Consultation – After the quotation is accepted, we help you choose the perfect shades and finishes. We guide you through the latest trends and color palettes that suit your space and lighting.\n\nStep 3: Professional Surface Preparation – Our skilled team protects furniture and floors, then prepares surfaces by sanding, filling gaps, and repairing minor imperfections.\n\nStep 4: Systematic Painting – Using the best tools and techniques, we apply primer and paint in a planned manner, ensuring even coats and clean edges.\n\nStep 5: Final Finishing & Handover – After drying, we conduct a final quality check and clean-up. Your home is handed over only after complete satisfaction.",
  },

  /* ---------- DUMMY QUESTIONS (REPLACE LATER) ---------- */
  {
    question: "How do we operate?",
    answer:
      "NewBombayPainting follows a structured and transparent approach to transform your home effortlessly. The journey begins with a detailed Home Painting Consultation, where our experts understand your preferences and provide guidance on colours, finishes, and painting techniques. During the House Paint Planning stage, we clearly define the scope of work, timelines, and budget to ensure complete clarity. Our trained and experienced painters then execute the plan with precision and attention to detail during the Painting Execution phase. After completion, a thorough Quality Inspection is carried out to maintain high standards. Once you are fully satisfied, we hand over your beautifully painted home. At NewBombayPainting, customer satisfaction is our priority — the job isn’t complete until you are happy with the results.",
  },
  {
    question: "Do you provide warranty on painting work?",
    answer:
      "Dummy answer: Yes, we offer a workmanship warranty along with brand paint warranties depending on the product selected.",
  },
  {
    question: "Can you help me choose the right colours for my home?",
    answer:
      "Selecting the right colours plays a vital role in creating a balanced, warm, and inviting home environment. The perfect shade enhances your interiors and complements your lifestyle. With NewBombayPainting’s Free Online Colour Consultation, you can confidently choose the best colour combinations for your space. Our expert consultants guide you through trending palettes, finishes, and design ideas suited to your home. NewBombayPainting’s online painter consultation ensures a smooth and stress-free decision-making process. Visit NewBombayPainting today and take the first step toward transforming your home — where every brushstroke turns your vision into reality.",
  },
  {
    question: "Latest Home Painting Servicing Ideas?",
    answer:
      "Upgrade your living space with NewBombayPainting’s premium house painting solutions and give your home a fresh new personality. Enhance your interiors using high-quality wall paints and restore old furniture to bring back elegance and charm. Explore creative combinations of colours, finishes, and textures to redefine your home’s ambiance. Looking for a professional painter online? NewBombayPainting is your trusted destination for expert home painting services. From walls and ceilings to furniture and fixtures, NewBombayPainting delivers a smooth and hassle-free transformation. Achieve a refined shine on metal surfaces with professional polishing techniques. Rely on NewBombayPainting for all your painting requirements and make your home truly reflect your taste. Discover endless design possibilities with NewBombayPainting, your reliable partner for a flawless and picture-perfect home.",
  },
  {
    question: "Do you offer painting services for rented homes?",
    answer:
      "Yes, we provide cost-effective painting solutions specially designed for rental properties.",
  },
  {
    question: "Are your painters trained and verified?",
    answer:
      "All our painters are professionally trained and supervised by experienced project managers.",
  },
  {
    question: "What type of paints do you use?",
    answer:
      "We use premium-quality paints from trusted brands like Asian Paints, Berger, Nerolac, and more.",
  },
  {
    question: "Services Provided by NewBombayPainting",
    answer:
      "If you’re exhausted from searching for dependable house painting services in major Indian cities such as Mumbai, Bangalore, Hyderabad, Chennai, and beyond, NewBombayPainting is here to help. We collaborate with skilled and verified painters to deliver reliable and high-quality painting solutions. Forget inconsistent results and endless “painters near me” searches. At NewBombayPainting, we focus on delivering stress-free, professional, and result-oriented services. Our expertise includes Interior Painting, Exterior Painting, Wood Coating, Metal Painting, Waterproofing, Grouting Solutions, and Home Cleaning Services. Experience superior workmanship and seamless execution with us — your dream home is just one coat away. Use our Painting Cost Calculator and explore Wall Painting Design ideas for a smooth and informed painting journey. Choose NewBombayPainting for a dependable and premium home painting experience.",
  },
  {
question: "How much paint is required for 1000 sq ft?",
answer: "The quantity of paint required for a 1,000 sq ft area depends on several factors such as the number of coats, paint type (interior or exterior), surface condition, texture, and expected wastage. On average, 30 to 35 litres of paint are required to paint a standard two-bedroom home measuring 1,000 square feet. The approximate cost for painting a 2BHK apartment of this size, excluding the ceiling, is around ₹14,000 for distemper paints and ₹20,000 for emulsion paints. Actual requirements and costs may vary based on site conditions and paint selection.",
  },
{
  question: "How to calculate the painting area?",
  answer: "To calculate the total painting area, start by measuring the length and height of each wall that needs painting. Multiply these dimensions to determine the area of each wall. Add the individual wall areas to get the total paintable surface. From this total, subtract the area occupied by doors, windows, and other sections that do not require paint. This method helps estimate the accurate painting area and ensures better planning for paint quantity and cost.",
},
{
 question: "How is painting cost calculated?",
 answer: "Painting costs are determined by multiple factors, including the total area to be painted, the number of coats required, the quality and type of paint selected, labour charges, and additional processes such as primer application, putty work, or surface repairs. To get a precise estimate, you can use online painting cost calculators or consult a professional painter online. Many professional painting services, including NewBombayPainting, offer free online estimates based on your project details, ensuring transparency and better budgeting.",
},

];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f9f7f3] py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Got Questions? <br />
            <span className="text-yellow-500">
              We’ve Got Clear Answers
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in transparency, quality, and trust. Here are answers
            to the most common questions our customers ask before choosing
            New Bombay Painting.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden border"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-bold text-yellow-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
