// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Code2, Users, MessageCircle, Video, Plus, UserPlus, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

// const HomePage: React.FC = () => {
//   const [roomId, setRoomId] = useState('');
//   const navigate = useNavigate();

//   const createRoom = () => {
//     const newRoomId = Math.random().toString(36).substring(2, 8).toUpperCase();
//     navigate(`/room/${newRoomId}`);
//   };

//   const joinRoom = () => {
//     if (roomId.trim()) {
//       navigate(`/room/${roomId.trim().toUpperCase()}`);
//     }
//   };

//   const features = [
//     {
//       icon: <Code2 className="w-8 h-8" />,
//       title: 'Collaborative Editor',
//       description: 'Real-time code editing with syntax highlighting for multiple programming languages. Watch changes happen live as your team codes together.',
//     },
//     {
//       icon: <MessageCircle className="w-8 h-8" />,
//       title: 'Integrated Chat',
//       description: 'Built-in messaging system to discuss ideas, share links, and communicate without leaving your coding environment.',
//     },
//     {
//       icon: <Video className="w-8 h-8" />,
//       title: 'Video Conferencing',
//       description: 'High-quality video calls integrated directly into your coding session. See your teammates and discuss code face-to-face.',
//     },
//   ];

//   const additionalFeatures = [
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: 'Lightning Fast',
//       description: 'Optimized for speed with real-time synchronization',
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: 'Secure & Private',
//       description: 'End-to-end encryption for all your code and communications',
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: 'Global Access',
//       description: 'Code from anywhere with anyone, anytime',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
//           <div className="text-center">
//             <div className="flex justify-center mb-8">
//               <div className="relative">
//                 <Code2 className="w-20 h-20 text-blue-400" />
//                 <div className="absolute -inset-4 bg-blue-400/20 rounded-full blur-xl"></div>
//               </div>
//             </div>
            
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
//                 CodeSync
//               </span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-gray-300 mb-8 font-mono">
//               Code. Collaborate. Compile.
//             </p>
            
//             <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
//               The ultimate platform for real-time collaborative coding. Work together seamlessly 
//               with integrated chat, video calls, and a powerful code editor.
//             </p>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
//               <button
//                 onClick={createRoom}
//                 className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
//               >
//                 <Plus className="w-5 h-5" />
//                 <span className="font-medium">Create Room</span>
//                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </button>

//               <div className="flex items-center space-x-3">
//                 <input
//                   type="text"
//                   placeholder="Enter Room ID"
//                   value={roomId}
//                   onChange={(e) => setRoomId(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && joinRoom()}
//                   className="px-4 py-4 bg-gray-800 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-gray-400 font-mono"
//                 />
//                 <button
//                   onClick={joinRoom}
//                   disabled={!roomId.trim()}
//                   className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 disabled:transform-none"
//                 >
//                   <UserPlus className="w-5 h-5" />
//                   <span className="font-medium">Join Room</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Everything you need to <span className="text-blue-400">code together</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Powerful features designed for seamless collaboration and productive coding sessions
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-20">
//             {features.map((feature, index) => (
//               <div key={index} className="group">
//                 <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
//                   <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
//                   <p className="text-gray-400 leading-relaxed">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Additional Features Grid */}
//           <div className="grid md:grid-cols-3 gap-6">
//             {additionalFeatures.map((feature, index) => (
//               <div key={index} className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
//                 <div className="text-green-400 flex-shrink-0">
//                   {feature.icon}
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2">{feature.title}</h4>
//                   <p className="text-sm text-gray-400">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to start coding together?
//           </h2>
//           <p className="text-xl text-gray-400 mb-8">
//             Join thousands of developers already collaborating on CodeSync
//           </p>
//           <button
//             onClick={createRoom}
//             className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-1 text-lg font-medium"
//           >
//             <span>Start Coding Now</span>
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

// newUI
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Code2, Users, MessageCircle, Video, Plus, UserPlus, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

// const HomePage: React.FC = () => {
//   const [roomId, setRoomId] = useState('');
//   const navigate = useNavigate();

//   const createRoom = () => {
//     const newRoomId = Math.random().toString(36).substring(2, 8).toUpperCase();
//     navigate(`/room/${newRoomId}`);
//   };

