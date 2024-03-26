import React from "react";
import WorkItem from "./Workitem";
const data = [
  {
    year: 2022,
    title: "IT Administrator",
    duration: "1 year",
    details:
      "During my tenure as IT Administrator at Modus Operandi Co., Ltd. I have taken on the crucial responsibility of overseeing and enhancing the company's IT infrastructure. This multifaceted role has enabled me to excel in various domains, such as database administration, website design, technical support, error reporting, and network maintenance. I've ensured the integrity and security of critical data through effective database management and implemented efficient backup strategies to safeguard against data loss. My contributions to website design have resulted in visually appealing and user-friendly platforms that align seamlessly with our brand. Rapidly resolving software and hardware issues has been instrumental in minimizing downtime and operational disruptions. Additionally, I've designed and implemented robust error reporting and feedback systems, streamlining issue identification and resolution. Consistently maintaining and upgrading information systems and networks has significantly improved performance and security. My tenure as IT Administrator has empowered me to blend my creative and analytical skills, driving IT excellence within the organization.",
  },
  {
    year: 2021,
    title: "Network Engineer",
    duration: "1 year",
    details:
      "In 2021, I worked as a Network Engineer at Myanmar GT Broadband Co., Ltd. My main responsibility was managing and improving the company's computer networks. I designed and set up network systems, kept an eye on their performance, and made sure data stayed safe. I quickly fixed any network problems to keep everything running smoothly. As the company grew, I adapted our network to handle more data and worked closely with equipment suppliers to stay up-to-date with the latest technology. I also kept detailed records of our network setup to make it easier to solve any issues and plan for the future. This experience was a big step in my IT career, leading me to roles like IT Administration and UI Development.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] ">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};
export default Work;
