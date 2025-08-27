import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  MessageCircle,
  Video,
  Plus,
  UserPlus,
  ArrowRight,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

const HomePage = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const createRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    navigate(`/room/${newRoomId}`);
  };

  const joinRoom = () => {
    if (roomId.trim()) {
      navigate(`/room/${roomId.trim().toUpperCase()}`);
    }
  };

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Collaborative Editor",
      description:
        "Real-time code editing with syntax highlighting for multiple programming languages. Watch changes happen live as your team codes together.",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Integrated Chat",
      description:
        "Built-in messaging system to discuss ideas, share links, and communicate without leaving your coding environment.",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Conferencing",
      description:
        "High-quality video calls integrated directly into your coding session. See your teammates and discuss code face-to-face.",
    },
  ];

  const additionalFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for speed with real-time synchronization",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "End-to-end encryption for all your code and communications",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Access",
      description: "Code from anywhere with anyone, anytime",
    },
  ];

  return (
    <div >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Code2 className="w-20 h-20 text-teal-400" />
                <div className="absolute -inset-4 bg-teal-400/20 rounded-full blur-xl"></div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                FixMate
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-mono">
              Code. Collaborate. Compile.
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              The ultimate platform for real-time collaborative coding. Work
              together seamlessly with integrated chat, video calls, and a
              powerful code editor.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={createRoom}
                className="group flex items-center space-x-2 px-8 py-4 bg-teal-700 hover:bg-teal-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:-translate-y-1"
              >
                <Plus className="w-5 h-5" />
                <span className="font-medium">Create Room</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Enter Room ID"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && joinRoom()}
                  className="px-4 py-4 bg-slate-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-white placeholder-gray-400 font-mono"
                />
                <button
                  onClick={joinRoom}
                  disabled={!roomId.trim()}
                  className="group flex items-center space-x-2 px-8 py-4 bg-cyan-700 hover:bg-cyan-800 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 disabled:transform-none"
                >
                  <UserPlus className="w-5 h-5" />
                  <span className="font-medium">Join Room</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything you need to{" "}
              <span className="text-teal-400">code together</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powerful features designed for seamless collaboration and
              productive coding sessions
            </p>
          </div>

          {/* Equal-height Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group h-full border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 border border-gray-700 rounded-xl hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-emerald-400 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start coding together?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of developers already collaborating on CodeSync
          </p>
          <button
            onClick={createRoom}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1 text-lg font-medium"
          >
            <span>Start Coding Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
