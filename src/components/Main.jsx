import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
export default function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://source.unsplash.com/random/1920×1080/?programmer"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white-100">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-white">
            I'm Myat Thiri Khin
          </h1>
          <h2 className="sm:text-3xl text-2xl pt-4 text-white">
            <TypeAnimation
              sequence={[
                "I'm a Tech Enthusiast",
                2000,
                "I'm a Passionate and Dedicated Individual",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.facebook.com/myatthiri.khin.10?mibextid=b06tZ0"
              target="-blank"
            >
              <FaFacebookF className="cursor-pointer text-white" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/myat-thiri-khin"
              target="-blank"
            >
              <FaLinkedin className="cursor-pointer  text-white" size={20} />
            </a>

            <a href="https://github.com/myatthiri98" target="-blank">
              <FaGithub className="cursor-pointer  text-white" size={20} />
            </a>
            <a
              href="https://discord.com/users/1110768211223396432
"
              target="-blank"
            >
              <FaDiscord className="cursor-pointer  text-white" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