//   const joinRoom = () => {
//     if (roomId.trim()) {
//       navigate(`/room/${roomId.trim().toUpperCase()}`);
//     }
//   };

//   const features = [
//     {
//       icon: <Code2 className="w-8 h-8" />,
//       title: 'Collaborative Editor',
//       description:
//         'Real-time code editing with syntax highlighting for multiple programming languages. Watch changes happen live as your team codes together.',
//     },
//     {
//       icon: <MessageCircle className="w-8 h-8" />,
//       title: 'Integrated Chat',
//       description:
//         'Built-in messaging system to discuss ideas, share links, and communicate without leaving your coding environment.',
//     },
//     {
//       icon: <Video className="w-8 h-8" />,
//       title: 'Video Conferencing',
//       description:
//         'High-quality video calls integrated directly into your coding session. See your teammates and discuss code face-to-face.',
//     },
//   ];

//   const additionalFeatures = [
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: 'Lightning Fast',
//       description: 'Optimized for speed with real-time synchronization',
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: 'Secure & Private',
//       description: 'End-to-end encryption for all your code and communications',
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: 'Global Access',
//       description: 'Code from anywhere with anyone, anytime',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
//           <div className="text-center">
//             <div className="flex justify-center mb-8">
//               <div className="relative">
//                 <Code2 className="w-20 h-20 text-teal-400" />
//                 <div className="absolute -inset-4 bg-teal-400/20 rounded-full blur-xl"></div>
//               </div>
//             </div>

//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//                 CodeSync
//               </span>
//             </h1>

//             <p className="text-xl md:text-2xl text-gray-300 mb-8 font-mono">
//               Code. Collaborate. Compile.
//             </p>

//             <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
//               The ultimate platform for real-time collaborative coding. Work together seamlessly
//               with integrated chat, video calls, and a powerful code editor.
//             </p>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
//               <button
//                 onClick={createRoom}
//                 className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:-translate-y-1"
//               >
//                 <Plus className="w-5 h-5" />
//                 <span className="font-medium">Create Room</span>
//                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </button>

//               <div className="flex items-center space-x-3">
//                 <input
//                   type="text"
//                   placeholder="Enter Room ID"
//                   value={roomId}
//                   onChange={(e) => setRoomId(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && joinRoom()}
//                   className="px-4 py-4 bg-[#1e293b] border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-white placeholder-gray-400 font-mono"
//                 />
//                 <button
//                   onClick={joinRoom}
//                   disabled={!roomId.trim()}
//                   className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 disabled:transform-none"
//                 >
//                   <UserPlus className="w-5 h-5" />
//                   <span className="font-medium">Join Room</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Everything you need to <span className="text-teal-400">code together</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Powerful features designed for seamless collaboration and productive coding sessions
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-20">
//             {features.map((feature, index) => (
//               <div key={index} className="group">
//                 <div className="bg-[#1e293b] p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
//                   <div className="text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
//                   <p className="text-gray-400 leading-relaxed">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Additional Features Grid */}
//           <div className="grid md:grid-cols-3 gap-6">
//             {additionalFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-start space-x-4 p-6 bg-[#1e293b]/50 rounded-xl border border-gray-700/50"
//               >
//                 <div className="text-emerald-400 flex-shrink-0">{feature.icon}</div>
//                 <div>
//                   <h4 className="font-semibold mb-2">{feature.title}</h4>
//                   <p className="text-sm text-gray-400">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-teal-600/10 to-cyan-600/10">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start coding together?</h2>
//           <p className="text-xl text-gray-400 mb-8">
//             Join thousands of developers already collaborating on CodeSync
//           </p>
//           <button
//             onClick={createRoom}
//             className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1 text-lg font-medium"
//           >
//             <span>Start Coding Now</span>
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

// improvements
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Code2,
//   Users,
//   MessageCircle,
//   Video,
//   Plus,
//   UserPlus,
//   ArrowRight,
//   Zap,
//   Shield,
//   Globe,
// } from "lucide-react";

// const HomePage: React.FC = () => {
//   const [roomId, setRoomId] = useState("");
//   const navigate = useNavigate();

