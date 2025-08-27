import React from 'react';
import { Crown, Mic, MicOff, Video, VideoOff } from 'lucide-react';

const ParticipantsList = () => {
  const participants = [
    {
      id: '1',
      name: 'You',
      avatar: 'Y',
      isHost: true,
      isAudioOn: true,
      isVideoOn: true,
      isOnline: true,
    },
    {
      id: '2',
      name: 'Alice Johnson',
      avatar: 'A',
      isHost: false,
      isAudioOn: true,
      isVideoOn: false,
      isOnline: true,
    },
    {
      id: '3',
      name: 'Bob Smith',
      avatar: 'B',
      isHost: false,
      isAudioOn: false,
      isVideoOn: true,
      isOnline: true,
    },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Participants</h3>
        <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
          {participants.length} online
        </span>
      </div>

      <div className="space-y-3">
        {participants.map((participant) => (
          <div key={participant.id} className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-white">{participant.avatar}</span>
              </div>
              {participant.isOnline && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-sm truncate">{participant.name}</span>
                {participant.isHost && (
                  <Crown className="w-3 h-3 text-yellow-400 flex-shrink-0" title="Host" />
                )}
              </div>
              <div className="flex items-center space-x-1 mt-1">
                {participant.isAudioOn ? (
                  <Mic className="w-3 h-3 text-green-400" />
                ) : (
                  <MicOff className="w-3 h-3 text-red-400" />
                )}
                {participant.isVideoOn ? (
                  <Video className="w-3 h-3 text-green-400" />
                ) : (
                  <VideoOff className="w-3 h-3 text-red-400" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipantsList;
