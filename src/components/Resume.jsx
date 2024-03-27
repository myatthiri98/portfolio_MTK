import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="max-w-screen-xl mx-auto md:px-8 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Resume</h1>
      <div className="flex justify-center">
        <div className="max-w-lg">
          <p className="text-xl text-center mb-8">
            Download my resume:
            <a
              href="https://docs.google.com/document/d/16KgYDYQ1HUf3ivKyxGjum91kl2p0OBDC0Y_TNt04iUw/export?format=pdf"
              className="block mt-2 text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume (PDF)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
