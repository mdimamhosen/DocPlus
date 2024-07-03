import React from "react";
import SectionButton from "./SectionButton";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    title: "Expertise and Compassion Combined",
    description:
      "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
    image:
      "https://s3-alpha-sig.figma.com/img/84b9/d56a/724f72eb2c73d3e7560e01a5f0093700?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dshU7~-Z~vl0Gcj4HUfTBxZLVLSGJSQYFnfhwlMZVtS5jk4wg3oOF7brZQ~ymZ28opW1jksGHt0JU2lqrfM95LmZB1yrty~Q9oVArOG2LGMviz~buKR9PId0wxw571~gyaFtla85dlvBMQZ7TR5dVorZiElD1cwnqdAOCNoCAWvjTsHQZKLCYhvmrTgG2nYfGxK4OupLbW0ZFbautg6Z66Imdu-ahrct8m-7-zleehoqSPa5lAbbQQ~h4n~S7Nsy4tpLnNXX16zHfZUA6wjTOzDzXSfXnPb9fOiH3YeJbC-65CjpRcUzubCSlJn4ggC1ZMrySH4QWT8suUjg6Z0fPg__",
    name: "Sarah D",
    position: ", IT Professional",
    rating: 5,
  },
  {
    title: "Life-Saving Care, Life-Changing Experience",
    description:
      "My experience at Doc+ was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life. And this was very life saving for me and I'm very thankful.",
    image:
      "https://s3-alpha-sig.figma.com/img/bfd0/9b20/f2cf44bfa3af771f6396363d4ae67aab?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mjG47OWuZQB3dGWFqtN7eQt7g9gH4w7qEWKKzWxsQk~1TJ4r2C7EuoHBnhzGMGYyLeDgbtJc53A7i29VaOrInUFZb-DHxixSDppLcwXq3htX2YqHB-15z-iRsyHjHwrdzr7ATUMLruxEr8JHLqZmvkaOYfjXHM0gLza4Nzgbwe1H2SXDLIgmeVoTE8tRqm1A7ZkixeeU9eOGjw6sFv2yhl~3jbz5ETQQIdDrm-riuu4Qwexgw7gt~-ruGFtwG--z-0FWDBN3Yz~fNAuMpeMSJzIxGOR8-BI4A1y0qnGuCmfDRR6DniCBAq-4NhchUMHcTYq4AAfXXax8OJGtifeSoQ__",
    name: "Michael R",
    position: ", Business Executive",
    rating: 4,
  },
  {
    title: "A Partner in Health and Wellness",
    description:
      "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and wellness.",
    image:
      "https://s3-alpha-sig.figma.com/img/e0eb/8c7e/d08cbe61699dcdccad10d7e4dd0904b0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZXgtyt2tcszqD-n-LATTuFmCq7GxyLlSQTYxxBYy8qfP0NOsWWmqssVvE~daqf-0xTLRHXc-ZHCxZsssBuateQ2Fk07xE3KDK2nJK9cYYVfywiN7VsVOP~nHRexezJQ77qRdm~YHTBuOMW2K7t5UQl6JQJKupf9toks4kpg2azQulMrrAZGd5~kXkDvyXdG1VyeuhwQyEeB7~nwooJc9GWKepPAQjdV3zv2BZJ6N6xGhUfyzu3sjQJSoLdOVsg6QS~LOCDnFaBjhVinErGwWStTMGt5-ey8P948HZGYFhf7UDytd-IPRtDUY8ASIpoED2dcaJxw2qpjxOef3IfGpA__",
    name: "David S",
    position: ", Lawyer",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-6 lg:py-10 ">
      <div className="mb-6 space-y-4">
        <SectionButton text="Testimonial" />
        <SectionHeading text="What they say about us" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#FFFFF5] p-6 rounded-2xl shadow flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-[#020043] ">
              {testimonial.title}
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              {testimonial.description}
            </p>
            <div className="flex items-center mt-6">
              <img
                src={testimonial.image}
                alt="testimonial"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="text-gray-500">
                  <span className="font-bold">{testimonial.name}</span>
                  <span>{testimonial.position}</span>
                </p>
                <div className="mt-2 flex items-center">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0l2.45 6.29h6.29l-5.08 4.12 1.91 6.29-5.98-4.5-5.98 4.5 1.91-6.29-5.08-4.12h6.29l2.45-6.29z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
