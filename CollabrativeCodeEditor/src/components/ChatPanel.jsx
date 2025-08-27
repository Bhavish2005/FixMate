import React, { useState } from 'react';
import { Send, Smile } from 'lucide-react';

const ChatPanel = () => {
  const [message, setMessage] = useState('');
  const [messages] = useState([
    {
      id: '1',
      username: 'Alice',
      content: 'Hey everyone! Ready to start coding?',
      timestamp: new Date(Date.now() - 300000),
      avatar: 'A'
    },
    {
      id: '2',
      username: 'Bob',
      content: 'Yes! I have some ideas for the authentication module.',
      timestamp: new Date(Date.now() - 240000),
      avatar: 'B'
    },
    {
      id: '3',
      username: 'You',
      content: 'Great! Let me share the repository structure.',
      timestamp: new Date(Date.now() - 120000),
      avatar: 'Y'
    }
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-700">
        <h3 className="font-semibold">Team Chat</h3>
        <p className="text-xs text-gray-400">Stay connected with your team</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-semibold text-white">{msg.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline space-x-2">
                <span className="font-medium text-sm">{msg.username}</span>
                <span className="text-xs text-gray-500">{formatTime(msg.timestamp)}</span>
              </div>
              <p className="text-sm text-gray-300 mt-1 break-words">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-10"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
              <Smile className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={sendMessage}
            disabled={!message.trim()}
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;

