import React, { useState } from 'react';
import { Video, VideoOff, Mic, MicOff, Phone, Settings, Maximize2 } from 'lucide-react';

const VideoPanel: React.FC = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isCallActive, setIsCallActive] = useState(true);

  return (
    <div className="flex items-center space-x-4">
      {/* Video Call Status */}
      <div className="hidden lg:flex items-center space-x-2 text-sm">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-gray-400">Video call active</span>
      </div>

      {/* Video Preview */}
      <div className="relative">
        <div className="w-32 h-20 bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
          {isVideoOn ? (
            <div className="w-full h-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-white">You</span>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <VideoOff className="w-6 h-6 text-gray-500" />
            </div>
          )}
        </div>
        <button className="absolute top-1 right-1 p-1 bg-black/50 rounded hover:bg-black/70 transition-colors">
          <Maximize2 className="w-3 h-3" />
        </button>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setIsAudioOn(!isAudioOn)}
          className={`p-2 rounded-lg transition-colors ${
            isAudioOn
              ? 'bg-gray-700 hover:bg-gray-600 text-white'
              : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
          title={isAudioOn ? 'Mute' : 'Unmute'}
        >
          {isAudioOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
        </button>

        <button
          onClick={() => setIsVideoOn(!isVideoOn)}
          className={`p-2 rounded-lg transition-colors ${
            isVideoOn
              ? 'bg-gray-700 hover:bg-gray-600 text-white'
              : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
          title={isVideoOn ? 'Turn off camera' : 'Turn on camera'}
        >
          {isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
        </button>

        <button
          onClick={() => setIsCallActive(!isCallActive)}
          className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          title="End call"
        >
          <Phone className="w-4 h-4" />
        </button>

        <button
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
          title="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default VideoPanel;