import React from "react";
import WorkItem from "./WorkItem.jsx";

const data = [
  {
    year: 2023,
    title: "Mobile Developer",
    duration: "1 year and 3 months",
    details: [
      "Developed user-friendly web and mobile applications using JavaScript, TypeScript, React Native, React.js, and Node.js, ensuring smooth experiences and optimal efficiency.",
      "Managed SQL and NoSQL databases for scalable data handling, optimizing performance and reliability.",
      "Integrated RESTful JSON APIs to seamlessly connect frontend and backend systems, enhancing overall application functionality.",
      "Utilized Redux, Redux Saga, and Redux Toolkit for efficient state management, ensuring smooth user interactions.",
      "Implemented smooth in-app transitions, animations, and navigation using React Navigation and React Router, enhancing user engagement.",
      "Conducted comprehensive automated testing with Jest and related tools to ensure high-quality, reliable software.",
      "Utilized Sentry for error monitoring and reporting, identifying and resolving issues to improve application stability and performance.",
      "Enhanced application functionality with Firebase's real-time services, including push notifications and real-time data updates.",
      "Leveraged Firebase Analytics to gather insights into user behavior and app usage, informing decision-making and optimizing user experiences.",
      "Implemented deep linking to allow seamless navigation within the app and integration with external content or services.",
      "Proficient in managing releases on Play Store, App Store, and AppGallery, ensuring compliance with platform guidelines.",
      "Utilized AWS services for front-end development, configuring and managing AWS Amplify for hosting, authentication, and serverless backend services.",
      "Ensured data security and stability through rigorous backup practices and Git version control.",
      "Demonstrated adaptability and proactive learning in distributed agile teams, staying updated with technology trends."
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
