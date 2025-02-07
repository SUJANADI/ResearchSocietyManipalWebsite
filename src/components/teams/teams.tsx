import Image from "next/image";
import React from "react";

const Team = () => {
  const executiveBoard = [
    {
      id: 1,
      name: "Krish Didwania ",
      designation: "Co President",
      image: "/images/team/krish.png",
      emailLink: "mailto:krishdidwania0674@gmail.com",
      linkedinLink: "https://www.linkedin.com/in/krishdidwania",
      githubLink: "https://github.com/krish0674",
    },
    {
      id: 2,
      name: "Arooja Tyagi",
      designation: "Co President",
      image: "/images/team/arooja.png",
      emailLink: "mailto:post2arooja@gmail.com",
      linkedinLink: "https://www.linkedin.com/in/arooja-tyagi-10639b248/",
      githubLink: "/#",
    },
    {
      id: 3,
      name: "Yash Rohan ",
      designation: "General Secretary",
      image: "/images/team/yash.png",
      emailLink: "mailto:yashrohan001@gmail.com",
      linkedinLink: "https://www.linkedin.com/in/yash-rohan",
      githubLink: "https://github.com/YashRohan01",
    },
    {
      id: 4,
      name: "Het Ambaliya ",
      designation: "Technical Secretary",
      image: "/images/team/het.png",
      emailLink: "mailto:het.ambaliya4622@gmail.com",
      linkedinLink:
        "https://www.linkedin.com/in/het-ambaliya-5757b4253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      githubLink: "https://github.com/hetdotexe",
    },
    {
      id: 5,
      name: "Komal Mathur",
      designation: "Technical Head",
      image: "/images/team/komal.png",
      emailLink: "mailto:komlixmathur@gmail.com",
      linkedinLink: "https://www.linkedin.com/in/komal-mathur-2a39a91ab/",
      githubLink: "https://github.com/komalboyo",
    },
    {
      id: 6,
      name: "Sai Adithya Pavan",
      designation: "Head of Operations",
      image: "/images/team/sai.png",
      emailLink: "mailto: jayanthi.mitmpl2022@learner.manipal.edu",
      linkedinLink: "https://www.linkedin.com/in/sai-adithya-pavan-041a00246",
      githubLink: "https://github.com/Darksoul123",
    },
  ];

  const expertiseHeads = [
    {
      id: 7,
      name: "Santusti Gour",
      designation: "Chemcal & REHT Domain Head",
      image: "/images/team/santusti.png",
      emailLink: "mailto:santusti.3114@gmail.com",
      linkedinLink:
        "https://www.linkedin.com/in/santusti-gour-630820278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      githubLink: "/#",
    },
    {
      id: 8,
      name: "Het Ambaliya ",
      designation: "Robotics Domain Co Head",
      image: "/images/team/het.png",
      emailLink: "mailto:het.ambaliya4622@gmail.com",
      linkedinLink:
        "https://www.linkedin.com/in/het-ambaliya-5757b4253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      githubLink: "https://github.com/hetdotexe",
    },
    {
      id: 9,
      name: "Sai Ahithya Pavan",
      designation: "Robotics Domain Co Head",
      image: "/images/team/sai.png",
      emailLink: "mailto: jayanthi.mitmpl2022@learner.manipal.edu",
      linkedinLink: "https://www.linkedin.com/in/sai-adithya-pavan-041a00246",
      githubLink: "https://github.com/Darksoul123",
    },
    {
      id: 10,
      name: "Komal Mathur",
      designation: "AI and Cyber Security Domain Head",
      image: "/images/team/komal.png",
      emailLink: "mailto:komlixmathur@gmail.com",
      linkedinLink: "https://www.linkedin.com/in/komal-mathur-2a39a91ab/",
      githubLink: "https://github.com/komalboyo",
    },
    {
      id: 11,
      name: "Ishaan Gakhar",
      designation: "AI and Cyber Security Domain Mentor",
      image: "/images/team/ishaan.png",
      emailLink: "mailto:ishaangakhar04@gmail.com",
      linkedinLink: "https://www.linkedin.com/in/ishaan-gakhar-9248b8253/",
      githubLink: "https://github.com/IshaanGakhar",
    },
    {
      id: 12,
      name: "Hriday Raizada",
      designation: "Elecronics Domain Head",
      image: "/images/team/hriday.png",
      emailLink: "mailto:raizada.hriday@gmail.com",
      linkedinLink: "http://www.linkedin.com/in/hriday-raizada-9489b3251",
      githubLink: "https://github.com/Hriday11577",
    },
    {
      id: 13,
      name: "S Lakshman Shrikanth",
      designation: "Aerospace, Aeronautics and Material Science Domain Head",
      image: "/images/team/shrikhant.png",
      emailLink: "mailto:lakshmanshrikanth2k4@gmail.com",
      linkedinLink: "https://www.linkedin.com/in/lakshman-shrikanth-96252a26a/",
      githubLink: "https://www.linkedin.com/in/lakshman-shrikanth-96252a26a/",
    },
    {
      id: 14,
      name: "Yash Rohan",
      designation: "Mathematics and Physics Domain Head",
      image: "/images/team/yash.png",
      emailLink: "mailto:yashrohan001@gmail.com",
      linkedinLink: "https://www.linkedin.com/in/yash-rohan",
      githubLink: "https://github.com/YashRohan01",
    },
    {
      id: 15,
      name: "Abeer Sethia",
      designation: "Biotechnology Domain Head",
      image: "/images/team/abeer.png",
      emailLink: "mailto:abeersethia3105@gmail.com",
      linkedinLink:
        "https://www.linkedin.com/in/abeer-sethia-24ba101bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      githubLink: "https://github.com/abeersethia",
    },
    {
      id: 16,
      name: "Sujan Adiga",
      designation: "Web Development, Social Media and Design Domain Head",
      image: "/images/team/sujan.png",
      emailLink: "mailto:sujanadiga1507@gmail.com",
      linkedinLink: "www.linkedin.com/in/sujanadiga",
      githubLink: "https://github.com/SUJANADI",
    },
  ];

  const SocialIcon = ({ href, ariaLabel, children }) => (
    <a
      href={href}
      className="text-dark-6 hover:text-primary"
      aria-label={ariaLabel}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" className="fill-current">
        {children}
      </svg>
    </a>
  );

  const MemberCard = ({ member }) => (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
      <div className="shadow-testimonial group relative mb-8 rounded-xl bg-white px-5 pb-10 pt-12 transition-transform duration-300 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-primary/30 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-2 hover:shadow-lg hover:before:opacity-100 dark:bg-dark dark:shadow-none">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
          <div className="to-secondary absolute inset-0 bg-gradient-to-br from-primary opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
        </div>

        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px] transition-transform duration-300 group-hover:scale-110">
          <img
            src={member.image}
            alt={member.name}
            className="w-full rounded-full"
          />
        </div>
        <div className="relative z-10 text-center">
          <h4 className="mb-1 text-lg font-semibold text-dark transition-colors duration-300 group-hover:text-primary dark:text-white">
            {member.name}
          </h4>
          <p className="dark:text-dark-6 mb-5 text-sm text-body-color transition-colors duration-300 group-hover:text-dark dark:group-hover:text-white">
            {member.designation}
          </p>
          <div className="flex items-center justify-center gap-5">
            <SocialIcon href={member.emailLink} ariaLabel="Email">
              {" "}
              <path d="M15 3H3C2.175 3 1.5 3.675 1.5 4.5V13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM15 5.25L9 9.375L3 5.25V4.5L9 8.625L15 4.5V5.25Z" />{" "}
            </SocialIcon>{" "}
            <SocialIcon href={member.linkedinLink} ariaLabel="LinkedIn">
              {" "}
              <path d="M16.5 0h-15C.675 0 0 .675 0 1.5v15c0 .825.675 1.5 1.5 1.5h15c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5zM5.25 15h-2.7V6.75h2.7V15zM3.9 5.625a1.575 1.575 0 01-1.575-1.575A1.575 1.575 0 013.9 2.475a1.575 1.575 0 011.575 1.575A1.575 1.575 0 013.9 5.625zm11.1 9.375h-2.7v-4.125c0-1.012-.45-1.725-1.425-1.725-.787 0-1.275.525-1.5 1.05-.075.225-.075.525-.075.75V15h-2.7s.037-7.5 0-8.25h2.7v1.2c.375-.562 1.05-1.387 2.55-1.387 1.837 0 3.15 1.2 3.15 3.75V15z" />{" "}
            </SocialIcon>{" "}
            <SocialIcon href={member.githubLink} ariaLabel="GitHub">
              {" "}
              <path d="M9 0C4.0275 0 0 4.0275 0 9c0 3.9735 2.5785 7.3365 6.15375 8.529.45.08325.61875-.19575.61875-.435 0-.21375-.00825-.78075-.0123-1.53225C4.2525 16.0785 3.726 14.3325 3.726 14.3325c-.40725-.10425-1.0035-1.0395-1.0035-1.0395-.819-.5625.063-.5505.063-.5505.9075.063 1.38525.93075 1.38525.93075.807 1.386 2.115 .98625 2.631.75375.08175-.585.315-1.98375.57375-1.386C5.37 12.7275 3.264 11.958 3.264 8.52c0-.98925.35325-1.797.93075-2.43225-.09225-.22875-.40425-1.1505.09-2.397 0 0 .75975-.243 2.487.927A8.68425 8.68425 0 019 4.1055c.76725.004 1.537.10425 2.25675.30675 1.72575-1.17 2.484-.927 2.484-.927.49575 1.24725.18375 2.16825.09 2.397.57975.63525.93075 1.443.93075 2.43225 0 3.4485-2.10975 4.2045-4.11825 4.428.324.279.61425.83175.61425 1.677 0 1.21125-.0108 2.1885-.0108 2.487 0 .243.1635.522.624.4335C15.4252 16.3398 18 12.9735 18 9c0-4.9725-4.0275-9-9-9z" />{" "}
            </SocialIcon>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-1 dark:bg-dark-2 overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container">
        <div className="mb-[60px]">
          <div className="wow fadeInUp w-full">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Meet Our Team
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              Our leadership team combines deep industry expertise and
              innovative thinking
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            EXECUTIVE BOARD
          </h3>
          <div className="-mx-4 flex flex-wrap justify-center">
            {executiveBoard.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            EXPERTISE HEAD
          </h3>
          <div className="-mx-4 flex flex-wrap justify-center">
            {expertiseHeads.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
