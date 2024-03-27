import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

export default function Main() {
  return (
    <div id="main" className="relative">
      <img
        className="w-full h-full object-cover"
        src="https://source.unsplash.com/random/1920×1080/?programmer"
        alt="/"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-4">I'm Myat Thiri Khin</h1>
          <h2 className="text-2xl mb-6">
            <TypeAnimation
              sequence={[
                "I'm a Developer",
                2000,
                "I'm a Coder",
                2000,
                "I'm a Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/myatthiri.khin.10?mibextid=b06tZ0"
              target="_blank"
              className="text-white"
            >
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/myat-thiri-khin"
              target="_blank"
              className="text-white"
            >
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://github.com/myatthiri98"
              target="_blank"
              className="text-white"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://discord.com/users/1110768211223396432"
              target="_blank"
              className="text-white"
            >
              <FaDiscord className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
