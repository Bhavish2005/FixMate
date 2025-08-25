import React from 'react';

interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, value, onChange }) => {
  return (
    <div className="h-full bg-gray-900 relative">
      {/* Monaco Editor Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 border border-gray-700 rounded-lg m-4">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-mono text-blue-400">&lt;/&gt;</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Monaco Editor Integration</h3>
          <p className="text-gray-400 text-sm">
            This is a placeholder for Monaco Editor integration.<br />
            Language: <span className="text-blue-400 font-mono">{language}</span>
          </p>
        </div>
      </div>

      {/* Temporary textarea for demo */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-4 bg-gray-800 text-white font-mono text-sm p-4 rounded-lg border border-gray-600 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none opacity-90"
        placeholder={`// Start coding in ${language}...`}
        spellCheck={false}
      />
    </div>
  );
};

export default CodeEditor;