//   const createRoom = () => {
//     const newRoomId = Math.random().toString(36).substring(2, 8).toUpperCase();
//     navigate(`/room/${newRoomId}`);
//   };

//   const joinRoom = () => {
//     if (roomId.trim()) {
//       navigate(`/room/${roomId.trim().toUpperCase()}`);
//     }
//   };

//   const features = [
//     {
//       icon: <Code2 className="w-8 h-8" />,
//       title: "Collaborative Editor",
//       description:
//         "Real-time code editing with syntax highlighting for multiple programming languages. Watch changes happen live as your team codes together.",
//     },
//     {
//       icon: <MessageCircle className="w-8 h-8" />,
//       title: "Integrated Chat",
//       description:
//         "Built-in messaging system to discuss ideas, share links, and communicate without leaving your coding environment.",
//     },
//     {
//       icon: <Video className="w-8 h-8" />,
//       title: "Video Conferencing",
//       description:
//         "High-quality video calls integrated directly into your coding session. See your teammates and discuss code face-to-face.",
//     },
//   ];

//   const additionalFeatures = [
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Lightning Fast",
//       description: "Optimized for speed with real-time synchronization",
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Secure & Private",
//       description: "End-to-end encryption for all your code and communications",
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: "Global Access",
//       description: "Code from anywhere with anyone, anytime",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
//           <div className="text-center">
//             <div className="flex justify-center mb-8">
//               <div className="relative">
//                 <Code2 className="w-20 h-20 text-teal-400" />
//                 <div className="absolute -inset-4 bg-teal-400/20 rounded-full blur-xl"></div>
//               </div>
//             </div>

//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//                 FixMate
//               </span>
//             </h1>

//             <p className="text-xl md:text-2xl text-gray-300 mb-8 font-mono">
//               Code. Collaborate. Compile.
//             </p>

//             <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
//               The ultimate platform for real-time collaborative coding. Work
//               together seamlessly with integrated chat, video calls, and a
//               powerful code editor.
//             </p>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
//               <button
//                 onClick={createRoom}
//                 className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:-translate-y-1"
//               >
//                 <Plus className="w-5 h-5" />
//                 <span className="font-medium">Create Room</span>
//                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </button>

//               <div className="flex items-center space-x-3">
//                 <input
//                   type="text"
//                   placeholder="Enter Room ID"
//                   value={roomId}
//                   onChange={(e) => setRoomId(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && joinRoom()}
//                   className="px-4 py-4 bg-[#1e293b] border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-white placeholder-gray-400 font-mono"
//                 />
//                 <button
//                   onClick={joinRoom}
//                   disabled={!roomId.trim()}
//                   className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 disabled:transform-none"
//                 >
//                   <UserPlus className="w-5 h-5" />
//                   <span className="font-medium">Join Room</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Everything you need to{" "}
//               <span className="text-teal-400">code together</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Powerful features designed for seamless collaboration and
//               productive coding sessions
//             </p>
//           </div>

//           {/* Equal-height Features */}
//           <div className="grid md:grid-cols-3 gap-8 mb-20">
//             {features.map((feature, index) => (
//               <div key={index} className="group h-full">
//                 <div className="bg-[#1e293b] h-full flex flex-col justify-between p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
//                   <div className="text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold mb-4">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-400 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Additional Features */}
//           <div className="grid md:grid-cols-3 gap-6">
//             {additionalFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-start space-x-4 p-6 bg-[#1e293b]/50 rounded-xl border border-gray-700/50"
//               >
//                 <div className="text-emerald-400 flex-shrink-0">
//                   {feature.icon}
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2">{feature.title}</h4>
//                   <p className="text-sm text-gray-400">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-teal-600/10 to-cyan-600/10">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to start coding together?
//           </h2>
//           <p className="text-xl text-gray-400 mb-8">
//             Join thousands of developers already collaborating on CodeSync
//           </p>
//           <button
//             onClick={createRoom}
//             className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1 text-lg font-medium"
//           >
//             <span>Start Coding Now</span>
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

// new Improvements

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

const HomePage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
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
                className="flex items-start space-x-4 p-6 border border-gray-700 rounded-xl"
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



