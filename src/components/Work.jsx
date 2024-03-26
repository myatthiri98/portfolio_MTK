import React from "react";
import WorkItem from "./Workitem";

const data = [
  {
    year: 2023,
    title: "Mobile Developer",
    duration: "1 year and 3 months",
    details: [
      "Developed web and mobile applications using JavaScript, React Native, React.js, Node.js, Redux, SQL, and NoSQL databases.",
      "Integrated Firebase for push notifications and managed application state using Redux Saga.",
      "Proficient in managing releases on Play Store, App Store, and AppGallery, ensuring compliance with platform guidelines.",
      "Demonstrated adaptability and proactive learning in distributed agile teams, staying updated with technology trends.",
      "Utilized AWS services for front-end development, configuring and managing AWS Amplify for hosting, authentication, and serverless backend services.",
      "Conducted automated testing using suites such as Jest, enhancing application quality and reliability."
    ]
  },
  {
    year: 2022,
    title: "IT Administrator",
    duration: "1 year",
    details: [
      "Excelled in multiple domains, including database administration, website design, technical support, error reporting, and network maintenance.",
      "Ensured data integrity and security through effective database management and implemented robust backup strategies.",
      "Contributed to visually appealing and user-friendly website designs that aligned with the brand's identity.",
      "Rapidly resolved software and hardware issues, minimizing downtime and operational disruptions.",
      "Designed and implemented efficient error reporting and feedback systems for streamlined issue resolution.",
      "Consistently maintained and upgraded information systems and networks to enhance performance and security."
    ]
  },
  {
    year: 2021,
    title: "NOC Engineer",
    duration: "1 year",
    details: [
      "Managed and improved the company's computer networks, ensuring optimal performance and data security.",
      "Designed and deployed network systems, closely monitoring their performance and addressing issues promptly.",
      "Adapted the network infrastructure to accommodate the company's growth and leveraged the latest technology through collaboration with equipment suppliers.",
      "Maintained detailed records of network configurations, facilitating issue resolution and future planning."
    ]
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
