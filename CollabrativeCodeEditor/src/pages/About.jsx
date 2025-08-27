import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center px-6 py-16">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center mb-10">
        About Our Collaborative Code Editor
      </h1>

      {/* Intro */}
      <p className="max-w-3xl text-center text-lg text-gray-300 leading-relaxed mb-16">
        Our platform empowers developers and teams to collaborate seamlessly in
        real-time. Write, run, and share code together with instant feedback,
        all in a clean and intuitive workspace. Designed for hackathons,
        classrooms, and remote teams, it enhances productivity without
        distractions.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-8 border border-slate-700 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Real-Time Collaboration
          </h2>
          <p className="text-gray-300">
            Multiple developers can code together in real-time with live cursors
            and instant updates — just like working side by side.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-8 border border-slate-700 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Multi-Language Support
          </h2>
          <p className="text-gray-300">
            Run and debug code in multiple programming languages with an
            integrated terminal and syntax highlighting.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-8 border border-slate-700 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
            Secure & Scalable
          </h2>
          <p className="text-gray-300">
            Built with security and performance in mind — perfect for teams of
            any size, from students to enterprises.
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="max-w-3xl text-center mt-16">
        <p className="text-lg text-gray-400">
          Whether you're collaborating remotely, hosting coding sessions, or
          working on open-source projects, our editor is designed to keep you
          connected and productive.
        </p>
      </div>
    </div>
  );
};

export default About;
