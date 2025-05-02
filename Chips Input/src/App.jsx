import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== "") {
      setChips([...chips, inputText.trim()]);
      setInputText("");
    }
  };

  const handleDeleteChip = (index) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Chips Input</h1>
        
        <input
          type="text"
          placeholder="Type a chip and press Enter"
          className="w-full border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        
        <div className="flex flex-wrap gap-2 mt-4">
          {chips.map((chip, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
            >
              <span>{chip}</span>
              <button
                onClick={() => handleDeleteChip(index)}
                className="text-white hover:text-red-300 font-bold"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
