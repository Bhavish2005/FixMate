import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Copy, Users } from 'lucide-react';
import CodeEditor from '../components/CodeEditor';
import ChatPanel from '../components/ChatPanel';
import VideoPanel from '../components/VideoPanel';
import ParticipantsList from '../components/ParticipantsList';

const RoomPage = () => {
  const { roomId } = useParams();
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Welcome to CodeSync!\n// Start coding collaboratively\n\nconsole.log("Hello, CodeSync!");');

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'c', label: 'C' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'go', label: 'Go' },
    { value: 'rust', label: 'Rust' },
  ];

  const copyRoomId = () => {
    if (roomId) {
      navigator.clipboard.writeText(roomId);
      // You could add a toast notification here
    }
  };

  const runCode = () => {
    // Placeholder for code execution
    console.log('Running code:', code);
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Room ID:</span>
              <div className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-lg">
                <span className="font-mono text-blue-400 font-medium">{roomId}</span>
                <button
                  onClick={copyRoomId}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Copy Room ID"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">3 online</span>
            </div>
          </div>

          <VideoPanel />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side - Code Editor */}
        <div className="flex-1 flex flex-col">
          {/* Editor Header */}
          <div className="bg-gray-800 border-b border-gray-700 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Language</label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    {languages.map((lang) => (
                      <option key={lang.value} value={lang.value}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={runCode}
                className="flex items-center space-x-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-lg"
              >
                <Play className="w-4 h-4" />
                <span className="font-medium">Run Code</span>
              </button>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-hidden">
            <CodeEditor language={language} value={code} onChange={setCode} />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 lg:w-96 bg-gray-800 border-l border-gray-700 flex flex-col">
          {/* Participants */}
          <div className="border-b border-gray-700">
            <ParticipantsList />
          </div>

          {/* Chat */}
          <div className="flex-1 overflow-hidden">
            <ChatPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
